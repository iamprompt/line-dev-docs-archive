---
title: Messaging APIで送信可能なスタンプが増えました
navigation: true
description: >-
  Messaging
  APIで送信可能なスタンプが大きく増え、スタンプリストも従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging
  APIドキュメント』の「送信可能なスタンプリスト」を参照してください。
meta: '{"date":"2021-04-07 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-04-07-list-of-available-stickers
__hash__: GSa2yAPbAUFNvWA8t9FNliOYrRXyG2oA-9uk79Zq_kI
seo:
  title: Messaging APIで送信可能なスタンプが増えました
  description: >-
    Messaging
    APIで送信可能なスタンプが大きく増え、スタンプリストも従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging
    APIドキュメント』の「送信可能なスタンプリスト」を参照してください。
---

Messaging APIで送信可能なスタンプが大きく増え、スタンプリストも従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging APIドキュメント』の「[送信可能なスタンプリスト](/docs/messaging-api/sticker-list/)」を参照してください。

![スタンプメッセージオブジェクトにパッケージIDとスタンプIDを指定する](/media/messaging-api/sticker-message/sticker-message-object-ja.png){className="[\"w-fix-640\",\"border\",\"rounded-sm\",\"p-2\"]"}

使用したいスタンプの`パッケージID`と`スタンプID`を、スタンプメッセージオブジェクトの`packageId`プロパティと`stickerId`プロパティに指定することで、ユーザーにスタンプが送信できます。スタンプメッセージの送信方法について詳しくは、『Messaging APIドキュメント』の「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。
