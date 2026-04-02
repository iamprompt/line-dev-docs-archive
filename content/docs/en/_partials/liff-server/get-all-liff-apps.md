---
title: Get All Liff Apps
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-server/get-all-liff-apps
__hash__: A8zSnuE9-7gQgKCIOS9-dads66yZr14vivGfMJKD-YQ
seo:
  description: ''
---

### Get all LIFF apps

::reference-with-code
  :::reference-content
  Gets information on all the LIFF apps added to the channel.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET https://api.line.me/liff/v1/apps \
      -H "Authorization: Bearer {channel access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/liff/v1/apps`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Preparing a channel access token](#preparing-channel-access-token).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      apps

      #undefined
      Array of objects

      Array of LIFF app objects
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].liffId

      #undefined
      String

      LIFF app ID
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.type

      #undefined
      String

      Size of the LIFF app view. One of these values:

      - `compact`
      - `tall`
      - `full`

      For more information, see [Size of the LIFF app view](/docs/liff/overview/#screen-size).
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.url

      #undefined
      String

      Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. `https://example.com`). Used when the LIFF app is launched using the LIFF URL.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.moduleMode

      #undefined
      Boolean

      `true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].description

      #undefined
      String

      Name of the LIFF app
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].features.ble

      #undefined
      Boolean

      `true` if the LIFF app supports Bluetooth® Low Energy for LINE Things. `false` otherwise.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].features.qrCode

      #undefined
      Boolean

      `true` if the 2D code reader can be launched in the LIFF app. `false` otherwise.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].permanentLinkPattern

      #undefined
      String

      How additional information in LIFF URLs is handled. `concat` is returned.

      For more information, see [Opening a LIFF app](/docs/liff/opening-liff-app/) in the LIFF documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].scope

      #undefined
      Array of strings

      Scopes of the LIFF app.

      - `openid`
      - `email`
      - `profile`
      - `chat_message.write`

      For more information on each scope, see [Adding the LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].botPrompt

      #undefined
      String

      The setting for [add friend option](/docs/line-login/link-a-bot/).

      - `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
      - `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
      - `none`: Don't display the option to add the LINE Official Account as a friend.
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "apps": [
          {
            "liffId": "{liffId}",
            "view": {
              "type": "full",
              "url": "https://example.com/myservice"
            },
            "description": "Happy New York",
            "permanentLinkPattern": "concat"
          },
          {
            "liffId": "{liffId}",
            "view": {
              "type": "tall",
              "url": "https://example.com/myservice2"
            },
            "features": {
              "ble": true,
              "qrCode": true
            },
            "permanentLinkPattern": "concat",
            "scope": ["profile", "chat_message.write"],
            "botPrompt": "none"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

One of the following status codes is returned.

| Status code | Description                          |
| ----------- | ------------------------------------ |
| 401         | Authentication failed.               |
| 404         | There is no LIFF app on the channel. |
