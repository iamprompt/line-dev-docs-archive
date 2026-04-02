---
title: Messaging APIにおいて、ユーザーが送信したコンテンツの取得準備の状況とプレビュー画像が取得できるようになりました
navigation: true
description: Messaging APIにおいて、ユーザーが送信したコンテンツの取得に関連するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。
meta: '{"date":"2023-02-14 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2023/2023-02-14-messaging-api-updated
__hash__: NzREsvTivYUNjqQoQ78-3FILepBGmXIqbkVN1CXf-yU
seo:
  title: Messaging APIにおいて、ユーザーが送信したコンテンツの取得準備の状況とプレビュー画像が取得できるようになりました
  description: >-
    Messaging
    APIにおいて、ユーザーが送信したコンテンツの取得に関連するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。
---

Messaging APIにおいて、ユーザーが送信したコンテンツの取得に関連するエンドポイントを追加しました。追加されたエンドポイントは以下のとおりです。

- [動画または音声の取得準備の状況を確認するエンドポイント](#preparation-status-20230214)
- [画像または動画のプレビュー画像を取得するエンドポイント](#preview-20230214)

### 動画または音声の取得準備の状況を確認するエンドポイント

ユーザーが動画または音声を送信した場合に、コンテンツの取得準備の状況を取得できるエンドポイントです。

Messaging APIでは、ユーザーがLINE公式アカウントに対して送信したコンテンツを、[Webhook](/reference/messaging-api/#webhooks)で受信したメッセージIDを使うことで取得できます。ただし、コンテンツの準備が完了する前に[コンテンツを取得](/reference/messaging-api/#get-content)しようとすると、ステータスコード`202`が返り、コンテンツのバイナリデータは取得できません。

データサイズが大きい動画または音声が送られた場合に、コンテンツのバイナリデータを取得できるようになるまで時間がかかるときがあります。このエンドポイントを利用することで、取得する準備が完了したかどうかを事前に確認できます。

詳しくは、『Messaging APIリファレンス』の「[動画または音声の取得準備の状況を確認する](/reference/messaging-api/#verify-video-or-audio-preparation-status)」を参照してください。

### 画像または動画のプレビュー画像を取得するエンドポイント

ユーザーが画像または動画を送信した場合に、プレビュー画像を取得できるエンドポイントです。

実際のコンテンツよりも軽量なデータサイズに変換した画像データを取得できるため、サムネイルなどに利用できます。

詳しくは、『Messaging APIリファレンス』の「[画像または動画のプレビュー画像を取得する](/reference/messaging-api/#get-image-or-video-preview)」を参照してください。
