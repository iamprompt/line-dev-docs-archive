---
title: LINE通知メッセージ（テンプレート）
navigation: true
description: ''
meta: '{}'
path: /ja/docs/partner-docs/line-notification-messages/template
__hash__: oryGzZjzCkh26jDem-0sMeiQc9BKoirg8Vha6fNNwaA
seo:
  title: LINE通知メッセージ（テンプレート）
  description: ''
---

# :page-title

:markdown-controls::admonition{title="オプション機能を利用するには手続きが必要です" type="note"}
本ドキュメントに記載の機能は、所定の申請等を行った法人ユーザーのみがご利用いただけます。自社のLINE公式アカウントでご利用になりたいお客様は、担当営業までご連絡いただくか、[弊社パートナー](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}にお問い合わせください。
::

:toc## LINE通知メッセージ（テンプレート）とは

LINE通知メッセージ（テンプレート）は、用意されたテンプレートやアイテムを組み合わせてメッセージを作成し、ユーザーの電話番号を指定して送信できる機能です。ユーザーがLINE公式アカウントを友だち追加していなくても、LINE公式アカウントからメッセージを送信できます。

LINE通知メッセージ（テンプレート）は日本、タイ、台湾のLINE公式アカウントでのみ利用できます。

[テンプレート](#templates)を選んだら、[アイテム](#items)と[ボタン](#buttons)を組み合わせ、それぞれに任意のテキストやURLを指定したJSONを作成し、「[LINE通知メッセージ（テンプレート）を送る](/reference/line-notification-messages/#send-line-notification-message-template)」エンドポイントを使うことで、LINE通知メッセージ（テンプレート）を送信できます。

使用できるテンプレート、アイテム、およびボタンの種類は日本、タイ、台湾ごとに異なり、送信元のLINE公式アカウントによって自動で決まります。メッセージのヘッダーとフッターは変更できません。

![LINE通知メッセージ（テンプレート）のサンプル](/media/line-notification-message/notification-messages-template.png){className="[\"border\",\"w-fix-480\"]"}

たとえば上記のメッセージは、次のようなJSONを作成することで送信できます。

```json
{
  "to": "{hashed_phone_number}",
  "templateKey": "shipment_completed_ja",
  "body": {
    "emphasizedItem": {
      "itemKey": "date_002_ja",
      "content": "2024年8月10日(土)"
    },
    "items": [
      {
        "itemKey": "time_range_001_ja",
        "content": "午前中"
      },
      {
        "itemKey": "number_001_ja",
        "content": "1234567"
      },
      {
        "itemKey": "price_001_ja",
        "content": "12,000円"
      },
      {
        "itemKey": "name_010_ja",
        "content": "スープセット（冷凍）"
      }
    ],
    "buttons": [
      {
        "buttonKey": "check_delivery_status_ja",
        "url": "https://example.com/CheckDeliveryStatus/"
      },
      {
        "buttonKey": "contact_ja",
        "url": "https://example.com/ContactUs/"
      }
    ]
  }
}
```

送信したLINE通知メッセージ（テンプレート）の数は、APIで取得できます。詳しくは、「[送信済みLINE通知メッセージの数を取得する](/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)」を参照してください。

## テンプレート

テンプレートのキー（`Key`）を指定してLINE通知メッセージ（テンプレート）を送ることで、対象テンプレートのタイトル（`Title`）と概要（`Description`）がメッセージ上部に表示されます。

![](/media/line-notification-message/notification-messages-template-templates.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="templates"}## アイテム

アイテムのキー（`Key`）を指定することで、テンプレート内に複数のアイテムを含めることができます。アイテムには、値として任意の文字列を設定できます。

![](/media/line-notification-message/notification-messages-template-items.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="items"}## ボタン

ボタンのキー（`Key`）を指定することで、テンプレート内に複数のボタンを含めることができます。ボタンの遷移先として任意のURLを設定できます。

![](/media/line-notification-message/notification-messages-template-buttons.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="buttons"}
