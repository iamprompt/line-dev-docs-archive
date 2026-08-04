---
title: LIFFの機能を試せるウェブアプリ「LIFFプレイグラウンド」のソースコードを公開しました
navigation: true
description: >-
  LINEでは開発者向けにLIFFプレイグラウンドというウェブアプリ（LIFFアプリ）を提供しています。LIFFプレイグラウンドではLIFFの基本的な機能が試せます。このLIFFプレイグラウンドのソースコードをGitHubで公開しました。
meta: '{"date":"2022-02-16 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-02-16-liff-playground
__hash__: dR9WYTuTlKHWbH3lXEzAsofquU_Gvr2-Rupjm83E8-0
seo:
  title: LIFFの機能を試せるウェブアプリ「LIFFプレイグラウンド」のソースコードを公開しました
  description: >-
    LINEでは開発者向けにLIFFプレイグラウンドというウェブアプリ（LIFFアプリ）を提供しています。LIFFプレイグラウンドではLIFFの基本的な機能が試せます。このLIFFプレイグラウンドのソースコードをGitHubで公開しました。
---

LINEでは開発者向けに[LIFFプレイグラウンド](https://liff-playground.netlify.app/){rel="[\"nofollow\"]"}というウェブアプリ（LIFFアプリ）を提供しています。LIFFプレイグラウンドではLIFFの基本的な機能が試せます。この[LIFFプレイグラウンドのソースコード](https://github.com/line/liff-playground){rel="[\"nofollow\"]"}をGitHubで公開しました。

ソースコードの公開により、開発者は自身のLIFF IDを設定して、独自のLIFFプレイグラウンドを実行できるようになります。例えば開発者のLIFF IDをもとに`liff.login()`や`liff.getProfile()`といった各クライアントAPIをウェブ上で実行できます。

![LIFFプレイグラウンド](/media/news/liff-playground.png){className="[\"border\",\"w-fix-480\"]"}

LIFFプレイグラウンドの始め方について詳しくは、[GitHubリポジトリ](https://github.com/line/liff-playground){rel="[\"nofollow\"]"}のREADMEを参照してください。

::admonition{title="LIFFスターターアプリとの違い" type="tip"}
LINEでは以前より[LIFFスターターアプリのソースコード](https://github.com/line/line-liff-v2-starter){rel="[\"nofollow\"]"}をGitHubで公開しています。 LIFFスターターアプリは、LIFFアプリ開発に必要な最低限の機能を持ったテンプレートです。

LIFFスターターアプリについて詳しくは、『LIFFドキュメント』の「[LIFFスターターアプリを試してみる](/docs/liff/trying-liff-app/)」を参照してください。
::
