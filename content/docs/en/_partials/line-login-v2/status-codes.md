---
title: Status Codes
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login-v2/status-codes
__hash__: WSOlJ-uCvFdGSHkhsqhcjkctPsSdsyASNUtLKuIFsrI
seo:
  description: ''
---

### Status codes

These HTTP status codes are returned after an API call. We follow the [HTTP status code specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6){rel="[\"nofollow\"]"} unless otherwise stated.

| Status code               | Description                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 200 OK                    | Request successful                                                                                                   |
| 400 Bad Request           | Problem with the request. Check the request parameters and JSON format.                                              |
| 401 Unauthorized          | Check that the authorization header is correct.                                                                      |
| 403 Forbidden             | Not authorized to use the API. Confirm that your account or plan is authorized to use the API.                       |
| 413 Payload Too Large     | Request exceeds the max size of 2MB. Make the request smaller than 2MB and try again.                                |
| 429 Too Many Requests     | Temporarily restricting requests because [rate-limit](#rate-limits) has been exceeded by a large number of requests. |
| 500 Internal Server Error | Temporary error on the API server.                                                                                   |
