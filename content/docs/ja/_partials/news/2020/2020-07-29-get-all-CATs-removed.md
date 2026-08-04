---
title: 「すべての有効なチャネルアクセストークンv2.1を取得する」エンドポイントとそのコンテンツを削除しました
navigation: true
description: >-
  2020年7月1日に告知したとおり、「すべての有効なチャネルアクセストークンv2.1を取得する」Messaging
  APIのエンドポイントを削除しました。これに伴い、エンドポイントに関連するコンテンツを削除しました。
meta: '{"date":"2020-07-29 01:00 UTC","tags":"Messaging API, Docs","locale":"ja"}'
path: /ja/_partials/news/2020/2020-07-29-get-all-cats-removed
__hash__: BfaU1f-5AUJ_SYpfQCjY8FQZlOKTdpbUmBVYT_AN2mI
seo:
  title: 「すべての有効なチャネルアクセストークンv2.1を取得する」エンドポイントとそのコンテンツを削除しました
  description: >-
    2020年7月1日に告知したとおり、「すべての有効なチャネルアクセストークンv2.1を取得する」Messaging
    APIのエンドポイントを削除しました。これに伴い、エンドポイントに関連するコンテンツを削除しました。
---

[2020年7月1日に告知](/news/2020/07/01/get-all-cats-deprecation/)したとおり、「すべての有効なチャネルアクセストークンv2.1を取得する」Messaging APIのエンドポイントを削除しました。これに伴い、エンドポイントに関連するコンテンツを削除しました。

[チャネルアクセストークンv2.1を発行する](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1)際、チャネルアクセストークンとペアになる一意のキーID（`key_id`）が返されます。新たに追加された[すべての有効なチャネルアクセストークンv2.1のキーIDを取得する](/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1)エンドポイントを使って、現在有効なチャネルアクセストークンとペアになるキーIDを取得できます。取得したキーIDを、データベースなどに保管したチャネルアクセストークンとキーIDのペアと照合することで、有効なチャネルアクセストークンを識別できます。

詳しくは、『Messaging APIドキュメント』の「[チャネルアクセストークンv2.1を発行する](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1)」を参照してください。
