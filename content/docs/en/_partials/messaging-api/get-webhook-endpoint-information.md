---
title: Get Webhook Endpoint Information
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-webhook-endpoint-information
__hash__: yEdXu9WqqSRbMd3DvYHFDM7_BWc7vZu0SnQiHspPAhw
seo:
  description: ''
---

### Get webhook endpoint information

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/channel/webhook/endpoint"}::reference-with-code
  :::reference-content
  Gets information on a webhook endpoint.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      https://api.line.me/v2/bot/channel/webhook/endpoint
      ```
      :::::
    ::::
  :::
::

#### Rate limit

1,000 requests per minute

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      endpoint

      #undefined
      String

      Webhook URL
      :::::

      :::::parameter-table-entry
      #undefined
      active

      #undefined
      Boolean

      Webhook usage status. Send a webhook event from the LINE Platform to the webhook URL only if enabled.

      - `true`: Webhook usage is enabled.
      - `false`: Webhook usage is disabled.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the webhook URL was set and the webhook usage is enabled
      {
        "endpoint": "https://example.com/test",
        "active": true
      }

      // If the webhook URL was set and the webhook usage is disabled
      {
        "endpoint": "https://example.com/test",
        "active": false
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

  | Code  | Description                               |
  | ----- | ----------------------------------------- |
  | `404` | The webhook URL isn't set to the channel. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the webhook URL isn't set (404 Not Found)
      {
        "message": "Webhook endpoint not found"
      }
      ```
      :::::
    ::::
  :::
::
