---
title: LIFFブラウザを最小化する
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/minimizing-liff-browser
__hash__: I9RPfpU84xSOa646gnNKpsMMLb3KUTeoQ0Oc_f71dao
seo:
  title: LIFFブラウザを最小化する
  description: ''
---

# :page-title

:markdown-controlsここでは、LIFFブラウザの最小化について説明します。

:toc## LIFFブラウザの最小化とは

:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}の最小化とは、LIFFブラウザの閲覧を中断し、別の操作を行うための機能です。

ユーザーがトークルーム上でLIFFブラウザを閲覧しているとき、トークルームにメッセージを送信するといった別の操作を行いたいことがあります。このとき、LIFFブラウザを最小化すると、LIFFブラウザの閲覧を中断し、別の操作を行うことができます。また、別の操作を行った後、LIFFブラウザを最大化することで、中断したLIFFブラウザの閲覧を再開できます。

LIFFブラウザは、最小化するとアイコンで表示されます。

![LIFFブラウザの最小化](/media/liff/minimizing-liff-app/liff-minimize-ja.png){className="[\"w-fix-960\"]"}

::admonition{title="LINE内ブラウザを最小化する" type="tip"}
LIFFブラウザと同様に、:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}も最小化に対応しています。詳しくは、『LINEみんなの使い方ガイド』の「[閲覧中のWEBページを最小化する](https://guide.line.me/ja/chats-calls-notifications/chats/minimizebrowser.html){rel="[\"nofollow\"]"}」を参照してください。
::

## LIFFブラウザの最小化の使用条件

LIFFブラウザを最小化するには、以下の条件をすべて満たす必要があります。

- iOS版LINEバージョン12.18.0以降またはAndroid版LINEバージョン15.0.0以降
- 端末の［**設定**］ > ［**アプリ**］ > ［**LINE**］ > ［**他のアプリの上に重ねて表示**］がオン（Android版LINEのみ）
- LIFFアプリの[画面サイズ](/docs/liff/overview/#screen-size)に`Full`を指定
- LIFFアプリの[`chat_message.write`スコープ](/docs/liff/registering-liff-apps/#registering-liff-app)がオフ
- LIFFブラウザがモーダルの上に重なっていない

::admonition{title="LIFF間遷移後のLIFFアプリが使用条件を満たす必要があります" type="note"}
[LIFF間遷移](/docs/liff/opening-liff-app/#move-liff-to-liff)後のLIFFブラウザを最小化するには、遷移後のLIFFアプリが使用条件を満たす必要があります。

たとえば、「[LIFFアプリの画面サイズによる動作](/docs/liff/opening-liff-app/#behavior-by-screen-size)」にあるように、遷移後のLIFFアプリは画面サイズの指定にかかわらず`Full`で表示されます。しかし、遷移後のLIFFアプリの画面サイズに`Tall`や`Compact`を指定している場合、遷移後のLIFFアプリはLIFFブラウザの最小化の使用条件を満たしません。
::

なお、iPadOS版LINEについては、LIFFブラウザの最小化に対応予定ですが、時期は未定です。

## LIFFブラウザを最小化する

LIFFブラウザを最小化するには、以下の3つの方法があります。

- [アクションボタンからオプションをタップする](#tap-action-button-option)
- [アプリ内通知をタップする](#tap-in-app-alert)
- [LIFFブラウザをスワイプする](#swipe-liff-browser)

### アクションボタンからオプションをタップする

[アクションボタン](/docs/liff/overview/#action-button)からドロップダウンメニューを開き、［**ページを最小化**］オプションをタップします。

![](/media/liff/minimizing-liff-app/tap-action-button-ja.png){className="[\"border\",\"w-fix-300\"]"}

### アプリ内通知をタップする

アプリ内通知をタップします。

![LIFFブラウザの最小化（アプリ内通知をタップする）](/media/liff/minimizing-liff-app/tap-in-app-alert.png){className="[\"w-fix-600\"]"}

### LIFFブラウザをスワイプする

LIFFブラウザを下方向へスワイプします。

![LIFFブラウザの最小化（LIFFブラウザをスワイプする）](/media/liff/minimizing-liff-app/swipe-liff-browser-ja.png){className="[\"w-fix-600\"]"}

### アクションボタンからオプションをタップする（LINEバージョン26.7.0未満の場合）

[アクションボタン](/docs/liff/overview/#action-button)から[マルチタブビュー](/docs/liff/overview/#multi-tab-view)を開き、［**ページを最小化**］オプションをタップします。

![LIFFブラウザの最小化（アクションボタンのオプションをタップする）](/media/liff/minimizing-liff-app/tap-action-button-option-ja.png){className="[\"w-fix-960\"]"}

## LIFFブラウザを最大化する

LIFFブラウザを最大化するには、最小化したLIFFブラウザをタップします。

![LIFFブラウザの最大化](/media/liff/minimizing-liff-app/maximize-liff-browser-ja.png){className="[\"w-fix-600\"]"}

## 最小化したLIFFブラウザを移動する

最小化したLIFFブラウザを移動するには、ドラッグします。

![最小化したLIFFブラウザの移動](/media/liff/minimizing-liff-app/move-minimized-liff-browser-ja.png){className="[\"w-fix-600\"]"}

## 最小化したLIFFブラウザを閉じる（LINEバージョン15.20.0未満の場合）

LINEバージョン15.20.0未満の場合、最小化したLIFFブラウザを閉じるには、以下の2つの方法があります。

- [LIFFブラウザを画面外にスワイプする（iOS版LINEのみ）](#close-minimized-liff-browser-1)
- [LIFFブラウザを閉じるアイコンにドラッグする ](#close-minimized-liff-browser-2)

### LIFFブラウザを画面外にスワイプする（iOS版LINEのみ）

最小化したLIFFブラウザを、画面外にスワイプします。

![最小化したLIFFブラウザを閉じる](/media/liff/minimizing-liff-app/close-minimized-liff-browser-ja.png){className="[\"w-fix-600\"]"}

### LIFFブラウザを閉じるアイコンにドラッグする

最小化したLIFFブラウザをドラッグすると、画面下に閉じるアイコンが表示されます。閉じるアイコンに最小化したLIFFブラウザをドラッグし、指を離します。

![最小化したLIFFブラウザを閉じる](/media/liff/minimizing-liff-app/close-minimized-liff-browser-ios-12-12-0-or-later-ja.png)

## 最小化したLIFFブラウザを閉じる（LINEバージョン15.20.0以降の場合）

LINEバージョン15.20.0以降の場合、最小化したLIFFブラウザの右上に表示される閉じるボタンを押すと、LIFFブラウザを閉じることができます。

![最小化したLIFFブラウザを閉じる](/media/liff/minimizing-liff-app/close-minimized-liff-browser-line-15-20-0-or-later-ja.png){className="[\"w-fix-300\"]"}

## LIFFブラウザのアイコン表示の優先順位

LIFFブラウザは、最小化するとアイコンで表示されます。アイコン表示の優先順位は以下のとおりです。

1. チャネルアイコン：LINEログインチャネルのチャネルアイコン
2. ファビコン：LIFFアプリのファビコン
3. 共通アイコン：リンクマークのアイコン
