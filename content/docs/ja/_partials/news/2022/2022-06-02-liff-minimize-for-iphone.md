---
title: iOS版LINEバージョン12.8.0以降でLIFFブラウザを最小化できるようになりました
navigation: true
description: iOS版LINEバージョン12.8.0以降で、トークルーム上で開いたLIFFブラウザを最小化できるようになりました。
meta: '{"date":"2022-06-02 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-06-02-liff-minimize-for-iphone
__hash__: r-wYFKn66-zZkcLisVSLiB-mhada27DUOxMmTR8ZKzM
seo:
  title: iOS版LINEバージョン12.8.0以降でLIFFブラウザを最小化できるようになりました
  description: iOS版LINEバージョン12.8.0以降で、トークルーム上で開いたLIFFブラウザを最小化できるようになりました。
---

iOS版LINEバージョン12.8.0以降で、トークルーム上で開いた:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}を最小化できるようになりました。

![LIFFブラウザの最小化](/media/liff/minimizing-liff-app/liff-minimize-ja.png)

これまでは、トークルーム上でLIFFブラウザを閲覧しているとき、トークルームにメッセージを送信するといった別の操作を行うには、LIFFブラウザを閉じる必要がありました。また、別の操作を行った後、LIFFブラウザに戻るには、LIFFブラウザを開き直す必要がありました。

iOS版LINEバージョン12.8.0以降では、別の操作を行うために、LIFFブラウザを閉じる必要がなくなりました。LIFFブラウザを最小化することで、LIFFブラウザの閲覧を中断し、別の操作を行うことができます。また、別の操作を行った後、LIFFブラウザを最大化することで、中断したLIFFブラウザの閲覧を再開できます。

### LIFFブラウザの最小化の使用条件

LIFFブラウザを最小化するには、以下の条件をすべて満たす必要があります。

- iOS版LINEバージョン12.8.0以降
- LIFFアプリの[画面サイズ](/docs/liff/overview/#screen-size)に`Full`を指定
- LIFFアプリの[`chat_message.write`スコープ](/docs/liff/registering-liff-apps/#registering-liff-app)がオフ
- LIFFブラウザがモーダルの上に重なっていない

::admonition{title="LIFF間遷移後のLIFFアプリが使用条件を満たす必要があります" type="note"}
[LIFF間遷移](/docs/liff/opening-liff-app/#move-liff-to-liff)後のLIFFブラウザを最小化するには、遷移後のLIFFアプリが使用条件を満たす必要があります。

たとえば、『LIFFドキュメント』の「[LIFFアプリの画面サイズによる動作](/docs/liff/opening-liff-app/#behavior-by-screen-size)」にあるように、遷移後のLIFFアプリは画面サイズの指定にかかわらず`Full`で表示されます。しかし、遷移後のLIFFアプリの画面サイズに`Tall`や`Compact`を指定している場合、遷移後のLIFFアプリはLIFFブラウザの最小化の使用条件を満たしません。
::

なお、iPadOS版LINEおよびAndroid版LINEについては、LIFFブラウザの最小化に対応予定ですが、時期は未定です。

LIFFブラウザの最小化について詳しくは、『LIFFドキュメント』の「[LIFFブラウザを最小化する](/docs/liff/minimizing-liff-browser/)」を参照してください。
