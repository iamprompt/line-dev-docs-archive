---
title: The endpoint for getting user information has been added to the LINE Login
navigation: true
description: We've added an endpoint for getting user information to the LINE Login.
meta: '{"date":"2022-06-03 00:00 UTC","tags":"line-login","locale":"en"}'
path: /en/_partials/news/2022/2022-06-03-user-info-endpoint
__hash__: Ja_kchR-Y1Z5x9FQktMTZIz0HLZKHPSm1vgOwh6o7MU
seo:
  title: The endpoint for getting user information has been added to the LINE Login
  description: We've added an endpoint for getting user information to the LINE Login.
---

We've added an endpoint for getting user information to the LINE Login.

LINE Login supports [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html){rel="[\"nofollow\"]"} and information about the OpenID provider is available in the [OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration){rel="[\"nofollow\"]"}. With the addition of the endpoint, we've also updated this document, including the addition of `userinfo_endpoint` property.

### Added endpoint

- [Get user information](/reference/line-login/#userinfo)

For more information on LINE Login, see [LINE Login overview](/docs/line-login/overview/).
