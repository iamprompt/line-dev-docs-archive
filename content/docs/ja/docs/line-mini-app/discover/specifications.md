---
title: LINEミニアプリの仕様
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/discover/specifications
__hash__: XeDdI9G8Q8gTqncHrH_aDElUXOgWxdbUH6oRL4PRWKQ
seo:
  title: LINEミニアプリの仕様
  description: null
---

# :page-title

:markdown-controlsLINEミニアプリの開発に関する仕様を説明します。

:toc## HTML5サポート

LINEミニアプリを開発する場合は、[HTML5](https://html.spec.whatwg.org/){rel="[\"nofollow\"]"}のほとんどの仕様を使用できます。たとえば、[Geolocation API](https://www.w3.org/TR/geolocation/){rel="[\"nofollow\"]"}を使用して、ユーザーの位置情報を取得し、近くの店舗の情報をユーザーに提供できます。Google Maps APIなど、HTML5と互換性のあるほとんどのMap APIも使用できます。

![](/media/line-mini-app/mini_map_api.webp){className="[\"w-fix-280\"]"}

### 対応メディア形式

HTML5でサポートされているメディア形式は、LINEミニアプリでサポートされています。以下のHTML5の仕様を参照してください。

- [img 要素](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element){rel="[\"nofollow\"]"}
- [Media 要素](https://html.spec.whatwg.org/multipage/media.html){rel="[\"nofollow\"]"}

### ブラウザにおけるHTML5のサポート状況

外部ブラウザにおけるHTML5のサポート状況を調べるには、以下のサイトが便利です。

- [https://caniuse.com](https://caniuse.com/){rel="[\"nofollow\"]"}

## 対応プラットフォームとバージョン

LINEミニアプリは、[LIFF](/docs/liff/overview/)を使用して開発します。そのため、LINEミニアプリの対応するOSバージョンとLINEバージョンは、LIFFの[推奨環境](/docs/liff/overview/#operating-environment)に準拠しています。

::admonition{title="注意" type="note"}
サポートされているバージョンは、予告なしに変更される場合があります。
::

### 外部ブラウザでLINEミニアプリを開く場合

::admonition{title="2025年10月1日より外部ブラウザでLINEミニアプリを利用できるようになりました" type="tip"}
外部ブラウザでLINEミニアプリを開いた場合に、表示される画面が変更されました。詳しくは、2025年9月26日のニュース、「[LINEミニアプリにおいて、2025年10月1日よりすべてのユーザーがウェブブラウザでサービスを利用できるようになります](/news/2025/09/26/mini-app-browser/)」を参照してください。
::

LINE未使用ユーザー、もしくは[ディープリンク](https://en.wikipedia.org/wiki/Mobile_deep_linking){rel="[\"nofollow\"]"}が動作しない状況にあるLINEユーザーが、:glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}でLINEミニアプリを開くと、以下の図のようなページが表示され、LINEミニアプリをスマートフォン版LINE（:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}）で開くように案内されます。ページ内の［**ウェブブラウザで開く**］をタップすると、LIFFのエンドポイントURLのページがウェブブラウザで表示されます。

![](/media/line-mini-app/landing-page-ja.png){className="[\"w-fix-640\"]"}

## LIFFの対応バージョン

LINEミニアプリは、[LIFF](/docs/liff/overview/)を使用して開発します。 LINEミニアプリで使用できるLIFF SDKの最小バージョンはv2.1です。

LINEミニアプリでは、LIFF v2.1.xが提供するすべてのLIFF APIを使用できます。
