---
title: Liff Errors
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/liff-errors
__hash__: 6wK2BFYW6t-dgp3w7eMfptLoF7vifswxfW4p38Ezxx0
seo:
  description: ''
---

### LIFF SDK errors

::reference-with-code
  :::reference-content
  LIFF SDK errors are returned in LiffError objects.

    ::::admonition
    ---
    title: When identifying errors, refer to both the error code and the error message
    type: note
    ---
    Since the error messages are subject to change without notice, identifying errors based on an exact match of the error message may cause your LIFF app to malfunction. To ensure that your LIFF app continues to work properly even when error messages change, identify errors by referring to both the error code and the error message.

    We plan to make improvements so that errors can be uniquely identified by error codes.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "code": "INIT_FAILED",
        "message": "Failed to init LIFF SDK"
      }
      ```
      :::::
    ::::
  :::
::

#### LiffError object

::parameter-table
  :::parameter-table-entry
  #undefined
  code

  #undefined
  String

  Error code
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  message

  #undefined
  String

  Error message
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  cause

  #undefined
  Unknown

  Error cause
  :::
::

#### Error details

| Error code             | Description                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400                    | Problem with the request. Check the request parameters and JSON format.                                                                                                                                                                                                                                                  |
| 401                    | Check that the authorization header is correct.                                                                                                                                                                                                                                                                          |
| 403                    | Not authorized to use the API. Confirm that your account or plan is authorized to use the API.                                                                                                                                                                                                                           |
| 429                    | Make sure that you are within the rate limit for requests.                                                                                                                                                                                                                                                               |
| 500                    | Temporary error on the API server.                                                                                                                                                                                                                                                                                       |
| INIT_FAILED            | Failed to init LIFF SDK.                                                                                                                                                                                                                                                                                                 |
| INVALID_ARGUMENT       | An invalid argument was specified.                                                                                                                                                                                                                                                                                       |
| UNAUTHORIZED           | - The user did not authorize. - Call the server api without access token. - Call the share target picker before logging in.                                                                                                                                                                                              |
| FORBIDDEN              | - You don't have the required permission. - You attempted to use a feature in an environment that's not supported.                                                                                                                                                                                                       |
| INVALID_CONFIG         | An invalid setting.- Specify the liffId to initialize LIFF apps using [`liff.init()`](/reference/liff/#initialize-liff-app). - The URL of the page that executes the [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url) method doesn't start with the URL specified in the **Endpoint URL**. |
| INVALID_ID_TOKEN       | Failed to verify the ID token.                                                                                                                                                                                                                                                                                           |
| EXCEPTION_IN_SUBWINDOW | Problem with subwindow. - For example, if the target picker (group or friend selection screen) is displayed and has been idle for more than 10 minutes, for example.                                                                                                                                                     |
| UNKNOWN                | Unknown error.                                                                                                                                                                                                                                                                                                           |
