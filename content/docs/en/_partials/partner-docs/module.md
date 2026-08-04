---
title: Module
navigation: true
description: ''
meta: '{}'
path: /en/_partials/partner-docs/module
__hash__: pD4g96A5h0XU4RD_O8ISn-dk0jA0UkUKEFOoDFnuiGs
seo:
  description: ''
---

## Module

### Attach by operation of the module channel provider

::reference-with-code
  :::reference-content
  Attach the module channel to the LINE Official Account. In order to attach, you most request authorization from the admin of the LINE Official Account and obtain an authorization code. For more information about the module authorization flow, see [Attach Module Channel](/docs/partner-docs/module-technical-attach-channel/) in the module documentation.

  When using this API, you need to specify the channel ID and channel secret of the module channel using either the `Authorization` header or the request body.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://manager.line.biz/module/auth/v1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=1234567890abcde' \
      --data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
      -d 'code_verifier=ayjtZgTunh96nHCvgLEiXzqVQOOC0SwMRs39bh1l5dx' \
      -d 'client_id=1234567890' \
      -d 'client_secret=1234567890abcdefghij1234567890ab' \
      -d 'region=JP' \
      -d 'basic_search_id=@linedevelopers' \
      -d 'scope=message%3Asend%20message%3Areceive' \
      -d 'brand_type=premium'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://manager.line.biz/module/auth/v1/token`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/x-www-form-urlencoded`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  Authorization

  `Basic {base64({Channel ID}:{Channel Secret})}`

  For `{base64({Channel ID}:{Channel Secret})}`, specify a Base64-encoded string by concatenating "Module Channel ID" and "Module Channel Secret" with `:`. You can find the module channel's channel ID and channel secret in the [LINE Developers Console](/console/).

  Instead of using `client_id` and `client_secret` in request body, you can use this header to specify the channel ID and the channel secret of the module channel.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  grant_type

  #undefined
  String

  `authorization_code`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  code

  #undefined
  String

  [Authorization code](/docs/partner-docs/module-technical-attach-channel/#receive-authorization-code) received from the LINE Platform.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  Specify the `redirect_uri` specified in [the URL for authentication and authorization](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  code_verifier

  #undefined
  String

  Specify when using PKCE (Proof Key for Code Exchange) defined in the OAuth 2.0 extension specification as a countermeasure against authorization code interception attacks.

  Compliant with [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636){rel="[\"nofollow\"]"}.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  client_id

  #undefined
  String

  Instead of using `Authorization` header, you can use this parameter to specify the channel ID of the module channel. You can find the channel ID of the module channel in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  client_secret

  #undefined
  String

  Instead of using `Authorization` header, you can use this parameter to specify the channel secret of the module channel. You can find the channel secret of the module channel in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  region

  #undefined
  String

  If you specified a value for `region` in [the URL for authentication and authorization](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters), specify the same value.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  basic_search_id

  #undefined
  String

  If you specified a value for `basic_search_id` in the URL for authentication and authorization, specify the same value.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  scope

  #undefined
  String

  If you specified a value for `scope` in the URL for authentication and authorization, specify the same value.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  brand_type

  #undefined
  String

  If you specified a value for `brand_type` in the URL for authentication and authorization, specify the same value.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a JSON object with status code `200` and this information on success.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      bot_id

      #undefined
      String

      User ID of the bot on the LINE Official Account.

      The bot's user ID is used when calling the [Messaging API](/reference/messaging-api/) or the [Acquire Control API](/reference/partner-docs/#acquire-control-api).

        ::::::admonition{title="Note" type="note"}
        The bot's user ID isn't the **Your user ID** displayed on the **Basic Settings** tab of the [LINE Developers Console](/console/) for the Messaging API channel.
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      Permissions (scope) granted by the LINE Official Account admin.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "bot_id": "U45c5c51f0050ef0f0ee7261d57fd3c56",
        "scopes": [
          "message:send",
          "message:receive"
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

Returns the following HTTP status code:

- `400 Bad Request`
- `403 Forbidden`

### Unlink (detach) the module channel by the operation of the module channel administrator

::reference-with-code
  :::reference-content
  The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/channel/detach \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{"botId":"U45c5c51f0050ef0f0ee7261d57fd3c56"}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/bot/channel/detach`

#### Rate limit

2,000 requests per second

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  For `{channel access token}`, specify the channel access token of your module channel.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  botId

  #undefined
  String

  The user ID of the LINE Official Account bot attached to the module channel.

  You can get the user ID of the bot from the response of the [Attach by operation of the module channel provider](#link-attach-by-operation-module-channel-provider) or the [Attached event](#attached-event).
  :::
::

#### Response

Returns a `200` status code on success.

#### Error Response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                                                                                    |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't unlink (detach) the module channel. Consider these reasons:- An invalid user ID of the LINE Official Account bot is specified. - A non-existent LINE Official Account bot is specified. - The module channel isn't linked (attached). - A channel access token is specified for a non-module channel. |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID of the LINE Official Account bot (400 Bad Request)
      {
        "message": "user/group/room Id is not available."
      }

      // If the module channel isn't linked (attached) (400 Bad Request)
      {
        "message": "Specified channel is not detachable"
      }
      ```
      :::::
    ::::
  :::
::

### Acquire Control API

::reference-with-code
  :::reference-content
  If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API.

  The channel that was previously an Active Channel will automatically switch to a Standby Channel.

    ::::admonition{title="Warning" type="warning"}
    It isn't necessary to call this API in the currently provided module structure. So, the implementation of this API is optional.

    This API is currently used only when the chat initiative switches due to unexpected problems.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Header specifying the bot user ID:xxxxxx' \
      -d '{"expired":true,"ttl":3600}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire`

#### Rate limit

2,000 requests per second

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  For `{channel access token}`, specify the channel access token of your module channel.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Header specifying the bot's user ID

  The user ID of the LINE Official Account bot attached to the module channel.

  You can get the user ID of the bot from the response of the [Attach by operation of the module channel provider](#link-attach-by-operation-module-channel-provider) or the [Attached event](#attached-event).

    ::::admonition
    ---
    title: The specific header will be provided when after participation
    type: note
    ---
    The name (parameter name) of this header is open only to customers who participate in the [LINE Marketplace](https://line-marketplace.com/jp/inquiry){rel="[\"nofollow\"]"} (only available in Japanese).
    ::::
  :::
::

#### Path parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  chatId

  The `userId`, `roomId`, or `groupId`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  expired

  #undefined
  Boolean

  - `True`: After the time limit (ttl) has passed, the initiative (Chat Control) will return to the Primary Channel. (Default)
  - `False`: There's no time limit and the initiative (Chat Control) doesn't change over time.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  ttl

  #undefined
  Number

  The time it takes for initiative (Chat Control) to return to the Primary Channel (the time that the module channel stays on the Active Channel). The value is specified in seconds. The maximum value is one year (3600 * 24 * 365). The default value is `3600` (1 hour).

  * Ignored if the value of `expired` is `false`.
  :::
::

#### Response

Returns a 200 status code on success.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                    |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid ID is specified in the `chatId` parameter.                                                                                                                                                                                                                                                                                                                                          |
  | `404` | Couldn't take the initiative (Chat Control). Consider these reasons:- A user is specified who hasn't added the LINE Official Account attached to the module as a friend. - A group is specified that the LINE Official Account attached to the module doesn't participate in. - A multi-person chat is specified that the LINE Official Account attached to the module doesn't participate in. |
  | `423` | Another channel has acquired the initiative (Chat Control) within a certain period of time (a few seconds or so).                                                                                                                                                                                                                                                                              |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specfy an invalid ID is specified in the chatId parameter (400 Bad Request)
      {
        "message": "The value for the 'chatId' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::

### Release Control API

::reference-with-code
  :::reference-content
  To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API.

    ::::admonition{title="Warning" type="warning"}
    It isn't necessary to call this API in the currently provided module structure. So, the implementation of this API is optional.

    This API is currently used only when the chat initiative switches due to unexpected problems.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/release \
      -H 'Content-Type:application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Header specifying the bot user ID:xxxxxx'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/bot/chat/{chatId}/control/release`

#### Rate limit

2,000 requests per second

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  For `{channel access token}`, specify the channel access token of your module channel.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Header specifying the bot's user ID

  The user ID of the LINE Official Account bot attached to the module channel.

  You can get the user ID of the bot from the response of the [Attach by operation of the module channel provider](#link-attach-by-operation-module-channel-provider) or the [Attached event](#attached-event).

    ::::admonition
    ---
    title: The specific header will be provided when after participation
    type: note
    ---
    The name (parameter name) of this header is open only to customers who participate in the [LINE Marketplace](https://line-marketplace.com/jp/inquiry){rel="[\"nofollow\"]"} (only available in Japanese).
    ::::
  :::
::

#### Path parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  chatId

  The `userId`, `roomId`, or `groupId`
  :::
::

#### Response

Returns a `200` status code on success.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                           |
  | ----- | ----------------------------------------------------- |
  | `400` | An invalid ID is specified in the `chatId` parameter. |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specfy an invalid ID is specified in the chatId parameter (400 Bad Request)
      {
        "message": "The value for the 'chatId' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::

### Module channel-specific webhook events

#### Attached event

::reference-with-code
  :::reference-content
  This event indicates that the module channel has been attached to the LINE Official Account. Sent to the webhook URL server of the module channel.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `module`
      :::::

      :::::parameter-table-entry
      #undefined
      module.type

      #undefined
      String

      `attached`
      :::::

      :::::parameter-table-entry
      #undefined
      module.botId

      #undefined
      String

      User ID of the bot on the attached LINE Official Account
      :::::

      :::::parameter-table-entry
      #undefined
      module.scopes

      #undefined
      Array of strings

      An array of strings indicating the scope permitted by the admin of the LINE Official Account.
      :::::
    ::::
  :::

  :::reference-code
  *Example Attached event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U53387d54817...",
        "events": [
          {
            "type": "module",
            "module": {
              "type": "attached",
              "botId": "U53387d54817...",
              "scopes": [
                "message:send",
                "message:receive"
              ]
            },
            "webhookEventId": "01G3GCEEXNWREGSSFVTPYH8465",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653038594997,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Detached event

::reference-with-code
  :::reference-content
  This event indicates that the module channel has been detached from the LINE Official Account. Sent to the webhook URL server of the module channel.

    ::::admonition
    ---
    title: Detach isn't done when you delete the LINE Official Account
    type: note
    ---
    The module channel won't be detached when the LINE Official Account Manager is used to delete the LINE Official Account.

    After three months have passed since the operation to delete the account, and all information including the LINE Official Account's analysis data has been completely deleted, the account will automatically be detached.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `module`
      :::::

      :::::parameter-table-entry
      #undefined
      module.type

      #undefined
      String

      `detached`
      :::::

      :::::parameter-table-entry
      #undefined
      module.botId

      #undefined
      String

      Detached LINE Official Account bot user ID
      :::::

      :::::parameter-table-entry
      #undefined
      module.reason

      #undefined
      String

      Reason for detaching

      `bot_deleted`: All information, including analysis data for the LINE Official Account, has been completely deleted.
      :::::
    ::::
  :::

  :::reference-code
  *Example Detached event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "module",
            "module": {
              "type": "detached",
              "botId": "U5fac33f633e72c192759f09afc41fa28"
            },
            "webhookEventId": "01G4CPSV08QGNT1DWFC4DSWDNP",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653988977672,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Activated event

::reference-with-code
  :::reference-content
  This event indicates that the module channel has been switched to Active Channel by calling the Acquire Control API. Sent to the webhook URL server of the module channel.

    ::::admonition{title="Note" type="note"}
    The activated event won't be sent if the validity period specified in the Acquire Control API has expired and the initiative (Chat Control) has been switched.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `activated`
      :::::

      :::::parameter-table-entry
      #undefined
      chatControl.expireAt

      #undefined
      Number

      The time limit for maintaining "active."
      :::::
    ::::
  :::

  :::reference-code
  *Example Activated event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "activated",
            "chatControl": {
              "expireAt": 1653994422933
            },
            "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653990823058,
            "source": {
              "type": "user",
              "userId": "LUb577ef3cbe..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Deactivated event

::reference-with-code
  :::reference-content
  This event indicates that the module channel has been switched to Standby Channel by calling Acquire Control API or Release Control API. Sent to the webhook URL server of the module channel.

    ::::admonition{title="Note" type="note"}
    The deactivated event won't be sent if the validity period specified in the Acquire Control API has expired and the initiative (Chat Control) has been switched.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `deactivated`
      :::::
    ::::
  :::

  :::reference-code
  *Example Deactivated event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "deactivated",
            "webhookEventId": "01G4CRJ51100K1D1791KC9J4G4",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653990822945,
            "source": {
              "type": "user",
              "userId": "LUb577ef3cbe..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### botSuspend event

::reference-with-code
  :::reference-content
  This event indicates that the LINE Official Account has been suspended (Suspend). Sent to the webhook URL server of the module channel.

  When you receive this event, it's recommended that you do the following:

  - Display a message such as "This admin screen can't be used because the LINE Official Account is unavailable" on the module channel admin screen, and stop using the admin screen.
  - Even if it goes into the paused state, it may return from the paused state (it may receive a botResume event). It is recommended that all information be kept.

    ::::admonition{title="Note" type="note"}
    The botSuspend event isn't sent to the Primary Channel.

    If you receive the Detached event after receiving the botSuspend event, it means that the LINE Official Account has stopped using the module channel and canceled the contract.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `botSuspended`
      :::::
    ::::
  :::

  :::reference-code
  *Example botSuspend event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U53387d548170020e6cedef5f41d1e01d",
        "events": [
          {
            "type": "botSuspended",
            "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1616390574119,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### botResumed event

::reference-with-code
  :::reference-content
  This event indicates that the LINE Official Account has returned from the suspended state. Sent to the webhook URL server of the module channel.

  When you receive this event, it's recommended that you hide the message "This admin page is unavailable due to the LINE Official Account being unavailable" from the module channel admin page and resume using the admin page.

    ::::admonition{title="Note" type="note"}
    The botResumed event isn't sent to the Primary Channel.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, etc.

      See [Common properties](/reference/messaging-api/#common-properties).

      However, `mode` is fixed to `active`.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `botResumed`
      :::::
    ::::
  :::

  :::reference-code
  *Example botResumed event*

    ::::code-tabs
      :::::tab{lang="json"}
      ```sh
      {
        "destination": "U5fac33f633e72c192759f09afc41fa28",
        "events": [
          {
            "type": "botResumed",
            "webhookEventId": "01G4CS8T91R1V1JCE0G43DQND8",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1653991565601,
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

### Get a list of bots to which the module is attached

::reference-with-code
  :::reference-content
  Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET "https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}" \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}`

#### Rate limit

2,000 requests per second

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  `Bearer {channel access token}`

  For `{channel access token}`, specify the channel access token of your module channel.
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  Specify the maximum number of bots that you get basic information from. The default value is `100`.  

  Max value: `100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  Value of the continuation token found in the `next` property of the JSON object returned in the response. If you can't get all basic information about the bots in one request, include this parameter to get the remaining array.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a JSON object with status code `200` and this information on success.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      bots

      #undefined
      Array

      Array of Bot list Item objects representing basic information about the bot.
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].userId

      #undefined
      String

      Bot's user ID
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].basicId

      #undefined
      String

      Bot's basic ID
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      bots[].premiumId

      #undefined
      String

      Bot's :glossary-tooltip[[premium ID](/glossary/#premium-id)]{glossary-id="premium-id"}. Not included in the response if the premium ID isn't set.
      :::::

      :::::parameter-table-entry
      #undefined
      bots[].displayName

      #undefined
      String

      Bot's display name
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      bots[].pictureUrl

      #undefined
      String

      Profile image URL. Image URL starting with "https://". Not included in the response if the bot doesn't have a profile image.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      Continuation token. Used to get the next array of basic bot information. This property is only returned if there are more unreturned results.

      The continuation token expires in 24 hours (86,400 seconds).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "bots": [
          {
            "userId": "Uf2dd6e8b081d2ff9c05c98a8a8b269c9",
            "basicId": "@628...",
            "displayName": "Test01",
            "pictureUrl": "https://profile.line-scdn.net/0hyxytJNAlJldEDQzlatVZAHhIKDoz..."
          },
          {
            "userId": "Ua831d37bfe8232808202b85127663f70",
            "basicId": "@076lu...",
            "displayName": "Test02",
            "pictureUrl": "https://profile.line-scdn.net/0hohnizdyzMEdTECbnVo9PEG9VPiok..."
          },
          {
            "userId": "Ub77ea431fba86f7c159a0c0f5be43d9f",
            "basicId": "@290n...",
            "displayName": "Test03"
          },
          {
            "userId": "Ub8ec80a14e879e9c6833fb4cee0e632b",
            "basicId": "@793j...",
            "displayName": "Test04"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                 |
  | ----- | ------------------------------------------- |
  | `400` | An invalid continuation token is specified. |

  For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid continuation token, such as expired (400 Bad Request)
      {
        "message": "Invalid start param"
      }
      ```
      :::::
    ::::
  :::
::
