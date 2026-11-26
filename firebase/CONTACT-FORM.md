# Contact form: saving messages to Firebase

**Status (2026-11-26): ON.** Messages save to Firestore in the **comini-lab-redesign-stagging** project ("CominiLab isolated staging"), collection `contactMessages`. The rule went live on 2026-11-26, deployed as kavin@comini.in. `firebase/test-contact.mjs` printed `saved`, and a real send from the local contact page saved and showed the thank-you. Reading the collection from outside and writing an invalid role are both refused (403).

## How it works when on

- The form (`components/lab/contact/ContactForm.tsx`) checks the fields, then calls `saveContactMessage` in `lib/lab/contact-store.ts`.
- That writes one document to Firestore, collection `contactMessages`, in the project set by `PROJECT` (now `comini-lab-redesign-stagging`). It uses the REST API with the project's public web API key, so there's no Firebase SDK in the page.
- Each message has `name`, `email`, `role` (Parent / Educator / Organization), `schoolName`, `message`, `page` (the page URL) and `createdAt` (server time).
- The button shows "Sending…". The thank-you appears only once Firestore has the message. If saving fails, the form keeps what was typed and shows "Your message couldn't be sent. Please check your connection and try again."
- Read messages in the Firebase console: project, then Firestore, then `contactMessages`. Nobody can read them from outside.

## The rule

`firebase/firestore.target.rules` is the project's rules as they were on 2026-11-26 (the owner pasted them from the console: deny everything, since the authenticated API owns access) plus one block for `contactMessages`. The block on its own is in `firebase/contact-rule-block.rules`.

- Anyone can **add** a message, only with the fields above, sensible lengths, a valid role and the server's time.
- Nobody can read, change or delete messages from outside.

A rules deploy replaces a project's rules **as a whole**. Before any rules deploy, copy the project's CURRENT rules from the console and add the block to them. Never start from a repo file: the app's `firestore.rules` did not match what was deployed on comini-lab-staging, which had extra deletion-guard and bake-store rules. If someone later deploys this project's rules without the block, the form shows its error line until the block is added back.

## Switching on

Run these from `comini-site`.

1. Confirm the Firebase account: `npx firebase-tools login:list` (kavin@comini.in when this was written).
2. Put the target project's current rules plus the block in `firebase/firestore.target.rules`, then deploy. This only touches Firestore rules:
   `npx firebase-tools deploy --only firestore:rules --project <id> --config firebase/firebase.json`
3. Test it: `node firebase/test-contact.mjs` should print `saved`. Delete the "Rule check" document in the console afterwards.
4. In `lib/lab/contact-store.ts`, set `CONTACT_SAVING_ON = true`.
5. Run `npm run build`, send a real test from the local contact page, then publish (`python scripts/publish-herenow.py out --slug lunar-hazel-23ad`).

## Moving to another project later

1. Change `PROJECT` and `API_KEY` in `lib/lab/contact-store.ts`. Get the key with `npx firebase-tools apps:sdkconfig WEB <web app id> --project <id>`.
2. Use that project's own rules plus the `contactMessages` block, and update `firebase/firebase.json` to point at that rules file.
3. Deploy with `--project <id>`, then run steps 3 to 5 above.
