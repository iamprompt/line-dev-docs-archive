---
title: Put Liff App
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-server/put-liff-app
__hash__: vTPGvnQMlzM-_JgASJnuQtmSW_mFDsOW40MZG6Iz1TQ
seo:
  description: ''
---

### Update LIFF app settings

::reference-with-code
  :::reference-content
  Partially updates LIFF app settings.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X PUT https://api.line.me/liff/v1/apps/{liffId} \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
          "view": {
              "url": "https://new.example.com"
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`PUT https://api.line.me/liff/v1/apps/{liffId}`

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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffId

  ID of the LIFF app to be updated
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{optional=""}
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

  :::parameter-table-entry{optional=""}
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

  `true` to use the 2D code reader in the LIFF app. `false` otherwise.
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

  For more information on each scope, see [Adding the LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.
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
  :::
::

::admonition{title="Note" type="note"}
Only the properties specified in the request body are updated.
::

#### Response

Status code `200` is returned.

#### Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400         | The request contains an invalid value.                                                                                                           |
| 401         | Authentication failed.                                                                                                                           |
| 404         | This status code means one of the following:- The specified LIFF app does not exist. - The specified LIFF app has been added to another channel. |
