---
title: 【更新】Messaging APIのテンプレートメッセージが、デスクトップ版のLINEに対応しました
navigation: true
description: ''
meta: >-
  {"date":"2022-09-21 00:00 UTC","tags":"messaging-api,
  template-messages","locale":"ja"}
path: /ja/_partials/news/2022/2022-09-21-template-messages-updated
__hash__: GmGKdSpk7kb73kq2-KeJgw4ZzIFYVCk-e2uo7UxAUDs
seo:
  title: 【更新】Messaging APIのテンプレートメッセージが、デスクトップ版のLINEに対応しました
  description: ''
---

::admonition{title="2022年9月29日追記" type="note"}
テンプレートメッセージのデスクトップ版のLINEへの対応が完了しました。
::

::admonition{title="2022年9月22日追記" type="note"}
デスクトップ版のLINEへの対応において問題が発生したため、テンプレートメッセージを仕様変更前の状態に戻しております。デスクトップ版のLINEへの対応が完了しましたら、改めてニュースでお知らせいたします。
::

::admonition{title="2022年9月21日 21:00追記" type="note"}
一部のテンプレートメッセージがデスクトップ版のLINEで正常に表示されない現象が発生しています。ご迷惑をお掛けし、誠に申し訳ございません。
::

Messaging APIの:glossary-tooltip[[テンプレートメッセージ](/glossary/#template-message)]{glossary-id="template-message"}が、デスクトップ版（macOS、Windows）のLINEに対応しました。

これまで、テンプレートメッセージはiOS版とAndroid版のLINEにのみ対応していましたが、デスクトップ版のLINEにも対応しました。今回の対応に伴う変更点と対象バージョンは以下のとおりです。

- [表示の変更](#change-of-display-20220921)
- [GIF画像の送信](#send-gif-20220921)
- [対象バージョン](#target-version-20220921)

なお、LIFFの[`liff.sendMessages()`](/reference/liff/#send-messages)メソッドや[`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)メソッドで送信したテンプレートメッセージは、今回の仕様変更の対象外です。

::admonition{title="送信済みのテンプレートメッセージについて" type="tip"}
送信済みのテンプレートメッセージについては、今回の仕様変更の影響はありません。仕様変更後に送信したテンプレートメッセージのみが、仕様変更の対象となります。
::

### 表示の変更

デスクトップ版のLINEへの対応に伴って、テンプレートメッセージの表示で、部分的に軽微な変更があります。なお、レイアウトや、指定するアクションには仕様変更の影響はありません。

### GIF画像の送信

テンプレートのメッセージの`imageUrl`プロパティおよび`thumbnailImageUrl`プロパティでは、GIF形式の画像をサポートしていません。しかし、これまではGIF形式の画像を指定しテンプレートメッセージを送信した場合、GIFアニメーションが再生されることがありました。

仕様変更後は、テンプレートメッセージにGIF形式の画像を指定しても、GIF形式の画像が正常に表示されなくなります。

::admonition{title="サポート対象外のファイル形式の画像は、正常に表示されない場合があります" type="note"}
テンプレートメッセージの`imageUrl`プロパティと`thumbnailImageUrl`プロパティでは、JPEG形式またはPNG形式の画像をサポートしています。
::

### 対象バージョン

仕様変更の対象となるLINEバージョンは以下のとおりです。

| OS      | 対象バージョン   |
| ------- | --------- |
| iOS     | すべてのバージョン |
| Android | すべてのバージョン |
| macOS   | 7.8.1以降   |
| Windows | 7.8.1以降   |
