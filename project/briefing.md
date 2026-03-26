# AstroBookings Project Briefing

AstroBookings is a web app to book seats on rocket launches.
It targets demos and training, not production use.

The app lists rockets and scheduled launches with pricing.
Users can view availability and minimum passenger rules.

A customer uses email as unique identity.
A customer profile includes name and phone number.

Customers can book multiple seats on one launch.
Bookings must never exceed launch seat availability.

Launches follow a status flow from scheduled to confirmed.
Other outcomes include successful, cancelled, or suspended.

Bookings trigger billing through a mock payment gateway.
The frontend integrates with a local API at localhost:3000.

Primary features are rockets, launches, customers, and bookings.
The goal is a clear SPA with fast, guided booking flows.
