---
title: LINEミニアプリのセーフエリア
navigation: true
description: ノッチがある端末でもLINEミニアプリのすべてを表示するために、CSSを使ってLINEミニアプリがセーフエリアに収まるようにしてください。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"jp"}'
path: /ja/docs/line-mini-app/design/landscape
__hash__: mvdr4YuGlul-LgM-032b2LGOZGvinFM_iQ-S266HB3w
seo:
  title: LINEミニアプリのセーフエリア
  description: ノッチがある端末でもLINEミニアプリのすべてを表示するために、CSSを使ってLINEミニアプリがセーフエリアに収まるようにしてください。
---

# :page-title

:markdown-controlsノッチがある端末でもLINEミニアプリのすべてを表示するために、CSSを使ってLINEミニアプリをセーフエリアに収めることを推奨します。
LINEミニアプリでは、ノーマルモードとランドスケープモードの両方をサポートします。ノーマルモードとランドスケープモードでは、必要なセーフエリアが異なります。

具体的には、LINEミニアプリのページのpaddingを、以下のように設定します。

:toc## ノーマルモードの場合

- 下：34px

paddingの例：

```text
{
  padding-bottom: 34px;
}
```

![](/media/line-mini-app/mini_design_safearea_normal.png){className="[\"w-fix-280\"]"}

## ランドスケープモードの場合

- 左右：44px
- 下：21px

paddingの例：

```text
{
  padding-right: 44px;
  padding-bottom: 21px;
  padding-left: 44px;
}
```

![](/media/line-mini-app/mini_design_safearea_landscape.png){className="[\"w-fix-520\"]"}
