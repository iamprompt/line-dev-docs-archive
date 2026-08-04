---
title: Get Coupon
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-coupon
__hash__: KdUmtUICEE-WHC9ATf_mlSCuSOurzHTlI41E0BSarwo
seo:
  description: ''
---

### クーポンの詳細を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/coupon/{couponId}"}::reference-with-code
  :::reference-content
  指定したクーポンの詳細情報を取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7 \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

:glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってクーポンの詳細を確認する場合は制限の対象外です。

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  couponId

  #undefined
  String

  詳細を取得するクーポンのクーポンID。
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

      クーポンのクーポンID。
      :::::

      :::::parameter-table-entry
      #undefined
      title

      #undefined
      String

      クーポンのクーポン名。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      description

      #undefined
      String

      クーポンの利用ガイド。
      :::::

      :::::parameter-table-entry
      #undefined
      acquisitionCondition

      #undefined
      Object

      クーポンの獲得条件を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      acquisitionCondition.type

      #undefined
      String

      クーポンの獲得条件のタイプ。  

      以下のいずれかの値が含まれます。

      - `normal`：条件なし。すべてのユーザーが獲得できる。
      - `lottery`：抽選。抽選で当選したユーザーのみが獲得できる。
      - `referral`：友だち紹介。クーポンを紹介したユーザーと、紹介されたユーザーの両方が獲得できる。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      acquisitionCondition.lotteryProbability

      #undefined
      Number

      クーポンの当選確率（％）。1〜99の整数です。  
      `acquisitionCondition.type`が`lottery`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      acquisitionCondition.maxAcquireCount

      #undefined
      Number

      当選者数の上限。1〜999999の整数。  

      上限なしの場合は`-1`です。  
      `acquisitionCondition.type`が`lottery`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      maxUseCountPerTicket

      #undefined
      Number

      クーポンの使用可能回数。  

      以下のいずれかの値が含まれます。

      - `1`：1回のみ
      - `-1`：上限なし
      :::::

      :::::parameter-table-entry
      #undefined
      maxTicketPerUser

      #undefined
      Number

      クーポンの獲得可能枚数。  
      `acquisitionCondition.type`が`referral`の場合のみ、1〜30の整数。それ以外の場合は、`1`です。
      :::::

      :::::parameter-table-entry
      #undefined
      startTimestamp

      #undefined
      Number

      クーポンの有効期間の開始日時。UNIX時間（秒）です。
      :::::

      :::::parameter-table-entry
      #undefined
      endTimestamp

      #undefined
      Number

      クーポンの有効期間の終了日時。UNIX時間（秒）です。
      :::::

      :::::parameter-table-entry
      #undefined
      timezone

      #undefined
      String

      有効期間の基準となるタイムゾーン。  

      以下のいずれかの値が含まれます。

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
      :::::

      :::::parameter-table-entry
      #undefined
      reward

      #undefined
      Object

      クーポンタイプの情報を含む[リワードオブジェクト](#get-coupon-reward-object)。
      :::::

      :::::parameter-table-entry
      #undefined
      visibility

      #undefined
      String

      クーポンのLINEヤフーサービスへの掲載。  

      以下のいずれかの値が含まれます。

      - `PUBLIC`：掲載する。
      - `UNLISTED`：掲載しない。

      詳しくは、『LINEヤフー for Business』の「[クーポンのLINEヤフーサービスへの掲載](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"}」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      imageUrl

      #undefined
      String

      クーポンの画像のURL。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      couponCode

      #undefined
      String

      クーポンの開封後に表示されるクーポンコード。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      barcodeImageUrl

      #undefined
      String

      クーポン開封後に表示されるバーコード画像のURL。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      usageCondition

      #undefined
      String

      クーポンの利用条件。
      :::::

      :::::parameter-table-entry
      #undefined
      status

      クーポンのステータス。

      - `DRAFT`：下書き保存されたクーポン。
      - `RUNNING`：有効期間前、または有効期間中のクーポン。
      - `CLOSED`：期限切れ、または終了したクーポン。
      :::::

      :::::parameter-table-entry
      #undefined
      createdTimestamp

      #undefined
      Number

      クーポンの作成日時。UNIX時間（秒）です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "couponId": "01K0B456W5Y6SBD3YH74YM6QE6",
        "title": "友だち限定クーポン",
        "description": "- クーポンを使用するには、この画面をスタッフに提示してください。\n- 使用済みのクーポンはご利用になれません。また、お客さまの操作で誤って「使用済み」にしてしまった場合も利用できなくなります。\n- 本クーポンは有効期間に関わらず、予告なく変更されたり、終了したりする場合があります。",
        "acquisitionCondition": {
          "type": "lottery",
          "lotteryProbability": 50,
          "maxAcquireCount": -1
        },
        "startTimestamp": 1752678000,
        "endTimestamp": 1924959540,
        "timezone": "ASIA_TOKYO",
        "couponCode": "COUPONCODE123456",
        "maxUseCountPerTicket": 1,
        "maxTicketPerUser": 1,
        "visibility": "UNLISTED",
        "reward": {
          "type": "discount",
          "priceInfo": {
            "type": "fixed",
            "fixedAmount": 100,
            "currency": "JPY"
          }
        },
        "imageUrl": "https://oa-coupon.line-scdn-dev.net/0h9gbUqRVkZkhfLHhXMLYZHwdyaCosWGBAPFR7cD5tZidsTnofYDVfezt-ZAR3YER9OzRfK35XZwR6TH5uYDF2TnJ-cBNyfURpPRl2RSFSXQc0TiJhYCFiXiZ8XXk0",
        "usageCondition": "1,000円以上のお支払いで利用可能",
        "status": "RUNNING",
        "createdTimestamp": 1752720120
      }
      ```
      :::::
    ::::
  :::
::

##### リワードオブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      クーポンタイプ。  

      以下のいずれかの値が含まれます。

      - `discount`：割引
      - `free`：無料
      - `gift`：プレゼント
      - `cashBack`：キャッシュバック
      - `others`：その他
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo

      #undefined
      Object

      割引やキャッシュバックの詳細を含むオブジェクト。  
      `type`が`discount`および`cashBack`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      priceInfo.type

      #undefined
      String

      クーポンの割引の詳細のタイプ。

      `type`が`discount`の場合は、以下のいずれかの値が含まれます。

      - `fixed`：値引きの金額を表示
      - `percentage`：値引きのパーセンテージを表示
      - `explicit`：元の価格を打ち消して値引き後の価格を表示

      `type`が`cashBack`の場合は、以下のいずれかの値が含まれます。

      - `fixed`：キャッシュバックの金額を表示
      - `percentage`：キャッシュバックのパーセンテージを表示
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo.fixedAmount

      #undefined
      Number

      値引きの金額。  
      `priceInfo.type`が`fixed`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo.percentage

      #undefined
      Number

      割引率（％）。  
      `priceInfo.type`が`percentage`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo.originalPrice

      #undefined
      Number

      割引前の価格。  
      `priceInfo.type`が`explicit`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo.priceAfterDiscount

      #undefined
      Number

      割引後の価格。  
      `priceInfo.type`が`explicit`の場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      priceInfo.currency

      #undefined
      Number

      通貨単位。LINE公式アカウントの国や地域に基づいて自動的に設定されます。  
      `priceInfo.type`が`fixed`または`explicit`の場合のみ含まれます。

      - `TWD`：台湾ドル（台湾）
      - `THB`：タイバーツ（タイ）
      - `JPY`：日本円（上記以外のすべての国や地域）
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
          "fixedAmount": 1500,
          "currency": "JPY"
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
          "priceAfterDiscount": 9500,
          "currency": "JPY"
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
          "fixedAmount": 100,
          "currency": "JPY"
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

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                        |
  | ----- | --------------------------------------------------------- |
  | `404` | 指定したクーポンが存在しません。次のような理由が考えられます。- 他のチャネルで作成したクーポンが指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないクーポンを指定した場合（404 Not Found）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "coupon not found",
            "property": ""
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
