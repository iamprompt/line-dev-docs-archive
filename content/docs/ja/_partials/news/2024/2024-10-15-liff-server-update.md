---
title: 2024年11月11日以降に、LINEアプリとLIFF SDKの特定のバージョンにおいて、LIFFの一部機能で生成されるURLの結果が変わります
navigation: true
description: >-
  2024年11月11日に、LIFFのサーバー側において更新作業を予定しています。これに伴い、LINEアプリとLIFF
  SDKの特定のバージョンにおいて、LIFFアプリのヘッダーに表示されるアクションボタン内のシェアボタンや、liff.permanentLink.createUrlBy()メソッドで生成されるURLの結果が変わりますのでお知らせします。
meta: '{"date":"2024-10-15 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2024/2024-10-15-liff-server-update
__hash__: clCPT0rhZPiTF_UIrDYvM0B_lFbA4tzWjwCOuA-wSc8
seo:
  title: 2024年11月11日以降に、LINEアプリとLIFF SDKの特定のバージョンにおいて、LIFFの一部機能で生成されるURLの結果が変わります
  description: >-
    2024年11月11日に、LIFFのサーバー側において更新作業を予定しています。これに伴い、LINEアプリとLIFF
    SDKの特定のバージョンにおいて、LIFFアプリのヘッダーに表示されるアクションボタン内のシェアボタンや、liff.permanentLink.createUrlBy()メソッドで生成されるURLの結果が変わりますのでお知らせします。
---

2024年11月11日に、LIFFのサーバー側において更新作業を予定しています。これに伴い、LINEアプリとLIFF SDKの特定のバージョンにおいて、LIFFアプリのヘッダーに表示される[アクションボタン](/docs/liff/overview/#action-button)内のシェアボタンや、[`liff.permanentLink.createUrlBy()`](/reference/liff/#permanent-link-create-url-by)メソッドで生成されるURLの結果が変わりますのでお知らせします。

### 仕様変更予定日

2024年11月11日

なお、この仕様変更の内容および日時は、変更される可能性があります。

### 影響範囲

LIFFアプリが動作するLINEアプリのバージョンや、LIFF SDKのバージョンによって、影響範囲が異なります。以下に示す各バージョンや機能において、生成されるURLの結果が変わります。

| 対象       | バージョン                        | 機能                                 |
| -------- | ---------------------------- | ---------------------------------- |
| LINEアプリ  | 13.8.0未満または14.19.0以上         | LIFFアプリのヘッダーのシェアボタン                |
| LIFF SDK | 2.18.0以上2.22.1未満、または2.25.0以上 | `liff.permanentLink.createUrlBy()` |

なお、上記以外のバージョンにおいては、更新作業後も現在と同じ挙動になります。

### 変更点

LIFFのサーバー側において、URLの処理を[RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986){rel="[\"nofollow\"]"}に準拠するための変更を行います。これに伴い、LIFFアプリのシェアボタンや、`liff.permanentLink.createUrlBy()`メソッドにより取得できる:glossary-tooltip[[パーマネントリンク](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}のクエリにおいて、文字やコードの生成結果が以下のように変わります。

| 文字やコード | 変更前（現在） | 変更後   |
| ------ | ------- | ----- |
| `+`    | `+`     | `%2B` |
| `*`    | `*`     | `%2A` |
| `%7E`  | `%7E`   | `~`   |
| `%20`  | `+`     | `%20` |
| `;` ※  | 削除される   | `%3B` |

※ `;`の処理結果は、`;`がクエリの末尾にある場合にのみ適用されます。

### 具体例

::admonition{title="2024年11月11日追記" type="note"}
以下の例において、`liff.permanentLink.createUrlBy()`メソッドに渡す引数のクエリを`key=a+b`としていましたが、正しくは`key=a%20b`です。訂正してお詫びします。
::

たとえば、LIFFアプリのエンドポイントURLが`https://example.com`の場合に、`liff.permanentLink.createUrlBy()`メソッドの引数に`https://example.com/?key=a%20b`を渡したとします。このとき、取得できるパーマネントリンクは、変更前と後で以下のように変わります。

| 変更前（現在）                                  | 変更後                                        |
| ---------------------------------------- | ------------------------------------------ |
| `https://liff.line.me/{liffId}/?key=a+b` | `https://liff.line.me/{liffId}/?key=a%20b` |

この例において、運用中のLIFFアプリで`+`を`%20`として処理している場合は、今回の変更によって`%20`の生成結果が変わることによる影響を受けません。

### 仕様変更に伴う注意点

[影響範囲](#impact-20241015)で示したとおり、ユーザー端末のLINEアプリのバージョンによっては、今回の変更の影響を受ける場合と受けない場合があります。どちらの場合でも問題なく処理できるよう、LIFFアプリを実装してください。

### お問い合わせ

今回の変更に伴い、運用中のLIFFアプリに問題が発生した場合は、[お問い合わせフォーム](https://contact-cc.line.me/detailId/14043){rel="[\"nofollow\"]"}よりご連絡ください。フォーム内の「1)お困りの状況をお聞かせください」というフィールドでは、「不具合に関するお問い合わせ」を選択してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
