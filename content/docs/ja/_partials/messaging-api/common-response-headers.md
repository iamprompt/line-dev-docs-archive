---
title: Common Response Headers
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/common-response-headers
__hash__: xfYlxbq3ImJqlFgWVTyzfB3UfNywG556yi_XBiTRKDE
seo:
  description: ''
---

### レスポンスヘッダー

Messaging APIのレスポンスには以下のHTTPヘッダーが含まれます。

| レスポンスヘッダー                                                                                 | 説明                                                                                                                    |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| X-Line-Request-Id                                                                         | リクエストID。各リクエストごとに発行されるIDです。                                                                                           |
| X-Line-Accepted-Request-Id :div[含まれないことがあります]{className="[\"parameter-label\",\"gray\"]"} | 同じリトライキーを使ってすでにリクエストが受理されている場合、そのリクエストの`x-line-request-id`を示します。詳しくは、「[APIリクエストを再試行する](#retry-api-request)」を参照してください。 |
