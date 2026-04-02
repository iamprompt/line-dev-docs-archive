---
title: >-
  Requirement reduced for minimum number of users per audience when sending
  messages
navigation: true
description: >-
  Narrowcast messages in the Messaging API can specify an audience as a
  recipient. Previously, there was a minimum requirement of "100 users per
  audience", but this requirement has been reduced to a minimum of 50 users.
meta: '{"date":"2021-09-14 02:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-09-14-number-of-users-per-audience
__hash__: L7akNyRf3tGSn_tA6xaeCuYmDOHZg_UwNoOaulOkts0
seo:
  title: >-
    Requirement reduced for minimum number of users per audience when sending
    messages
  description: >-
    Narrowcast messages in the Messaging API can specify an audience as a
    recipient. Previously, there was a minimum requirement of "100 users per
    audience", but this requirement has been reduced to a minimum of 50 users.
---

Narrowcast messages in the Messaging API can specify an audience as a recipient. Previously, there was a minimum requirement of "100 users per audience", but this requirement has been reduced to a minimum of 50 users.

See this table for the differences before and after the update:

| Item                                 | Before change | After change (current) |
| ------------------------------------ | ------------- | ---------------------- |
| **The number of users per audience** | Minimum: 100  | Minimum: 50            |

### Target audiences

These are the audiences whose requirement has been reduced:

- Audience for click-based retargeting
- Audience for impression-based retargeting
- Friend path audience
- Video view audience
- App event audience
- Web traffic audience

::admonition{title="Exception audiences" type="tip"}
User ID upload audiences and chat tag audiences won't be affected by this change, as they originally had no minimum number of users per audience requirement.
::

Among the audiences whose requirement has been reduced, only click-based retargeting audiences and impression-based retargeting audiences can be created using the Messaging API.

- [Create audience for click-based retargeting](/reference/messaging-api/#create-click-audience-group)
- [Create audience for impression-based retargeting](/reference/messaging-api/#create-imp-audience-group)

For more information on how to create other audiences, see [Managing Audience](/reference/messaging-api/#manage-audience-group) in the Messaging API reference.

For more information on how to send narrowcast messages, see [Sending messages to multiple users via attribute data or retargeting (narrowcast messages)](/docs/messaging-api/sending-messages/#send-narrowcast-message) in the Messaging API documentation.
