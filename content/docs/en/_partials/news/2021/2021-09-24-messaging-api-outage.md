---
title: '[Resolved] Notice about service outage for Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  We've released a version of LINE that resolved the issue. We sincerely
  apologize for any inconvenience that this may have caused.
meta: >-
  {"date":"2021-09-24 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-09-24-messaging-api-outage
__hash__: d2KKNFGzJgrS8DSSRNcPQJiTFTuleXn2rhQs2OikSmE
seo:
  title: '[Resolved] Notice about service outage for Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    We've released a version of LINE that resolved the issue. We sincerely
    apologize for any inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the Messaging API. We've released a version of LINE that resolved the issue. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

September 13, 2021 - September 24, 2021

### Cause

Issue with LINE for iOS and iPadOS.

### Impact

When sending an [imagemap message](/docs/messaging-api/message-types/#imagemap-messages) from the LINE Official Account, LINE would be forced to close if a user taps on a specific area in the image.

### Details

LINE would be forced to close when all of the following conditions are met:

- A user uses LINE for iOS or iPadOS.
- A user uses LINE version `11.16.0`.
- An [imagemap message](/reference/messaging-api/#imagemap-message) was sent from the LINE Official Account using the Messaging API.
- An [imagemap URI action object](/reference/messaging-api/#imagemap-uri-action-object) was specified in the `actions` property of the sent imagemap message.
- When there were multiple objects in actions, the imagemap URI action object was defined after the other objects.
- The user tapped the area of the imagemap URI action object.

If all of the above conditions are met, updating user's LINE version to `11.16.1` or later will resolve the issue.

[Rich message](https://www.linebiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"} sent from [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} are not affected by this outage.

#### Example of an affected `actions` property

```json
"actions": [
    {
        "type": "message",
        "text": "Hello",
        "area": {
            "x": 520,
            "y": 586,
            "width": 520,
            "height": 454
        }
    },
    {
        "type": "uri",
        "linkUri": "https://example.com/",
        "area": {
            "x": 0,
            "y": 586,
            "width": 520,
            "height": 454
        }
    }
]
```

#### Example of an unaffected `actions` property

```json
"actions": [
    {
        "type": "uri",
        "linkUri": "https://example.com/",
        "area": {
            "x": 0,
            "y": 586,
            "width": 520,
            "height": 454
        }
    },
    {
        "type": "message",
        "text": "Hello",
        "area": {
            "x": 520,
            "y": 586,
            "width": 520,
            "height": 454
        }
    }
]
```

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
