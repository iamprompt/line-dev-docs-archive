---
title: LINE Developersコンソールのアカウント管理：押さえるべき3つの注意点
navigation: true
description: LINE Developersコンソールの利用には開発者アカウントなど、さまざまなアカウントが必要になります。
meta: >-
  {"date":"2026-02-26 00:00 UTC","tags":"docs,
  console","locale":"ja","sidebar":false}
path: /ja/tips/2026/02/26/line-developers-console-accounts
__hash__: _h_IHTobr2ACe0dZLW5osm4tRRHAyIbB5eeFwSsy4RM
seo:
  title: LINE Developersコンソールのアカウント管理：押さえるべき3つの注意点
  description: LINE Developersコンソールの利用には開発者アカウントなど、さまざまなアカウントが必要になります。
---

::Tips
# :page-title

  :::display-date{date="2026/02/26" .!mb-4}

  :::

[LINE Developersコンソール](/docs/line-developers-console/overview/)の利用には[開発者アカウント](/docs/line-developers-console/login-account/#register-as-developer)など、さまざまなアカウントが必要になります。

この記事では、LINE Developersコンソールを利用する際のアカウント管理で「気をつけたいポイント」についてお伝えします。

  :::toc

  :::

## LINE Developersコンソールの利用に必要なアカウント

まず、LINE Developersコンソールを利用するために必要なアカウントについて確認していきます。主に以下の3つのアカウントが必要です。

| アカウント                                                                                             | 説明                                                                                                                   |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [開発者アカウント](/docs/line-developers-console/login-account/#register-as-developer)                    | LINE Developersコンソールを利用するためのアカウントです。LINE Developersコンソールへの初回ログイン時に作成します。ビジネスIDと1対1で紐づき、ビジネスIDを通じてLINEアカウントとも紐づけられます。 |
| [ビジネスID](https://help2.line.me/business_id/web/?lang=ja&contentId=20011264){rel="[\"nofollow\"]"} | LINE Developersコンソールへのログインに使用する共通認証システムのアカウントです。LINEアカウントやビジネスアカウント（メールアドレスとパスワード）など複数の方法でログインできます。                  |
| LINEアカウント（任意）                                                                                     | LINEアプリを利用するためのアカウントです。ビジネスIDと1対1で連携できます。                                                                            |

詳しくは、『LINE Developersコンソールドキュメント』の「[LINE Developersコンソールへのログイン](/docs/line-developers-console/login-account/)」を参照してください。

## アカウントの管理で気をつけたいポイント

前述のとおりLINE Developersコンソールの利用には、複数の異なるアカウントを利用することになります。アカウントを適切に管理するために気をつけたいことを3つご紹介します。

1. [LINEアカウントとビジネスIDの連携](#important-points-1)
2. [メールアドレスの管理](#important-points-2)
3. [招待メールの承諾](#important-points-3)

### 1. LINEアカウントとビジネスIDの連携

開発中のLINEミニアプリの動作をテストしたり、LINE Developersコンソールで開発者自身のユーザーIDを確認したりするには、開発者アカウントにLINEアカウントが紐づいている必要があります。意図したLINEアカウントが紐づいていない状態では、開発中の動作検証がうまく行えません。

開発者アカウントとLINEアカウントはビジネスIDを介して紐づけられるため、意図したLINEアカウントがビジネスIDに連携されているか確認しましょう。LINEアカウントとビジネスIDの連携状態は、ビジネスIDの[プロフィールページ](https://account.line.biz/profile?redirectUri=https%3A%2F%2Fdevelopers.line.biz%2Fconsole%2F){rel="[\"nofollow\"]"}で確認できます。

![](/media/tips/2026/business-id-with-line-account-ja.png){className="[\"border\",\"w-fix-320\"]"}

  :::admonition{title="複数のアカウントを利用している場合は特に注意" type="note"}
  LINEアカウントはビジネスIDと1対1で連携するため、1つのLINEアカウントを複数のビジネスIDに連携することはできません。複数のビジネスIDとLINEアカウントを使い分けて利用している場合は、適切なアカウントが連携できているか特に注意が必要です。
  :::

### 2. メールアドレスの管理

開発者アカウント、ビジネスID、LINEアカウントには、それぞれ個別にメールアドレスを登録できます。これらのメールアドレスは別々に管理されているため、アカウントによって異なるメールアドレスが設定されている場合があります。ログイン時のメールアドレスの入力や、通知メールの受信の確認では、各アカウントに登録されているメールアドレスを使用しましょう。

各アカウントのメールアドレスの確認方法は以下のとおりです。

| アカウント     | 確認方法                                                                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 開発者アカウント  | [LINE Developersコンソール](/console/)の[プロフィール画面](/console/profile/)で確認できます。プロフィール画面は、ログイン後に右上のアイコンをクリックし、アカウント情報をクリックすると表示されます。                   |
| ビジネスID    | ビジネスIDの[プロフィールページ](https://account.line.biz/profile?redirectUri=https%3A%2F%2Fdevelopers.line.biz%2Fconsole%2F){rel="[\"nofollow\"]"}で確認できます。 |
| LINEアカウント | LINEアプリの設定画面で確認できます。   LINEアプリ > 設定（右上の歯車アイコン） > アカウント の順に開きます。                                                                               |

### 3. 招待メールの承諾

LINE Developersコンソールでは、プロバイダーやチャネルに開発者を招待する際、招待側が指定したメールアドレスに招待メールが送信されます。ここで注意したいのは、招待メールの送信先のメールアドレスと、実際に権限が付与される開発者アカウントのメールアドレスは、必ずしも一致していなくてよいという点です。

開発者アカウントに付与される権限は、招待メールに記載された［**招待を承諾する**］をクリックした際に、ログインしている開発者アカウントに付与されます。

意図しない開発者アカウントに権限が付与されてしまわないよう、招待メールを受け取った際は、以下の点を確認してから［**招待を承諾する**］をクリックしてください。

- LINE Developersコンソールに未ログインの場合は、権限を付与すべき開発者アカウントでログインする
- LINE Developersコンソールに既にログインしている場合は、ログイン中の開発者アカウントが権限を受け取るべきアカウントであるか確認する

詳しくは、『LINE Developersコンソールドキュメント』の「[権限を管理する](/docs/line-developers-console/managing-roles/)」を参照してください。

## 終わりに

LINE Developersコンソールを使った開発では、開発者アカウント、ビジネスID、LINEアカウントの適切な管理が必要です。今回ご紹介した内容が、アカウント管理の手助けになれば幸いです。

**この記事の著者**

ふるき（テクニカルライター）：[LINE Developersサイト](/)のドキュメントを担当。テクニカルライティングに関するコミュニティ「[Technical Writing Meetup](https://tw-meetup.connpass.com/event/383558/){rel="[\"nofollow\"]"}」を主催。

  :::tags{tags="docs, console" lang="en" section="tips"}

  :::
::
