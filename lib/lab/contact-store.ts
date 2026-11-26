// Where the contact form's messages go (owner, 2026-11-26): Firestore in the comini-lab-redesign-stagging project
// ("CominiLab isolated staging"), collection "contactMessages", for testing (to be moved later). Written with Firestore's REST API (no Firebase SDK in the page).
// The key is the project's public web API key (Firebase web keys are meant to be in client code); what can be written
// is decided by the Firestore rules, which allow anyone to ADD a message and nobody to read, change or delete one.
// Messages are read in the Firebase console: comini-lab-redesign-stagging > Firestore > contactMessages.
/** ON since 2026-11-26 (rule live on comini-lab-redesign-stagging). Set to false to stop saving: a valid form then
 *  shows the thank-you without saving anything. See firebase/CONTACT-FORM.md. */
export const CONTACT_SAVING_ON = true;
const PROJECT = "comini-lab-redesign-stagging";
const API_KEY = "AIzaSyC1-NnZJ_fu9lUICXSfqQbHRAB2VsvsYP0";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

export type ContactMessage = { name: string; email: string; role: string; schoolName: string; message: string };

const id = () => Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(16).padStart(2, "0")).join("");

/** Saves one message; resolves when Firestore has it, throws if it couldn't be saved. */
export async function saveContactMessage(m: ContactMessage): Promise<void> {
  if (!CONTACT_SAVING_ON) return;
  const str = (v: string) => ({ stringValue: v });
  const res = await fetch(`${BASE}:commit?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      writes: [{
        update: {
          name: `projects/${PROJECT}/databases/(default)/documents/contactMessages/${id()}`,
          fields: { name: str(m.name), email: str(m.email), role: str(m.role), schoolName: str(m.schoolName), message: str(m.message), page: str(location.href) },
        },
        currentDocument: { exists: false },
        // the time comes from the server, so the rules can check it
        updateTransforms: [{ fieldPath: "createdAt", setToServerValue: "REQUEST_TIME" }],
      }],
    }),
  });
  if (!res.ok) throw new Error(`contact message not saved (${res.status})`);
}
