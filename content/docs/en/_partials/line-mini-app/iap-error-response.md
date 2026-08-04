---
title: Iap Error Response
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/iap-error-response
__hash__: Int5_vKQRYy7IrndFzmtOhf8RVBGMGpBEXVEqxZJ1Qo
seo:
  description: ''
---

### Error response

::reference-with-code
  :::reference-content
  When the HTTP status code is in the 4xx or 5xx, a response body containing the following JSON data is returned:

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      errorCode

      #undefined
      String

      Error code
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      message

      #undefined
      String

      Error message
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details

      #undefined
      array

      Error details
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details[].message

      #undefined
      String

      Detailed message
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      details[].property

      #undefined
      String

      Location where error occurred
      :::::
    ::::
  :::

  :::reference-code
  *Error response example*

  When the HTTP status code is in the 4xx

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "VALIDATION_ERROR",
        "message": "Request validation failed.",
        "details": [
          {
            "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
            "property": "clientOs"
          }
        ]
      }
      ```
      :::::
    ::::

  When the HTTP status code is in the 5xx

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "INTERNAL_SERVER_ERROR",
        "message": "An internal server error occurred."
      }
      ```
      :::::
    ::::
  :::
::
