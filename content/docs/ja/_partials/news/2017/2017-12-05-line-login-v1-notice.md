---
title: LINEログイン v1の提供終了予定について
navigation: true
description: >-
  注：このお知らせは、LINEログイン
  v1をお使いの方のみを対象としています。最新バージョンのv2.1またはv2のエンドポイントをご利用の方には影響ありません。
meta: '{"date":"2017-12-05 00:00 UTC","tags":"LINE Login","locale":"ja"}'
path: /ja/_partials/news/2017/2017-12-05-line-login-v1-notice
__hash__: gTZHAvu_MTNC7eDhTukFVB04aEEcOowYGQ15ELHJtG4
seo:
  title: LINEログイン v1の提供終了予定について
  description: >-
    注：このお知らせは、LINEログイン
    v1をお使いの方のみを対象としています。最新バージョンのv2.1またはv2のエンドポイントをご利用の方には影響ありません。
---

**注**：このお知らせは、LINEログイン v1をお使いの方のみを対象としています。最新バージョンの[v2.1](/reference/social-api/)または[v2](/reference/social-api-v2/)のエンドポイントをご利用の方には影響ありません。

2018年3月31日をもって、以下のLINEログイン v1のエンドポイントの提供を終了します。提供終了後にこれらのエンドポイントにアクセスすると、4xxのステータスコードとエラーメッセージが返されます。

- アクセストークンエンドポイント：[https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}
- 検証エンドポイント：[https://api.line.me/v1/oauth/verify](https://api.line.me/v1/oauth/verify){rel="[\"nofollow\"]"}
- プロフィールエンドポイント：[https://api.line.me/v1/profile](https://api.line.me/v1/profile){rel="[\"nofollow\"]"}
- ログアウトエンドポイント：[https://api.line.me/v1/oauth/logout](https://api.line.me/v1/oauth/logout){rel="[\"nofollow\"]"}

また、LINEログイン v1の提供終了後は、バージョン3.x.x以前の[LINE SDK for iOSとLINE SDK for Android](/docs/downloads/)は動作しなくなります。

提供終了時に発生する問題を防ぐため、LINEログイン v1をお使いの方は、最新バージョンのLINEログインを利用できるようにできるだけ早くアプリを更新してください。最新バージョンのLINEログインについて詳しくは、以下のページを参照してください。

- [iOSアプリにLINEログインを組み込む](/docs/ios-sdk/objective-c/integrate-line-login/)
- [AndroidアプリにLINEログインを組み込む](/docs/android-sdk/integrate-line-login/)
- [ウェブアプリにLINEログインを組み込む](/docs/line-login/integrate-line-login/)
- [Social APIリファレンス](/reference/social-api/)
