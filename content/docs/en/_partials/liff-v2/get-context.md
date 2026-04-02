---
title: Get Context
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-context
__hash__: DPLUV_5OS9Kl9vq0_OaXPG2xKYCep3gAL2Nb-J4Oepk
seo:
  description: ''
---

### liff.getContext()

::reference-with-code
  :::reference-content
  Gets the screen type (1-on-1 chat, group chat, multi-person chat, or external browser) from which the LIFF app is launched.

    ::::admonition
    ---
    title: >-
      We've discontinued providing company internal identifiers of chat rooms to
      LIFF apps
    type: warning
    ---
    We've discontinued providing company internal identifiers of chat rooms (one-on-one chat ID, group ID, and room ID) to LIFF apps. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](/news/2023/02/06/liff-spec-change/).
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const context = liff.getContext();
      console.log(context);
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.getContext();
```

#### Arguments

None

#### Return value

::reference-with-code
  :::reference-content
  A data object that contains the information necessary to make various API calls.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      The type of screen from where the LIFF app was launched. One of:

      - `utou`: 1-on-1 chat.
      - `group`: Group chat.
      - `room`: Multi-person chat.
      - `external`: External browser.
      - `none`: A screen other than a 1-on-1 chat, group chat, multi-person chat, or external browser. For example, Wallet tab.

      This property is also returned for LIFF apps after transitioning between LIFF apps.
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      User ID. Included when the `type` property is `utou`, `room`, `group`, `none` or `external`. However, null may be returned when `type` is `external`.
      :::::

      :::::parameter-table-entry
      #undefined
      liffId

      #undefined
      String

      LIFF ID.
      :::::

      :::::parameter-table-entry
      #undefined
      viewType

      #undefined
      String

      Size of the LIFF app view, only returned if the `type` property isn't `external`. One of:

      - `compact`
      - `tall`
      - `full`

      For more information, see [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/).
      :::::

      :::::parameter-table-entry
      #undefined
      endpointUrl

      #undefined
      String

      URL of the service endpoint.
      :::::

      :::::parameter-table-entry
      #undefined
      accessTokenHash

      #undefined
      String

      First half of the hashed SHA256 value of the access token. Used to validate the access token.
      :::::

      :::::parameter-table-entry
      #undefined
      availability

      #undefined
      Object

      Returns the [`availability` object](#get-context-return-value-availability) that indicates whether the LIFF features are available in the environment in which the LIFF app was launched.
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      Array of strings

      Returns which of the scopes the LIFF app has within the scope required to use some of the LIFF SDK methods:

      - `openid`: Scope required to use [`liff.getIDToken()`](#get-id-token) and [`liff.getDecodedIDToken()`](#get-decoded-id-token)
      - `email`: Scope required to get the user's email address using [`liff.getIDToken()`](#get-id-token) or [`liff.getDecodedIDToken()`](#get-decoded-id-token)
      - `profile`: Scope required to use [`liff.getProfile()`](#get-profile) or [`liff.getFriendship()`](#get-friendship)
      - `chat_message.write`: Scope required to use [`liff.sendMessages()`](#send-messages)

      For more information about scope, see [Adding the LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.

        ::::::admonition
        ---
        title: Difference between liff.getContext() and liff.permission.getGrantedAll()
        type: tip
        ---
        The `liff.getContext()` method gets a list of scopes for the LIFF app (*).

        On the other hand, the [`liff.permission.getGrantedAll()`](#permission-get-granted-all) method gets a list of scopes for which the user has agreed to grant permission among the scopes for the LIFF app.

        * The scopes specified in the "Scope" section under the **LIFF** tab in a LINE Login channel
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      menuColorSetting

      #undefined
      Object

      Returns the color setting of the LIFF browser header as a [`menuColorSetting` object](#get-context-return-value-menucolorsetting).

      Note that we currently don't provide the ability to change the header color setting.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      miniAppId

      #undefined
      String

      Returns the string set by the Custom Path feature of the LINE MINI App. For more information about the Custom Path feature, see [Configuring Custom Path](/docs/line-mini-app/develop/custom-path/) in the LINE MINI App documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      miniDomainAllowed

      #undefined
      Boolean

      Returns whether the LINE MINI App is available on the `miniapp.line.me` domain.
      :::::

      :::::parameter-table-entry
      #undefined
      permanentLinkPattern

      #undefined
      String

      How additional information in LIFF URLs is handled. `concat` is returned.

      For more information, see [Opening a LIFF app](/docs/liff/opening-liff-app/) in the LIFF documentation.
      :::::

      :::::parameter-table-entry{annotation="Discontinued"}
      #undefined
      utouId

      #undefined
      String

      This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](/news/2023/02/06/liff-spec-change/).
      :::::

      :::::parameter-table-entry{annotation="Discontinued"}
      #undefined
      groupId

      #undefined
      String

      This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](/news/2023/02/06/liff-spec-change/).
      :::::

      :::::parameter-table-entry{annotation="Discontinued"}
      #undefined
      roomId

      #undefined
      String

      This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](/news/2023/02/06/liff-spec-change/).
      :::::
    ::::
  :::

  :::reference-code
  *Example (LIFF browser)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "utou",
        "utouId": "e2bff570-...",
        "userId": "U850014438e...",
        "liffId": "123456-abcedfg",
        "viewType": "full",
        "endpointUrl": "https://example.com/",
        "accessTokenHash": "EVWYWo1yYA...",
        "availability": {
          "shareTargetPicker": {
            "permission": true,
            "minVer": "10.3.0"
          },
          "multipleLiffTransition": {
            "permission": true,
            "minVer": "10.18.0"
          },
          "subwindowOpen": {
            "permission": true,
            "minVer": "11.7.0"
          },
          "scanCode": {
            "permission": false,
            "minVer": "9.4.0",
            "unsupportedFromVer": "9.19.0"
          },
          "scanCodeV2": {
            "permission": true,
            "minVer": "11.7.0",
            "minOsVer": "14.3.0"
          },
          "getAdvertisingId": {
            "permission": false,
            "minVer": "7.14.0"
          },
          "addToHomeScreen": {
            "permission": false,
            "minVer": "9.16.0"
          },
          "bluetoothLeFunction": {
            "permission": false,
            "minVer": "9.14.0",
            "unsupportedFromVer": "9.19.0"
          },
          "skipChannelVerificationScreen": {
            "permission": false,
            "minVer": "11.14.0"
          },
          "addToHomeV2": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeHideDomain": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeLineScheme": {
            "permission": false,
            "minVer": "13.20.0"
          }
        },
        "scope": [
          "chat_message.write",
          "openid",
          "profile"
        ],
        "menuColorSetting": {
          "adaptableColorSchemes": [
            "light"
          ],
          "lightModeColor": {
            "iconColor": "#111111",
            "statusBarColor": "black",
            "titleTextColor": "#111111",
            "titleSubtextColor": "#B7B7B7",
            "titleButtonColor": "#111111",
            "titleBackgroundColor": "#FFFFFF",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#FFFFFF"
          },
          "darkModeColor": {
            "iconColor": "#FFFFFF",
            "statusBarColor": "white",
            "titleTextColor": "#FFFFFF",
            "titleSubtextColor": "#949494",
            "titleButtonColor": "#FFFFFF",
            "titleBackgroundColor": "#111111",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#111111"
          }
        },
        "miniDomainAllowed": false,
        "permanentLinkPattern": "concat"
      }
      ```
      :::::
    ::::

  *Example (external browser)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "external",
        "liffId": "123456-abcedfg",
        "endpointUrl": "https://example.com/",
        "accessTokenHash": "EVWYWo1yYA...",
        "availability": {
          "shareTargetPicker": {
            "permission": true,
            "minVer": "10.3.0"
          },
          "multipleLiffTransition": {
            "permission": true,
            "minVer": "10.18.0"
          },
          "subwindowOpen": {
            "permission": true,
            "minVer": "11.7.0"
          },
          "scanCode": {
            "permission": true,
            "minVer": "9.4.0",
            "unsupportedFromVer": "9.19.0"
          },
          "scanCodeV2": {
            "permission": true,
            "minVer": "11.7.0",
            "minOsVer": "14.3.0"
          },
          "getAdvertisingId": {
            "permission": false,
            "minVer": "7.14.0"
          },
          "addToHomeScreen": {
            "permission": false,
            "minVer": "9.16.0"
          },
          "bluetoothLeFunction": {
            "permission": false,
            "minVer": "9.14.0",
            "unsupportedFromVer": "9.19.0"
          },
          "skipChannelVerificationScreen": {
            "permission": false,
            "minVer": "11.14.0"
          },
          "addToHomeV2": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeHideDomain": {
            "permission": false,
            "minVer": "13.20.0"
          },
          "addToHomeLineScheme": {
            "permission": false,
            "minVer": "13.20.0"
          }
        },
        "scope": [
          "chat_message.write",
          "openid",
          "profile"
        ],
        "menuColorSetting": {
          "adaptableColorSchemes": [
            "light"
          ],
          "lightModeColor": {
            "iconColor": "#111111",
            "statusBarColor": "black",
            "titleTextColor": "#111111",
            "titleSubtextColor": "#B7B7B7",
            "titleButtonColor": "#111111",
            "titleBackgroundColor": "#FFFFFF",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#FFFFFF"
          },
          "darkModeColor": {
            "iconColor": "#FFFFFF",
            "statusBarColor": "white",
            "titleTextColor": "#FFFFFF",
            "titleSubtextColor": "#949494",
            "titleButtonColor": "#FFFFFF",
            "titleBackgroundColor": "#111111",
            "progressBarColor": "#06C755",
            "progressBackgroundColor": "#111111"
          }
        },
        "miniDomainAllowed": false,
        "permanentLinkPattern": "concat"
      }
      ```
      :::::
    ::::
  :::
::

#### `availability` object

::reference-with-code
  :::reference-content
  The `availability` object contains the following properties:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      shareTargetPicker

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.shareTargetPicker()`](#share-target-picker) is available in the environment in which the LIFF app was launched.

      * To get information about the availability of `liff.shareTargetPicker()`, we highly recommend using [liff.isApiAvailable('shareTargetPicker')](#is-api-available) instead.
      :::::

      :::::parameter-table-entry
      #undefined
      multipleLiffTransition

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether it's possible to [transition to another LIFF app](/docs/liff/opening-liff-app/#move-liff-to-liff) with [`liff.openWindow()`](#open-window) without closing the LIFF app within the LIFF browser in the environment in which the LIFF app was launched.

      * To get information about the availability of a transition between multiple LIFF apps, we highly recommend using [liff.isApiAvailable('multipleLiffTransition')](#is-api-available) instead.
      :::::

      :::::parameter-table-entry
      #undefined
      subwindowOpen

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether the subwindow is available in the environment in which the LIFF app was launched.
      :::::

      :::::parameter-table-entry
      #undefined
      scanCode

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.scanCode()`](#scan-code) is available in the environment in which the LIFF app was launched.
      :::::

      :::::parameter-table-entry
      #undefined
      scanCodeV2

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.scanCodeV2()`](#scan-code-v2) is available in the environment in which the LIFF app was launched.
      :::::

      :::::parameter-table-entry
      #undefined
      getAdvertisingId

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether `liff.getAid()` is available in the environment in which the LIFF app was launched.

      Note that we currently don't provide `liff.getAid()`.
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeScreen

      #undefined
      String

      Returns the [object](#get-context-return-value-availability-common) that indicates whether `liff.addToHomeScreen()` is available in the environment in which the LIFF app was launched.

      Note that we currently don't provide `liff.addToHomeScreen()`.
      :::::

      :::::parameter-table-entry
      #undefined
      bluetoothLeFunction

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether Bluetooth® Low Energy for LINE Things is available in the environment in which the LIFF app was launched.

      Note that we currently don't provide this feature.
      :::::

      :::::parameter-table-entry
      #undefined
      skipChannelVerificationScreen

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether the "Channel consent simplification" feature is available in the environment in which the LIFF app was launched. For more information, see [Skipping the channel consent process](/docs/line-mini-app/develop/channel-consent-simplification/) in the LINE MINI App documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeV2

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.createShortcutOnHomeScreen()`](#create-shortcut-on-home-screen) is available in the environment in which the LIFF app was launched.

      * To get information about the availability of `liff.createShortcutOnHomeScreen()`, we highly recommend using [liff.isApiAvailable('createShortcutOnHomeScreen')](#is-api-available) instead.
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeHideDomain

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether the endpoint URL can be hidden when displaying a screen for adding a shortcut to the home screen of the user's device.

      Note that we currently don't provide this feature.
      :::::

      :::::parameter-table-entry
      #undefined
      addToHomeLineScheme

      #undefined
      Object

      Returns the [object](#get-context-return-value-availability-common) that indicates whether creating a shortcut specifying the [LINE URL scheme](/docs/line-login/using-line-url-scheme/) is available.

      Note that we currently don't provide this feature.
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "shareTargetPicker": {
          "permission": true,
          "minVer": "10.3.0"
        }
      }
      ```
      :::::
    ::::
  :::
::

#### Common properties of the `availability` object

::parameter-table
  :::parameter-table-entry
  #undefined
  permission

  #undefined
  Boolean

  Specifies whether the feature specified by the property name of the `availability` object is available in the environment in which the LIFF app was launched.

  - `true`: The feature is available.
  - `false`: The feature isn't available.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  minVer

  #undefined
  String

  The minimum LINE version that supports the corresponding feature.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  maxVer

  #undefined
  String

  The maximum LINE version that supports the corresponding feature.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  unsupportedFromVer

  #undefined
  String

  The LINE version for which the corresponding feature is no longer supported.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  minOsVer

  #undefined
  String

  The minimum OS version that supports the corresponding feature.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  maxOsVer

  #undefined
  String

  The maximum OS version that supports the corresponding feature.
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  unsupportedFromOsVer

  #undefined
  String

  The OS version for which the corresponding feature is no longer supported.
  :::
::

#### `menuColorSetting` object

::reference-with-code
  :::reference-content
  The `menuColorSetting` object contains the following properties:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      adaptableColorSchemes

      #undefined
      Array of strings

      Always returns `light`.
      :::::

      :::::parameter-table-entry
      #undefined
      lightModeColor

      #undefined
      Object

      Returns the header color setting as [object](#get-context-return-value-menucolorsetting-common) when `adaptableColorSchemes` is `light`.
      :::::

      :::::parameter-table-entry
      #undefined
      darkModeColor

      #undefined
      Object

      Returns the header color setting as [object](#get-context-return-value-menucolorsetting-common) when `adaptableColorSchemes` is `dark`.

      Note that we currently don't provide the header color setting.
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "adaptableColorSchemes": [
          "light"
        ],
        "lightModeColor": {
          "iconColor": "#111111",
          "statusBarColor": "black",
          "titleTextColor": "#111111",
          "titleSubtextColor": "#B7B7B7",
          "titleButtonColor": "#111111",
          "titleBackgroundColor": "#FFFFFF",
          "progressBarColor": "#06C755",
          "progressBackgroundColor": "#FFFFFF"
        },
        "darkModeColor": {
          "iconColor": "#FFFFFF",
          "statusBarColor": "white",
          "titleTextColor": "#FFFFFF",
          "titleSubtextColor": "#949494",
          "titleButtonColor": "#FFFFFF",
          "titleBackgroundColor": "#111111",
          "progressBarColor": "#06C755",
          "progressBackgroundColor": "#111111"
        }
      }
      ```
      :::::
    ::::
  :::
::

#### Common properties of the `menuColorSetting` object

::parameter-table
  :::parameter-table-entry
  #undefined
  iconColor

  #undefined
  String

  The color of the header icon. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  statusBarColor

  #undefined
  String

  Always returns `white`.
  :::

  :::parameter-table-entry
  #undefined
  titleTextColor

  #undefined
  String

  The color of the header title text. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  titleSubtextColor

  #undefined
  String

  The color of the header subtitle text. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  titleButtonColor

  #undefined
  String

  The color of the header button. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  titleBackgroundColor

  #undefined
  String

  The header background color. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  progressBarColor

  #undefined
  String

  The color of the header progress bar. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::

  :::parameter-table-entry
  #undefined
  progressBackgroundColor

  #undefined
  String

  The background color of the header progress bar. The color is represented by a hexadecimal color code in the `#RRGGBB` format.
  :::
::
