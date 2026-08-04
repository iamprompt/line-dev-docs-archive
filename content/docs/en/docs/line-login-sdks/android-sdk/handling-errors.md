---
title: Handling errors
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login-sdks/android-sdk/handling-errors
__hash__: rJFjE7RJaMvLdOB360bgZqutdFf4S7tCSw0wuYnnjYs
seo:
  title: Handling errors
  description: null
---

# :page-title

:markdown-controlsThe `getResponseCode()` method of the `LineLoginResult` object returns one of the following response codes.

| Response code              | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| SUCCESS                    | The login was successful.                                                                 |
| CANCEL                     | The login failed because the user canceled the login process.                             |
| AUTHENTICATION_AGENT_ERROR | The login failed because the user tapped the Cancel or Back button on the consent screen. |
| SERVER_ERROR               | The login failed due to a server-side error.                                              |
| NETWORK_ERROR              | The login failed because the SDK could not connect to the LINE Platform.                  |
| INTERNAL_ERROR             | The login failed due to an unknown error.                                                 |
