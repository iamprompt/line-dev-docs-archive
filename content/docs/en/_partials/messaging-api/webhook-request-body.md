---
title: Webhook Request Body
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-request-body
__hash__: mXFwACd_Aa__A8WlLF-WmCcPJ0vt6cyzdze8XCyy8ok
seo:
  description: ''
---

### Request body

The request body contains a JSON object with the user ID of a bot that should receive webhook events and an array of [webhook event objects](#webhook-event-objects).

::parameter-table
  :::parameter-table-entry
  #undefined
  destination

  #undefined
  String

  User ID of a bot that should receive webhook events. The user ID value is a string that matches the regular expression, `U[0-9a-f]{32}`.
  :::

  :::parameter-table-entry
  #undefined
  events

  #undefined
  Array

  Array of [webhook event objects](#webhook-event-objects). The LINE Platform may send an empty array that doesn't include a webhook event object to confirm communication.
  :::
::
