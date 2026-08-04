---
title: Set Webhook Endpoint Url
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/set-webhook-endpoint-url
__hash__: iTnw1ig-HiVGZ-DgvLFU-OQEP6iPVXRtv-GI9Z66ci8
seo:
  description: ''
---

### Set webhook endpoint URL

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/channel/webhook/endpoint"}::reference-with-code
  :::reference-content
  Sets the webhook endpoint URL. It may take up to 1 minute for changes to take place due to caching.

    ::::admonition{title="Webhook URL validation rules" type="note"}
    Ensure these webhook URL validation rules are met:

    - Enter a valid HTTPS URL.
    - Must be 500 characters or less.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X PUT \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{"endpoint":"https://example.com/hoge"}' \
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

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  endpoint

  #undefined
  String

  A valid webhook URL.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and an empty JSON object.
  :::

  :::reference-code
  *Example response*

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

  | Code  | Description                                   |
  | ----- | --------------------------------------------- |
  | `400` | An invalid webhook endpoint URL is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid webhook endpoint URL (400 Bad Request)
      {
        "message": "Invalid webhook endpoint URL"
      }
      ```
      :::::
    ::::
  :::
::
