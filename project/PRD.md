# AstroBookings Product Requirements Document

AstroBookings is a brownfield Angular SPA for demo and training scenarios that lets users browse rockets and book seats on rocket launches through a local API.

## Vision and Scope

AstroBookings should demonstrate a clear, API-first booking flow across rockets, launches, customers, and bookings while remaining simple enough for training and workshop use. The product is not intended for production use; it prioritizes understandable frontend architecture, route-level separation, and realistic CRUD and booking workflows over security or enterprise-grade operations.

Target users are learners, instructors, and developers using the app to practice Angular, local API integration, and common SPA patterns.

In scope are rocket browsing and management, launch browsing, customer capture, and booking creation against the local API at localhost:3000.

Out of scope are authentication, authorization, real payment processing, advanced admin tooling, and production-grade security or observability.

## Functional Requirements

### FR1 Rocket catalog and detail views
- The SPA must let users view available rockets in a list and open a rocket detail page showing the selected rocket's core data.
- **Status**: Partial

### FR2 Rocket creation
- The SPA must let users create a new rocket from a dedicated route and persist it through POST /api/rockets with basic success and error handling.
- **Status**: Implemented

### FR3 API-backed rocket data
- Rocket listing and detail views should load data from the local API instead of hard-coded in-memory data so the browse experience reflects persisted state.
- **Status**: Not Started

### FR4 Launch browsing and availability
- The SPA must let users browse launches with date, price, minimum passengers, and available seats so they can choose a valid trip.
- **Status**: Not Started

### FR5 Customer capture and lookup
- The SPA must let users create or retrieve a customer by email and capture name and phone as part of the booking flow.
- **Status**: Not Started

### FR6 Booking flow
- The SPA must let a customer book seats on a selected launch, validate seat counts against availability, and persist bookings through the local API.
- **Status**: Not Started

### FR7 Booking domain feedback
- The SPA should present clear validation and submission feedback for API errors, missing resources, and invalid booking conditions such as exceeding available seats.
- **Status**: Partial

## Technical Requirements

### TR1 Angular standalone SPA architecture
- The frontend must remain an Angular v19+ standalone-component SPA with strict TypeScript, route-level separation, and signal-based local state where appropriate.
- **Status**: Implemented

### TR2 Local API integration
- Data access must use Angular HttpClient against the local API resources for rockets, launches, customers, and bookings, following the documented contracts and HTTP status behaviors.
- **Status**: Partial

### TR3 Brownfield route continuity
- Existing routes /, /rockets/new, and /rockets/:id must remain functional while new route-level flows are added without breaking the current training experience.
- **Status**: Implemented

### TR4 Demo-oriented reliability
- The app should provide basic loading, empty, error, and not-found states for primary user flows so the training experience remains understandable and resilient during local API failures.
- **Status**: Partial
