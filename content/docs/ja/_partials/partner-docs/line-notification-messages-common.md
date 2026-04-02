---
title: Line Notification Messages Common
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/partner-docs/line-notification-messages-common
__hash__: h36DxjARs9Xsmw-y8bjRL_1U0qjz6ndJR8hibxUTrWQ
seo:
  description: ''
---

::admonition{title="オプション機能を利用するには手続きが必要です" type="note"}
本ドキュメントに記載の機能は、所定の申請等を行った法人ユーザーのみがご利用いただけます。自社のLINE公式アカウントでご利用になりたいお客様は、担当営業までご連絡いただくか、[弊社パートナー](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}にお問い合わせください。
::

:toc## 共通仕様

### ステータスコード

『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」を参照してください。

### レスポンスヘッダー

LINE通知メッセージAPIのレスポンスには、以下のHTTPヘッダーが含まれます。

| レスポンスヘッダー         | 説明                          |
| ----------------- | --------------------------- |
| x-line-request-id | リクエストID。各リクエストごとに発行されるIDです。 |
