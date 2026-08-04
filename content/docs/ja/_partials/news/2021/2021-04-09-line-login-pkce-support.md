---
title: LINEログインがPKCE対応されました
navigation: true
description: LINEログインがPKCE対応されました。PKCEを導入することで、LINEログイン v2.1の認可フローをよりセキュアにすることができます。
meta: '{"date":"2021-04-09 00:00 UTC","tags":"LINE Login","locale":"ja"}'
path: /ja/_partials/news/2021/2021-04-09-line-login-pkce-support
__hash__: ER9s_wc4HhkmXB4RTansdzutyP7Y8lvJB8_SLLi16KA
seo:
  title: LINEログインがPKCE対応されました
  description: LINEログインがPKCE対応されました。PKCEを導入することで、LINEログイン v2.1の認可フローをよりセキュアにすることができます。
---

LINEログインがPKCE対応されました。PKCEを導入することで、LINEログイン v2.1の認可フローをよりセキュアにすることができます。

### PKCEとは何か？

PKCE（Proof Key for Code Exchange）とは、認可コード横取り攻撃への対策を目的とし、[RFC7636](https://datatracker.ietf.org/doc/html/rfc7636){rel="[\"nofollow\"]"}で定義されているOAuth2.0拡張仕様です。

PKCEの機構を持たないOAuth2.0の認可フローでは、悪意のあるアプリが何らかの方法で認可コードを含むカスタムURIを取得した場合、ユーザー固有のアクセストークンを横取りされる恐れがあります。LINEログインを組み込んだウェブアプリにPKCEの認可フローを導入することで、LINEログイン v2.1のセキュリティをさらに向上させ、「認可コード横取り攻撃」を防ぐことができます。

### LINEログインにPKCEを実装するメリット

LINEログインを組み込んだウェブアプリに、PKCEを実装した場合と実装していない場合では、以下のように「認可コード横取り攻撃」に対する動作が異なります。ウェブアプリをよりセキュアにするために、PKCEの実装をおすすめします。

| PKCE未実装の場合                                                                                                                                                                                                 | PKCE実装済みの場合                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 悪意のあるアプリが何らかの方法で認可コードを含むコールバックURLを取得した場合、アクセストークンを奪えてしまいます。   ![PKCE未実装の場合の認可コード横取り攻撃](/media/line-login/new-user-login-without-pkce-ja.svg){style="padding-top:1em" className="[\"bg-border\",\"mt-3\"]"} | 悪意のあるアプリにリダイレクト時に渡される情報を横取りされても、一意の`code_challenge`を照合することでアクセストークンの横取りを防ぎます。   ![PKCE実装済みの場合の認可コード横取り攻撃](/media/line-login/new-user-login-with-pkce-ja.svg){style="padding:1em" className="[\"bg-border\",\"mt-3\"]"} |

::admonition{title="PKCEを導入するもう1つのメリット" type="tip"}
PKCE実装済みのLINEログインを組み込んだウェブアプリに、[**Yahoo! JAPANアプリ**](https://promo-mobile.yahoo.co.jp/yjapp/){rel="[\"nofollow\"]"}からアクセスすると、メールアドレスとパスワードによるログインの工程をスキップできる[自動ログイン](/docs/line-login/integrate-line-login/#line-auto-login)機能が有効になります。

![Yahoo! JAPANアプリからの自動ログイン](/media/line-login/yja-to-line-login-ja.png){className="[\"w-fix-680\"]"}
::

PKCEの実装方法について詳しくは、『LINEログインドキュメント』の「[LINEログインにPKCEを実装する](/docs/line-login/integrate-pkce/#how-to-integrate-pkce)」を参照してください。
