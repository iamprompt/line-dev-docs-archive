---
title: Use a loading animation to reassure users while they wait for a response
navigation: true
description: >-
  Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the
  LINE Developers site.
meta: >-
  {"date":"2026-10-29 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/10/29/loading-indicator
__hash__: GmBr6wzmjb8HuFAIEXyivit41FBKPn6kWXXHYFVtjCk
seo:
  title: Use a loading animation to reassure users while they wait for a response
  description: >-
    Hi, I'm Horikoshi. I'm a technical writer working on the documentation for
    the LINE Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/10/29" .!mb-20}

  :::

Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the [LINE Developers site](/).

After your LINE Official Account receives a message from a user, it may take some time before you can send a reply, such as when you use generative AI to prepare a response in the background. If users have to wait tens of seconds without any indication of what's happening, they may become uneasy and wonder why they haven't received a response even though their message is marked as "Read".

## Use a loading animation to show that a reply is being prepared

By using the [Display a loading animation](/reference/messaging-api/#display-a-loading-indicator) endpoint of the Messaging API, you can display a loading animation to visually tell users that you're preparing a message.

![](/media/messaging-api/loading-indicator/loading-animation.webp){className="[\"border\",\"w-fix-480\"]"}

When a reply takes time, leaving users waiting without any indication can make them uneasy. Use a loading animation to reassure them while they wait.

For more information, see [Display a loading animation](/docs/messaging-api/use-loading-indicator/) in the Messaging API documentation.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
