---
title: LINEのバージョン12.13.0以降のLIFFブラウザにおいて、外部サイトへの遷移時およびLIFF間遷移時の仕様を変更します
navigation: true
description: LINEのバージョン12.13.0以降のLIFFブラウザにおいて、以下の仕様変更を行います。
meta: '{"date":"2022-08-04 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-08-04-liff-update-line-12-13-0
__hash__: gQOmlUuZ0qPboAmeOuHx90a2EyDlVOz9DFF1EbCEzkA
seo:
  title: LINEのバージョン12.13.0以降のLIFFブラウザにおいて、外部サイトへの遷移時およびLIFF間遷移時の仕様を変更します
  description: LINEのバージョン12.13.0以降のLIFFブラウザにおいて、以下の仕様変更を行います。
---

LINEのバージョン12.13.0以降の:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}において、以下の仕様変更を行います。

- [外部サイトに遷移した場合にポップアップが表示されます](#transition-to-external-site-20220804)
- [LIFF間遷移の仕様を変更します](#liff-to-liff-transition-20220804)

### 外部サイトに遷移した場合にポップアップが表示されます

LIFFブラウザで開いているLIFFアプリから、LIFFアプリでない外部サイトを開いた場合、「外部サイトに遷移した」ということを示すポップアップが表示されます。

![外部サイトに遷移した時のポップアップ](/media/news/2022/liff-opening-external-site-ja.jpg){className="[\"border\",\"w-fix-240\"]"}

ポップアップは、同じウィンドウで外部サイトを開いた場合にのみ表示されます。別のウィンドウで外部サイトを開いた場合は、ポップアップは表示されません。

ポップアップの表示は、LINEのバージョン12.13.0以降のユーザーに対して、順次適用されます。

### LIFF間遷移の仕様を変更します

LIFF URLでLIFF間遷移をした場合の仕様が、以下のように変更されます。パスやクエリパラメータを追加したLIFF URLの場合についても同様です。

- [LIFF間遷移時の画面遷移がスムーズになります](#smooth-transition-20220804)
- [LIFF間遷移後のLIFFアプリでも「liff.sendMessages()」を利用できます](#chat-message-write-20220804)

LIFF URLについて詳しくは、『LIFFドキュメント』の「[LIFFアプリを開く](/docs/liff/opening-liff-app/)」を参照してください。なお、エンドポイントURLにおけるLIFF間遷移は、今回の仕様変更の対象外です。

#### LIFF間遷移時の画面遷移がスムーズになります

LIFF間遷移時に、自動的に実行されていた`liff.login()`によるログイン処理が行われなくなります。これにより、LIFF間遷移時のリダイレクトが発生しなくなるため、画面遷移がスムーズになります。

#### LIFF間遷移後のLIFFアプリでも「liff.sendMessages()」を利用できます

LINEのバージョン12.13.0未満では、LIFFアプリ AからLIFFアプリ Bを開いた場合、遷移後のLIFFアプリ Bでは`chat_message.write`スコープが無効になり、チャネル同意画面にも表示されません。

バージョン12.13.0以降では、遷移後のLIFFアプリ Bの`chat_message.write`スコープが有効になります。これにより、遷移後のLIFFアプリ Bでも`liff.sendMessages()`メソッドを利用できます。

LIFF間遷移について詳しくは、『LIFFドキュメント』の「[LIFFアプリから別のLIFFアプリを開いた場合の動作について（LIFF間遷移）](/docs/liff/opening-liff-app/#move-liff-to-liff)」を参照してください。
