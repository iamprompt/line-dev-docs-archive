---
title: Send Service Message
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/send-service-message
__hash__: PtaRoQDWwn_09-TYgnXM2jH7ngBnAOl10jyuBG-pVkw
seo:
  description: ''
---

### Sending service messages

::reference-with-code
  :::reference-content
  Sends a service message to a user specified in the service notification token.

  Once a service message is sent, the token's value is renewed unless the token expired or no longer has remaining message counts. If you are planning to send successive service messages to a user, keep the renewed service notification token.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/message/v3/notifier/send?target=service \
      -H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
      -H 'Content-Type: application/json' \
      -d '{
          "templateName": "thankyou_msg_en",
          "params": {
              "date": "2020-04-23",
              "username": "Brown & Cony"
          },
          "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9.."
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/message/v3/notifier/send`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Channel access token](/docs/basics/channel-access-token/) in the LINE Platform basics.
  :::
::

::admonition
---
title: Use of stateless channel access tokens is recommended
type: note
---
[Long-lived channel access tokens](/docs/basics/channel-access-token/#long-lived-channel-access-token) and [channel access token with a user-specified expiration (Channel Access Token v2.1)](/docs/basics/channel-access-token/#user-specified-expiration) cannot be used for LINE MINI App channels.

When developing LINE MINI Apps, either [stateless channel access tokens](/docs/basics/channel-access-token/#stateless-channel-access-token) or [short-lived channel access tokens](/docs/basics/channel-access-token/#short-lived-channel-access-token) can be used. Stateless channel access tokens are recommended among those two. Stateless channel access tokens have an unlimited number of issuances, so there is no need for the application to manage the token lifecycle.
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  target

  `service`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  templateName

  #undefined
  String

  The name of the template that was added and will be used for the service message. You can check the template name in the LINE Developers Console. For more information, see [Types of service messages that can be sent](/docs/line-mini-app/develop/service-messages/#types-of-service-messages-that-can-be-sent).  

  Use with a BCP 47 language tag suffix.  

  Format: `{template name}_{BCP 47 language tag}`  

  Max character limit: 30

    ::::admonition{title="Note" type="note"}
    The languages and language tags supported by the service message are as follows.

    - Japanese: `ja`
    - English: `en`
    - Chinese (Traditional): `zh-TW`
    - Thai: `th`
    - Indonesian: `id`
    - Korean: `ko`
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params

  #undefined
  object

  JSON Object to specify each template variable-value pair.   

  If the template has no template variable, specify an empty JSON object (`{ }`).   

  The template variables are defined for each template. If a template variable is part of the required elements, be sure to specify a template variable-value pair.   

  For more information, see [Adding service message templates to the channel](/docs/line-mini-app/develop/service-messages/#service-message-templates).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  notificationToken

  #undefined
  String

  Service notification token
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      notificationToken

      #undefined
      String

      A renewed service notification token. Use this service notification token to send successive service messages.
      :::::

      :::::parameter-table-entry
      #undefined
      expiresIn

      #undefined
      Number

      The remaining amount of time in seconds until renewed service notification token expires
      :::::

      :::::parameter-table-entry
      #undefined
      remainingCount

      #undefined
      Number

      The number of times you can send successive service messages with the renewed service notification token.
      :::::

      :::::parameter-table-entry
      #undefined
      sessionId

      #undefined
      String

      The session ID. For more information, see [Sending service messages](/docs/line-mini-app/develop/service-messages/).
      :::::
    ::::

    ::::admonition{title="Note" type="note"}
    If the values of `expiresIn` and `remainingCount` are `0`, it means that the service message was sent, but the service notification token couldn't be renewed.
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Request was successful,
      // renewed service notification
      // token issued
      {
        "notificationToken": "c9884874-bf6a-4241-8999-2767241c...",
        "expiresIn": 31535906,
        "remainingCount": 3,
        "sessionId": "xD06...."
      }

      // Request was successful,
      // the service message
      // was sent, but the LINE Platform
      // cannot renew the token
      {
        "expiresIn": 0,
        "remainingCount": 0
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns one of the following status codes and error messages.

  | Status code      | Description                                                                                                                                                            |
  | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 400 Bad request  | This status code means one of the following: - There is a problem with the request body. - The target recipient of the service message doesn't exist.                  |
  | 401 Unauthorized | This status code means one or both of the following: - A valid channel access token hasn't been specified. - A valid service notification token hasn't been specified. |
  | 403 Forbidden    | This status code means one of the following: - This channel is not authorized to send service messages. - The specified template cannot be found.                      |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "Invalid notifier token"
      }
      ```
      :::::
    ::::
  :::
::
