---
title: >-
  With the enforcement of Thailand’s Personal Data Protection Act, as of late
  May 2022, the specifications of some features will be changed in the Messaging
  API
navigation: true
description: >-
  Thailand’s Personal Data Protection Act is scheduled to be enforced on June 1,
  2022. Accordingly, we plan to change the specifications in the Messaging API
  for sending messages using attribute information and retargeting, and for
  retrieving demographic information. These specification changes only apply to
  Thai users and the Thai LINE Official Accounts.
meta: '{"date":"2022-05-17 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-05-17-messaging-api-will-be-updated
__hash__: Px6NJBWbaPWHnUdnfHbd6-qyFrWO2BGPEYjAF-JuEp8
seo:
  title: >-
    With the enforcement of Thailand’s Personal Data Protection Act, as of late
    May 2022, the specifications of some features will be changed in the
    Messaging API
  description: >-
    Thailand’s Personal Data Protection Act is scheduled to be enforced on June
    1, 2022. Accordingly, we plan to change the specifications in the Messaging
    API for sending messages using attribute information and retargeting, and
    for retrieving demographic information. These specification changes only
    apply to Thai users and the Thai LINE Official Accounts.
---

Thailand’s Personal Data Protection Act is scheduled to be enforced on June 1, 2022. Accordingly, we plan to change the specifications in the Messaging API for sending messages using attribute information and retargeting, and for retrieving demographic information. These specification changes only apply to Thai users and the Thai LINE Official Accounts.

### Scheduled date of change

Late May 2022

The date and time are subject to change without notice.

### Changes

The changes are as follows:

| API                                                                          | Changes                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message) | When you filter recipients by certain conditions, users under the age of 20 in Thailand will be excluded.                                                                                                                                          |
| [Get friend demographics](/reference/messaging-api/#get-demographic)         | When you retrieve the demographic information of a Thai LINE Official Account, the percentages with `ages[].age` values of `from0to14` and `from15to19` won't be included in the response. Users under the age of 20 will be counted as `unknown`. |

LINE will continue to work on further improving our services to our customers. Thank you for your understanding and cooperation.
