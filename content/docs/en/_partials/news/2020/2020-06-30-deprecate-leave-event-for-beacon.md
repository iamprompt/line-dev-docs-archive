---
title: Beacon Leave Event to be deprecated at the end of 2020
navigation: true
description: ''
meta: '{"date":"2020-06-30 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-06-30-deprecate-leave-event-for-beacon
__hash__: 8-cqzRcjFuEhaJYD1SVhO8r041XI97OzerDVygu-UPY
seo:
  title: Beacon Leave Event to be deprecated at the end of 2020
  description: ''
---

::admonition{title="July 8, 2020" type="note"}
We clarified the contact information.
We apologize for any inconvenience this may have caused you.
::

As announced previously, the `leave` event of [Beacon Event](/reference/messaging-api/#beacon-event), will be deprecated. Please refer to the following schedule:

| Schedule              | Description                     |
| --------------------- | ------------------------------- |
| End of 2020           | Leave event will be deprecated. |
| Early January of 2021 | Webhook transmission will cease |

::admonition{title="Tip" type="tip"}
We will continue supporting other Beacon events (`enter`event, `banner`event, or `stay`event).
::

### Impact

Please adjust your service to use the `stay` event instead of the `leave` event for detecting when users exit the reception range of Beacon.

| beacon.type | Description                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ~~leave~~   | [To be deprecated at the end of 2020] ~~User left the reception range of Beacon.~~                                             |
| `stay`      | User is currently within the reception range of Beacon.     This event is sent repeatedly at a minimum interval of 10 seconds. |

~~If you wish you use the stay event, contact your sales representative or contact our Sales partners.~~

::admonition
---
title: >-
  We are no longer accepting new applications in Japan (Added on January 7,
  2021)
type: note
---
As of January 2021, we are no longer accepting new applications for `stay` events.
::

We apologize for any inconvenience the deprecation of the `leave` event may have caused. LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
