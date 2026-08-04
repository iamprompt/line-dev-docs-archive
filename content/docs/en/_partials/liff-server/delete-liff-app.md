---
title: Delete Liff App
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-server/delete-liff-app
__hash__: dmBaxg8jMW0yzUKHfLPupgfy0FtemUQEuSJ1s03_o9s
seo:
  description: ''
---

### Delete LIFF app from a channel

::reference-with-code
  :::reference-content
  Deletes a LIFF app from a channel.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X DELETE https://api.line.me/liff/v1/apps/{liffId} \
      -H "Authorization: Bearer {channel access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`DELETE https://api.line.me/liff/v1/apps/{liffId}`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Preparing a channel access token](#preparing-channel-access-token).
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffId

  ID of the LIFF app to be deleted
  :::
::

#### Response

Status code `200` is returned.

#### Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 401         | Authentication failed.                                                                                                                           |
| 404         | This status code means one of the following:- The specified LIFF app does not exist. - The specified LIFF app has been added to another channel. |
