---
name: routing-ng
description: Generates Angular routes with page components, presentational components and services.
---

# Angular Routing

## Configuration
- Configure routing at `app.config.ts` file with:
  - `provideRouter(routes, withComponentInputBinding()),` function.

## Route Structure

For each route create:
- A **routed** container component with type `Page` (e.g., `UserPage`) 
- A **presentational** component for the UI (e.g., `UserProfile`).
- A **service** to manage data and business logic for the route (e.g., `UserService`).
- Optionally:
  - a **guard** to protect the route based on authentication or permissions.
  - a **resolver** to fetch data before activating the route.
  - a **repository service** to handle data fetching and transformations.

### CLI commands

```bash
# for route /users/:id
ng g c routes/user --type=page # make it default export
ng g c routes/user/user-profile
ng g s routes/user/user  
```

- Define routes in a separate `routes` folder with `app.routes.ts` file.
- Ensure default export for page components for simpler imports at routes.

```ts
export const routes: Route[] = [
  {
    path: 'users/:id ',
    loadComponent: () => import('./routes/user/user.page'),
  }
```
