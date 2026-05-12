---
title: 【更新】LIFF/LINEミニアプリ障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2026-05-11 00:00 UTC","tags":"outage-report, liff,
  line-mini-app","locale":"ja"}
path: /ja/_partials/news/2026/2026-05-11-liff-outage
__hash__: cxYW4F1MkuEBlNCnr1gWZ_QIpibYYEFMzaMeAEmWYts
seo:
  title: 【更新】LIFF/LINEミニアプリ障害のお知らせ
  description: ''
---

::admonition{title="2026年5月12日追記" type="note"}
「[回避策](#workaround-20260511)」を追記しました。
::

LIFF/LINEミニアプリにおいて以下の障害が発生しております。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

## 発生日時

2026年4月27日（継続中）

## 原因

Android版LINEバージョン26.6.0および26.6.1の不具合

## 状況

LIFF/LINEミニアプリにおいて、特定の条件下で以下のような事象が発生しています。

- ユーザープロフィールが取得できない
- LIFF APIが正常に動作しない

## 影響範囲

以下の条件をすべて満たす場合に問題が発生しています。

- ユーザーがAndroid版LINEを利用している
- ユーザーが利用しているLINEのバージョンが`26.6.0`または`26.6.1`である
- LIFFブラウザが開いている状態で、[インテント](https://developer.android.com/guide/components/intents-filters){rel="[\"nofollow\"]"}や[アプリリンク](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}を使って、同一または別のLIFF/LINEミニアプリを起動した

## 回避策

本障害では、LIFF SDKが無効なアクセストークンを参照した場合に問題が発生します。LIFF/LINEミニアプリ側で以下の手順を実行することで、問題を回避できる可能性があります。

- LIFF/LINEミニアプリから同一または別のLIFF/LINEミニアプリを起動する場合は、`location.href`を使用して遷移させてください。
- LIFF/LINEミニアプリにおいて、本事象に起因する可能性のあるLIFF SDKのエラー（例：エラーコード`invalid_request`）が検知された場合は、[`liff.logout()`](/reference/liff/#logout)メソッドを実行した後に[`liff.login()`](/reference/liff/#login)メソッドを以下のように実行してください。

```javascript
const params = new URLSearchParams(location.search)
const liffState = params.get('liff.state')
const redirectUri = liffState
    ? new URL('.' + liffState, location.href).toString()
    : location.href
liff.login({ redirectUri })
```

現在Android版LINEの修正版を準備中です。修正版がリリースされ次第、このニュースを更新してお知らせいたします。

  
お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
