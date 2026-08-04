---
title: Messaging APIアップデート（2021年8月）
navigation: true
description: 今回のMessaging APIのアップデートで、変更された機能は以下のとおりです。
meta: '{"date":"2021-08-03 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-08-03-messaging-api-update-august-2021
__hash__: KQE5lI3NSv-SdSacu5Ar2zxUl_RsaT2gG8D0UHUzvMg
seo:
  title: Messaging APIアップデート（2021年8月）
  description: 今回のMessaging APIのアップデートで、変更された機能は以下のとおりです。
---

今回のMessaging APIのアップデートで、変更された機能は以下のとおりです。

- [「ナローキャストメッセージの進行状況」を取得できる期間が7日間から14日間に延長されました](#messaging-api-202108-01)
- [画像、動画、音声を参照するURLの最大文字数が1000から2000に緩和されました](#messaging-api-202108-02)

### 「ナローキャストメッセージの進行状況」を取得できる期間が7日間から14日間に延長されました

ナローキャストメッセージは、送信リクエスト後に「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)」エンドポイントを用いて、送信の進行状況を確認できます。この「ナローキャストメッセージの進行状況」を取得できる期間が、従来より延長されました。

変更前と変更後の差異については以下の表を参照してください。

| 項目          | 変更前          | 変更後（現在）       |
| ----------- | ------------ | ------------- |
| **取得できる期間** | 7日間（168時間）未満 | 14日間（336時間）未満 |

詳しくは、Messaging APIリファレンスの「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)」を参照してください。

### 画像、動画、音声を参照するURLの最大文字数が1000から2000に緩和されました

[メッセージオブジェクト](/reference/messaging-api/#message-objects)で画像、動画、音声を参照するURLの最大文字数が、従来の1000から2000に緩和されました。対象のプロパティは以下の通りです。

| メッセージオブジェクト                                                         | プロパティ                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [メッセージ共通プロパティ](/reference/messaging-api/#message-common-properties) | - [クイックリプライボタンオブジェクト](/reference/messaging-api/#quick-reply-button-object)の`imageUrl`プロパティ                                                                                                                                                                                     |
| [画像メッセージ](/reference/messaging-api/#image-message)                  | - `originalContentUrl`プロパティ - `previewImageUrl`プロパティ                                                                                                                                                                                                                           |
| [動画メッセージ](/reference/messaging-api/#video-message)                  | - `originalContentUrl`プロパティ - `previewImageUrl`プロパティ                                                                                                                                                                                                                           |
| [音声メッセージ](/reference/messaging-api/#audio-message)                  | - `originalContentUrl`プロパティ                                                                                                                                                                                                                                                    |
| [イメージマップメッセージ](/reference/messaging-api/#imagemap-message)          | - `baseUrl`プロパティ - `video.originalContentUrl`プロパティ - `video.previewImageUrl`プロパティ                                                                                                                                                                                              |
| [テンプレートメッセージ](/reference/messaging-api/#template-messages)          | - [ボタンテンプレート](/reference/messaging-api/#buttons)の`thumbnailImageUrl`プロパティ - [カルーセルのカラムオブジェクト](/reference/messaging-api/#column-object-for-carousel)の`thumbnailImageUrl`プロパティ - [画像カルーセルのカラムオブジェクト](/reference/messaging-api/#column-object-for-image-carousel)の`imageUrl`プロパティ |
| [Flex Message](/reference/messaging-api/#flex-message)              | - [画像](/reference/messaging-api/#f-image)コンポーネントの`url`プロパティ - [アイコン](/reference/messaging-api/#icon)コンポーネントの`url`プロパティ                                                                                                                                                         |
