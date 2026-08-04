---
title: LINEミニアプリのアイコンの仕様とガイドライン
navigation: true
description: アイコンの視認性と品質を常に保証するために、シンボルまたはワードマークを単独で使用してください。
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"jp"}
path: /ja/docs/line-mini-app/design/line-mini-app-icon
__hash__: 59sgWeoDr5VYXHt5y_GVBvvKJlgwx3sKIQ5PFNLwxXo
seo:
  title: LINEミニアプリのアイコンの仕様とガイドライン
  description: アイコンの視認性と品質を常に保証するために、シンボルまたはワードマークを単独で使用してください。
---

# :page-title

:markdown-controlsLINEミニアプリのアイコンは、チャネル同意画面やホームタブ、LINEメッセージ、サービスメッセージなど、さまざまな場所で使用されます。このページでは、アイコンを作成する際に従うべきガイドラインと、アイコン用の画像をアップロードする方法を示します。

- [LINEミニアプリのアイコンの掲載場所](#main-locations)
- [ガイドライン](#guidelines)
- [アイコン用の画像をアップロードする方法](#how-to-upload)

## LINEミニアプリのアイコンの掲載場所

LINEミニアプリのアイコンの主な掲載場所は以下のとおりです。

- [チャネル同意画面](/docs/line-mini-app/develop/configure-console/#consent-screen-settings)
- [ホームタブ](/docs/line-mini-app/discover/introduction/#home-tab)
- [LINEメッセージ](/docs/line-mini-app/discover/introduction/#line-message)
- [サービスメッセージ](/docs/line-mini-app/develop/service-messages/)

![](/media/line-mini-app/line-mini-app-icon/channel-consent-screen-ja.png){className="[\"border\",\"w-fix-160\",\"inline-block\",\"mb-7\",\"mr-1\"]"}![](/media/line-mini-app/line-mini-app-icon/home-tab-ja.png){className="[\"border\",\"w-fix-160\",\"inline-block\",\"mb-7\",\"mr-1\"]"}![](/media/line-mini-app/line-mini-app-icon/line-message-ja.png){className="[\"w-fix-160\",\"inline-block\",\"mb-7\",\"mr-1\"]"}![](/media/line-mini-app/line-mini-app-icon/service-messages-ja.png){className="[\"w-fix-160\",\"inline-block\",\"mb-7\",\"mr-1\"]"}

## ガイドライン

LINEミニアプリのアイコンをデザインする際に従うべきガイドラインを以下に示します。アイコンは、特にモバイル端末において小さく表示されることがあります。どのような場所であってもユーザーがアイコンを視認できるようデザインしてください。

- [禁止事項](#prohibited-matters)
- [必須事項](#required-matters)
- [推奨事項](#recommended-matters)

### 禁止事項

#### LINEミニアプリのロゴの使用

ロゴの中に、以下に示すLINEミニアプリのロゴを含めないでください。

| 日本語                                                                                                            | 英語                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-mini-logo-ja.png){className="[\"w-fix-320\"]"} | ![](/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-mini-logo-en.png){className="[\"w-fix-320\"]"} |

### 必須事項

#### アイコンのサイズ

アイコンの背景領域（BG SIZE）のサイズは、130x130pxにしてください。

![](/media/line-mini-app/mini_icon_background.png)

#### ロゴのサイズ

ロゴのサイズ（LOGO SIZE）は、最小で54x54px、最大で90x90pxにしてください。なお、推奨サイズは54x54pxから76x76pxです。

![](/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-size-ja.png){className="[\"bg-border\"]"}

### 推奨事項

#### ロゴのデザイン

ロゴの視認性と品質を常に保つために、ロゴは単独のシンボルまたはワードマークとしてデザインしてください。

![](/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-design.png){className="[\"w-fix-640\"]"}

::admonition{title="PSD形式のテンプレートファイルを使ってアイコンを作成する（任意）" type="tip"}
アイコンの作成に利用できるPSD形式のテンプレートファイルを提供しています。テンプレートファイルを用いることで、アイコンのアウトラインを設定できます。アウトラインを設定することで、LINEアプリ上でアイコンと同系色の背景の前面にアイコンが掲載された場合でも、アイコンを認識しやすくなります。以下の「テンプレートファイル（PSD形式）」をダウンロードした上で、アイコンを作成してください。

[テンプレートファイル（PSD）をダウンロードする](https://vos.line-scdn.net/line-developers/docs/media/line-mini/icon_template_file.psd){className="[\"btn-in-docs\",\"custom\"]" rel="[\"nofollow\"]"}

テンプレートファイルをもとにアイコンを作成する際は、背景領域の色（Background color）に応じて、輪郭色（Outline Color）を指定してください。このとき、テンプレートファイルにおいて、背景色のタイプを選択することを推奨します。また、テンプレートファイルの未使用のレイヤーは非表示にした上で保存してください。

![](/media/line-mini-app/mini_icon_guideline_color.png){className="[\"w-fix-640\"]"}

| 背景領域の色（Background color） | 輪郭色（Outline color） | 輪郭色の透明度（Outline opacity） |
| ------------------------ | ------------------ | ------------------------ |
| 白（#FFFFFF）               | 黒（#000000）         | 12%                      |
| 黒（#000000 または #181818）   | 白（#FFFFFF）         | 8%                       |
| その他の色                    | 黒（#000000）         | 8%                       |
::

## アイコン用の画像をアップロードする方法

[LINE Developersコンソール](/console/)の［**チャネル基本設定**］タブにある［**チャネルアイコン**］より、アイコン用の画像をアップロードします。アイコンとして利用可能なファイルフォーマットは、PNGとJPEGのみです。

アップロードしたアイコン用の画像は自動で切り抜かれ、アイコンの背景が透過されます。このとき、プレビュー画像において、ロゴが緑の正方形の中に収まっていることを確認してください。

![](/media/line-mini-app/line-mini-app-icon/mini-icon-form-ja.png){className="[\"w-fix-640\"]"}
