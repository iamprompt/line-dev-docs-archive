---
title: 準備中のLINE公式アカウントをリリース日まで非公開にしておけるか？
navigation: true
description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
meta: >-
  {"date":"2026-07-09 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/07/09/keep-a-line-official-account-private
__hash__: 0ecJjEmnaXpCF27UNRRI5CAWlucW-wUVT7be9oEz2Ns
seo:
  title: 準備中のLINE公式アカウントをリリース日まで非公開にしておけるか？
  description: こんにちは。LINE Developersサイトのドキュメントを担当している、テクニカルライターの堀越です。
---

::Tips
# :page-title

  :::display-date{date="2026/07/09" .!mb-20}

  :::

こんにちは。[LINE Developersサイト](/)のドキュメントを担当している、テクニカルライターの堀越です。

新しい店舗やサービスのLINE公式アカウントを準備するとき、正式なリリース日まではそのLINE公式アカウントがうっかり人目に触れないよう非公開にしておきたい、と思ったとします。LINE公式アカウントをリリース日まで非公開にしておく、ということは可能なのでしょうか？

## LINE公式アカウントには「非公開」と「公開」のような状態はない

残念ながらLINE公式アカウントには「非公開」と「公開」、あるいは「開発中」と「リリース済み」というような状態がありません。LINE公式アカウントは作られたその瞬間から、[ベーシックID](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja){rel="[\"nofollow\"]"}さえ分かれば、実態としては準備中であっても誰でも友だち追加が可能です。

そのため、準備中のLINE公式アカウントは、うっかりベーシックIDやプレミアムID、そして友だち追加のURLなどを外部に漏らさないよう注意が必要です。

## 検索結果に表示されないようにするには

友だち追加のURLなどを漏らさなかったとしても、設定次第でうっかり検索結果に表示されてしまう可能性もあります。

[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}の［**ビジネスプロフィール**］で、LINE公式アカウントの［**Web版プロフィールを公開**］（※1）がオンになっていると、Web版プロフィール（例：[LINE FRIENDSのプロフィール](https://line.me/R/ti/p/%40linecharacter){rel="[\"nofollow\"]"}）のURLが外部の検索サイトで検索結果に表示される可能性があります。この設定は、デフォルトがオンになっていますので、リリース日まではオフに変更しておきましょう。

また、LINEアプリ内での検索結果にも表示されないよう、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}の［**検索結果とおすすめに表示**］（※1）は、リリース日までデフォルトのオフのままにしておきましょう。

さらに、Messaging APIの「[クーポンを作成する](/reference/messaging-api/#create-coupon)」エンドポイントやLINE Official Account Managerを使ってクーポンを作成した際に［**LINEヤフーサービスへの掲載**］（※2）を「掲載する」にしていると、掲載されたクーポンから意図せずLINE公式アカウントを友だち追加される可能性もあります。リリース前にクーポンを作成する場合は、「掲載しない」にしておきましょう。

※1 これらの機能は認証済アカウントでのみ利用できます。詳しくは、『LINEヤフー for Business』の「[ビジネスプロフィール](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/){rel="[\"nofollow\"]"}」を参照してください。  

※2 詳しくは、『LINEヤフー for Business』の「[クーポンのLINEヤフーサービスへの掲載](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"}」を参照してください。

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
