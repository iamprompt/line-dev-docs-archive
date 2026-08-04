---
title: 日本のLINEミニアプリにおいて、アプリ内課金機能を正式にリリースしました
navigation: true
description: 日本のLINEミニアプリにおいて、「アプリ内課金」機能を正式にリリースしました。
meta: '{"date":"2026-02-19 00:00 UTC","tags":"line-mini-app, console","locale":"ja"}'
path: /ja/_partials/news/2026/2026-02-19-line-mini-apps-in-app-purchase
__hash__: 8BDuzdS5j5WhM0BNxT3WjZGQLLD9fGsZ7J14M40DeGo
seo:
  title: 日本のLINEミニアプリにおいて、アプリ内課金機能を正式にリリースしました
  description: 日本のLINEミニアプリにおいて、「アプリ内課金」機能を正式にリリースしました。
---

日本のLINEミニアプリにおいて、「アプリ内課金」機能を正式にリリースしました。

アプリ内課金とは、LINEミニアプリ内で提供するデジタルコンテンツを、ユーザーが購入できる機能です。

本機能は2025年7月より一部企業に対して先行提供を開始しておりました。今回のリリースにより、LINE Developersコンソールから[アプリ内課金の利用申請](/docs/line-mini-app/in-app-purchase/request-iap-review/)を行うことで、認証済ミニアプリでアプリ内課金を利用できるようになりました。

アプリ内課金機能の利用を開始するには、利用申請の後、弊社によるアプリ内課金利用審査と、認証済ミニアプリとして公開するための認証審査が必要です。

### リリース日

2026年2月19日

### リリース内容

以下の内容をリリースしました。

- [アプリ内課金の利用申請](/docs/line-mini-app/in-app-purchase/request-iap-review/)
- 開発用チャネルでの[テスト決済](/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#test-payment-guide)
- [Webhook URLの設定およびテスト決済機能のテスター登録](/docs/line-mini-app/in-app-purchase/iap-settings/)

### アプリ内課金の利用条件

LINEミニアプリチャネルの「サービスを提供する地域」と「会社・事業者の所在国・地域」がいずれも「日本」のLINEミニアプリである。

### アプリ内課金の動作条件

- 認証済ミニアプリである（※）
- LINEミニアプリのLIFF SDKのバージョンが2.26.0以上である
- LINEミニアプリがLIFFブラウザで開かれている
- ユーザーがLINEアプリに日本の電話番号を登録している
- ユーザーのLINEバージョンが15.6.0以降である

※ 未認証ミニアプリでは、開発用と審査用のLINEミニアプリでのみ動作します。

詳しくは、『LINEミニアプリドキュメント』の「[アプリ内課金の概要](/docs/line-mini-app/in-app-purchase/overview/)」および「[LINEアプリ内課金利用規約（LINEミニアプリ提供者向け）](https://terms2.line.me/LINE_MINI_App_IAP?lang=ja){rel="[\"nofollow\"]"}」を参照してください。

LINEヤフー株式会社は、LINEプラットフォームを活用したサービス開発をより円滑に行えるよう、今後も製品および開発者向けドキュメントの品質向上に努めてまいります。
