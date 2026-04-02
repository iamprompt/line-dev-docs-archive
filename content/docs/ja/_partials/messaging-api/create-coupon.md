---
title: Create Coupon
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/create-coupon
__hash__: 7HKPDCSQmS4n5Uiu_q6UV_HS6RZVzNfB4Rt1ub0xC7E
seo:
  description: ''
---

### クーポンを作成する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/coupon"}::reference-with-code
  :::reference-content
  クーポンを作成するAPIです。

  クーポンは作成しただけではユーザーには配布されません。作成したクーポンをメッセージとして送信する必要があります。詳しくは、『Messaging APIドキュメント』の「[Messaging APIでクーポンを送る手順](/docs/messaging-api/send-coupons-to-users/#send-coupons-using-messaging-api)」を参照してください。

  有効なクーポンを最大5,000件作成できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/coupon \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '
      {
        "title": "友だち限定クーポン",
        "description": "- クーポンを使用するには、この画面をスタッフに提示してください。\n- 使用済みのクーポンはご利用になれません。また、お客さまの操作で誤って「使用済み」にしてしまった場合も利用できなくなります。\n- 本クーポンは有効期間に関わらず、予告なく変更されたり、終了したりする場合があります。",
        "reward": {
          "type": "discount",
          "priceInfo": {
            "type": "fixed",
            "fixedAmount": 100
          }
        },
        "acquisitionCondition": {
          "type": "normal"
        },
        "startTimestamp": 0,
        "endTimestamp": 1924959599,
        "imageUrl": "https://developers.line.biz/media/messaging-api/coupon/sample-coupon-image-100-yen-off.jpg",
        "timezone": "ASIA_TOKYO",
        "visibility": "UNLISTED",
        "maxUseCountPerTicket": 1
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

:glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってクーポンを作成する場合は制限の対象外です。

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  title

  #undefined
  String

  クーポンのクーポン名。  

  最大文字数：60
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  #undefined
  String

  クーポンの利用ガイド。クーポンの利用方法や注意事項などを設定します。改行文字（`\n`）を使って改行できます。  

  最大文字数：1,000
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  acquisitionCondition

  #undefined
  Object

  クーポンの獲得条件を含むオブジェクト。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  acquisitionCondition.type

  #undefined
  String

  クーポンの獲得条件のタイプ。  

  以下のいずれかの値を指定します。

  - `normal`：条件なし。すべてのユーザーが獲得できる。
  - `lottery`：抽選。抽選で当選したユーザーのみが獲得できる。

  なお獲得条件が「友だち紹介」のクーポンは、Messaging APIでは作成できません。LINE Official Account Managerからのみ作成できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  acquisitionCondition.lotteryProbability

  #undefined
  Number

  クーポンの当選確率（％）。1〜99の整数を指定します。  

  たとえば、50を指定したときの当選確率は50%となります。  
  `acquisitionCondition.type`が`lottery`の場合は必須です。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  acquisitionCondition.maxAcquireCount

  #undefined
  Number

  当選者数の上限。1〜999999の整数を指定します。  

  上限なしの場合は`-1`を指定します。  
  `acquisitionCondition.type`が`lottery`の場合は必須です。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  maxUseCountPerTicket

  #undefined
  Number

  クーポンの使用可能回数。  

  以下のいずれかの値を指定します。

  - `1`：1回のみ
  - `-1`：上限なし
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  startTimestamp

  #undefined
  Number

  クーポンの有効期間の開始日時。  

  UNIX時間（秒）で指定します。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  endTimestamp

  #undefined
  Number

  クーポンの有効期間の終了日時。  

  UNIX時間（秒）で指定します。  

  現在日時よりも前、あるいは開始日時よりも前の日時は指定できません。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  timezone

  #undefined
  String

  有効期間の基準となるタイムゾーン。  

  以下のいずれかの値を指定します。

  - `ETC_GMT_MINUS_12`：（UTC-12:00） Etc/GMT-12
  - `ETC_GMT_MINUS_11`：（UTC-11:00） Etc/GMT-11
  - `PACIFIC_HONOLULU`：（UTC-10:00） Pacific/Honolulu
  - `AMERICA_ANCHORAGE`：（UTC-09:00） America/Anchorage
  - `AMERICA_LOS_ANGELES`：（UTC-08:00） America/Los_Angeles, Santa_Isabel
  - `AMERICA_PHOENIX`：（UTC-07:00） America/Phoenix, Denver
  - `AMERICA_CHICAGO`：（UTC-06:00） America/Chicago, Guatemala
  - `AMERICA_NEW_YORK`：（UTC-05:00） America/New_York, Indiana/Indianapolis
  - `AMERICA_CARACAS`：（UTC-04:30） America/Caracas
  - `AMERICA_SANTIAGO`：（UTC-04:00） America/Santiago, Cuiaba
  - `AMERICA_ST_JOHNS`：（UTC-03:30） America/St_Johns
  - `AMERICA_SAO_PAULO`：（UTC-03:00） America/Sao_Paulo, Argentina/Buenos_Aires
  - `ETC_GMT_MINUS_2`：（UTC-02:00） Etc/GMT-2
  - `ATLANTIC_CAPE_VERDE`：（UTC-01:00） Atlantic/Cape_Verde, Azores
  - `EUROPE_LONDON`：（UTC+00:00） Europe/London, Etc/GMT
  - `EUROPE_PARIS`：（UTC+01:00） Europe/Paris, Berlin
  - `EUROPE_ISTANBUL`：（UTC+02:00） Europe/Istanbul, Kiev
  - `EUROPE_MOSCOW`：（UTC+03:00） Europe/Moscow, Minsk
  - `ASIA_TEHRAN`：（UTC+03:30） Asia/Tehran
  - `ASIA_TBILISI`：（UTC+04:00） Asia/Tbilisi, Yerevan
  - `ASIA_KABUL`：（UTC+04:30） Asia/Kabul
  - `ASIA_TASHKENT`：（UTC+05:00） Asia/Tashkent, Karachi
  - `ASIA_COLOMBO`：（UTC+05:30） Asia/Colombo, Kolkata
  - `ASIA_KATHMANDU`：（UTC+05:45） Asia/Kathmandu
  - `ASIA_ALMATY`：（UTC+06:00） Asia/Almaty, Dhaka
  - `ASIA_RANGOON`：（UTC+06:30） Asia/Rangoon
  - `ASIA_BANGKOK`：（UTC+07:00） Asia/Bangkok, Jakarta
  - `ASIA_TAIPEI`：（UTC+08:00） Asia/Taipei, Singapore
  - `ASIA_TOKYO`：（UTC+09:00） Asia/Tokyo, Seoul
  - `AUSTRALIA_DARWIN`：（UTC+09:30） Australia/Darwin, Adelaide
  - `AUSTRALIA_SYDNEY`：（UTC+10:00） Australia/Sydney, Brisbane
  - `ASIA_VLADIVOSTOK`：（UTC+11:00） Asia/Vladivostok, Pacific/Guadalcanal
  - `ETC_GMT_PLUS_12`：（UTC+12:00） Etc/GMT+12
  - `PACIFIC_TONGATAPU`：（UTC+13:00） Pacific/Tongatapu, Apia
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  reward

  #undefined
  Object

  クーポンタイプの情報を含む[リワードオブジェクト](#create-coupon-reward-object)。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  visibility

  #undefined
  String

  クーポンのLINEヤフーサービスへの掲載。  

  以下のいずれかの値を指定します。

  - `PUBLIC`：掲載する。
  - `UNLISTED`：掲載しない。

  詳しくは、『LINEヤフー for Business』の「[クーポンのLINEヤフーサービスへの掲載](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"}」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageUrl

  #undefined
  String

  クーポンの画像のURL。  

  最大文字数：2000  

  プロトコル：HTTPS（TLS 1.2以降）  

  画像フォーマット：JPEGまたはPNG  

  最大ファイルサイズ：10MB（1MB以下推奨）

  URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

    ::::admonition{title="URLの画像を後から変更してもクーポンの画像は更新されません" type="note"}
    URLの画像は、クーポン作成時に取得されて、LINEプラットフォームに保存されます。URLの画像を後から変更しても、クーポンで表示される画像は更新されません。
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  couponCode

  #undefined
  String

  クーポンの開封後に表示されるクーポンコード。  

  最大文字数：16
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  barcodeImageUrl

  #undefined
  String

  クーポン開封後に表示されるバーコード画像のURL。  

  最大文字数：2000  

  プロトコル：HTTPS（TLS 1.2以降）  

  画像フォーマット：JPEGまたはPNG  

  最大ファイルサイズ：10MB

  URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

    ::::admonition{title="URLの画像を後から変更してもクーポンの画像は更新されません" type="note"}
    URLの画像は、クーポン作成時に取得されて、LINEプラットフォームに保存されます。URLの画像を後から変更しても、クーポンで表示される画像は更新されません。
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  usageCondition

  #undefined
  String

  クーポンの利用条件。  

  最大文字数：100
  :::
::

##### リワードオブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      クーポンタイプ。  

      以下のいずれかの値を指定します。

      - `discount`：割引
      - `free`：無料
      - `gift`：プレゼント
      - `cashBack`：キャッシュバック
      - `others`：その他
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo

      #undefined
      Object

      割引やキャッシュバックの詳細を含むオブジェクト。  
      `type`が`discount`および`cashBack`の場合は必須です。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      priceInfo.type

      #undefined
      String

      クーポンの割引の詳細のタイプ。

      `type`が`discount`の場合は、以下のいずれかの値を指定できます。

      - `fixed`：値引きの金額を表示
      - `percentage`：値引きのパーセンテージを表示
      - `explicit`：元の価格を打ち消して値引き後の価格を表示

      `type`が`cashBack`の場合は、以下のいずれかの値を指定できます。

      - `fixed`：キャッシュバックの金額を表示
      - `percentage`：キャッシュバックのパーセンテージを表示
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.fixedAmount

      #undefined
      Number

      値引きの金額を正の整数で指定します。  
      `priceInfo.type`が`fixed`の場合は必須です。  

      通貨単位は、LINE公式アカウントの国や地域に基づいて自動的に設定されます。

      - 台湾：TWD（台湾ドル）
      - タイ：THB（タイバーツ）
      - 上記以外のすべての国や地域：JPY（日本円）
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.percentage

      #undefined
      Number

      割引率（%）を1〜99の整数で指定します。  

      たとえば、50を指定したときの割引率は50%となります。  
      `priceInfo.type`が`percentage`の場合は必須です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.originalPrice

      #undefined
      Number

      割引前の価格を正の整数で指定します。  
      `priceInfo.type`が`explicit`の場合は必須です。  

      通貨単位は、LINE公式アカウントの国や地域に基づいて自動的に設定されます。

      - 台湾：TWD（台湾ドル）
      - タイ：THB（タイバーツ）
      - 上記以外のすべての国や地域：JPY（日本円）
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      priceInfo.priceAfterDiscount

      #undefined
      Number

      割引後の価格を正の整数で指定します。  
      `priceInfo.type`が`explicit`の場合は必須です。  

      通貨単位は、LINE公式アカウントの国や地域に基づいて自動的に設定されます。

      - 台湾：TWD（台湾ドル）
      - タイ：THB（タイバーツ）
      - 上記以外のすべての国や地域：JPY（日本円）
      :::::
    ::::
  :::

  :::reference-code
  *リワードオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 1,500円割引
      {
        "type": "discount",
        "priceInfo": {
          "type": "fixed",
          "fixedAmount": 1500
        }
      }

      // 25%割引
      {
        "type": "discount",
        "priceInfo": {
          "type": "percentage",
          "percentage": 25
        }
      }

      // 12,000円を打ち消して値引き後の9,500円を表示
      {
        "type": "discount",
        "priceInfo": {
          "type": "explicit",
          "originalPrice": 12000,
          "priceAfterDiscount": 9500
        }
      }

      // 無料
      {
        "type": "free"
      }

      // プレゼント
      {
        "type": "gift"
      }

      // 100円キャッシュバック
      {
        "type": "cashBack",
        "priceInfo": {
          "type": "fixed",
          "fixedAmount": 100
        }
      }

      // 30%キャッシュバック
      {
        "type": "cashBack",
        "priceInfo": {
          "type": "percentage",
          "percentage": 30
        }
      }

      // その他
      {
        "type": "others"
      }
      ```
      :::::
    ::::
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      couponId

      #undefined
      String

      クーポンのID。クーポンをメッセージで送る際などに使用します。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7"
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

  | コード   | 説明                                                                                                                                   |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | クーポンを作成できませんでした。次のような理由が考えられます。- 無効なクーポンタイプが指定されている。 - 有効なクーポンの数が上限（最大5,000件）に達した。 - リワードオブジェクトで`priceInfo.type`と一致しないプロパティが指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // クーポン名の文字数が60文字を超えている場合
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Size must be between 1 and 60",
            "property": "title"
          }
        ]
      }

      // 無効なクーポンタイプを指定した場合
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must be one of the following values: [discount,free,gift,cashBack,others]",
            "property": "reward.type"
          }
        ]
      }

      // 有効なクーポンの数が上限を超えた場合
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "You have too many coupons created.",
            "property": ""
          }
        ]
      }

      // リワードオブジェクトでpriceInfo.typeがpercentageなのにfixedAmountが指定されていた場合
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Must not be specified",
            "property": "reward.priceInfo.fixedAmount"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
