---
title: >-
  With the enforcement of Thailand's Personal Data Protection Act, the
  specifications of some features have been changed in the Messaging API
navigation: true
description: >-
  Thailand's Personal Data Protection Act is scheduled to be enforced on June 1,
  2022. Accordingly, as announced on May 17, 2022, we've changed the
  specifications of some features in the Messaging API. The specification
  changes only apply to Thai users and the Thai LINE Official Accounts.
meta: '{"date":"2022-05-26 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-05-26-messaging-api-updated
__hash__: w9Eu2txiK7_1znsOAI0xkpaUYroohKROkMr3-fLL_dc
seo:
  title: >-
    With the enforcement of Thailand's Personal Data Protection Act, the
    specifications of some features have been changed in the Messaging API
  description: >-
    Thailand's Personal Data Protection Act is scheduled to be enforced on June
    1, 2022. Accordingly, as announced on May 17, 2022, we've changed the
    specifications of some features in the Messaging API. The specification
    changes only apply to Thai users and the Thai LINE Official Accounts.
---

Thailand's Personal Data Protection Act is scheduled to be enforced on June 1, 2022. Accordingly, as announced on [May 17, 2022](/news/2022/05/17/messaging-api-will-be-updated/), we've changed the specifications of some features in the Messaging API. The specification changes only apply to Thai users and the Thai LINE Official Accounts.

### Changes

The changes are as follows:

| API                                                                          | Changes                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message) | When you filter recipients by certain conditions, users under the age of 20 in Thailand will be excluded.                                                                                                                                          |
| [Get friend demographics](/reference/messaging-api/#get-demographic)         | When you retrieve the demographic information of a Thai LINE Official Account, the percentages with `ages[].age` values of `from0to14` and `from15to19` won't be included in the response. Users under the age of 20 will be counted as `unknown`. |

::admonition
---
title: >-
  When sending narrowcast messages, existing audiences are also subject to the
  specification changes
type: note
---
Even if you use an audience created before the specification change, users under the age of 20 in Thailand may be excluded.
::

LINE will continue to work on further improving our services to our customers. Thank you for your understanding and cooperation.
