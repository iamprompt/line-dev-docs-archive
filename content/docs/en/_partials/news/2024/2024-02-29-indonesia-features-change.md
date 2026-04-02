---
title: >-
  In Indonesia, some features of the Messaging API will be discontinued on April
  3, 2024
navigation: true
description: >-
  We'd like to inform you that due to a change in strategy for the LINE Official
  Accounts in Indonesia, some features of the Messaging API will be
  discontinued.
meta: >-
  {"date":"2024-02-29 00:00 UTC","tags":"line-official-account, messaging-api,
  options-for-corporate-customers, end-of-life","locale":"en"}
path: /en/_partials/news/2024/2024-02-29-indonesia-features-change
__hash__: o5l_Em3rzmd8az4-DLfgG6HPbG6DqSns_dsBrpa8IqY
seo:
  title: >-
    In Indonesia, some features of the Messaging API will be discontinued on
    April 3, 2024
  description: >-
    We'd like to inform you that due to a change in strategy for the LINE
    Official Accounts in Indonesia, some features of the Messaging API will be
    discontinued.
---

We'd like to inform you that due to a change in strategy for the LINE Official Accounts in Indonesia, some features of the Messaging API will be discontinued.

### Scheduled date of change

April 3, 2024

The details and date of this specification change are subject to change without notice.

### Changes

As a result of this specification change, the following features will no longer be available in Indonesia:

1. [Getting friend demographics](#changes-get-demographic-20240229)
2. [Specifying the target of narrowcast messages by region to be sent](#changes-region-20240229)
3. [Sending messages via LINE notification message](#changes-line-notification-message-20240229)
4. [Using LINE Beacons](#changes-line-beacon-20240229)

#### 1. Getting friend demographics

In the [Get friend demographics](/reference/messaging-api/#get-demographic) endpoint in the Insight section, the LINE Official Accounts created by Indonesian users will no longer be able to get demographics.

#### 2. Specifying the target of narrowcast messages by region to be sent

You will no longer be able to specify Indonesia as a [region](/reference/messaging-api/#narrowcast-demographic-filter-region) in the [demographic filter object](/reference/messaging-api/#narrowcast-demographic-filter) for [narrowcast messages](/reference/messaging-api/#send-narrowcast-message).

#### 3. Sending messages via LINE notification message

Messages can't be sent to phone numbers issued in Indonesia in [LINE notification message](/reference/partner-docs/#send-line-notification-message), which are only available to corporate customers.

#### 4. Using LINE Beacons

[LINE Beacons](/docs/messaging-api/using-beacons/) will no longer be available in Indonesia. After the specification change, beacon devices will no longer be able to detect Indonesian users.

We'll continue to work to further improve its service to our customers. Thank you for your understanding.
