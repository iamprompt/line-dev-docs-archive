---
title: LIFF間遷移前のLIFFアプリに戻る際にコンテンツが正しく表示されなくなる不具合が修正されました
navigation: true
description: >-
  2021年5月31日のニュースでお知らせした、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF
  URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が、iOS 14.7上のLINEまたはSafari、およびmacOS上のSafari
  14.1.2で修正されました。
meta: '{"date":"2021-09-08 00:00 UTC","tags":"LIFF, LINE MINI app","locale":"ja"}'
path: /ja/_partials/news/2021/2021-09-08-resolve-liff-workaround-for-webkit-bug
__hash__: XZVzGwZfvdpDCPoOcfK1J076jTNfddklBmYMzV5EBlQ
seo:
  title: LIFF間遷移前のLIFFアプリに戻る際にコンテンツが正しく表示されなくなる不具合が修正されました
  description: >-
    2021年5月31日のニュースでお知らせした、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF
    URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が、iOS
    14.7上のLINEまたはSafari、およびmacOS上のSafari 14.1.2で修正されました。
---

[2021年5月31日のニュース](/news/2021/05/31/liff-workaround-for-webkit-bug/)でお知らせした、LIFF間遷移後に戻るボタンを押すかブラウザバックを行った際、URLは遷移前のLIFF URLに戻るが、画面の表示が変わらない、もしくは画面が空白になる不具合が、iOS 14.7上のLINEまたはSafari、およびmacOS上のSafari 14.1.2で修正されました。

### 不具合に対して実施した暫定対応

2021年5月31日以前は、iOS14.5.x上のLINEまたはSafari、もしくはmacOS上のSafari 14.xにおいて以下の不具合が発生していました。

![LIFF間遷移前のLIFFアプリに戻ると画面が空白になる図](/media/news/content-vanish-bug.png){className="[\"w-fix-680\"]"}

[暫定対応](/news/2021/05/31/liff-workaround-for-webkit-bug/#temporary-support)として、LIFF URLの追加情報の内、URLフラグメント（`#URL-fragment`）のみリダイレクト時に除外することで不具合を回避しました。

ただし、iOS 14.7およびSafari 14.1.2以降では、[Apple WebKit](https://developer.apple.com/documentation/webkit){rel="[\"nofollow\"]"}の不具合修正により、URLフラグメントを含む2次リダイレクト先に正しくリダイレクトされるようになりました。

### 暫定対応の継続

以下のバージョンでは、引き続き不具合が発生するため暫定対応は継続されます。

- iOS：14.5〜14.6
- macOS上のSafari：14.0〜14.1.1

**各バージョンごとのリダイレクトの動作：**

| 環境                                   | 動作             | LIFF URL                                                                                                                               | エンドポイントURL            | 2次リダイレクト先URL                                                                                                                 |
| ------------------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| - iOS：14.7以降 - Safari：14.1.2以降       | ✅ 正常           | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |
| - iOS：14.5〜14.6 - Safari：14.0〜14.1.1 | ❌ 暫定対応   による動作 | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}]                                      |
| - iOS：14.4以前 - Safari：13.x以前         | ✅ 正常           | https://[liff.line.me/{liffId}   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] | https://[example.com] | https://[example.com   :b[/path]{style="color:red"}:b[?key=value]{style="color:green"}:b[#URL-fragment]{style="color:blue"}] |

::admonition{title="LIFF URLのURLフラグメントについて" type="tip"}
不具合の影響により、一時的にLIFF URLからURLフラグメントを除外している場合は、再度LIFF URLにURLフラグメントを含めることをお勧めします。
::

LIFF間遷移について詳しくは、『LIFFドキュメント』の「[LIFFアプリから別のLIFFアプリを開いた場合の動作について](/docs/liff/opening-liff-app/#move-liff-to-liff)」を参照してください。
