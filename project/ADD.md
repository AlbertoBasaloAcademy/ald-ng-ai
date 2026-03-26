# AstroBookings Architecture Design Document

## Table of Contents
1. [Overview](#overview)
2. [Goals](#goals)
3. [Constraints](#constraints)
4. [Architecture Overview](#architecture-overview)
5. [Frontend Structure](#frontend-structure)
6. [Data Flow](#data-flow)
7. [Integration Strategy](#integration-strategy)
8. [Quality Attributes](#quality-attributes)
9. [Risks](#risks)
10. [Delivery Guidance](#delivery-guidance)

## Overview

AstroBookings is an Angular 19 single-page application for demo and training purposes. It presents rocket launch booking workflows against a local API running at `http://localhost:3000`. The application follows Angular standalone component patterns, strict TypeScript, signals for local state, and Angular Router for route-level separation.

The current implementation already supports a basic rockets experience:
- `/` lists rockets
- `/rockets/new` creates rockets through `HttpClient`
- `/rockets/:id` shows rocket details

The broader product scope includes rockets, launches, customers, and bookings. The architecture should preserve the current route-level page plus presentational split while extending the app toward API-first flows across the remaining domains.

## Goals

- Keep the frontend simple, explicit, and suitable for teaching Angular best practices.
- Preserve the current standalone-component architecture and strict TypeScript setup.
- Standardize route-level feature organization so each domain can evolve independently.
- Move the app toward consistent API-backed reads and writes for all core resources.
- Use Angular signals for local UI state and lightweight feature state.
- Make it easy to add launches, customers, and bookings without introducing unnecessary infrastructure.

## Constraints

- Angular 19+ with standalone components is required.
- Strict TypeScript is required.
- Angular signals are preferred for local and feature state.
- Angular Router is the application composition mechanism.
- The backend is a local demo API at `localhost:3000`.
- The product is not production-grade; architecture should favor clarity over enterprise complexity.
- Existing repo conventions must be preserved:
  - route-level folders under `src/app/routes`
  - page component plus presentational component split
  - local feature services/repositories
  - `HttpClient` configured centrally in `app.config.ts`

## Architecture Overview

The application should use a feature-oriented frontend architecture organized by route and domain. Each routed feature owns its page component, presentational components, models, and service/repository logic. Shared cross-feature artifacts remain in `core` and `shared`.

Recommended architectural layers:

- App shell layer
  - Angular application config, router setup, global layout, hydration, zoneless change detection
- Route feature layer
  - Page components orchestrate route params, signals, navigation, and feature state
  - Presentational components render inputs and outputs with minimal logic
- Data access layer
  - Feature repositories wrap `HttpClient` calls to the local API
  - DTO mapping stays close to the repository or feature service
- Shared domain layer
  - Reusable types and narrow utilities in `core/models` and `shared`

Current state versus target state:

- Exists now
  - Router with `home`, `rocket-new`, and `rocket-detail` routes
  - Standalone page components
  - Presentational components for route UIs
  - `HttpClient` configured with fetch
  - Rocket creation via API
  - Signals used in route services and pages
- Still needs to be built
  - API-backed rocket listing and rocket detail retrieval
  - Launches routes and services
  - Customers routes and services
  - Bookings routes and services
  - Shared API base configuration strategy for local backend access
  - Consistent error/loading/empty-state handling across features
  - E2E coverage for the main booking flow

## Frontend Structure

Recommended structure:

```txt
src/app/
  app.config.ts
  app.routes.ts
  core/
    layout/
    models/
    api/
  routes/
    home/
    rocket-detail/
    rocket-new/
    launches/
    customers/
    bookings/
  shared/
    ui/
    forms/
    utils/
```

Design rules:

- Each route feature should keep the current split:
  - `*.page.ts` for routed orchestration
  - `*.component.ts` for presentational UI
  - `*.service.ts` or `*.repository.ts` for feature logic and API communication
  - local `*.model.ts` files for form or view models
- `core/models` should hold stable domain types shared across routes.
- `shared` should contain only truly reusable UI or utilities, not feature-specific code.
- Keep state close to the route unless multiple routes genuinely share it.

Feature expectations by domain:

- Rockets
  - Keep list, detail, and create routes
  - Replace hardcoded rocket data in home/detail services with repository-backed reads
- Launches
  - Add list and detail flows first
  - Add create flow if needed for training exercises
- Customers
  - Add lookup and create/edit flows around email identity
- Bookings
  - Add create-first workflow integrating customer and launch selection
  - Expose booking confirmation and error states clearly

## Data Flow

Primary interaction pattern:

1. Router activates a page component.
2. The page reads route params and user actions.
3. The page delegates reads/writes to a feature service or repository.
4. Repository uses `HttpClient` to call the local API.
5. Returned DTOs are exposed to the page through signals or resource-style loaders.
6. Presentational components render state and emit user events upward.

State guidance:

- Use signals for page state such as selected entity, loading, submission state, and error messages.
- Keep transient form state inside form components or route-local models.
- Avoid global stores unless a concrete shared-state problem appears.
- Prefer one-way data flow from page to presentational component through inputs and outputs.

Read/write consistency target:

- Reads
  - `GET /rockets`, `GET /rockets/:id`, `GET /launches`, `GET /launches/:id`, `GET /customers/:email`, `GET /bookings/:id`
- Writes
  - `POST`, `PUT`, `DELETE` per resource as exposed by the local API

## Integration Strategy

The frontend should integrate directly with the local REST API using Angular `HttpClient`.

Integration decisions:

- Keep API communication in feature repositories or narrowly scoped data services.
- Use typed request and response models for rockets, launches, customers, and bookings.
- Use a single API base strategy:
  - either `/api/...` with local proxy support
  - or an environment-based base URL targeting `http://localhost:3000`
- Normalize error handling at the repository boundary so pages receive simple UI-friendly states.
- Keep transformation logic minimal and explicit because the app is educational.

Recommended rollout:

- Phase 1
  - Align rockets list and detail with the same API-backed approach already used for rocket creation
- Phase 2
  - Add launches read flows and supporting models
- Phase 3
  - Add customers create/lookup flows
- Phase 4
  - Add booking creation flow joining customer, launch, and seat selection
- Phase 5
  - Add update/delete flows only where they help training goals

## Quality Attributes

### Simplicity
The architecture should stay small and readable. Feature-local services and signals are preferred over abstracted state platforms.

### Maintainability
Route-level separation and domain-based folders should make features easy to change without affecting unrelated areas.

### Consistency
All features should follow the same page/component/service/model pattern and the same API integration style.

### Testability
Page orchestration, repositories, and form behavior should be unit-testable. Critical user journeys should be covered with Playwright.

### Responsiveness
The SPA should provide immediate feedback for loading, save progress, validation failures, and navigation outcomes.

### Demo Reliability
Because the app is used for training, predictable local setup and understandable failures matter more than production scalability.

## Risks

- Current rocket reads are split between hardcoded signal data and API-backed creation, which creates inconsistent behavior.
- API path configuration may drift if reads and writes do not share the same base URL strategy.
- Expanding features without shared conventions could lead to duplicated DTOs, validation logic, and UI states.
- Booking flows involve cross-entity constraints such as seat availability and minimum passengers; frontend assumptions must defer to backend validation.
- Because the app is demo-only, there is a risk of under-handled errors or partial states unless explicitly designed into each route.

## Delivery Guidance

Build the architecture incrementally and keep the existing working routes stable.

Implementation guidance:

- First, refactor rockets so list, detail, and create all use the same repository pattern.
- Then add launches, customers, and bookings as separate route features under `src/app/routes`.
- Define shared domain types in `src/app/core/models` only when reused across features.
- Keep presentational components dumb and place navigation, resource loading, and side effects in page components.
- Add unit tests for repositories, route services, and form logic as features are introduced.
- Add Playwright coverage for the core happy path once bookings exist.

Definition of done for the architecture rollout:

- All core resources have typed API integration paths
- All route features follow the same structural pattern
- Hardcoded rocket read data is removed
- Main loading, error, and empty states are implemented consistently
- The booking demo flow is functional end to end against the local API
