---
title: >-
  In the Messaging API, you can customize the sender icon and display name for
  each message you send
navigation: true
description: >-
  Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the
  LINE Developers site.
meta: >-
  {"date":"2026-03-12 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/03/12/icon-nickname-switch
__hash__: eV1UfvgbgkEyzPw8w2oFTDUvhOm4E9c_Lz5WtaDAuik
seo:
  title: >-
    In the Messaging API, you can customize the sender icon and display name for
    each message you send
  description: >-
    Hi, I'm Horikoshi. I'm a technical writer working on the documentation for
    the LINE Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/03/12" .!mb-20}

  :::

Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the [LINE Developers site](/).

Although it is not widely known, the Messaging API allows you to customize the sender icon and display name for each message.

## Sending messages with custom icons and display names

For example, suppose an online learning service's LINE Official Account sends a [push message](/reference/messaging-api/#send-push-message) like this:

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
    "messages": [
        {
            "type": "text",
            "text": "The deadline to submit your assignment has passed. Please submit it immediately.",
            "sender": {
                "name": "Math teacher Richard",
                "iconUrl": "https://example.com/profile/math-angry-icon.jpg"
            }
        },
        {
            "type": "text",
            "text": "Here is the schedule for the classes next month."
        }
    ]
}'
```

Then, users will receive a message that looks like this:

![](/media/tips/2026/change-icon-and-nickname-en.png){className="[\"w-fix-360\",\"border\"]"}

Having different icons and names makes it easy to instantly recognize the type of message.

With this feature, you can send messages about specific courses with the respective teacher's icon and name, while sending general announcements with the default icon and name. For more information, see [Customize icon and display name](/docs/messaging-api/icon-nickname-switch/) in the Messaging API documentation.

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
