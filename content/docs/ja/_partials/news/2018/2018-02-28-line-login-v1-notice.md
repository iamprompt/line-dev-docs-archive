---
title: LINEログイン v1の提供終了予定について
navigation: true
description: >-
  注：このお知らせは、LINEログイン
  v1をお使いの方のみを対象としています。最新バージョンのv2.1またはv2のエンドポイントをご利用の方には影響ありません。
meta: '{"date":"2018-02-28 00:00 UTC","tags":"LINE Login","locale":"ja"}'
path: /ja/_partials/news/2018/2018-02-28-line-login-v1-notice
__hash__: 7igdJqM31ZXZT-HlIl9RhK9A-dR3tGsRZr0Lk1q0cj8
seo:
  title: LINEログイン v1の提供終了予定について
  description: >-
    注：このお知らせは、LINEログイン
    v1をお使いの方のみを対象としています。最新バージョンのv2.1またはv2のエンドポイントをご利用の方には影響ありません。
---

**注**：このお知らせは、LINEログイン v1をお使いの方のみを対象としています。最新バージョンの[v2.1](/reference/social-api/)または[v2](/reference/social-api-v2/)のエンドポイントをご利用の方には影響ありません。

LINEログイン v1のエンドポイントの提供を、2018年3月31日より段階的に終了します。エンドポイントとアクセス方法に応じて、提供終了日が下記のようにスケジュールされています。提供終了後にこれらのエンドポイントにアクセスすると、4xxのステータスコードとエラーメッセージが返されます。

##### 2018年3月31日に提供終了

- アクセストークンエンドポイント：[https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}

##### 2018年4月30日に提供終了

- プロフィールエンドポイント：[https://api.line.me/v1/profile](https://api.line.me/v1/profile){rel="[\"nofollow\"]"}
- ログアウトエンドポイント：[https://api.line.me/v1/oauth/logout](https://api.line.me/v1/oauth/logout){rel="[\"nofollow\"]"}

##### 2018年6月30日に提供終了

- 検証エンドポイント：[https://api.line.me/v1/oauth/verify](https://api.line.me/v1/oauth/verify){rel="[\"nofollow\"]"}
- LINE SDK for iOSとLINE SDK for Androidのバージョン3.x.x以前のAPIエンドポイント

提供終了時に発生する問題を防ぐため、LINEログイン v1をお使いの方は、最新バージョンのLINEログインを利用できるようにアプリを更新する必要があります。最新バージョンのLINEログインについて詳しくは、以下のページを参照してください。

[Social APIの概要](/docs/social-api/overview/)

加えて、LINEログインを通じて取得できるユーザー識別子が、LINEログイン v1ではMIDでしたがv2.0以降ではユーザーIDに変更になっています。このため、LINE MIDをデータベースに保存している場合、新しいバージョンで取得できる値に変換しておく必要があります。変換のためのAPI利用手順については、以下のページを参照してください。

[MIDをユーザーIDに変換する](/docs/line-login/converting-mid-to-userid/)

なお、弊社パートナー様につきましては別途詳細をご案内させていただきます。
