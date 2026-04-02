---
title: Beacon Leave Event was deprecated at the end of 2020
navigation: true
description: >-
  As announced on June 6, 2020 and November 25, 2020, the leave event of Beacon
  event was deprecated at the end of 2020.
meta: >-
  {"date":"2021-01-07 00:00 UTC","tags":"Messaging API,
  end-of-life","locale":"en"}
path: /en/_partials/news/2021/2021-01-07-deprecate-leave-event-for-beacon
__hash__: hCWThTPoexvlQEHLkB24LlxBAZcVt0W4riUjZ-TjF_Y
seo:
  title: Beacon Leave Event was deprecated at the end of 2020
  description: >-
    As announced on June 6, 2020 and November 25, 2020, the leave event of
    Beacon event was deprecated at the end of 2020.
---

As announced on [June 6, 2020](/news/2020/06/30/deprecate-leave-event-for-beacon/) and [November 25, 2020](/news/2020/11/25/reminder-deprecate-leave-event-for-beacon/), the `leave` event of [Beacon event](/reference/messaging-api/#beacon-event) was deprecated at the end of 2020.

| Schedule        | Description                      |
| --------------- | -------------------------------- |
| End of 2020     | Leave event was deprecated.      |
| January 6, 2021 | Webhook transmission has ceased. |

::admonition{title="Tip" type="tip"}
We will continue supporting other Beacon events (`enter`event, `banner`event, or `stay`event).
::

### Impact

Please adjust your service to use the `stay` event instead of the `leave` event for detecting when users exit the reception range of Beacon.

| beacon.type | Description                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ~~leave~~   | [Has been deprecated at the end of 2020] ~~User left the reception range of Beacon.~~                                          |
| `stay`      | User is currently within the reception range of Beacon.     This event is sent repeatedly at a minimum interval of 10 seconds. |

::admonition
---
title: We are no longer accepting new applications in Japan
type: note
---
As of January 2021, we are no longer accepting new applications for `stay` events.
::

We apologize for any inconvenience the deprecation of the `leave` event may have caused. LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
