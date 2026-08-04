---
title: イメージマップメッセージの仕様変更が予定されています
navigation: true
description: イメージマップメッセージの仕様変更が予定されています。
meta: '{"date":"2018-10-24 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2018/2018-10-24-imagemap-error-handle-changed
__hash__: atesydspWCKVWdoV0-tvEbktdqQGveSAoBEGSuj-TQI
seo:
  title: イメージマップメッセージの仕様変更が予定されています
  description: イメージマップメッセージの仕様変更が予定されています。
---

[イメージマップメッセージ](/reference/messaging-api/#imagemap-message)の仕様変更が予定されています。

イメージマップメッセージのアクションの設定方法に問題がある場合は、仕様変更後はエラーが発生し、イメージマップメッセージを送信できません。

現在の仕様：

`baseSize`プロパティで指定した画像の幅および高さからはみ出した領域にアクションを設定しても、イメージマップメッセージを送信できます。

※ユーザーの端末に表示されるレイアウトは崩れる場合があります。

変更後の仕様：

`baseSize`プロパティで指定した画像の幅および高さからはみ出した領域にアクションを設定すると、APIリクエストがエラーになり、イメージマップメッセージを送信できません。

仕様変更は、11月5日で始まる週を予定しています。
