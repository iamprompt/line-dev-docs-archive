---
title: Add Liff App
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-server/add-liff-app
__hash__: azy4HLgbWooMuwKI1IYQDkHXRdPzwgqdhORDhPsl4lU
seo:
  description: ''
---

### Adding the LIFF app to a channel

::reference-with-code
  :::reference-content
  Adds the LIFF app to a channel. You can add up to 30 LIFF apps on one channel.

    ::::admonition
    ---
    title: We recommend creating a LIFF app as a LINE MINI App
    type: tip
    ---
    In the future, LIFF and the LINE MINI App will be integrated into a single brand. As a result of this integration, LIFF will be integrated into the LINE MINI App. For this reason, we recommend that you create a new LIFF app as a LINE MINI App. For more information, see the news from [February 12, 2025](/news/2025/02/12/line-mini-app/).
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/liff/v1/apps \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
          "view": {
              "type": "full",
              "url": "https://example.com/myservice"
          },
          "description": "Service Example",
          "features": {
              "qrCode": true
          },
          "permanentLinkPattern": "concat",
          "scope": ["profile", "chat_message.write"],
          "botPrompt": "none"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/liff/v1/apps`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Preparing a channel access token](#preparing-channel-access-token).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  view.type

  #undefined
  String

  Size of the LIFF app view. Specify one of these values:

  - `compact`
  - `tall`
  - `full`

  For more information, see [Size of the LIFF app view](/docs/liff/overview/#screen-size).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  view.url

  #undefined
  String

  Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. `https://example.com`). Used when the LIFF app is launched using the LIFF URL.

  The URL scheme must be **https**. URL fragments (#URL-fragment) can't be specified.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  view.moduleMode

  #undefined
  Boolean

  `true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  #undefined
  String

  Name of the LIFF app.

  The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  features.qrCode

  #undefined
  Boolean

  `true` to use the 2D code reader in the LIFF app. `false` otherwise. The default value is `false`.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  permanentLinkPattern

  #undefined
  String

  How additional information in LIFF URLs is handled. Specify `concat`.

  For more information, see [Opening a LIFF app](/docs/liff/opening-liff-app/) in the LIFF documentation.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  scope

  #undefined
  Array of strings

  Array of scopes required for some LIFF SDK methods to function.

  - `openid`
  - `email`
  - `profile`
  - `chat_message.write`

  The default value is `["profile", "chat_message.write"]`. For more information on each scope, see [Adding the LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  botPrompt

  #undefined
  String

  Specify the setting for [add friend option](/docs/line-login/link-a-bot/) with one of the following values:

  - `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
  - `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
  - `none`: Don't display the option to add the LINE Official Account as a friend.

  The default value is `none`.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      liffId

      #undefined
      String

      LIFF app ID
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "liffId": "{liffId}"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400         | This status code means one of the following:- The request contains an invalid value. - The maximum number of LIFF apps that can be added to the channel has been reached. |
| 401         | Authentication failed.                                                                                                                                                    |
