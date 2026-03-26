# Launch Discovery And Availability Browsing Specification
- **Type**: feat
- **Status**: Draft

## Problem Description

AstroBookings needs a clear way for users to discover scheduled launches before starting a booking flow. Users must be able to browse launch options from the local API and quickly understand price, remaining seat availability, and minimum passenger rules so they can decide whether a launch fits their needs.

### User Stories

- As a visitor, I want to browse available launches with key commercial details so that I can compare options before booking.
- As a visitor, I want to see current seat availability for each launch so that I can avoid launches that do not have enough space.
- As a visitor booking for a group, I want to see the minimum passenger rule for each launch so that I can choose launches that match my party size.

## Solution Overview

### User/App interface

Provide a launch discovery view that lists launches returned by the local API and presents the essential booking details for each option. Each launch entry should show the launch identity, date, price, current availability, and minimum passenger requirement in a scannable format.

### Model and logic

Treat launch discovery as a read-focused flow that consumes launch data and exposes only bookable decision details to the user. The browsing experience should distinguish between launches that are available for booking and launches that do not currently satisfy basic booking expectations, such as no remaining seats.

### Persistence

Read launch discovery data from the local API as the source of truth for pricing, seat availability, and minimum passenger rules. The browsing flow does not create or modify data.

## Acceptance Criteria

- [ ] WHEN the user opens the launch discovery view THE System SHALL request launch data from the local API.
- [ ] WHEN launch data is available THE System SHALL display a list of launches with price, remaining availability, and minimum passenger rule for each launch.
- [ ] WHERE a launch is shown in the discovery list THE System SHALL show enough identifying information for the user to distinguish it from other launches.
- [ ] IF the local API returns no launches THEN THE System SHALL show an empty-state message indicating that no launches are available to browse.
- [ ] IF a launch has zero remaining seats THEN THE System SHALL indicate that the launch is unavailable for booking.
- [ ] IF a launch has a minimum passenger requirement greater than one THEN THE System SHALL show that requirement alongside the launch details.
- [ ] WHEN the local API data changes and the user reloads the discovery view THE System SHALL reflect the latest price, availability, and minimum passenger values returned by the API.
- [ ] WHILE launch data is loading THE System SHALL provide a visible loading state in the discovery view.
- [ ] IF the local API request fails THEN THE System SHALL show an error state that informs the user that launch browsing data could not be loaded.
