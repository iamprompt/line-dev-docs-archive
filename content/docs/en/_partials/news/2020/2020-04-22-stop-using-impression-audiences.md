---
title: >-
  [Recovered/Updated] Notice about service outage in the aggregation of some
  APIs for 'Audience' and 'Insight'
navigation: true
description: ''
meta: >-
  {"date":"2020-04-22 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2020/2020-04-22-stop-using-impression-audiences
__hash__: Qz_ZxPoLpRHSa7wYmXux0J91X6TJ_rMkpCsusvZbK1Y
seo:
  title: >-
    [Recovered/Updated] Notice about service outage in the aggregation of some
    APIs for 'Audience' and 'Insight'
  description: ''
---

::admonition{title="Updated November 5, 2021" type="note"}
All API restrictions that we had announced on May 1, 2020 have been lifted and accordingly, [Date and time of outage](#date-20200422) and [Details](#details-20200422) have been updated.
::

::admonition{title="Updated on May 1, 2020" type="note"}
The API we reported on April 22, 2020 is now available with a limit.

For more information, see the following pages:

- [Create audience for impression-based retargeting](/reference/messaging-api/#create-imp-audience-group)
- [Get user interaction statistics](/reference/messaging-api/#get-message-event)
::

We'd like to inform you about the following service outage regarding our Messaging API that has already been recovered. We apologize for any inconvenience this may have caused.

### Date and time of outage

April 13, 2020 around 15:30 - May 1, 2020 around 14:30 (UTC+9)

### Details

After the time above, you may not have been able to count impressions correctly in an audience for impression-based retargeting.

Therefore, we temporarily restricted the use of some features, but the restrictions have been lifted.

- Stopping the API to [create audience for impression-based retargeting](/reference/messaging-api/#create-imp-audience-group) (restriction lifted)
- Stopping the API to [get user interaction statistics](/reference/messaging-api/#get-message-event) (restriction lifted)
- Disabling audiences for impression-based retargeting created based on messages delivered between March 30, 2020 00:00 and April 22, 2020 21:30 (disabled)
