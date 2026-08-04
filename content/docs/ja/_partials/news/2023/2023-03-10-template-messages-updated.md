---
title: LIFFのメソッドで送信したテンプレートメッセージが、デスクトップ版のLINEに対応しました
navigation: true
description: >-
  LIFFのliff.sendMessages()メソッドやliff.shareTargetPicker()メソッドで送信したテンプレートメッセージが、デスクトップ版（macOS、Windows）のLINEに対応しました。
meta: >-
  {"date":"2023-03-10 00:00 UTC","tags":"messaging-api, template-messages,
  liff","locale":"ja"}
path: /ja/_partials/news/2023/2023-03-10-template-messages-updated
__hash__: liGmaQe6f5gstRz06HhRVYsUPEORwWbKfrsT5ViBftk
seo:
  title: LIFFのメソッドで送信したテンプレートメッセージが、デスクトップ版のLINEに対応しました
  description: >-
    LIFFのliff.sendMessages()メソッドやliff.shareTargetPicker()メソッドで送信したテンプレートメッセージが、デスクトップ版（macOS、Windows）のLINEに対応しました。
---

LIFFの[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドや[`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)メソッドで送信した:glossary-tooltip[[テンプレートメッセージ](/glossary/#template-message)]{glossary-id="template-message"}が、デスクトップ版（macOS、Windows）のLINEに対応しました。

Messaging APIのテンプレートメッセージは、2022年9月21日よりデスクトップ版のLINEに対応していましたが、LIFFのメソッドで送信したものについては対象外となっていました。

この対応に伴う変更点と対象バージョンについては、2022年9月21日のニュース、「[Messaging APIのテンプレートメッセージが、デスクトップ版のLINEに対応しました](/news/2022/09/21/template-messages-updated/)」を参照してください。

なお今回の仕様変更の対象は、仕様変更後に送信したテンプレートメッセージのみです。送信済みのテンプレートメッセージについては、仕様変更の影響はありません。
