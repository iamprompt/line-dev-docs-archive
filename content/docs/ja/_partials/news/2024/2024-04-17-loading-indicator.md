---
title: Messaging APIでユーザーとのトーク画面にローディングのアニメーションを表示できるようになりました
navigation: true
description: >-
  Messaging
  APIにローディングのアニメーションを表示するエンドポイントが追加されました。LINE公式アカウントがユーザーからのメッセージを受信したあと、メッセージの準備や予約の処理などで返答に少し時間がかかることがあります。そのような場合に、ユーザーにそのまま待機しておいて欲しいことをローディングのアニメーションで視覚的に伝えることができます。
meta: '{"date":"2024-04-17 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-04-17-loading-indicator
__hash__: vhlwpd4BTkf1URgpRfQkgQ9VwKG_OdVYeks0Hwg7450
seo:
  title: Messaging APIでユーザーとのトーク画面にローディングのアニメーションを表示できるようになりました
  description: >-
    Messaging
    APIにローディングのアニメーションを表示するエンドポイントが追加されました。LINE公式アカウントがユーザーからのメッセージを受信したあと、メッセージの準備や予約の処理などで返答に少し時間がかかることがあります。そのような場合に、ユーザーにそのまま待機しておいて欲しいことをローディングのアニメーションで視覚的に伝えることができます。
---

Messaging APIに[ローディングのアニメーションを表示する](/reference/messaging-api/#display-a-loading-indicator)エンドポイントが追加されました。LINE公式アカウントがユーザーからのメッセージを受信したあと、メッセージの準備や予約の処理などで返答に少し時間がかかることがあります。そのような場合に、ユーザーにそのまま待機しておいて欲しいことをローディングのアニメーションで視覚的に伝えることができます。

ローディングのアニメーションは指定した秒数が経過するか、表示中にLINE公式アカウントからメッセージが届くと自動的に消えます。

![](/media/messaging-api/loading-indicator/loading-animation.gif){className="[\"border\",\"w-fix-480\"]"}

詳しくは、『Messaging APIドキュメント』の「[ローディングのアニメーションを表示する](/docs/messaging-api/use-loading-indicator/)」を参照してください。

### 対象バージョン

iOS版LINEまたはAndroid版LINEのバージョン13.16.0以降

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
