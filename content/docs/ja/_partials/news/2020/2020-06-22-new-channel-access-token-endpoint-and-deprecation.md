---
title: チャネルアクセストークンを識別するためのキーIDが追加されました
navigation: true
description: >-
  すべての有効なチャネルアクセストークンv2.1を取得するエンドポイントは、セキュリティ上の理由により、再暗号化されたチャネルアクセストークンを返します。そのため同一のチャネルアクセストークンでも、発行時と取得時で値が変わり、トークンの管理や識別が困難でした。
meta: '{"date":"2020-06-22 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: >-
  /ja/_partials/news/2020/2020-06-22-new-channel-access-token-endpoint-and-deprecation
__hash__: BUd0N9y3zlBr5tg1wMxsYJMZUuZzvrqFYTdx2sUk-a4
seo:
  title: チャネルアクセストークンを識別するためのキーIDが追加されました
  description: >-
    すべての有効なチャネルアクセストークンv2.1を取得するエンドポイントは、セキュリティ上の理由により、再暗号化されたチャネルアクセストークンを返します。そのため同一のチャネルアクセストークンでも、発行時と取得時で値が変わり、トークンの管理や識別が困難でした。
---

[すべての有効なチャネルアクセストークンv2.1を取得する](/news/2020/07/29/get-all-CATs-removed/)エンドポイントは、セキュリティ上の理由により、再暗号化されたチャネルアクセストークンを返します。そのため同一のチャネルアクセストークンでも、発行時と取得時で値が変わり、トークンの管理や識別が困難でした。

今回のアップデートにより、[チャネルアクセストークンv2.1を発行する](/reference/messaging-api/#issue-channel-access-token-v2-1)際に、トークンと対になる一意のキーID（`key_id`）を返すようになりました。新たに追加された[すべての有効なチャネルアクセストークンv2.1のキーIDを取得する](/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1)エンドポイントを利用して、キーIDと対になるチャネルアクセストークンを識別できるようになります。

::admonition{title="エンドポイントの非推奨化の予定" type="note"}
**すべての有効なチャネルアクセストークンv2.1を取得する**エンドポイントの利用は、7月上旬に非推奨になる予定です。このエンドポイントを利用している場合は、新たに追加された**すべての有効なチャネルアクセストークンv2.1のキーIDを取得する**エンドポイントを利用するようにボットを改修してください。
::

詳しくは、『Messaging APIドキュメント』の「[チャネルアクセストークンv2.1を発行する](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1)」を参照してください。
