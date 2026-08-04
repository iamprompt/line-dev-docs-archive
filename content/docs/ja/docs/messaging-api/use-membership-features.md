---
title: メンバーシップ機能を使う
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/use-membership-features
__hash__: XnKFQO5dfDHjwT9WtNR0Dv9uVEPA3Zxpj8fLqSsXK8A
seo:
  title: メンバーシップ機能を使う
  description: null
---

# :page-title

:markdown-controls[メンバーシップ](https://www.lycbiz.com/jp/service/line-official-account/Membership/){rel="[\"nofollow\"]"}とは、LINE公式アカウント上で利用できる月額課金制の会員機能です。ユーザーはLINE公式アカウントのメンバーシッププランに加入することで、メンバー限定の特典が受けられます。

## メンバーシップの情報を取得するエンドポイント

Messaging APIでは、以下のエンドポイントでメンバーシップの情報を取得できます。

- [ユーザーのメンバーシップ加入状況を取得する](#get-a-users-membership-subscription-status)
- [メンバーシップに加入しているユーザーの一覧を取得する](#get-membership-user-ids)
- [提供中のメンバーシッププランを取得する](#get-membership-plans)

::admonition{title="メンバーシップをはじめるには" type="tip"}
メンバーシップの設定や公開といった操作は、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で行います。詳しくは、『LINEヤフー for Business』の「[LINEで簡単にサブスクリプションサービスが作成できる！LINE公式アカウントの「メンバーシップ」機能とは？](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/){rel="[\"nofollow\"]"}」を参照してください。

なお現時点でメンバーシップ機能が利用できる対象は、日本のLINE公式アカウントのみです。
::

### ユーザーのメンバーシップ加入状況を取得する

このエンドポイントでは、ユーザーのIDを指定して、そのユーザーが加入しているメンバーシップの情報を取得できます。詳しくは、『Messaging APIリファレンス』の「[ユーザーのメンバーシップ加入状況を取得する](/reference/messaging-api/#get-a-users-membership-subscription-status)」を参照してください。

### メンバーシップに加入しているユーザーの一覧を取得する

このエンドポイントでは、LINE公式アカウントのメンバーシップに加入しているユーザーのユーザーIDの一覧を取得できます。詳しくは、『Messaging APIリファレンス』の「[メンバーシップに加入しているユーザーの一覧を取得する](/reference/messaging-api/#get-membership-user-ids)」を参照してください。

### 提供中のメンバーシッププランを取得する

このエンドポイントでは、対象のLINE公式アカウントで提供中のメンバーシッププランを取得できます。詳しくは、『Messaging APIリファレンス』の「[提供中のメンバーシッププランを取得する](/reference/messaging-api/#get-membership-plans)」を参照してください。

## Webhookのメンバーシップイベント

ユーザーがLINE公式アカウントのメンバーシップに加入や継続課金、またはメンバーシップを退会した際に、Webhookのメンバーシップイベントが送信されます。詳しくは、『Messaging APIリファレンス』の「[メンバーシップイベント](/reference/messaging-api/#membership-event)」を参照してください。
