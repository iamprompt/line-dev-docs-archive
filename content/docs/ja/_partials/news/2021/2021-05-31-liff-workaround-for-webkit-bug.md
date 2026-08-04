---
title: LIFF間遷移前のLIFFアプリに戻る際にコンテンツが正しく表示されなくなる不具合に暫定的な対応を行いました
navigation: true
description: >-
  iOS14.5.x上のLINEまたはSafari、もしくはmacOS上のSafari
  14.xにおいて、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF
  URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が発生していました。
meta: '{"date":"2021-05-31 01:00 UTC","tags":"LIFF, LINE MINI app","locale":"ja"}'
path: /ja/_partials/news/2021/2021-05-31-liff-workaround-for-webkit-bug
__hash__: XF7zcrQ8xYgyQZCSI47vUXszY_OahQYF87OpGImJlys
seo:
  title: LIFF間遷移前のLIFFアプリに戻る際にコンテンツが正しく表示されなくなる不具合に暫定的な対応を行いました
  description: >-
    iOS14.5.x上のLINEまたはSafari、もしくはmacOS上のSafari
    14.xにおいて、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF
    URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が発生していました。
---

iOS14.5.x上のLINEまたはSafari、もしくはmacOS上のSafari 14.xにおいて、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が発生していました。

**LIFF間遷移前のLIFFアプリに戻ると画面が空白になる**

![LIFF間遷移前のLIFFアプリに戻ると画面が空白になる図](/media/news/content-vanish-bug.png){className="[\"w-fix-680\"]"}

### 不具合が発生する環境

- iOS 14.5.x上のLINEおよびSafari
- macOS上のSafari 14.x

### 不具合の原因

本現象は、[Apple WebKit](https://developer.apple.com/documentation/webkit){rel="[\"nofollow\"]"}の不具合の影響で発生します。

すでに[WebKit Bugzilla](https://bugs.webkit.org/show_bug.cgi?id=226323){rel="[\"nofollow\"]"}へ問題の報告と調査を依頼していますが、暫定的な措置としてLIFFサーバー側でLIFF URLの追加情報の処理方法を変更することで対応しました。

### 暫定対応

暫定対応として、LIFFサーバーにおけるLIFF URLの追加情報の処理方法を変更し、不具合の発生を回避する措置を行いました。

なお、これまでLIFF URLの追加情報は、パス（`/path`）、クエリパラメータ（`?key=value`）、URLフラグメント（`#URL-fragment`）のすべてが、エンドポイントURLに連結され、2次リダイレクト先URLにリダイレクトされていました。今回の暫定対応により、iOS 14.5およびSafari 14.xでLIFFアプリを起動している場合に限り、LIFF URLの追加情報の内、URLフラグメントのみリダイレクト時に除外されるようになりました。

iOS 14.5およびSafari 14.x以外の環境では、従来のLIFF URLの追加情報の処理方法と変更ありません。

::admonition{title="LIFFアプリ側の対応は不要です" type="tip"}
暫定対応は、LIFFサーバー側のみで完結しています。LIFF SDKのバージョンアップやコードの改修などLIFFアプリ側での対応は必要ありません。
::

**追加情報の処理方法の比較：**

| 比較  | LIFF URL                                                                                                                               | エンドポイントURL            | 2次リダイレクト先URL                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 修正前 | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |
| 修正後 | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}]                                      |

::admonition{title="URLフラグメントを含めたい場合" type="note"}
暫定対応の影響により、LIFF URLの追加情報に含まれたURLフラグメントはリダイレクト時に除外されます。ただし、URLフラグメントを含むエンドポイントURLに直接アクセスした場合は、URLフラグメントも含めたLIFF URLへ遷移できます。

LIFF間遷移時にURLフラグメントを使用したい場合は、LIFF URL（例：`https://liff.line.me/{liffId}#URL-fragment`）ではなく、エンドポイントURL（例：`https://example.com#URL-fragment`）に直接アクセスするように実装してください。

なお、これまで同様[LINE Developersコンソール](/console/)の［**エンドポイントURL**］には、URLフラグメントは指定できません。
::

LIFF間遷移について詳しくは、『LIFFドキュメント』の「[LIFFアプリから別のLIFFアプリを開いた場合の動作について](/docs/liff/opening-liff-app/#move-liff-to-liff)」を参照してください。
