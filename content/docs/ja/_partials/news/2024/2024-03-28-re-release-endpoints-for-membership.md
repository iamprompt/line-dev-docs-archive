---
title: Messaging APIでメンバーシップの情報が取得できるエンドポイントの提供を再開しました
navigation: true
description: 2024年2月14日より一時的に提供を中止しておりました、メンバーシップの情報を取得するためのエンドポイントについて提供を再開いたしました。
meta: '{"date":"2024-03-28 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-03-28-re-release-endpoints-for-membership
__hash__: wDLor2LC0bvyTWoIoLw24vvtxLuqwFQ5ReQaOPmGSM4
seo:
  title: Messaging APIでメンバーシップの情報が取得できるエンドポイントの提供を再開しました
  description: 2024年2月14日より一時的に提供を中止しておりました、メンバーシップの情報を取得するためのエンドポイントについて提供を再開いたしました。
---

[2024年2月14日](/news/2024/02/09/get-membership-plan-information/)より一時的に提供を中止しておりました、メンバーシップの情報を取得するためのエンドポイントについて提供を再開いたしました。

なおエンドポイントのURLなど、一部の仕様が変更されておりますので、2月14日以前に利用を開始されていた方はご注意ください。

- [ユーザーのメンバーシップ加入状況を取得する](#membership-20240328-01)
- [提供中のメンバーシッププランを取得する](#membership-20240328-02)

::admonition{title="メンバーシップをはじめるには" type="tip"}
メンバーシップの設定や公開といった操作は、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で行います。詳しくは、『LINEヤフー for Business』の「[LINEで簡単にサブスクリプションサービスが作成できる！LINE公式アカウントの「メンバーシップ」機能とは？](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/){rel="[\"nofollow\"]"}」を参照してください。

なお現時点でメンバーシップ機能が利用できる対象は、日本のLINE公式アカウントのみです。
::

### ユーザーのメンバーシップ加入状況を取得する

このエンドポイントでは、ユーザーのIDを指定して、そのユーザーが加入しているメンバーシップの情報を取得できます。詳しくは、『Messaging APIリファレンス』の「[ユーザーのメンバーシップ加入状況を取得する](/reference/messaging-api/#get-a-users-membership-subscription-status)」を参照してください。

### 提供中のメンバーシッププランを取得する

このエンドポイントでは、対象のLINE公式アカウントで提供中のメンバーシッププランを取得できます。詳しくは、『Messaging APIリファレンス』の「[提供中のメンバーシッププランを取得する](/reference/messaging-api/#get-membership-plans)」を参照してください。
