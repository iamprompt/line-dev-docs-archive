---
title: LIFFアプリおよびLINEミニアプリの「セーフエリア」の取り扱いが厳格化します
navigation: true
description: iOS版およびiPadOS版LINE v11.0.0以降、「セーフエリア」の取り扱いが厳格化します。
meta: '{"date":"2021-01-21 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2021/2021-01-21-about-liff-safe-area
__hash__: NPbm1cwFIvHymr3PlqqDf4WRI-NFVoZxAzAW01iZX-c
seo:
  title: LIFFアプリおよびLINEミニアプリの「セーフエリア」の取り扱いが厳格化します
  description: iOS版およびiPadOS版LINE v11.0.0以降、「セーフエリア」の取り扱いが厳格化します。
---

iOS版およびiPadOS版LINE v11.0.0以降、「セーフエリア」の取り扱いが厳格化します。

今後は、iPhone Xなど角丸のディスプレイを持つデバイスにおいて、[画面サイズ](/docs/liff/overview/#screen-size)を`Full`に指定したLIFFアプリおよびLINEミニアプリをディスプレイ全体を覆うレイアウトで表示するには、`<meta>`タグに`viewport-fit=cover`を指定する必要があります。

**"viewport-fit=cover"指定の例**

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
```

ただし、現行のiOSおよびiPadOSによる不具合のため、LINE v11.0.0では、`<meta>`タグに`viewport-fit=cover`を指定してもセーフエリアが無効化されないことが確認されています。今後のLINEのバージョンアップで修正を予定しています。

::admonition{title="LINE v11.0.0でセーフエリアを無効化するには" type="tip"}
LINE v11.0.0でも、ディスプレイ全体にレイアウトしたい場合は、`viewport-fit=cover`を指定したうえで、CSSで`<html>`タグに`height: 100vh`を指定することで、セーフエリアを無効化できます。

```css
html { height: 100vh; }
```
::

::admonition{title="「セーフエリア」とは" type="tip"}
iOSおよびiPadOSの「セーフエリア」とは、角丸のディスプレイを持つデバイスで、ヘッダー/フッター部分に余白を残し、安全にレイアウトできる領域のことを指します。通常HTML内の`<meta>`タグに`viewport-fit=cover`を指定することで、セーフエリアを無効化し、ディスプレイ全体にレイアウトすることができます。

![safe area](/media/news/safe-area_ja.png){className="[\"w-fix-600\"]"}

セーフエリアについて詳しくは、『Apple Developer』の「[Layout Guides and Safe Area](https://developer.apple.com/design/human-interface-guidelines/foundations/layout/){rel="[\"nofollow\"]"}」を参照してください。
::
