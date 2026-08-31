---
title: 2026年10月7日より、LIFF URLのクエリパラメータの値に含まれる「?」の処理が変更されます
navigation: true
description: >-
  2026年10月7日リリース予定のLIFF v2.31.1以降、LIFF URLのクエリパラメータの値に含まれる?の処理を変更します。これにより、LIFF
  URLへのアクセス時に生成される2次リダイレクト先URLが変わる場合があります。
meta: '{"date":"2026-08-31 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2026/2026-08-31-liff-query-parameter-change
__hash__: i9sSgfbTbgmKqlPMGAGWoTTvjrKH2vSsXCsZolv5it4
seo:
  title: 2026年10月7日より、LIFF URLのクエリパラメータの値に含まれる「?」の処理が変更されます
  description: >-
    2026年10月7日リリース予定のLIFF v2.31.1以降、LIFF
    URLのクエリパラメータの値に含まれる?の処理を変更します。これにより、LIFF
    URLへのアクセス時に生成される2次リダイレクト先URLが変わる場合があります。
---

2026年10月7日リリース予定のLIFF v2.31.1以降、:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}のクエリパラメータの値に含まれる`?`の処理を変更します。これにより、LIFF URLへのアクセス時に生成される2次リダイレクト先URLが変わる場合があります。

### 仕様変更予定日

2026年10月7日

### 対象バージョン

LIFF v2.31.1以降

### 変更点

LIFFアプリでは、ユーザーがLIFF URLにアクセスすると、1次リダイレクト先URLに遷移した後、[2次リダイレクト先URLに遷移します](/docs/liff/opening-liff-app/#redirect-flow)。LIFF v2.31.1以降は、:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}でLIFF URLのクエリパラメータの値を2次リダイレクト先URLに復元する実装の一部が変わります。以下の[具体例](#examples-20260831)に示すように、クエリパラメータの値に含まれる`?`が`&`に置き換えられなくなります。

なお、今回の変更はLIFFアプリをLIFFブラウザで開いた場合が対象です。LIFFアプリを:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}で開いた場合は、今回の変更による挙動の変化はありません。

### 具体例

LIFFアプリのエンドポイントURLが`https://example.com`の場合に、`https://liff.line.me/{liffId}/?key=foo?bar`にアクセスしたとします。このとき、2次リダイレクト先URLは変更前と変更後で以下のようになります。

| 変更前（現在）                           | 変更後（LIFF v2.31.1以降）               |
| --------------------------------- | --------------------------------- |
| `https://example.com?key=foo&bar` | `https://example.com?key=foo?bar` |

また、クエリパラメータの値に含まれる`?`をパーセントエンコードして、`https://liff.line.me/{liffId}/?key=foo%3Fbar`のようなLIFF URLにアクセスする場合も、アクセス方法によっては影響があります。LIFFアプリをLIFFブラウザで開く方法ごとの変更前と変更後の挙動については、以下の表を参照してください。

| アクセス方法                | 変更前（現在）                             | 変更後（LIFF v2.31.1以降）               |
| --------------------- | ----------------------------------- | --------------------------------- |
| iOS端末でLINEアプリ以外からアクセス | `https://example.com?key=foo&bar`   | `https://example.com?key=foo?bar` |
| iOS端末でLINEアプリからアクセス   | `https://example.com?key=foo%3Fbar` | 変更なし                              |
| Android端末でアクセス        | `https://example.com?key=foo%3Fbar` | 変更なし                              |

### 仕様変更に伴う注意点

LIFFブラウザでLIFFアプリを開く際、URLを値として持つクエリパラメータを使用していると、今回の変更の影響を受ける可能性があります（例：`return_url`に遷移元のURLを保持する場合）。また、クエリパラメータの値をパーセントエンコードしている場合でも、アクセス方法によっては影響を受けることがあります。

LIFFアプリが仕様変更前の処理に依存している場合、仕様変更後に正常に動作しなくなる可能性があります。変更前と変更後のどちらでも問題なく処理できるよう、LIFFアプリを実装することを推奨します。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
