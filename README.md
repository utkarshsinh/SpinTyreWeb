# SpinTyre Web

Marketing and support site for **SpinTyre**, a short-form car video app available on [the App Store](https://apps.apple.com/us/app/spintyre/id6748114910) and [Google Play](https://play.google.com/store/apps/details?id=com.spintyre.SpinTyre). The iPhone/iPad app also has an Apple Watch companion.

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

The interactive previews use real iPhone app screenshots and are labelled because appearance can vary by platform and app version. Public store availability does not establish that a pending app update has been released: version 3.1 must only be described as public after its separate store rollout is verified. Keep download links, provider disclosures, and availability copy aligned with verified releases. The website does not load external fonts or add analytics scripts.
