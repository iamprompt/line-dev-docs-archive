---
title: Batch Control Rich Menus Of Users
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/batch-control-rich-menus-of-users
__hash__: 1ITDbPAsjkvh8_RJ_7R4SsuD4hG0EP-dwCX-1TVZODE
seo:
  description: ''
---

### Replace or unlink the linked rich menus in batches

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/batch"}::reference-with-code
  :::reference-content
  You can use this endpoint to batch control the rich menu linked to the users using the endpoint such as [Link rich menu to user](#link-rich-menu-to-user). The following operations are available:

  1. Replace a rich menu with another rich menu for all users linked to a specific rich menu.
  2. Unlink a rich menu for all users linked to a specific rich menu.
  3. Unlink a rich menu for all users linked the rich menu.

  You can also specify multiple rich menu batch operations in the `operations` property of the [request body](#batch-control-rich-menus-of-users-request-body). If you specify multiple rich menu batch operations, each batch operation is processed independently and in parallel for each user. The batch operations you specify don't affect each other.

  For example, if you specify the following array for the `operations` property, the rich menu for users who were linked to rich menu A before the request will be replaced with B, and the rich menu for users who were linked to rich menu B before the request will be replaced with C. The rich menu for users who were linked to rich menu A before the request won't be replaced with C because batch operations don't affect each other.

  ```json
  [
    {
      "type": "link",
      "from": "{ID of rich menu A}",
      "to": "{ID of rich menu B}"
    },
    {
      "type": "link",
      "from": "{ID of rich menu B}",
      "to": "{ID of rich menu C}"
    }
  ]
  ```

  Batch operation of the rich menu is processed asynchronously in the background. You can check the status of the process by using the [Get the status of rich menu batch control](#get-batch-control-rich-menus-progress-status) endpoint.

  #### How to avoid unintended operations when retrying

  By using the `resumeRequestKey` property, you can safely retry.

  If you retry without using the `resumeRequestKey` property in the following cases, the rich menu may be replaced with an unintended one.

  - If you're not sure whether your request was accepted due to a timeout or an internal server error of the LINE Platform
  - If you [get rich menu batch operation progress status](#get-batch-control-rich-menus-progress-status) and the `phase` property of response is `failed`

  Even under these conditions, if you specify an arbitrary key in the `resumeRequestKey` property on your initial request, sending the request again with the same key will only resume processing for users who haven't completed processing.

  The `resumeRequestKey` property expires in 14 days (336 hours). If it has expired, the request will be treated as a new request.
  :::

  :::reference-code
  *Example of a request to replace a rich menu and unlink a rich menu*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "link",
            "from": "{rich menu ID before replacement}",
            "to": "{rich menu ID after replacement}"
          },
          {
            "type": "unlink",
            "from": "{rich menu ID to unlink}"
          }
        ],
        "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
      }'
      ```
      :::::
    ::::

  *Example of a request to unlink a linked rich menu from all users*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "unlinkAll"
          }
        ],
        "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

3 requests per hour

For more information on rate limits, see [Rate limits](#rate-limits).

::admonition{title="You can verify the request body in advance" type="tip"}
There is also the [Validate a request of rich menu batch control](#validate-batch-control-rich-menus-request) endpoint for validating the request body in advance.

By using the validation endpoint, you can verify in advance that your request will not result in an error without being subject to this endpoint's rate limit.
::

#### Request headers

::parameter-table
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
  operations

  #undefined
  Array of [Rich menu operation object](#batch-control-rich-menus-of-users-operations)

  Specifies batch operations for rich menus.  

  Max: 1,000 objects
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  resumeRequestKey

  #undefined
  String

  Key for retry. Key value is a string matching the regular expression pattern `[0-9a-zA-Z\-_]{1,100}`.
  :::
::

##### Rich menu operation object

Rich menu operation object represents the batch operation to the rich menu linked to the user.

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  Operation to the rich menu linked to the user. One of:

  - `link`: Replace the rich menu with the rich menu specified in the `to` property for all users linked to the rich menu specified in the `from` property.
  - `unlink`: Unlink the rich menu for all users linked to the rich menu specified in the `from` property.
  - `unlinkAll`: Unlink the rich menu from all users linked to the rich menu.

  If you specify `unlinkAll`, `type` other than `unlinkAll` can't be included in the `operations` property.
  :::

  :::parameter-table-entry{annotation="Required if type is link or unlink"}
  #undefined
  from

  #undefined
  String

  ID of a rich menu.

  Specify the ID of the rich menu before replacement or the ID of the rich menu to unlink.

  If you specify multiple operations in the `operations` property, you can't specify the ID of the same rich menu in multiple `from` properties.
  :::

  :::parameter-table-entry{annotation="Required if type is link"}
  #undefined
  to

  #undefined
  String

  ID of a rich menu.

  Specify the ID of the rich menu to be replaced.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns the `200` HTTP status code and an empty JSON object.

  Batch operation of the rich menu is processed asynchronously in the background. You can check the status of the process by using the [Get the status of rich menu batch control](#get-batch-control-rich-menus-progress-status) endpoint.
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                              |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't control the rich menu. Consider these reasons:- An invalid rich menu ID is specified. - The rich menu you want to replace has no image. - More than 1000 operations are specified in the `operations` property. - `unlinkAll` and other types are specified to the `type` property at the same time. - The ID of the same rich menu is specified in multiple `from` properties. |
  | `404` | A non-existent rich menu is specified.                                                                                                                                                                                                                                                                                                                                                   |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.

  The rich menu isn't linked to any user if an error response is returned.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid rich menu ID (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid richMenuId",
            "property": "operations[0].from"
          }
        ]
      }

      // If you specify the ID of the same rich menu in multiple from properties (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "from richmenu (richmenu-6fc298...) is duplicated",
            "property": "operations[].from"
          }
        ]
      }

      // If you specify unlinkAll and other types to the type property in the request at the same time (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "'unlinkAll' type can't be combined with other type",
            "property": "operations[].type"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
