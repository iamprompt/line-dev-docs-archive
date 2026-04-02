---
title: Status Codes
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/status-codes
__hash__: ZahpQV6vVXIiIMolFciYhWFSQyKH5jNLDoYNhk7mJmc
seo:
  description: ''
---

### ステータスコード

APIコールの後で、以下のHTTPステータスコードが返されます。ステータスコードの説明は、特に断りがない限り、[HTTP status code specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6){rel="[\"nofollow\"]"}に準拠しています。

| ステータスコード                  | 説明                                                        |
| ------------------------- | --------------------------------------------------------- |
| 200 OK                    | リクエストが成功しました。                                             |
| 400 Bad Request           | リクエストに問題があります。リクエストパラメータとJSONの形式を確認してください。                |
| 401 Unauthorized          | Authorizationヘッダーを正しく送信していることを確認してください。                   |
| 403 Forbidden             | APIを使用する権限がありません。ご契約中のプランやアカウントに付与されている権限を確認してください。       |
| 413 Payload Too Large     | リクエストのサイズが上限の2MBを超えています。リクエストのサイズを2MB以下にしてリクエストしなおしてください。 |
| 429 Too Many Requests     | 大量のリクエストで[レート制限](#rate-limits)を超過したため、一時的にリクエストを制限しています。  |
| 500 Internal Server Error | APIサーバーの一時的なエラーです。                                        |
