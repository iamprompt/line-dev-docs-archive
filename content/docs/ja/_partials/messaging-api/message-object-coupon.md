---
title: Message Object Coupon
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-coupon
__hash__: Txld4YZNCuyjpRUOOn5XokNeR1tuwGJistvtOdFySzU
seo:
  description: ''
---

### クーポンメッセージ

::reference-with-code
  :::reference-content
  クーポンメッセージは、クーポンIDを指定してユーザーにクーポンを送信するメッセージです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `coupon`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      couponId

      #undefined
      String

      クーポンのクーポンID。  

      クーポンID（`couponId`）は、[クーポンを作成](#create-coupon)した際に[レスポンス](#create-coupon-response)で渡されます。また、[クーポンの一覧を取得する](#get-coupons-list)エンドポイントでも確認できます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      deliveryTag

      #undefined
      String

      クーポンの表示経路名。  

      最大文字数：30  

      使用可能文字種：半角英数字（`a`〜`z`、`A`～`Z`、`0`～`9`）、アンダースコア（`_`）

      `deliveryTag`を指定しない場合、経路は`不明`になります。詳しくは、『LINEヤフー for Business』の「[分析 - クーポン](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_coupon/){rel="[\"nofollow\"]"}」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *クーポンメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "coupon",
        "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7",
        "deliveryTag": "2025_winter_campaign"
      }
      ```
      :::::
    ::::
  :::
::
