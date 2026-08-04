---
title: Messaging APIの概要
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/overview
__hash__: FN5uRfTNUJdqR3hc9HnGGxFIkVBp3iUCaLmgWlob-qQ
seo:
  title: Messaging APIの概要
  description: null
---

# :page-title

:markdown-controlsMessaging APIを使って、ユーザー個人に合わせた体験をLINE上で提供するボットを作成できます。

::admonition{title="LINE公式アカウントとは" type="tip"}
LINE公式アカウントがどのようなものかが分からない場合は、総合学習プラットフォーム「[LINEヤフーマーケティングキャンパス](https://lymcampus.jp/){rel="[\"nofollow\"]"}」をご利用ください。
::

## Messaging APIの仕組み

Messaging APIを利用することで、ボットサーバーはLINEプラットフォームとデータをやりとりできます。リクエストはHTTPSでJSON形式により送信されます。ボットサーバーとLINEプラットフォームの通信の流れは以下のようになります。

1. ユーザーがLINE公式アカウントにメッセージを送信します。
2. LINEプラットフォームからボットサーバーのWebhook URLにWebhookイベントが送信されます。
3. ボットサーバーはWebhookイベントを確認し、LINEプラットフォームを通じてユーザーに応答します。

![](/media/messaging-api/overview/messaging-api-architecture.png)

## デモを試す

Messaging APIを体験してみましょう。お手持ちのスマートフォンでデモを見ることができます。 QRコードを読み取ると、デモ用のLINE公式アカウントを友だち追加できます。

![](/media/messaging-api/demo/messaging-api-demo-qr-code-ja.png){className="[\"border\",\"w-fix-560\"]"}

::admonition{title="デモアプリで取得するデータについて" type="note"}
デモ用のLINE公式アカウントには、端末の「位置情報」を送信する機能があります。「位置情報」を送信する機能を希望しない場合は、ご利用の端末の「位置情報共有」をOFFにしてからご利用ください。なお、皆さまのLINEアカウントから、「プロフィール情報の一部（ユーザーID）」を取得します。ただし、これらの情報はサーバーには保存されません。上記をご理解のうえ、ご利用ください。
::

## Messaging APIでできること

Messaging APIでできることは以下のとおりです。

### 応答メッセージを送る

Messaging APIを利用すると、LINE公式アカウントと対話するユーザーに対して、メッセージを返信できます。詳しくは「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。

### 任意のタイミングでメッセージを送る

Messaging APIを利用すると、いつでもユーザーに直接メッセージを送ることができます。詳しくは、「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。

### さまざまなタイプのメッセージを送る

Messaging APIでは、以下のようなさまざまなタイプのメッセージをユーザーに送信できます。これらのメッセージの仕様の詳細については、「[メッセージタイプ](/docs/messaging-api/message-types/)」を参照してください。

- [テキストメッセージ](/docs/messaging-api/message-types/#text-messages)
- [テキストメッセージ（v2）](/docs/messaging-api/message-types/#text-messages-v2)
- [スタンプメッセージ](/docs/messaging-api/message-types/#sticker-messages)
- [画像メッセージ](/docs/messaging-api/message-types/#image-messages)
- [動画メッセージ](/docs/messaging-api/message-types/#video-messages)
- [音声メッセージ](/docs/messaging-api/message-types/#audio-messages)
- [位置情報メッセージ](/docs/messaging-api/message-types/#location-messages)
- [クーポンメッセージ](/docs/messaging-api/message-types/#coupon-messages)
- [イメージマップメッセージ](/docs/messaging-api/message-types/#imagemap-messages)
- [テンプレートメッセージ](/docs/messaging-api/message-types/#template-messages)
- [Flex Message](/docs/messaging-api/message-types/#flex-messages)

### ユーザーが送ったコンテンツを取得する

Messaging APIを利用すると、ユーザーが送信した画像、動画、音声、ファイルを取得できます。ユーザーが送信したコンテンツは、一定期間が経過すると自動的に削除されます。詳しくは、『Messaging APIリファレンス』の「[コンテンツを取得する](/reference/messaging-api/#get-content)」を参照してください。

### ユーザープロフィールを取得する

Messaging APIでは、LINE公式アカウントと1対1のトークやグループトークでやりとりしているユーザーのプロフィール情報を取得することができます。取得できるプロフィール情報の種類は、ユーザーの表示名、言語、プロフィール画像、ステータスメッセージです。詳しくは、『Messaging APIリファレンス』の「[プロフィール情報を取得する](/reference/messaging-api/#get-profile)」を参照してください。

### グループトークに参加する

Messaging APIを利用すると、グループトークでメッセージを送信したり、グループトークのメンバーの情報を取得したりできます。詳しくは、「[グループトークと複数人トーク](/docs/messaging-api/group-chats/)」を参照してください。

### リッチメニューを使う

Messaging APIでは、トークルーム内にリッチメニューを設定したり、リッチメニューをカスタマイズしたりできます。リッチメニューは、ユーザーがLINE公式アカウントとどのようにやりとりできるかを見つけるのに役立ちます。ユーザーは、いつでもトークルームからこのメニューを利用できます。詳しくは、「[リッチメニューを使う](/docs/messaging-api/using-rich-menus/)」を参照してください。

### ビーコンを使う

LINE Beaconでは、Beaconエリアに入ったユーザーとLINE公式アカウントが対話するよう設定できます。詳しくは、「[ビーコンを使う](/docs/messaging-api/using-beacons/)」を参照してください。

### アカウント連携を使う

Messaging APIを利用することで、プロバイダーが提供するサービスのユーザーと、LINE公式アカウントと友だちになっているLINEアカウントを、安全に連携できます。詳しくは、「[ユーザーアカウントの連携](/docs/messaging-api/linking-accounts/)」を参照してください。

### 送信メッセージ数を取得する

Messaging APIでは、LINE公式アカウントから送信したメッセージ数を取得できます。なお、APIで取得できるのはMessaging APIにより送信されたメッセージの数であり、LINE Official Account Managerから送信されたメッセージの数は含まれません。詳しくは、以下を参照してください。

- [当月に送信できるメッセージ数の上限目安を取得する](/reference/messaging-api/#get-quota)
- [当月のメッセージ利用状況を取得する](/reference/messaging-api/#get-consumption)
- [送信済みの応答メッセージの数を取得する](/reference/messaging-api/#get-number-of-reply-messages)
- [送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)
- [送信済みのマルチキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-multicast-messages)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)

## Messaging APIの料金

Messaging APIは無料ではじめられます。どなたでもMessaging APIを使って、LINE公式アカウントからメッセージを送信できます。

毎月、一定数のメッセージを無料で送信できます。無料メッセージ通数は、LINE公式アカウントの[料金プラン](https://www.lycbiz.com/jp/service/line-official-account/plan/){rel="[\"nofollow\"]"}によって異なります。料金プランは国または地域によって異なる場合がありますので、該当する地域の料金プランをご確認ください。

Messaging APIの料金について詳しくは、「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。

## 次のステップ

次のステップとして、[Messaging APIを使って](/docs/messaging-api/getting-started/)ボットを作成しましょう。まず、LINE公式アカウントを開設します。LINE公式アカウントを開設すると、そのLINE公式アカウント用のMessaging APIチャネルを作成できます。

## 関連ページ

- [Messaging API開発ガイドライン](/docs/messaging-api/development-guidelines/)
- [LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)
- [Messaging APIリファレンス](/reference/messaging-api/)
