---
title: LINEミニアプリでベーシック認証が利用できるようになりました
navigation: true
description: >-
  ステータスが「開発中」または「審査中」のLINEミニアプリで、ベーシック認証が利用できるようになりました。特定の人のみが公開前のLINEミニアプリにアクセスできるよう、ベーシック認証を用いて制限がかけられます。
meta: '{"date":"2022-04-19 00:00 UTC","tags":"line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-04-19-use-basic-authentication-with-line-mini-app
__hash__: iDmYEseYLBEOgPUkVZUoSAdsgomIdAZvntR60ESK1lA
seo:
  title: LINEミニアプリでベーシック認証が利用できるようになりました
  description: >-
    ステータスが「開発中」または「審査中」のLINEミニアプリで、ベーシック認証が利用できるようになりました。特定の人のみが公開前のLINEミニアプリにアクセスできるよう、ベーシック認証を用いて制限がかけられます。
---

ステータスが「開発中」または「審査中」のLINEミニアプリで、ベーシック認証が利用できるようになりました。特定の人のみが公開前のLINEミニアプリにアクセスできるよう、ベーシック認証を用いて制限がかけられます。

### ベーシック認証の利用方法

[LINE Developersコンソール](/console/)の［**LIFF**］タブで［**開発用**］または［**審査用**］の［**エンドポイントURL**］にベーシック認証のかかったURLを指定します。そして、LINEミニアプリを:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}で開くと、ユーザー名とパスワードの入力を促すダイアログが表示されます。

![ベーシック認証画面](/media/line-mini-app/basic-auth.webp){className="[\"border\",\"w-fix-240\"]"}

### ベーシック認証が利用できる条件

以下の条件をすべて満たす場合、ベーシック認証が利用できます。

- LINEミニアプリのステータスが「開発中」または「審査中」である
- LINEのバージョンが`12.2.0`以降である
- LINEミニアプリを::glossary-tooltip{glossary-id="liff-browser"}
[LIFFブラウザ](/glossary/#liff-browser)
::

で開いている

LIFFアプリ、およびステータスが「公開中」のLINEミニアプリでは、ベーシック認証は利用できません。また、ダイジェスト認証は利用できません。

::admonition{title="条件を満たしているのにベーシック認証が利用できない" type="tip"}
LIFF間遷移後のLINEミニアプリではベーシック認証は利用できません。LIFF間遷移について詳しくは、『LIFFドキュメント』の「[LIFFアプリから別のLIFFアプリを開いた場合の動作について（LIFF間遷移）](/docs/liff/opening-liff-app/#move-liff-to-liff)」を参照してください。
::

LIFFブラウザのベーシック認証に関する仕様については、『LIFFドキュメント』の「[LIFFブラウザの仕様](/docs/liff/overview/#liff-browser-spec)」を参照してください。

### ベーシック認証を利用する際の注意

ベーシック認証は、簡易的なアクセス制限として用いられる認証方式です。LINEミニアプリの開発者は、ベーシック認証がセキュリティ要件を満たすものかをご自身で評価、判断したうえで利用してください。

この機能追加は、ベーシック認証の利用を推奨したり、ベーシック認証によるアクセス制限の安全性を保証したりするものではありません。

詳しくは、『LINEミニアプリドキュメント』の「[公開前のLINEミニアプリにベーシック認証でアクセス制限をかける](/docs/line-mini-app/develop/develop-overview/#use-basic-authentication)」を参照してください。
