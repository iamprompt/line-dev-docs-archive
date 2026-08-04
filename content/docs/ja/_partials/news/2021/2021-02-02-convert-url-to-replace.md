---
title: 【更新】LIFFにおいて［連結］で生成されたURLを［置換（後方互換性モード）］仕様に変換するコード例を公開しました
navigation: true
description: ''
meta: '{"date":"2021-02-02 00:00 UTC","tags":"LIFF, LINE MINI app","locale":"ja"}'
path: /ja/_partials/news/2021/2021-02-02-convert-url-to-replace
__hash__: OPAhXew51wjr0Fo2jKZ08KXCVAMF_uGi8dAWa58KDCg
seo:
  title: 【更新】LIFFにおいて［連結］で生成されたURLを［置換（後方互換性モード）］仕様に変換するコード例を公開しました
  description: ''
---

::admonition{title="2021年7月1日追記" type="note"}
[2021年5月31日に告知](/news/2021/05/31/liff-permanent-link-pattern-removed/)したとおり、「［連結］で生成されたURLを［置換（後方互換性モード）］仕様のURLに変換するコード例」は2021年6月末をもって提供終了しました。
::

[2020年11月20日にお知らせ](/news/2020/11/20/discontinue-replace-mode-announcement/)したとおり、2021年3月1日に[LINE Developersコンソール](/console/)で［**LIFF URLの追加情報の処理方法**］の［**置換（後方互換性モード）**］を廃止します。廃止以降、すべてのLIFFアプリおよびLINEミニアプリのURLは［**連結**］で開くようになります。

これに伴い、［**連結**］に移行後もこれまでの［**置換（後方互換性モード）**］の仕様で2次リダイレクト先URLに遷移させる必要のあるLIFFアプリおよびLINEミニアプリのための処理方法を紹介するドキュメントを公開しました。

- [［連結］で生成されたURLを［置換（後方互換性モード）］仕様のURLに変換するコード例](/docs/liff/handle-replace-mode-url/)

このドキュメントでは、［**連結**］によって生成された2次リダイレクト先URLをユーザーがクリックした際、［**置換（後方互換性モード）**］の仕様に従ったURLにリダイレクトさせる処理を行う関数と、そのロジックを紹介しています。

![変換コードを使用すると](/media/liff/liff_url_automatic_convert_function_ja.png){className="[\"border\"]"}

::admonition{title="このドキュメントは期間限定で掲載しています" type="note"}
『LIFFドキュメント』の「[［連結］で生成されたURLを［置換（後方互換性モード）］仕様のURLに変換するコード例](/docs/liff/handle-replace-mode-url/)」は、［**置換（後方互換性モード）**］廃止に伴う［**連結**］への移行のサポートを目的としています。［**置換（後方互換性モード）**］廃止後一定期間が経過したら、該当のページは削除される可能性があります。削除後もコードの処理内容を確認したい場合は、事前に[［連結］で生成された2次リダイレクト先URLを変換する関数をダウンロードする](/docs/liff/handle-replace-mode-url/#download-conversion-function)のダウンロードリンクから関数をダウンロードし、必要に応じて参照してください。
::
