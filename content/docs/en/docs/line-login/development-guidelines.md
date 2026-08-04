---
title: LINE Login development guidelines
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login/development-guidelines
__hash__: CUruAjtJY0Wflr0vKV_DRdcE_5q-5yX6kdJDk6dXPzY
seo:
  title: LINE Login development guidelines
  description: null
---

# :page-title

:markdown-controlsWhen developing web apps using LINE Login, follow these development guidelines.

**Prohibited matters**

- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

**Required matters**

- [Deauthorize your app when a user unregisters from your app](#deauthorize)

**Recommended matters**

- [Saving logs](#save-logs)

::admonition{title="Note" type="note"}
The basic rules for LINE Login development are based on the content described in [Terms and Policies](/terms-and-policies/).
::

## Prohibited matters

### Prohibiting mass requests to the LINE Platform

Don't send a large number of [authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) or [LINE Login API](/reference/line-login/) requests to the LINE Platform for load testing purposes. For load testing web apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

::admonition{title="Note" type="note"}
If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.
::

## Required matters

### Deauthorize your app when a user unregisters from your app

When a user unregisters from your app (website, smartphone app, etc.) that integrates LINE Login, or when a user terminates the link between your app and the LINE app, you must do the following:

:partial{content="common/deauthorize/"}## Recommended matters

### Saving logs

We recommend saving logs for [Authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) and [LINE Login API](/reference/line-login/) requests for a certain period of time so that developers themselves can smoothly investigate the cause and scope of a problem when it occurs.

#### Authorization request logs

We recommend saving the following information as a log when making an [Authorization request](/docs/line-login/integrate-line-login/#making-an-authorization-request).

- Time when authorization request was made
- Parameter of the authorization request

More specifically, save it in a log file using the following format.

| Time when authorization request was made | Parameter of the authorization request                                                    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:10 GMT            | `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=xxxxxxxxxx...` |

#### Authorization code or error response

We recommend saving the following information as a log when you receive an [Authorization code](/docs/line-login/integrate-line-login/#receiving-the-authorization-code) or an [Error response](/docs/line-login/integrate-line-login/#receiving-an-error-response) through an [Authorization request](/docs/line-login/integrate-line-login/#making-an-authorization-request).

- Time when the authorization code or error response was received
- Request method
- Log of authorization codes or error responses

More specifically, save it in a log file using the following format.

| Time when response was received | Request Method | Log of authorization codes or error responses                                           |
| ------------------------------- | -------------- | --------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:20 GMT   | GET            | `/callback?code=Zfl2WjsWcn2XBBWApcty&state=n5B9b9FR2BWjloDzEskZMmGysITRTYpjLkM6oD5qfmA` |

#### Time logs for LINE Login API request

We recommend saving the following information as a log when making a [LINE Login API](/reference/line-login/) request.

- Request ID (`x-line-request-id`) of the [Response headers](/reference/line-login/#response-headers)
- Time when API request was made
- Request method
- API endpoint
- [Status codes](/reference/line-login/#status-codes) returned by the LINE Platform

More specifically, save it in a log file using the following format.

| Request ID (`x-line-request-id`) | Time when API request was made | Request method | API endpoint                            | Status code |
| -------------------------------- | ------------------------------ | -------------- | --------------------------------------- | ----------- |
| 8d48c8577e739b9c                 | Mon, 16 Jul 2021 10:20:22 GMT  | POST           | `https://api.line.me/oauth2/v2.1/token` | 200         |

::admonition
---
title: Additional information that would be useful to keep in log
type: tip
---
Depending on the requirements of the web app you're running, the following information, in addition to the above, can be stored for investigation when problems occur.

- LINE Login API request body
- Response body returned by the LINE Platform after the API request
::

::admonition{title="We don't provide logs" type="note"}
We don't provide logs of authorization requests or logs of LINE Login API requests, etc. despite inquiries. Logs should be saved by the developers who are developing web apps using LINE Login.
::
