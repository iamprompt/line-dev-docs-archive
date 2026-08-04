---
title: Messaging APIで送信可能なLINE絵文字のリストが見やすくなりました
navigation: true
description: >-
  Messaging
  APIで送信可能なLINE絵文字のリストが、従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging
  APIドキュメント』の「送信可能なLINE絵文字リスト」を参照してください。
meta: '{"date":"2021-07-19 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-07-19-list-of-available-emojis
__hash__: vSNUPkqlYiYWo_cE4SuJZU09nmOitruh2aXJHXnEZPQ
seo:
  title: Messaging APIで送信可能なLINE絵文字のリストが見やすくなりました
  description: >-
    Messaging
    APIで送信可能なLINE絵文字のリストが、従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging
    APIドキュメント』の「送信可能なLINE絵文字リスト」を参照してください。
---

Messaging APIで送信可能なLINE絵文字のリストが、従来のPDFファイルからウェブページに変わって見やすくなりました。詳しくは、『Messaging APIドキュメント』の「[送信可能なLINE絵文字リスト](/docs/messaging-api/emoji-list/)」を参照してください。

![テキストメッセージオブジェクトにプロダクトIDと絵文字IDを指定する](/media/messaging-api/emojis-object/emojis-object-ja.png){className="[\"w-fix-960\",\"border\",\"rounded-sm\",\"p-2\"]"}

使用したいLINE絵文字の`プロダクトID`と`絵文字ID`を、テキストメッセージオブジェクトの`emojis.productId`プロパティと`emojis.emojiId`プロパティに指定することで、ユーザーに絵文字が送信できます。テキストメッセージの送信方法について詳しくは、『Messaging APIドキュメント』の「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。
