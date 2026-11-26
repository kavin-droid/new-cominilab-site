"""Publish the built site (out/) to here.now, quickly.

Same three steps as the here-now publish.sh script (send the file list with each file's sha256, upload only the files
here.now does not already have, finalize), but the file list is built in one pass. publish.sh rebuilds a growing JSON
list once per file, which takes many minutes for this site's ~1,250 files on Windows; this takes seconds. here.now
still replaces the whole site on each publish, so always publish the full out/ folder.

    python scripts/publish-herenow.py out --slug lusty-mirage-nzzb

The API key is read from $HERENOW_API_KEY or ~/.herenow/credentials and is never printed.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import mimetypes
import os
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

BASE_URL = "https://here.now"
CLIENT = "comini-site/fast-publish"

# publish.sh's content types, so a publish from either script serves files the same way
TYPES = {
    "html": "text/html; charset=utf-8", "htm": "text/html; charset=utf-8",
    "css": "text/css; charset=utf-8", "js": "text/javascript; charset=utf-8", "mjs": "text/javascript; charset=utf-8",
    "json": "application/json; charset=utf-8", "md": "text/plain; charset=utf-8", "txt": "text/plain; charset=utf-8",
    "svg": "image/svg+xml", "png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg", "gif": "image/gif",
    "webp": "image/webp", "pdf": "application/pdf", "mp4": "video/mp4", "mov": "video/quicktime",
    "mp3": "audio/mpeg", "wav": "audio/wav", "xml": "application/xml", "woff2": "font/woff2", "woff": "font/woff",
    "ttf": "font/ttf", "ico": "image/x-icon",
}


def content_type(p: Path) -> str:
    ext = p.suffix.lower().lstrip(".")
    return TYPES.get(ext) or mimetypes.guess_type(p.name)[0] or "application/octet-stream"


def api_key() -> str:
    key = os.environ.get("HERENOW_API_KEY", "").strip()
    if not key:
        cred = Path.home() / ".herenow" / "credentials"
        if cred.is_file():
            key = cred.read_text(encoding="utf-8").strip()
    if not key:
        sys.exit("no here.now API key: set HERENOW_API_KEY or write ~/.herenow/credentials")
    return key


def request(method: str, url: str, key: str | None, body: bytes | None = None, ctype: str | None = None) -> tuple[int, bytes]:
    req = urllib.request.Request(url, data=body, method=method)
    if key:
        req.add_header("authorization", f"Bearer {key}")
        req.add_header("x-herenow-client", CLIENT)
    if ctype:
        req.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return e.code, e.read()


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("folder")
    ap.add_argument("--slug", required=True)
    args = ap.parse_args()
    root = Path(args.folder)
    if not root.is_dir():
        sys.exit(f"not a folder: {root}")
    key = api_key()

    files, local = [], {}
    for f in sorted(p for p in root.rglob("*") if p.is_file()):
        rel = f.relative_to(root).as_posix()
        if f.name == ".DS_Store" or rel == ".herenow/fork-meta.json":
            continue
        data = f.read_bytes()
        files.append({"path": rel, "size": len(data), "contentType": content_type(f), "hash": hashlib.sha256(data).hexdigest()})
        local[rel] = f
    print(f"creating publish ({len(files)} files)...", file=sys.stderr)

    status, raw = request("PUT", f"{BASE_URL}/api/v1/publish/{args.slug}", key, json.dumps({"files": files}).encode(), "application/json")
    res = json.loads(raw or b"{}")
    if status >= 300 or res.get("error"):
        sys.exit(f"publish failed (HTTP {status}): {res.get('error')} {res.get('details') or ''}")
    up = res["upload"]
    uploads = up.get("uploads", [])
    print(f"uploading {len(uploads)} files ({len(up.get('skipped') or [])} unchanged, skipped)...", file=sys.stderr)

    def put(u: dict) -> str | None:
        f = local.get(u["path"])
        if not f:
            return f"missing local file for {u['path']}"
        code, _ = request("PUT", u["url"], None, f.read_bytes(), (u.get("headers") or {}).get("Content-Type"))
        return None if 200 <= code < 300 else f"upload failed for {u['path']} (HTTP {code})"

    with ThreadPoolExecutor(max_workers=8) as pool:
        errors = [e for e in pool.map(put, uploads) if e]
    for e in errors:
        print("warning:", e, file=sys.stderr)
    if errors:
        sys.exit(f"{len(errors)} file(s) failed to upload; nothing was finalized")

    print("finalizing...", file=sys.stderr)
    status, raw = request("POST", up["finalizeUrl"], key, json.dumps({"versionId": up["versionId"]}).encode(), "application/json")
    fin = json.loads(raw or b"{}")
    if status >= 300 or fin.get("error"):
        sys.exit(f"finalize failed (HTTP {status}): {fin.get('error')}")
    print(res.get("siteUrl", ""))


if __name__ == "__main__":
    main()
