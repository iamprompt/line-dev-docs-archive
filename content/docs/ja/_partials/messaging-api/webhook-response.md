---
title: Webhook Response
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-response
__hash__: 7FSvPLEBn1UbSb8PBx5TajdaAWMUzYeSYng6UGy7LVo
seo:
  description: ''
---

### レスポンス

LINEプラットフォームから送信されるHTTP POSTリクエストをボットサーバーで受信したときは、ステータスコード`200`を返してください。

::admonition{title="注意" type="note"}
- LINEプラットフォームから送信されるHTTP POSTリクエストの受信に失敗した場合でも、このリクエストを再度受け取ることができます。詳しくは、「[受け取りに失敗したWebhookを再送する](/docs/messaging-api/receiving-messages/#webhook-redelivery)」を参照してください。
- LINEプラットフォームから疎通確認のために、Webhookイベントが含まれないHTTP POSTリクエストが送信されることがあります。この場合も、ステータスコード`200`を返してください。  
Webhookイベントが含まれないHTTP POSTリクエストの例：```json
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```
::
