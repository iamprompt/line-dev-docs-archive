---
title: Test Webhook Endpoint
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/test-webhook-endpoint
__hash__: Mj93BRZP3_6kGlmjprcznZcnVDjr4aTwvILxMfKoWMM
seo:
  description: ''
---

### Test webhook endpoint

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/channel/webhook/test"}::reference-with-code
  :::reference-content
  Checks if the configured webhook endpoint can receive a test webhook event.

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
      # To verify a specified URL
      curl -X POST \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{"endpoint":"https://example.com/webhook"}' \
      https://api.line.me/v2/bot/channel/webhook/test

      # To verify the URL set in the "Webhook URL" section of the LINE Developers Console
      curl -X POST \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      -d '{}' \
      https://api.line.me/v2/bot/channel/webhook/test
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per hour

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
  :::parameter-table-entry{optional=""}
  #undefined
  endpoint

  #undefined
  String

  A webhook URL to be validated.

    ::::admonition{title="Behaviors with/without endpoint parameter" type="note"}
    The behavior of this API endpoint will differ depending on if the `endpoint` parameter is included in, or excluded from, the **Request body**.

    **With endpoint parameter**

    Validates that the endpoint URL specified in the `endpoint` parameter is valid and, if valid, sends a test webhook event to the specified endpoint URL.

    **Without endpoint parameter**

    Sends a test webhook event to a webhook endpoint that is already set to the channel. `404` is returned if the channel doesn't have a webhook endpoint configured.
    ::::
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::admonition
    ---
    title: Return status code 200 for the communication request
    type: note
    ---
    - The LINE Platform sends an HTTP POST request that doesn't include a webhook event to the webhook URL (bot server) to confirm communication. Design your bot server to return status code `200`.  
    Example HTTP POST request without a webhook event:```json
    {
      "destination": "xxxxxxxxxx",
      "events": []
    }
    ```
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      success

      #undefined
      Boolean

      Result of the communication from the LINE Platform to the webhook URL.

      - `true`: Success
      - `false`: Failure

      If `false`, see [Check the reason for errors](/docs/messaging-api/check-webhook-error-statistics/#check-error-reason) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry
      #undefined
      timestamp

      #undefined
      String

      See [Common Properties](/reference/messaging-api/#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      statusCode

      #undefined
      Number

      The HTTP status code. If the webhook response isn't received, the status code is set to zero or a negative number.
      :::::

      :::::parameter-table-entry
      #undefined
      reason

      #undefined
      String

      Reason for the response. See table below for more information.
      :::::

      :::::parameter-table-entry
      #undefined
      detail

      #undefined
      String

      Details of the response. See table below for more information.
      :::::
    ::::

  | `reason`                                                                                          | `detail`                      | Description                                                                                                                                                                                                              |
  | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | OK                                                                                                | HTTP status code (e.g. `200`) | Successfully sent the webhook.                                                                                                                                                                                           |
  | [COULD_NOT_CONNECT](/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect) | Failure to connect            | Failed to connect to the webhook endpoint. For more information, see [The reason is could_not_connect](/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect) in the Messaging API documentation. |
  | [REQUEST_TIMEOUT](/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout)     | Request timeout               | Request time out. For more information, see [The reason is request_timeout](/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout) in the Messaging API documentation.                              |
  | [ERROR_STATUS_CODE](/docs/messaging-api/check-webhook-error-statistics/#reason-status-code)       | HTTP status code (e.g. `400`) | HTTP status code error response. For more information, see [The reason is error_status_code](/docs/messaging-api/check-webhook-error-statistics/#reason-status-code) in the Messaging API documentation.                 |
  | [UNCLASSIFIED](/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified)           | N/A                           | Unknown error. For more information, see [The reason is unclassified](/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified) in the Messaging API documentation.                                       |
  :::

  :::reference-code
  *Response example (If the webhook is successfully sent)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "success": true,
        "timestamp": "2020-09-30T05:38:20.031Z",
        "statusCode": 200,
        "reason": "OK",
        "detail": "200"
      }
      ```
      :::::
    ::::

  *Response example (If communication to the webhook URL fails due to the bot server's SSL/TLS settings)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "success": false,
        "timestamp": "2023-07-07T04:29:51.043124Z",
        "statusCode": 0,
        "reason": "COULD_NOT_CONNECT",
        "detail": "TLS handshake failure: https://example.com/webhook"
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
  | `400` | An invalid webhook URL is specified.      |
  | `404` | The webhook URL isn't set to the channel. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the domain name specified in the Webhook URL can't be resolved (400 Bad Request)
      {
        "message": "Invalid webhook endpoint URL"
      }

      // If the webhook URL isn't set (404 Not Found)
      {
        "message": "Webhook endpoint not found"
      }
      ```
      :::::
    ::::
  :::
::
