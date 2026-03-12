# Project Guidelines

## Code Style
- Use Angular standalone APIs and functional providers; avoid introducing NgModules unless explicitly requested.
- Keep TypeScript strict-compatible and favor explicit, typed interfaces for domain data.
- Follow existing naming and file patterns in src/app (component + template + stylesheet + spec colocated).
- Keep changes minimal and scoped to the requested feature or fix.

## Architecture
- This is an Angular 19 SSR app with Express integration.
- Client bootstrap starts at src/main.ts; server bootstrap starts at src/main.server.ts.
- SSR request handling and static asset serving live in src/server.ts.
- App-wide providers are composed in src/app/app.config.ts and extended for server in src/app/app.config.server.ts.
- Client routes are in src/app/app.routes.ts; server render mode routes are in src/app/app.routes.server.ts.
- Public static assets belong in public/ and are served from the built browser output.

## Build and Test
- Install dependencies: npm install
- Start dev server: npm start
- Build: npm run build
- Build in watch mode: npm run watch
- Run unit tests: npm test
- Run built SSR server: npm run serve:ssr:astro-bookings

## Conventions
- Keep zoneless change detection enabled. If adding or updating component tests, include provideExperimentalZonelessChangeDetection() in TestBed providers.
- Preserve hydration setup (provideClientHydration(withEventReplay())) unless a task explicitly changes hydration behavior.
- When implementing data access, align request/response models with project/api.models.md and endpoints in project/api.endpoint.md.
- Backend API is expected at http://localhost:3000 during local development.
- Prefer updating existing docs under docs/ and project/ when behavior or contracts change.
