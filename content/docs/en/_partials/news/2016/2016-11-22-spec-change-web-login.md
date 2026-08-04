---
title: 'Important: Specification change to API'
navigation: true
description: >-
  Based on the OAuth 2.0 specification, we will add parameters error, state to
  the error response of LINE Login authentication.
meta: '{"date":"2016-11-22 00:00 UTC","tags":"LINE Login","local":"en"}'
path: /en/_partials/news/2016/2016-11-22-spec-change-web-login
__hash__: xwEcLDw-0rZRbQxtBwX-7-yy0j4iK6761QVNFTVwTC8
seo:
  title: 'Important: Specification change to API'
  description: >-
    Based on the OAuth 2.0 specification, we will add parameters error, state to
    the error response of LINE Login authentication.
---

Based on the OAuth 2.0 specification, we will add parameters [error, state] to the error response of LINE Login authentication.

These parameters will be added to the error response sent to the callback URL when the user selects cancel on the agreement screen which is displayed during the LINE Login process.

In addition, in accordance with the OAuth 2.0 specification, the errorCode and errorMessage parameters in the current error response will be deprecated and removed in the future.

[Date]

December 15, 2016
