# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 4** personal portfolio site (moriel.tech) with an era slider that re-styles the page for different web design periods. It is a single-service, statically-generated frontend app with no backend, no database, and no secrets.

### Node version

Requires **Node.js 24** (see `.nvmrc`). Use `nvm use 24` or `nvm install 24` if not already active.

### Key commands

See `package.json` scripts. Summary:

- **Dev server:** `npm run dev` (serves at `http://localhost:3000`)
- **Lint:** `npm run lint` (runs ESLint + Stylelint)
- **Test:** `npm run test` (currently just runs lint)
- **Build:** `npm run build` (static site generation via Nitro)

### Notes

- `.npmrc` sets `legacy-peer-deps=true`; this is required for clean installs.
- `@nuxt/content` uses an embedded SQLite connector — no external DB setup needed.
- The contact form uses Netlify Forms attributes; form submission only works when deployed to Netlify.
- The build produces a CSS minification warning about `*zoom:1` in Vuetify styles — this is benign and expected.
