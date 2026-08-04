---
title: ブロックチェーンサービスのチャネルにはLIFFアプリを追加できなくなりました
navigation: true
description: >-
  2021年6月17日にお知らせしたとおり、2021年7月20日より、LINE
  Developersコンソールにおいて、ブロックチェーンサービスのチャネルにはLIFFアプリを追加できなくなりました。なおLINEログインおよびLINEミニアプリのチャネルはこの変更の影響を受けません。
meta: >-
  {"date":"2021-07-20 00:00 UTC","tags":"LIFF, Console, LINE
  Blockchain","locale":"ja"}
path: >-
  /ja/_partials/news/2021/2021-07-20-liff-cannot-be-used-with-blockchain-service-channels
__hash__: 5QFs-Yb6e4xbsgkX14EbRQ6YNqEvX-if5Uj3vlamYag
seo:
  title: ブロックチェーンサービスのチャネルにはLIFFアプリを追加できなくなりました
  description: >-
    2021年6月17日にお知らせしたとおり、2021年7月20日より、LINE
    Developersコンソールにおいて、ブロックチェーンサービスのチャネルにはLIFFアプリを追加できなくなりました。なおLINEログインおよびLINEミニアプリのチャネルはこの変更の影響を受けません。
---

[2021年6月17日](/news/2021/06/17/liff-cannot-be-used-with-blockchain-service-channels/)にお知らせしたとおり、2021年7月20日より、LINE Developersコンソールにおいて、ブロックチェーンサービスの[チャネル](/docs/line-developers-console/overview/#channel)にはLIFFアプリを追加できなくなりました。なおLINEログインおよびLINEミニアプリのチャネルはこの変更の影響を受けません。

LIFFアプリを追加できるチャネルタイプの、変更前と変更後の差異については以下の表を参照してください。

| 項目      | 変更前                                                                                                                                           | 変更後（現在）                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| チャネルタイプ | - [LINEログイン](/docs/line-login/) - [LINEミニアプリ](/docs/line-mini-app/) - [ブロックチェーンサービス](https://docs-blockchain.line.biz/){rel="[\"nofollow\"]"} | - [LINEログイン](/docs/line-login/) - [LINEミニアプリ](/docs/line-mini-app/) |

### 仕様変更日

2021年7月20日

### 影響

すでにブロックチェーンサービスチャネルに追加済みのLIFFアプリは、仕様変更後も引き続き動作しますが、:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}となるため以下の制限があります。

- LIFFの機能拡張に対応できません。
- 今後、LIFFアプリが使用できなくなる可能性があります。

制限を受けずに、今後もLIFFのすべての機能を利用したい場合は、「[LINEログインチャネルへの移行](#blockchain-20210720-03)」に従って、LIFFアプリをブロックチェーンサービスチャネルからLINEログインチャネルへ移行してください。

### LINEログインチャネルへの移行

ブロックチェーンサービスチャネルに追加済みのLIFFアプリを、今後も制限なく使用したい場合は、LINEログインチャネルにLIFFアプリを追加し直してください。

LIFFアプリを別のチャネルへ追加し直すと、LIFFアプリIDが再発行されるため、以下の点に注意してください。

- LIFF v2を利用している場合は、`liff.init()`に指定するLIFFアプリIDを変更してください。
- LIFFを起動するためのLIFF URL（例：`https://liff.line.me/1234567890-AbcdEfgh`）が変更されます。

詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
