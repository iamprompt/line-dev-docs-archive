---
title: Get Bot Info
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-bot-info
__hash__: XO4Xrxmx57BvR6vzHjGee2Rt5QIq_7r0A256DBhaEwY
seo:
  description: ''
---

### Get LINE Official Account (bot) info

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/info"}::reference-with-code
  :::reference-content
  Gets basic information on the LINE Official Account (bot).
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET \
      -H 'Authorization: Bearer {channel access token}' \
      https://api.line.me/v2/bot/info
      ```
      :::::
    ::::
  :::
::

#### Rate limit

2,000 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      User ID of the LINE Official Account (bot).
      :::::

      :::::parameter-table-entry
      #undefined
      basicId

      #undefined
      String

      Basic ID of the LINE Official Account (bot).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      premiumId

      #undefined
      String

      :glossary-tooltip[[Premium ID](/glossary/#premium-id)]{glossary-id="premium-id"} of the LINE Official Account (bot). Not included in the response if the premium ID isn't set.
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      Display name of the LINE Official Account (bot).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pictureUrl

      #undefined
      String

      Profile image URL. "https" image URL. Not included in the response if the LINE Official Account (bot) doesn't have a profile image.
      :::::

      :::::parameter-table-entry
      #undefined
      chatMode

      #undefined
      String

      Chat settings set in the [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}. One of:

      - `chat`: Chat is set to "On".
      - `bot`: Chat is set to "Off".
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadMode

      #undefined
      String

      Automatic read setting for messages. If the chat is set to "Off", `auto` is returned. If the chat is set to "On", `manual` is returned.

      - `auto`: Auto read setting is enabled.
      - `manual`: Auto read setting is disabled.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userId": "Ub9952f8...",
        "basicId": "@216ru...",
        "displayName": "Example name",
        "pictureUrl": "https://profile.line-scdn.net/0hbGgpkVAb...",
        "chatMode": "chat",
        "markAsReadMode": "manual"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
