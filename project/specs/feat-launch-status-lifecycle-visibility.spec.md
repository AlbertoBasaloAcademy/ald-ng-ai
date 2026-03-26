# Launch Status Lifecycle Visibility Specification
- **Type**: feat
- **Status**: Draft

## Problem Description

Users need clear launch status visibility to understand whether a launch can still be booked and what its final outcome is. Today the SPA does not make the lifecycle states explicit enough, which creates confusion around booking availability and post-launch expectations.

### User Stories

- As a customer, I want to see the current launch status so that I know whether booking is still possible.
- As a customer, I want cancelled or suspended launches to be clearly marked so that I do not waste time trying to book them.
- As a customer, I want completed launch outcomes to be visible so that I understand whether a launch was successful or not.

## Solution Overview

### User/App interface

Show a clear, readable status label wherever launches are listed or viewed in detail. Distinguish the five supported statuses: scheduled, confirmed, successful, cancelled, and suspended. Pair each status with clear booking availability messaging where relevant.

### Model and logic

Treat launch status as a defined set of lifecycle values used consistently across the SPA. Map each status to a user-facing meaning, including whether booking remains available, unavailable, or no longer relevant because the launch outcome is final.

### Persistence

Consume the status value from the existing API responses and preserve it through the SPA flow so the same status meaning appears consistently in list and detail views.

## Acceptance Criteria

- [ ] WHERE launch status is shown THE System SHALL display one of these values only: scheduled, confirmed, successful, cancelled, or suspended.
- [ ] WHEN a user views a launch in a list THE System SHALL display the launch status in a clearly visible form.
- [ ] WHEN a user views a launch detail page THE System SHALL display the same launch status value shown in listing views.
- [ ] IF a launch status is scheduled THEN THE System SHALL indicate that booking is available.
- [ ] IF a launch status is confirmed THEN THE System SHALL indicate that booking is available.
- [ ] IF a launch status is cancelled THEN THE System SHALL indicate that booking is unavailable.
- [ ] IF a launch status is suspended THEN THE System SHALL indicate that booking is unavailable.
- [ ] IF a launch status is successful THEN THE System SHALL indicate that the launch outcome is final and booking is unavailable.
- [ ] WHEN the same launch appears in multiple SPA views THE System SHALL present a consistent status value and availability meaning in each view.
