---
title: Link your bot to your LINE Login channel
navigation: true
description: >-
  We've added an option to display a prompt to let you display an option for
  users to add your bot as a friend when logging in to your app with LINE Login.
  To do this, first, link a bot to your LINE Login account from the new "Bot
  linked to this channel" item in the LINE Developers Console, then include the
  bot_prompt query parameter in the authorization URL for LINE Login.
meta: >-
  {"date":"2017-11-21 00:00 UTC","tags":"Docs, Messaging API, LINE Login, Social
  API","local":"en"}
path: /en/_partials/news/2017/2017-11-21-add-bot-as-friend-option
__hash__: 5CTV4wC9wKltUFUkpdB0aOiPuLbJHcuPQggDqj-2SdU
seo:
  title: Link your bot to your LINE Login channel
  description: >-
    We've added an option to display a prompt to let you display an option for
    users to add your bot as a friend when logging in to your app with LINE
    Login. To do this, first, link a bot to your LINE Login account from the new
    "Bot linked to this channel" item in the LINE Developers Console, then
    include the bot_prompt query parameter in the authorization URL for LINE
    Login.
---

We've added an option to display a prompt to let you display an option for users to add your bot as a friend when logging in to your app with LINE Login. To do this, first, link a bot to your LINE Login account from the new "Bot linked to this channel" item in the [LINE Developers Console](/console/), then include the `bot_prompt` query parameter in the authorization URL for LINE Login.

For more information on this feature, see [Linking a bot with your LINE Login channel](/docs/line-login/link-a-bot/).

In addition, we've released a new resource for the Social API which lets you get the friendship status between your bot and a user. Send a GET request to `https://api.line.me/friendship/v1/status` to see if the user has added your bot as a friend or not.

To see the API reference for this resource, go to [Get friendship status](/reference/line-login/#get-friendship-status).

Note: This feature is not currently available to enterprise users. If you are an enterprise user and would like to use this feature, please contact your LINE representative.
