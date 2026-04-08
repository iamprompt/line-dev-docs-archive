---
title: Use beacons with LINE
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/using-beacons
__hash__: YVgah4GvOUsq4JDG5aJd8Rm78cbD89OGldS2i7yuUVI
seo:
  title: Use beacons with LINE
  description: null
---

# :page-title

:markdown-controlsWith LINE Beacon, your bot receives [beacon webhook events](/reference/messaging-api/#beacon-event) whenever a LINE user enters a beacon region. You can customize your bot app to interact with users with LINE Beacon in the context that suits your business needs.

::admonition{title="Note" type="note"}
LINE Beacon is available in Japan, Taiwan, and Thailand.
::

::admonition{title="Use the latest LINE for LINE Beacon" type="tip"}
We recommend that you use the latest version of LINE to use LINE Beacon.
::

## Prepare beacon devices

To use LINE Beacon, you need a Bluetooth® Low Energy beacon device to link to your LINE Official Account. You can use one of the following types of devices:

- A beacon device that supports [LINE Beacon](/docs/messaging-api/beacon-device-spec/). These devices are only supported in their countries.

  - Supported devices in Japan are available [here](https://beacon.theshop.jp/items/6617930){rel="[\"nofollow\"]"}.
  - Supported devices in Thailand are available [here](https://linedevth.line.me/th/tech-partner?filterTech=Beacon){rel="[\"nofollow\"]"}.
- A Bluetooth® Low Energy device that uses the [LINE Simple Beacon](https://github.com/line/line-simple-beacon){rel="[\"nofollow\"]"} specification.

## Link beacon to LINE Official Account

To link your LINE Official Account to a beacon, open the beacon registration page from the [LINE Official Account Manager](https://manager.line.biz/beacon/register){rel="[\"nofollow\"]"}. From the registration page, link a LINE Beacon compatible device to your LINE Official Account. You can also issue a **LINE Simple Beacon hardware ID** for the device.

::admonition{title="Note" type="note"}
You can link more than one beacon to a LINE Official Account. But you can link only one LINE Official Account to a beacon.
::

## Receive a webhook event

When a user who meets the following conditions enters your beacon region, your bot server receives [beacon webhook events](/reference/messaging-api/#beacon-event):

- The user who have Bluetooth and the LINE Beacon settings on the user's LINE activated
- The user who added the LINE Official Account that was linked to the bot app as a friend in advance

To try to trigger a beacon webhook event:

1. Make sure that Bluetooth is activated on your smartphone.
2. Enable **Use LINE Beacon** from **Settings** > **Privacy** on LINE.
3. Make sure that the beacon device is powered on. Bring your smartphone into the beacon range.
4. See if your bot server receives a beacon event object.

Here is an example of a [beacon event object](/reference/messaging-api/#beacon-event):

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "beacon",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "beacon": {
        "hwid": "d41d8cd98f",
        "type": "enter"
      }
    }
  ]
}
```

## Beacon banner

The beacon banner is a banner that appears over the user's Chats screen when your beacon detects a LINE user.

With a tap on the banner, you can let users add your LINE Official Account linked to the beacon as a friend if they haven't added the account as a friend.

When the users tap the beacon banner, the web page specified by the LINE Official Account opens. Also, you can make the users receive a message from your LINE Official Account at the very spot they tapped the banner.

::admonition{title="Note" type="note"}
The beacon banner is available only to corporate users. To use the beacon banner, contact your LINE representative or make an inquiry through the [LY for Business](https://www.lycbiz.jp/en/){rel="[\"nofollow\"]"} website.
::

![](/media/messaging-api/using-beacons/beacon-banner_en.png){className="[\"border\",\"w-fix-320\"]"}
