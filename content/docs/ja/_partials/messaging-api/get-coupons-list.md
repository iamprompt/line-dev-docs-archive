---
title: Get Coupons List
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-coupons-list
__hash__: obIgXKL_jk_NvZDox7oQ_d0xZxDqaxymLo4KthXsRsI
seo:
  description: ''
---

### クーポンの一覧を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/coupon"}::reference-with-code
  :::reference-content
  クーポンの一覧（クーポンIDとクーポン名）を取得するAPIです。有効なクーポンのみ、あるいは終了したクーポンのみを取得することもできます。

  このクーポンの一覧には、Messaging APIで作成したクーポンだけでなく、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成したクーポンも含まれており、同じ一覧がLINE Official Account Managerでも確認できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/coupon \
      -H 'Authorization: Bearer {channel access token}'
      -d 'limit=100' \
      -d 'status=DRAFT,RUNNING' \
      -G
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

:glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってクーポンの一覧を確認する場合は制限の対象外です。

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  1回のリクエストで取得するクーポンの最大数。デフォルト値は`20`です。  

  最大値：`100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  継続トークンの値。[レスポンス](#get-coupons-list-response)で返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでクーポンをすべて取得できない場合は、このパラメータを指定して残りのクーポンを取得します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  status

  取得するクーポンのステータス。省略した場合は、すべてのステータスのクーポンを取得対象とします。

  - `DRAFT`：下書き保存されたクーポン。
  - `RUNNING`：有効期間前、または有効期間中のクーポン。
  - `CLOSED`：期限切れ、または終了したクーポン。

  複数のパラメータを指定した場合、OR条件となります。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      items

      #undefined
      Array of objects

      クーポンを表すオブジェクトの配列。  

      最大数：`limit`で指定した数
      :::::

      :::::parameter-table-entry
      #undefined
      items[].couponId

      #undefined
      String

      クーポンID。
      :::::

      :::::parameter-table-entry
      #undefined
      items[].title

      #undefined
      String

      クーポン名。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。次のクーポンを取得するために使用します。このプロパティは、レスポンスの`items`プロパティで取得しきれなかったクーポンがある場合にのみ返されます。

      継続トークンの有効期間は24時間（86,400秒間）です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // すべてのクーポンが取得できた場合
      {
        "items": [
          {
            "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
            "title": "年末年始クーポン"
          },
          {
            "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
            "title": "友だち限定クーポン"
          }
        ]
      }

      // 取得しきれなかったクーポンがまだある場合
      {
        "next": "MTAwMDU3MjAxOjE3NTI1Njk5NDU2MjE6WXBPRHo1N3VjL3hPMkcxVEZPVGY1eW9YS3BqL2R2TGVEdit2V3J0ckczVT0=",
        "items": [
          {
            "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
            "title": "年末年始クーポン"
          },
          {
            "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
            "title": "友だち限定クーポン"
          }
        ]
      }

      // 該当するクーポンがなかった場合
      {
        "items": []
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                              |
  | ----- | ------------------------------------------------------------------------------- |
  | `400` | クーポンの一覧を取得できませんでした。次のような理由が考えられます。- 無効なステータスが指定されている。 - 取得するクーポンの最大値が100を越えている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なステータスを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be one of the following values: [DRAFT,RUNNING,CLOSED]",
            "property": "status"
          }
        ]
      }

      // 取得するクーポンの最大値が100を超えていた場合
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be less than or equal to 100",
            "property": "limit"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
