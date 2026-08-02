# Copilot instructions for this repository

This repository is a Vue 3 + Vite + TypeScript personal resume/portfolio site. The main goal is to keep the site content-driven and preserve the existing bilingual experience.

## Build, test, and validation commands

Install dependencies:

```bash
npm install
# or, when lockfile changes are intended:
npm ci
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the built app locally:

```bash
npm run preview
```

Run the Playwright browser tests:

```bash
npm run test:e2e
```

Run with the browser window visible:

```bash
npm run test:e2e -- --headed
```

Open the interactive Playwright UI:

```bash
npx playwright test --ui
```

The deployment workflow in `.github/workflows/deploy.yml` runs `npm ci` and `npm run build` before publishing to GitHub Pages.

## High-level architecture

- `src/main.ts` is the app entrypoint. It registers Font Awesome, Vue i18n, and mounts the root Vue app.
- `src/App.vue` composes the page from section-level components in `src/components/sections/` and layout components in `src/components/layout/`.
- The actual resume content lives in data modules under `src/data/`:
  - `experience.ts` for work experience items
  - `projects.ts` for portfolio projects
  - `skills.ts` for skill categories
- The bilingual content model uses typed objects with `zh`/`en` values (see `src/types/index.ts`). Prefer updating the relevant data file and the matching locale entries instead of hardcoding copy into components.
- Translations are centralized in `src/locales/en.ts` and `src/locales/zh.ts`. Use the existing `$t(...)` keys rather than introducing ad-hoc strings in templates.
- Shared behavior is handled by composables in `src/composables/`:
  - `useTheme.ts` for dark mode and localStorage persistence
  - `useLang.ts` for language switching and document language attributes
  - `useReveal.ts` for scroll-reveal animations
- Global styling and print-specific rules live in `src/assets/main.css`; Tailwind is wired through Vite in `vite.config.ts`.

## Repository-specific conventions

- Use Vue SFCs with `<script setup lang="ts">` for new or edited components.
- Keep content bilingual via `I18nText`-style objects (`{ zh, en }`) rather than separate language-specific branches in components.
- When adding new resume content, update the relevant data module first and then render it through the existing section component; do not inline large content blocks directly into the template.
- Preserve the existing dark-mode and print-resume behavior. The print layout depends on `.no-print` and the CSS rules in `src/assets/main.css`.
- Playwright is configured for browser automation in this repo via `@playwright/mcp`, `playwright`, and the Copilot setup workflow at `.github/workflows/copilot-setup-steps.yml`.
- `docs/PLAN.md` describes an older single-file prototype and is historical context; the current implementation is the Vue/Vite structure under `src/`.

## Notes for future changes

- This is a content-heavy site, so most changes are expected in `src/data/` and `src/locales/` rather than in the underlying layout.
- Keep changes small and focused; the app is assembled from reusable components and shared styling utilities.
