---
title: Issue Link Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/issue-link-token
__hash__: oevbYawDkJ6IPX4UQqmAICnCYoY08etUV6HbTvkmAEw
seo:
  description: ''
---

### Issue link token

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/{userId}/linkToken"}::reference-with-code
  :::reference-content
  Issues a link token used for the [account link](/docs/messaging-api/linking-accounts/) feature.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/v2/bot/user/{userId}/linkToken \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userId

  User ID for the LINE account to be linked. Found in the `source` object of [account link event](#account-link-event) objects. Do not use the LINE ID used in LINE.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object containing these values.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      linkToken

      #undefined
      String

      Link token. Link tokens are valid for 10 minutes and can only be used once.

        ::::::admonition{title="Note" type="note"}
        The validity period may change without notice.
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "linkToken": "NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY"
      }
      ```
      :::::
    ::::
  :::
::
