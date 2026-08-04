---
title: LINEログインでユーザー情報を取得するエンドポイントを追加しました
navigation: true
description: LINEログインで、ユーザー情報を取得するエンドポイントを追加しました。
meta: '{"date":"2022-06-03 00:00 UTC","tags":"line-login","locale":"ja"}'
path: /ja/_partials/news/2022/2022-06-03-user-info-endpoint
__hash__: EOo6wt7y9rl41zmX-VDQV5xlaQ-4Lfzq2y36xweuL2M
seo:
  title: LINEログインでユーザー情報を取得するエンドポイントを追加しました
  description: LINEログインで、ユーザー情報を取得するエンドポイントを追加しました。
---

LINEログインで、ユーザー情報を取得するエンドポイントを追加しました。

LINEログインでは[OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html){rel="[\"nofollow\"]"}をサポートしており、『[OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration){rel="[\"nofollow\"]"}』でOpenIDプロバイダの情報を公開しています。エンドポイントの追加に伴い、こちらも`userinfo_endpoint`プロパティの追加等の更新をしています。

### 追加されたエンドポイント

- [ユーザー情報を取得する](/reference/line-login/#userinfo)

LINEログインについて詳しくは、「[LINEログインの概要](/docs/line-login/overview/)」を参照してください。
