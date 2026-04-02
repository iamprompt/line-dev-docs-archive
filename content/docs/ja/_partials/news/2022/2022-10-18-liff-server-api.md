---
title: LIFFアプリはMessaging APIチャネルには追加できません
navigation: true
description: >-
  LINEでは、開発者向けにLINE Front-end
  Framework（LIFF）のサーバーAPIを提供しています。サーバーAPIを利用すると、LINEログインチャネルへのLIFFアプリの追加などの操作をAPI経由で行うことができます。
meta: '{"date":"2022-10-18 01:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-10-18-liff-server-api
__hash__: sxrq7YazweO_IaGGs42eFu2UAf3LD5DaVlqDsiwm7j0
seo:
  title: LIFFアプリはMessaging APIチャネルには追加できません
  description: >-
    LINEでは、開発者向けにLINE Front-end
    Framework（LIFF）のサーバーAPIを提供しています。サーバーAPIを利用すると、LINEログインチャネルへのLIFFアプリの追加などの操作をAPI経由で行うことができます。
---

LINEでは、開発者向けにLINE Front-end Framework（LIFF）の[サーバーAPI](/reference/liff-server/)を提供しています。サーバーAPIを利用すると、LINEログインチャネルへのLIFFアプリの追加などの操作をAPI経由で行うことができます。

このサーバーAPIを利用する際に、Messaging APIチャネルのチャネルアクセストークンを指定するケースが見受けられます。しかし、[2020年2月5日のニュース](/news/2020/02/05/liff-channel-type/)でお知らせしたとおり、Messaging APIチャネルにはLIFFアプリを追加できません。

サーバーAPIを利用してチャネルにLIFFアプリを追加する際は、LINEログインチャネルのチャネルアクセストークンを指定してください。詳しくは、『サーバーAPIリファレンス』の「[チャネルアクセストークンを準備する](/reference/liff-server/#preparing-channel-access-token)」を参照してください。
