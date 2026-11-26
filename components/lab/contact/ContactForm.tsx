"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Star } from "@/components/lab/Card";
import { ChevronDown, Send } from "@/components/lab/Icons";

/*
 * Same fields and the same submit as components/contact/ContactForm.tsx: nothing is sent anywhere; submitting a
 * valid form only swaps in the thank-you state. The fields are checked here (not by the browser's own bubbles) so
 * each error shows under its box in plain words.
 */
type TextField = { id: string; label: string; type: "text" | "email"; placeholder: string; required: boolean; autoComplete?: string };
type SelectField = { id: string; label: string; type: "select"; options: string[]; required: boolean };
type Field = TextField | SelectField;

const ROWS: Field[][] = [
  [
    { id: "name", label: "Name", type: "text", placeholder: "Ananya Sharma", required: true, autoComplete: "name" },
    { id: "email", label: "Email", type: "email", placeholder: "ananya@school.edu", required: true, autoComplete: "email" },
  ],
  [
    { id: "role", label: "Role", type: "select", options: ["Parent", "Educator", "Organization"], required: true },
    { id: "schoolName", label: "School name", type: "text", placeholder: "Sunrise Academy", required: false, autoComplete: "organization" },
  ],
];

const MESSAGES: Record<string, { missing: string; bad?: string }> = {
  name: { missing: "Please add your name." },
  email: { missing: "Please add your email.", bad: "This email looks off. Please check it." },
  role: { missing: "Please pick one." },
  message: { missing: "Please write a short message." },
};

type Errors = Record<string, string>;
type Ctl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function errorFor(el: Ctl): string | null {
  const m = MESSAGES[el.name];
  if (!m) return null;
  if (el.validity.valueMissing || (el.required && !el.value.trim())) return m.missing;
  if (el.validity.typeMismatch && m.bad) return m.bad;
  return null;
}

function Required() {
  return (
    <span className="ct-req" aria-hidden="true">
      *
    </span>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) doneRef.current?.focus();
  }, [submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const els = [...e.currentTarget.elements].filter((el): el is Ctl => "name" in el && !!(el as Ctl).name) as Ctl[];
    const next: Errors = {};
    let first: Ctl | null = null;
    for (const el of els) {
      const msg = errorFor(el);
      if (msg) {
        next[el.name] = msg;
        first ??= el;
      }
    }
    setErrors(next);
    if (first) {
      first.focus();
      return;
    }
    setSubmitted(true);
  }

  /** Clear a field's error as soon as it is fixed. */
  function recheck(el: Ctl) {
    if (!errors[el.name]) return;
    const msg = errorFor(el);
    setErrors((prev) => {
      const n = { ...prev };
      if (msg) n[el.name] = msg;
      else delete n[el.name];
      return n;
    });
  }

  if (submitted) {
    return (
      <div ref={doneRef} tabIndex={-1} className="ct-done" role="status">
        <span className="ct-done-stars" aria-hidden="true">
          <Star size={34} />
          <Star size={44} />
          <Star size={34} />
        </span>
        <p className="ct-done-title">Thanks. We&rsquo;ll be in touch soon.</p>
        <p className="lab-body">We usually reply within a couple of working days.</p>
      </div>
    );
  }

  const errCount = Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit} noValidate className="ct-form">
      <p className="lab-small ct-key">
        Boxes marked <span className="ct-req" aria-hidden="true">*</span>
        <span className="ct-vh">with a star</span> are needed.
      </p>

      {ROWS.map((row, i) => (
        <div key={i} className="ct-row">
          {row.map((field) => {
            const err = errors[field.id];
            const errId = `ct-${field.id}-err`;
            const common = {
              id: `ct-${field.id}`,
              name: field.id,
              required: field.required,
              "aria-invalid": err ? true : undefined,
              "aria-describedby": err ? errId : undefined,
            } as const;
            return (
              <div key={field.id} className={`ct-field${err ? " has-err" : ""}`}>
                <label className="ct-label" htmlFor={`ct-${field.id}`}>
                  {field.label}
                  {field.required ? <Required /> : <span className="ct-opt">(if any)</span>}
                </label>
                {field.type === "select" ? (
                  <span className="ct-select">
                    <select {...common} defaultValue="" className="ct-in" onChange={(e) => recheck(e.currentTarget)}>
                      <option value="" disabled>
                        Choose one
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={20} />
                  </span>
                ) : (
                  <input
                    {...common}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    className="ct-in"
                    onInput={(e) => recheck(e.currentTarget)}
                  />
                )}
                {err ? (
                  <p id={errId} className="ct-err">
                    {err}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}

      <div className={`ct-field${errors.message ? " has-err" : ""}`}>
        <label className="ct-label" htmlFor="ct-message">
          Message
          <Required />
        </label>
        <textarea
          id="ct-message"
          name="message"
          rows={5}
          placeholder="What can we help with?"
          required
          className="ct-in ct-area"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "ct-message-err" : undefined}
          onInput={(e) => recheck(e.currentTarget)}
        />
        {errors.message ? (
          <p id="ct-message-err" className="ct-err">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="ct-send">
        <button type="submit" className="lab-btn lab-btn-teal lab-btn-lg">
          Send message
          <Send size={20} color="#fff" />
        </button>
        <p className="ct-summary" role="alert">
          {errCount ? (errCount === 1 ? "One box needs a fix." : `${errCount} boxes need a fix.`) : ""}
        </p>
      </div>
    </form>
  );
}
