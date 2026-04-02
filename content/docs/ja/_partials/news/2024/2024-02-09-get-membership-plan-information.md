---
title: 【更新】Messaging APIでLINE公式アカウントのメンバーシップの情報が取得できるようになりました
navigation: true
description: ''
meta: '{"date":"2024-02-09 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-02-09-get-membership-plan-information
__hash__: H8PeVqY8Wyz2zoirbDMQw2v8OWiXf0-m9JdePhbIpco
seo:
  title: 【更新】Messaging APIでLINE公式アカウントのメンバーシップの情報が取得できるようになりました
  description: ''
---

::admonition{title="2024年3月28日追記" type="note"}
2024年2月14日より一時的に提供を中止しておりました、メンバーシップの情報を取得するためのエンドポイントが、再びご利用いただけるようになりました。なおエンドポイントのURLなど、一部の仕様が変更されております。
::

::admonition{title="2024年2月14日追記" type="note"}
Messaging APIでメンバーシップの情報を取得するためのエンドポイントは、技術的な問題があり、一時的に提供を中止しております。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。問題の修正後、再びご利用いただけるようになりましたら、このニュースで改めてお知らせいたします。
::

Messaging APIでメンバーシップの情報が取得できるようになりました。

[メンバーシップ](https://www.lycbiz.com/jp/service/line-official-account/Membership/){rel="[\"nofollow\"]"}とは、LINE公式アカウント上で利用できる月額課金制の会員機能です。ユーザーはLINE公式アカウントのメンバーシッププランに加入することで、メンバー限定の特典が受けられます。

今回、Messaging APIに追加されたのは、以下の2つのエンドポイントです。

- [ユーザーのメンバーシップ加入状況を取得する](#membership-20240209-01)
- [提供中のメンバーシッププランを取得する](#membership-20240209-02)

::admonition{title="メンバーシップをはじめるには" type="tip"}
メンバーシップの設定や公開といった操作は、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で行います。詳しくは、『LINEヤフー for Business』の「[LINEで簡単にサブスクリプションサービスが作成できる！LINE公式アカウントの「メンバーシップ」機能とは？](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/){rel="[\"nofollow\"]"}」を参照してください。

なお現時点でメンバーシップ機能が利用できる対象は、日本のLINE公式アカウントのみです。
::

### ユーザーのメンバーシップ加入状況を取得する

::admonition{title="2024年3月28日追記" type="note"}
2024年2月14日より一時的に提供を中止しておりました以下のエンドポイントが、再びご利用いただけるようになりました。なおエンドポイントのURLなど、一部の仕様が変更されております。
::

このエンドポイントでは、ユーザーのIDを指定して、そのユーザーが加入しているメンバーシップの情報を取得できます。詳しくは、『Messaging APIリファレンス』の「[ユーザーのメンバーシップ加入状況を取得する](/reference/messaging-api/#get-a-users-membership-subscription-status)」を参照してください。

### 提供中のメンバーシッププランを取得する

::admonition{title="2024年3月28日追記" type="note"}
2024年2月14日より一時的に提供を中止しておりました以下のエンドポイントが、再びご利用いただけるようになりました。なおエンドポイントのURLなど、一部の仕様が変更されております。
::

このエンドポイントでは、対象のLINE公式アカウントで提供中のメンバーシッププランを取得できます。詳しくは、『Messaging APIリファレンス』の「[提供中のメンバーシッププランを取得する](/reference/messaging-api/#get-membership-plans)」を参照してください。
