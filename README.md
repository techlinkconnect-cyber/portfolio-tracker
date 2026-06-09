# Portfolio Tracker React Native

This folder contains a React Native conversion of the existing Portfolio Tracker web app.

## Setup

1. Install dependencies:

   ```bash
   cd /Users/sandeepreddy/Documents/Profile-Tracker/portfolio-tracker
   npm install
   ```

2. Start the Expo dev server:

   ```bash
   npm start
   ```

3. Run on a simulator or device using the Expo UI.

## Build for Google Play

1. Install EAS CLI globally if not installed:

   ```bash
   npm install -g eas-cli
   ```

2. Log in to Expo and configure EAS:

   ```bash
   eas login
   eas build:configure
   ```

3. Build the Android App Bundle (AAB) for Play Store:

   ```bash
   eas build --profile production --platform android
   ```

4. Download the generated `.aab` file from the Expo build page and upload it to Google Play.

## Notes

- The app preserves the portfolio tracking workflow.
- Investments can be added, edited, and deleted.
- Currency selection and XIPR calculations are included.
- The UI is built with React Native components and styles.

## GitHub Actions Pipeline

A workflow is included at `.github/workflows/google-play-deploy.yml`.

### Required repository secrets

- `EAS_TOKEN` — Expo EAS CLI token for CI login.
- `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` — Google Play service account JSON contents.

### How it works

- On push to `main` or manual trigger,
  - the workflow checks out the repo,
  - installs dependencies,
  - builds an Android AAB with EAS,
  - downloads the generated AAB,
  - uploads it to Google Play production track.

### Notes

- Ensure `com.profiletracker.app` in `app.json` matches the Play Store package name.
- Keep secrets secure and do not store them in source control.
