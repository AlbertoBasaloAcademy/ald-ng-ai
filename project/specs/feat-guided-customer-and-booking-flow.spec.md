# Guided Customer And Booking Flow Specification
- **Type**: feat
- **Status**: Draft

## Problem Description

AstroBookings needs a single guided flow that lets a customer identify themselves by email, complete missing profile data with name and phone, choose seats for a launch, and finish a booking with a clear mock billing outcome. Without this flow, booking steps are fragmented, customer identity is inconsistent, and seat availability can be oversold.

### User Stories

- As a customer, I want to start a booking with my email so that the app can find or create my identity quickly.
- As a customer, I want to provide my name and phone before booking so that my reservation has complete contact details.
- As a customer, I want to choose seats and see the billing result so that I know whether my booking was confirmed.

## Solution Overview

### User/App interface

Provide a guided booking journey that starts from a selected launch and advances through customer identification, customer details, seat selection, and booking confirmation. The flow should show current seat availability, prevent invalid seat quantities, and present a final confirmed or failed mock billing outcome.

### Model and logic

Use email as the unique customer identifier. Require name and phone before a booking can be completed. Allow one customer to reserve multiple seats on one launch, but never more than the remaining available seats. Create a booking only when the selected seat count is valid and the mock billing outcome is successful.

### Persistence

Read existing customer, launch, and booking data from the local API. Reuse an existing customer when the email already exists, otherwise create a new customer profile. Persist the booking result and updated seat availability through the API so later users see the remaining seats.

## Acceptance Criteria

- [ ] WHEN a customer starts the guided booking flow THE System SHALL ask for an email address before any booking details are confirmed.
- [ ] IF the entered email matches an existing customer THEN THE System SHALL reuse that customer identity and show the stored name and phone for confirmation.
- [ ] IF the entered email does not match an existing customer THEN THE System SHALL require name and phone before the customer can continue.
- [ ] WHEN the customer reaches seat selection THE System SHALL show the remaining available seats for the selected launch.
- [ ] IF the customer selects fewer than 1 seat or more seats than available THEN THE System SHALL block progression and show a clear validation message.
- [ ] WHEN the customer selects a valid number of seats THE System SHALL show a booking summary with customer identity, selected launch, seat count, and total amount before confirmation.
- [ ] WHEN the customer confirms the booking THE System SHALL request a mock billing outcome before finalizing the reservation.
- [ ] IF the mock billing outcome is successful THEN THE System SHALL create the booking, reduce available seats accordingly, and show a confirmation result.
- [ ] IF the mock billing outcome is failed THEN THE System SHALL not create the booking, shall not reduce available seats, and shall show a failed payment result.
