---
title: Specification change to API postponed
navigation: true
description: >-
  The date of the specification change to LINE Login (as stated in the November
  22 post) will be postponed from December 15 to December 19. The details of the
  specification change as specified in the earlier post are shown below.
meta: '{"date":"2016-12-13 00:00 UTC","tags":"LINE Login","local":"en"}'
path: /en/_partials/news/2016/2016-12-13-web-login-change-postponed
__hash__: deQJBCcQMpzxrzl1gG_tqjf6rxG-x2pcK-_RROUST50
seo:
  title: Specification change to API postponed
  description: >-
    The date of the specification change to LINE Login (as stated in the
    November 22 post) will be postponed from December 15 to December 19. The
    details of the specification change as specified in the earlier post are
    shown below.
---

The date of the specification change to LINE Login (as stated in the November 22 post) will be postponed from December 15 to **December 19**. The details of the specification change as specified in the earlier post are shown below.

November 22 post:

Based on the OAuth 2.0 specification, we will add parameters [error, state] to the error response of LINE Login authentication.

These parameters will be added to the error response sent to the callback URL when the user selects cancel on the agreement screen which is displayed during the LINE Login process.

In addition, in accordance with the OAuth 2.0 specification, the errorCode and errorMessage parameters in the current error response will be deprecated and removed in the future.
