# SpinTyre Web

Marketing and support site for **SpinTyre**, a short-form car video app. The public iPhone/iPad app has an Apple Watch companion; the Android release is in preparation.

Live: [https://spintyre.netlify.app](https://spintyre.netlify.app)

## Pages

- `/` — product landing page
- `/privacy-policy` — privacy policy
- `/delete-account` — account deletion instructions
- `/data-safety` — plain-language summary of app data and user choices
- Other paths show a helpful missing-page screen.

## Develop

```bash
nvm use
npm ci
npm run dev
```

## Build

```bash
npm run lint
npm run build
npm run preview
```

Netlify builds and publishes `dist` from the `master` branch using Node 22. Pushing to that branch updates the public website; it does not publish either mobile app.

The interactive previews use real iPhone app screenshots and are labelled because appearance can vary by app version. Keep download links, provider disclosures, and availability copy aligned with verified releases. The website does not load external fonts or add analytics scripts.
