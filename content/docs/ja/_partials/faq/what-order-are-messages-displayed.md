---
title: Messaging APIで、同じユーザーに複数のメッセージを送信した場合、メッセージの表示順序はどうなりますか？
navigation: true
description: メッセージの表示順序は、複数のメッセージをどのように送信したかによって異なります。
meta: >-
  {"date":"2023-01-05 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/what-order-are-messages-displayed
__hash__: tj06v4jUdoprZxVG1AAkglb-58tAxTeUri8S5k8TH0g
seo:
  title: Messaging APIで、同じユーザーに複数のメッセージを送信した場合、メッセージの表示順序はどうなりますか？
  description: メッセージの表示順序は、複数のメッセージをどのように送信したかによって異なります。
---

メッセージの表示順序は、複数のメッセージをどのように送信したかによって異なります。

メッセージを送信するエンドポイントを複数回実行した場合、エンドポイントの実行順序とメッセージの表示順序は必ずしも一致しません。

メッセージを送信するエンドポイントを1回実行し、そのリクエストボディに複数のメッセージを指定した場合、リクエストボディで指定した順序でメッセージが表示されます。
