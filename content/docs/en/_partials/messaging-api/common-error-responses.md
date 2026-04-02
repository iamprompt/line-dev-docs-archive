---
title: Common Error Responses
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/common-error-responses
__hash__: yWq0Zl6HpZeKYzdVwnKl8oJVA4wiwhG4F90UvRZh3Pw
seo:
  description: ''
---

### Error responses

::reference-with-code
  :::reference-content
  The following JSON data is returned in the response body when an error occurs.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      Message containing information about the error. For more details, see [Error messages](#error-messages).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details

      #undefined
      Array

      An array of error details. If the array is empty, this property will not be included in the response.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details[].message

      #undefined
      String

      Details of the error. Not included in the response under certain situations.

      For more information about details of the error on the Managing Audience endpoints, see [Details of the error related to audience management](#manage-audience-error).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details[].property

      #undefined
      String

      Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.
      :::::
    ::::
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 2 error(s)",
        "details": [
          {
            "message": "May not be empty",
            "property": "messages[0].text"
          },
          {
            "message": "Must be one of the following values: [text, image, video, audio, location, sticker, template, imagemap]",
            "property": "messages[1].type"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error messages

The main error messages that are found in the `message` property of the JSON error responses are shown below.

| Message                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The request body has X error(s)                                            | An error was found in the JSON data of the request body. The number of errors is displayed for "X". Further details are shown in the `details[].message` and `details[].property` properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Invalid reply token                                                        | The reply token specified in `replyToken` to [send reply message](#send-reply-message) is invalid. Consider these reasons:- Sent a reply message using an expired reply token. - Sent a reply message using a used reply token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| The property, XXX, in the request body is invalid (line: XXX, column: XXX) | An invalid property was specified in the request body. The specific property is displayed for "XXX".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| The request body could not be parsed as JSON (line: XXX, column: XXX)      | The JSON in the request body could not be parsed. The specific line and column are displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The content type, XXX, is not supported                                    | A content type not supported by the API is requested.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Authentication failed due to the following reason: XXX                     | Authentication failed when the API was called. The reason is displayed for "XXX".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Access to this API is not available for your account                       | Appears when calling an API that you do not have permission to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Failed to send messages                                                    | Appears when the message fails to be sent. One reason this may appear is if the user ID specified doesn't exist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| You have reached your monthly limit.                                       | - Exceeded the number of free messages. - Exceeded your maximum number of additional messages allowed to be sent.  For more information about the number of free messages and the maximum number of additional messages allowed to be sent, see [Messaging API pricing](/docs/messaging-api/pricing/) in the Messaging API documentation.  You may also receive this error even if you still have messages available to send for the current month. For more information, see [Why do I get a 429 Too Many Requests error (You have reached your monthly limit.) even though I still have messages available to send for the current month?](/faq/#why-do-i-get-429-error-during-message-delivery) in the FAQ. |
| The API rate limit has been exceeded. Try again later.                     | Exceeded the [rate limit](#rate-limits) for requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Not found                                                                  | Unable to get profile information. Consider these reasons:- Target user ID doesn't exist - The user hasn't consented to their profile information being obtained - The user hasn't added the target LINE Official Account as a friend - The user blocked the target LINE Official Account after adding it as a friend  For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/) in the Messaging API documentation.                                                                                                                                                                                                                                          |
