---
title: LINE Social Pluginsの概要
navigation: true
description: >-
  LINE Social
  Pluginsは、ユーザーがLINEでコンテンツを簡単に共有したり、コンテンツにリアクションしたりできるように、ウェブサイトとLINEを連携させるためのプラグインを提供します。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-social-plugins/general/overview
__hash__: 8PKl5egtSn35FNRyKbobAab03pu0vJk7eo1k4FHkJL4
seo:
  title: LINE Social Pluginsの概要
  description: >-
    LINE Social
    Pluginsは、ユーザーがLINEでコンテンツを簡単に共有したり、コンテンツにリアクションしたりできるように、ウェブサイトとLINEを連携させるためのプラグインを提供します。
---

# :page-title

LINE Social Pluginsは、ユーザーがLINEでコンテンツを簡単に共有したり、コンテンツにリアクションしたりできるように、ウェブサイトとLINEを連携させるためのプラグインを提供します。

## プラグインの種類

プラグインとして「LINEで送る」、「友だち追加」、「いいね」の3種類のボタンが利用できます。

1. 「LINEで送る」ボタン   

ウェブサイトの訪問者が、ページのリンクをLINEのトークルームでシェアしたり、Keepメモに保存したりできます。
2. 「友だち追加」ボタン   

ウェブサイトの訪問者が、あなたのLINE公式アカウントをLINEの友だちに追加できます。このボタンを利用するには、LINE公式アカウントが必要です。
3. 「いいね」ボタン   

ウェブサイトの訪問者が、コンテンツに「いいね」することができます。そのため、「いいね」数に基づきコンテンツのパフォーマンスを測定できるようになります。   

※AppleのITPポリシーにより、Safariで「いいね」ボタンが正常に動作しない場合があります。

## プラグインの仕組み

1. ユーザーがLINE Social Pluginsボタンが設置されたウェブページにアクセスします。

2～3. 各ボタンのコードがLINE Social Plugins SDKを介してウェブサイトに動的に読み込まれ、ボタンがウェブサイトに表示されます。

1. ウェブページにアクセスしたユーザーが「LINEで送る」ボタンをクリックすると、LINE Social Pluginsのページに移動します。ユーザーはそこでLINEにログインする必要があります。
2. ユーザーはLINEにログインして、ウェブページの情報を友だちにシェアします。

![プラグインの仕組み](/media/line-social-plugins/ja/overview.png){className="[\"w-fix-440\"]"}

:bottom-plugin
