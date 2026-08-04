---
title: LINE MINI App development guidelines
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/development-guidelines
__hash__: lQewijMCcdJthImXzueyeBlzaK2DjU7OIc4xo3DeIIk
seo:
  title: LINE MINI App development guidelines
  description: null
---

# :page-title

:markdown-controlsWhen developing web applications using LIFF, follow these development guidelines.

- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)
- [Saving logs](#save-logs)
- [Deauthorize your app when a user unregisters from your app](#deauthorize)

LINE MINI App uses a system provided by LIFF. Therefore, abide by the [LIFF app development guidelines](/docs/liff/development-guidelines/) in the LIFF documentation.

::admonition{title="Note" type="note"}
The basic rules for LINE MINI App development are based on the content described in [Terms and Policies](/terms-and-policies/).
::

## Prohibiting mass requests to the LINE Platform

Don't over-access LINE MINI Apps via the [LIFF scheme](/docs/line-login/using-line-url-scheme/#opening-a-liff-app) (`https://miniapp.line.me/{liffId}`), or send a large number of requests to the [LIFF API](/reference/liff/) or the [Service message API](/reference/line-mini-app/), for load testing purposes. For load testing LINE MINI Apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

::admonition{title="Note" type="note"}
If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.
::

## Saving logs

We recommend saving logs for [Service message API](/reference/line-mini-app/) requests for a certain period of time so that developers themselves can smoothly investigate the cause and scope of a problem when it occurs.

### Service message API request logs

We recommend saving the following information in a log, in addition to the [service notification token](/reference/line-mini-app/#issue-notification-token-response) `notificationToken` which is included in the response, when making a request to the [Service message API](/reference/line-mini-app/).

- Time when API request was made
- Request method
- API endpoint
- [Status codes](/reference/line-mini-app/) returned by the LINE Platform

More specifically, save it in a log file using the following format.

| Time when API request was made | Request method | API endpoint                                                  | Status code |
| ------------------------------ | -------------- | ------------------------------------------------------------- | ----------- |
| Mon, 16 Jul 2021 10:20:23 GMT  | POST           | `https://api.line.me/message/v3/notifier/send?target=service` | 200         |

::admonition
---
title: Additional information that would be useful to keep in log
type: tip
---
Depending on the requirements of the LINE MINI App you're running, the following information, in addition to the above, can be stored for investigation when problems occur.

- Service message API request body
- Response body, other than the service notification token `notificationToken`, returned by the LINE Platform after the API request
::

::admonition{title="We don't provide logs" type="note"}
We don't provide logs of service message API requests, etc. despite inquiries. Logs should be saved by the developers who are developing the LINE MINI Apps themselves.
::

## Deauthorize your app when a user unregisters from your app

When a user unregisters from your LINE MINI App, or when a user terminates the link between your app and the LINE app, you must do the following:

:partial{content="common/deauthorize/"}
