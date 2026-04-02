---
title: 【更新】LIFFブラウザおよびLINE内ブラウザ障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2023-03-30 00:00 UTC","tags":"Outage report, liff,
  line-mini-app","locale":"ja"}
path: /ja/_partials/news/2023/2023-03-30-liff-mini-outage
__hash__: F6Sb8TkeUL-_zpAwnsdloS7cDYvvW72mw42zBRzE1TM
seo:
  title: 【更新】LIFFブラウザおよびLINE内ブラウザ障害のお知らせ
  description: ''
---

::admonition{title="2023年5月19日追記" type="note"}
本障害はiOS 16.5で解消されました。ユーザーが利用しているiOSのバージョンを16.5にアップデートすることで、問題が解消いたします。
::

iOS 16.4上の:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}および:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}において、以下の障害が発生しております。

### 発生日時

2023年3月28日（継続中）※iOS 16.4の場合

### 原因

調査中

[iOS 16.4でWebViewの挙動が変わり位置情報の取得できないという報告](https://developer.apple.com/forums/thread/727174){rel="[\"nofollow\"]"}がApple Developer Forumsで報告されており、LIFFブラウザおよびLINE内ブラウザでも同様の問題が発生しています。

### 不具合が発生する環境

iOS 16.4上の、LIFFブラウザ（LIFFアプリおよびLINEミニアプリ）およびLINE内ブラウザ

### 状況

iOS 16.4上のLIFFブラウザおよびLINE内ブラウザにおいて、位置情報が取得できない

### 本障害の対応について

本障害については、現時点では根本的に解決する方法がありません。なお、本障害に対応するためのLIFF SDKの更新は予定しておりません。

位置情報を取得する際に、タイムアウト処理をしていない場合、ユーザーが長時間待たされてしまう可能性があります。そのため、タイムアウト処理を行い、ユーザーに適切なメッセージを表示する処理を追加することを推奨します。

::admonition{title="タイムアウト処理について" type="tip"}
本障害では、`window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 1000})`というコードの`onSuccess`と`onError`というコールバックがいずれも呼ばれずに、常に待機状態のままとなってしまいます。そのため、`window.setTimeout`などを用いて、一定時間経過しても処理が進まない場合に処理を中断することで対処が可能です。
::

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
