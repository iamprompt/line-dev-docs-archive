---
title: Get Quota
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-quota
__hash__: HwIUsXAkgZi_fYeKXxqzJNrPiiLYiXfBRS97DZjq1zg
seo:
  description: ''
---

### 当月に送信できるメッセージ数の上限目安を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota"}::reference-with-code
  :::reference-content
  当月に送信できるメッセージ数の上限目安を取得します。無料メッセージ通数と追加メッセージ数の上限目安を合わせた値が返されます。

  このエンドポイントで取得できるメッセージ数には、LINE Official Account Managerから送信するメッセージの数も含まれます。

  追加メッセージ数の上限目安は、LINE Official Account Managerで設定します。設定方法について詳しくは、『LINEヤフー for Business』の「[利用と請求（プラン変更やお支払い関連の管理）](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/?list=7171){rel="[\"nofollow\"]"}」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/quota \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/bot/message/quota"}#### レート制限

2,000リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      上限目安が設定されているかどうかを示す値。以下のどちらかになります。

      - `none`：上限目安が未設定であることを示します。この値が返されるのは、LINEヤフー株式会社への別途の申し込みにより、[「地方公共団体プラン」](https://linegov.com/){rel="[\"nofollow\"]"}などの特別なプランが適用されている一部のLINE公式アカウントに限られます。
      - `limited`：上限目安が設定されていることを示します。LINE Official Account Managerで[コミュニケーションプラン、ライトプラン、またはスタンダードプラン](/docs/messaging-api/pricing/#examples-of-subscription-plans)を申し込み、利用しているLINE公式アカウントでは、この値が返されます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      value

      #undefined
      Number

      当月に送信できるメッセージ数の上限目安。`type`プロパティが`limited`の場合にのみ返されます。[スタンダードプラン](/docs/messaging-api/pricing/#examples-of-subscription-plans)で追加メッセージ数の上限目安を設定している場合は、スタンダードプランの無料メッセージ通数と設定値の合計が返されます。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "limited",
        "value": 1000
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
