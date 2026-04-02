---
title: Send Mission Sticker
navigation: true
description: ''
meta: '{}'
path: /en/_partials/partner-docs/send-mission-sticker
__hash__: FbqnFZeF4FgWTqPPb-NfOxpkuG7ks8wp6LuXg0GC8to
seo:
  description: ''
---

## Mission stickers API

Mission stickers are provided to users upon completion of certain objectives. Using stickers as an incentive, users are encouraged to "link ID information," "register as a member," or "answer a questionnaire."

### Provide mission stickers to the users

::reference-with-code
  :::reference-content
  Grants permission for users who have completed a certain objective to download your mission sticker.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/shop/v3/mission \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer {channel access token}" \
      -d '{
          "to": "U4af4980629...",
          "productType": "STICKER",
          "productId": "0000",
          "sendPresentMessage": false
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/shop/v3/mission`

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
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  User ID of a user to grant download permission
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productType

  #undefined
  String

  `STICKER`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  Package ID for a set of stickers
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  sendPresentMessage

  #undefined
  Boolean

  `false`
  :::
::

#### Response

Returns status code `200` and an empty response body.

#### Error response

::reference-with-code
  :::reference-content
  An HTTP status code corresponding to the error and this JSON data are returned in the response body when an error occurs.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      Message containing error information. For more information, see [Error messages](#send-mission-stickers-v3-error-messages).
      :::::
    ::::
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID (400 Bad Request)
      {
        "message": "invalid request"
      }
      ```
      :::::
    ::::
  :::
::

##### Error messages

The HTTP status code for the main errors and the error message that is found in the `message` property of the JSON data are as follows:

| Code  | Message                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `400` | invalid request                       | The destination user ID specified for `to` is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `400` | illegal argument                      | The sticker set specified for `productId` isn't set as a mission sticker.                                                                                                                                                                                                                                                                                                                                                                                               |
| `400` | not in sales period                   | The sticker set specified for `productId` is out of validity period.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `400` | sticker set not available for channel | The channel doesn't have the permission to use the sticker set specified for `productId`.                                                                                                                                                                                                                                                                                                                                                                               |
| `400` | not available                         | Unable to grant the sticker for one of the following reasons: - The sticker set specified for `productId` isn't available for purchase in the country or region of the destination user specified for `to`. - The device of the destination user specified for `to` doesn't support the sticker set specified for `productId`. - The version of the LINE app used by the destination user specified for `to` doesn't support the sticker set specified for `productId`. |
| `403` | not allowed to use the API            | The channel isn't granted the required permission for the mission sticker API.                                                                                                                                                                                                                                                                                                                                                                                          |
| `404` | not found                             | The sticker set specified for `productId` doesn't exist.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `500` | internal error                        | An internal server error occurred. Wait a while and try again later.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `502` | upstream error                        | An internal network error occurred. Wait a while and try again later.                                                                                                                                                                                                                                                                                                                                                                                                   |
