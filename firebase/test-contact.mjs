// Sends one test message the same way the contact form does, to check the Firestore rule is live.
// Run from comini-site:  node firebase/test-contact.mjs
// Expect "saved". A 403 means the rule isn't deployed (or was replaced by another rules deploy).
// Delete the test message afterwards in the Firebase console (comini-site test, name "Rule check").
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../lib/lab/contact-store.ts", import.meta.url), "utf8");
const PROJECT = src.match(/const PROJECT = "([^"]+)"/)[1];
const KEY = src.match(/const API_KEY = "([^"]+)"/)[1];
const doc = `projects/${PROJECT}/databases/(default)/documents/contactMessages/rule-check-${Date.now()}`;
const s = (v) => ({ stringValue: v });

const res = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents:commit?key=${KEY}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    writes: [{
      update: { name: doc, fields: { name: s("Rule check"), email: s("test@example.com"), role: s("Parent"), schoolName: s(""), message: s("Test from firebase/test-contact.mjs"), page: s("test") } },
      currentDocument: { exists: false },
      updateTransforms: [{ fieldPath: "createdAt", setToServerValue: "REQUEST_TIME" }],
    }],
  }),
});
console.log(res.ok ? `saved (${PROJECT})` : `not saved: ${res.status} ${await res.text()}`);
