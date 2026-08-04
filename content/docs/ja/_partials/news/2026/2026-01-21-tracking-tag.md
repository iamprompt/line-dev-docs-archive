---
title: Messaging APIにおいて、計測タグを使用したウェブトラフィックオーディエンスを利用できるようになりました
navigation: true
description: >-
  LINE公式アカウントおよびMessaging APIにおいて、LINE
  Tagを使用したウェブトラフィックオーディエンスに加え、計測タグを使用したウェブトラフィックオーディエンスが利用できるようになりました。
meta: >-
  {"date":"2026-01-21 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: /ja/_partials/news/2026/2026-01-21-tracking-tag
__hash__: CgefHjSBnxwP7pTeyS4_4QVlKoLIkHDY3TB-P0FiROk
seo:
  title: Messaging APIにおいて、計測タグを使用したウェブトラフィックオーディエンスを利用できるようになりました
  description: >-
    LINE公式アカウントおよびMessaging APIにおいて、LINE
    Tagを使用したウェブトラフィックオーディエンスに加え、計測タグを使用したウェブトラフィックオーディエンスが利用できるようになりました。
---

LINE公式アカウントおよびMessaging APIにおいて、LINE Tagを使用したウェブトラフィックオーディエンスに加え、計測タグを使用したウェブトラフィックオーディエンスが利用できるようになりました。

計測タグを使用したウェブトラフィックオーディエンスは、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}から作成できます。作成したウェブトラフィックオーディエンスの情報は、「[オーディエンスの情報を取得する](/reference/messaging-api/#get-audience-group)」エンドポイントなどで取得できます。

### 計測タグについて

計測タグとは、LINEヤフーのさまざまなサービスと連携したパフォーマンスを計測するためのタグです。詳しくは、『LINEヤフー for Business』の「[【お知らせ】LINE公式アカウントにおける計測タグの提供開始について](https://www.lycbiz.com/jp/news/line-official-account/20251218/){rel="[\"nofollow\"]"}」を参照してください。

### 計測タグの利用条件

LINE公式アカウントで計測タグを利用するには、以下の条件をすべて満たす必要があります。

- 日本のLINE公式アカウントである
- LINE公式アカウントが[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}の認証済み組織と接続している
- LINE公式アカウントが認証済アカウントまたは::glossary-tooltip{glossary-id="premium-account"}
[プレミアムアカウント](/glossary/#premium-account)
::

である

### LINE Tagについて

LINE Tagは将来的に提供を終了する予定です。今後、タグを利用した計測を予定している場合は計測タグの利用をご検討ください。なお、提供終了に関しては詳細が決まり次第別途お知らせいたします。

::admonition{title="LINE広告では計測タグを利用できません" type="tip"}
LINE広告では引き続きLINE Tagのみが利用可能です。LINE広告とLINE公式アカウント間でLINE Tagを共有している場合はLINE Tagも併用してください。
::

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
