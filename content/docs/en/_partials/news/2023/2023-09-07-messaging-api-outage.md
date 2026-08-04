---
title: '[Resolved/Updated] Notice about service outage for some of the insight''s APIs'
navigation: true
description: ''
meta: >-
  {"date":"2023-09-07 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"en"}
path: /en/_partials/news/2023/2023-09-07-messaging-api-outage
__hash__: CqnVMRqKUWd53O7a3mc3bQZ5TzdquiJ9slHZS9sBsRA
seo:
  title: >-
    [Resolved/Updated] Notice about service outage for some of the insight's
    APIs
  description: ''
---

::admonition{title="Updated on September 21, 2023" type="note"}
We've updated the [Date and time of outage](#date-20230907) and [Details](#details-20230907).
::

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

September 6, 2023 - September 21, 2023

### Cause of the outage

Server failure

### Impact

- [Get number of followers](/reference/messaging-api/#get-number-of-followers)

### Details

In some LINE Official Accounts, when you retrieve the number of followers with the specification of September 5, 2023, the `followers`, `targetedReaches` and `blocks` were all set to 0 as shown below. The issue has now been resolved and the correct number of followers can be obtained.

```json
{
  "status": "ready",
  "followers": 0,
  "targetedReaches": 0,
  "blocks": 0
}
```

We'll continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
