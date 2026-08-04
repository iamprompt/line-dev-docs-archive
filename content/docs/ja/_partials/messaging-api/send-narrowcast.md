---
title: Send Narrowcast
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/send-narrowcast
__hash__: Dq8Cp7iRLIvHYc8eWo-q9_tGTdJbbALa2mz-hlOUZaI
seo:
  description: ''
---

### ナローキャストメッセージを送る

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/narrowcast"}::reference-with-code
  :::reference-content
  複数のユーザーに、任意のタイミングでメッセージを送信します。送信対象は、属性情報（性別や年齢、OSの種類、地域など）やリターゲティング（オーディエンス）を利用して指定できます。グループトークまたは複数人トークにメッセージを送ることはできません。

  ナローキャストメッセージは、LINEプラットフォームがリクエストを受信した後にバックグラウンドで非同期に送信されます。そのため、ナローキャストメッセージを送信するリクエストが成功していたとしても、送信開始後に失敗している可能性があります。メッセージの送信が成功したかどうかは、[ナローキャストメッセージの進行状況を取得](#get-narrowcast-progress-status)することで確認できます。

    ::::admonition{title="タイの20歳未満のユーザーへのナローキャストメッセージの送信について" type="note"}
    送信対象を特定の条件で絞り込む場合に、タイの20歳未満のユーザーは、メッセージの送信対象から除外されます。
    ::::

  #### ナローキャストメッセージを送信できる条件

  ナローキャストメッセージは、LINE公式アカウントを友だち追加しているユーザーに対して送信できます。

  なお、以下のユーザーを送信対象に含めた場合、ステータスコード`202`が返されますが、送信対象からは除外されます。

  - LINEアカウントを削除したユーザー
  - LINE公式アカウントをブロックしているユーザー
  - LINE公式アカウントを友だち追加していないユーザー
  - 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルにユーザーIDが存在しないユーザー

  #### 属性情報やオーディエンスを利用したメッセージ送信の制限事項

  属性情報やオーディエンスを利用した場合、メッセージの送信条件に応じて、ユーザーのプライバシーを保護するための制限が適用されることがあります。制限に該当した場合、リクエスト送信時もしくはメッセージの送信開始時にエラーになります。

  - 送信条件に属性情報を指定するには、LINE公式アカウントの::::glossary-tooltip{glossary-id="target-reach"}
  [ターゲットリーチ](/glossary/#target-reach)
  ::::

  が100人以上である必要があります。ターゲットリーチが100人未満の場合はステータスコード`403`が返されます。
  - 送信条件に属性情報またはオーディエンス（※）を指定した場合、最終的な送信対象が50人以上である必要があります。最終的な送信対象が50人未満の場合にもステータスコード`202`が返されますが、メッセージの送信開始時にエラーとなります。
  - 送信条件に1件以上のオーディエンスを指定した場合、各オーディエンス（※）の送信対象がそれぞれ50人以上である必要があります。送信対象が50人未満のオーディエンスが含まれていた場合にもステータスコード`202`が返されますが、メッセージの送信開始時にエラーとなります。

  ※以下のオーディエンスには、送信対象の人数に関する制限はありません。ただし、他のLINE公式アカウントの下で作成されたオーディエンスについては、以下のオーディエンスであっても制限が適用されます。

  - LINE Official Account ManagerやMessaging APIから、ユーザーIDアップロードにより作成されたオーディエンス
  - チャットタグオーディエンス

  #### 当月に配信できるメッセージの残数に関する注意事項

  LINE Official Account ManagerおよびMessaging APIでは、メッセージの送信開始から、実際に送信される件数が確定するまでの間、当月に配信できるメッセージの残数に対して送信予定のメッセージ数が予約された状態になります。メッセージの送信開始時点で送信予定のメッセージ数が予約ができない場合は、メッセージの送信に失敗します。

  ナローキャストメッセージの場合、実際の送信対象となるユーザー数に関わらず、LINE公式アカウントのターゲットリーチ分の予約が必要となります。そのため、ナローキャストメッセージの送信時には、以下の点に注意してください。

  - 当月に配信できるメッセージの残数が、LINE公式アカウントのターゲットリーチに満たない場合、ナローキャストメッセージの送信開始時にエラーとなります。
  - 実際の送信対象となるユーザー数が十分に少ないにも関わらず、当月分のメッセージの残数が一時的に枯渇することがあります。この場合、ナローキャストメッセージの配信中に別のメッセージを送信すると、`429 Too Many Requests`およびエラーメッセージ`You have reached your monthly limit.`が返され、メッセージの送信に失敗します。

  これらはナローキャストメッセージの送信時に、メッセージの送信数を制限することによって回避できる場合があります。詳しくは、[リクエストボディ](#send-narrowcast-request-body)の[リミットオブジェクト](#send-narrowcast-limit)を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/narrowcast \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "messages": [
              {
                  "type": "text",
                  "text": "test message"
              }
          ],
          "recipient": {
              "type": "operator",
              "and": [
                  {
                      "type": "audience",
                      "audienceGroupId": 5614991017776
                  },
                  {
                      "type": "operator",
                      "not": {
                          "type": "audience",
                          "audienceGroupId": 4389303728991
                      }
                  }
              ]
          },
          "filter": {
              "demographic": {
                  "type": "operator",
                  "or": [
                      {
                          "type": "operator",
                          "and": [
                              {
                                  "type": "gender",
                                  "oneOf": [
                                      "male",
                                      "female"
                                  ]
                              },
                              {
                                  "type": "age",
                                  "gte": "age_20",
                                  "lt": "age_25"
                              },
                              {
                                  "type": "appType",
                                  "oneOf": [
                                      "android",
                                      "ios"
                                  ]
                              },
                              {
                                  "type": "area",
                                  "oneOf": [
                                      "jp_23",
                                      "jp_05"
                                  ]
                              },
                              {
                                  "type": "subscriptionPeriod",
                                  "gte": "day_7",
                                  "lt": "day_30"
                              }
                          ]
                      },
                      {
                          "type": "operator",
                          "and": [
                              {
                                  "type": "age",
                                  "gte": "age_35",
                                  "lt": "age_40"
                              },
                              {
                                  "type": "operator",
                                  "not": {
                                      "type": "gender",
                                      "oneOf": [
                                          "male"
                                      ]
                                  }
                              }
                          ]
                      }
                  ]
              }
          },
          "limit": {
              "max": 100,
              "upToRemainingQuota": true
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### レート制限

60リクエスト/時

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

  `application/json`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  X-Line-Retry-Key

  リトライキー。任意の方法で生成した16進表記のUUID（例：123e4567-e89b-12d3-a456-426614174000）を指定します。リトライキーはLINEから提供されません。開発者自身が一意のリトライキーを生成する必要があります。詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」を参照してください。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](#message-objects)の配列

  送信するメッセージ  

  最大件数：5

  [ナローキャストメッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-narrowcast-message)エンドポイントを使用すると、メッセージオブジェクトが有効かを検証できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  recipient

  #undefined
  Object

  [レシピエントオブジェクト](#narrowcast-recipient)。オーディエンスや、過去に配信したナローキャストメッセージのリクエストIDを合計10件まで使用して、送信対象を指定します。指定できる演算子オブジェクトの数に上限はありません。  

  省略すると、LINE公式アカウントを友だち追加したすべてのユーザーが送信対象になります。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  filter.demographic

  #undefined
  Object

  [デモグラフィックフィルターオブジェクト](#narrowcast-demographic-filter)。友だちの属性情報を使用して、送信対象をフィルタリングできます。  

  省略すると、属性が「不明」になっているユーザーを含めた全員に配信されます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Object

  [リミットオブジェクト](#send-narrowcast-limit)。ナローキャストメッセージの最大送信数を制限する場合に設定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`：メッセージ送信時に、ユーザーに通知されない。
  - `false`：メッセージ送信時に、ユーザーに通知される。ただし、LINEで通知をオフにしている場合は通知されません。

  デフォルト値は`false`です。
  :::
::

##### レシピエントオブジェクト

::reference-with-code
  :::reference-content
  レシピエントオブジェクトは、オーディエンスオブジェクトまたは再配信オブジェクトを表すオブジェクトです。演算子オブジェクトを利用すると、条件を組み合わせて送信対象を指定できます。1回のリクエストごとに、オーディエンスオブジェクトと再配信オブジェクトを合計10件まで指定できます。演算子オブジェクトの数に上限はありません。

  ###### オーディエンスオブジェクト

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `audience`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      audienceGroupId

      #undefined
      Number

      オーディエンスID。オーディエンスを作成するには、「[オーディエンス管理](#manage-audience-group)」のAPIを使用します。
      :::::
    ::::

  ###### 再配信オブジェクト

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `redelivery`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      requestId

      #undefined
      String

      過去に配信したナローキャストメッセージのリクエストID。リクエストIDは、Messaging APIのリクエストごとに発行されるIDです。[レスポンスヘッダー](#response-headers)に含まれます。
      :::::
    ::::

    ::::admonition{title="指定できるリクエストIDにはいくつかの条件があります" type="note"}
    以下の条件をすべて満たすリクエストIDを、`requestId`プロパティで指定してください。条件を満たしていないリクエストIDが指定された場合はステータスコード`400`が返されます。

    - ナローキャストメッセージの配信によって発行されたリクエストIDであること
    - 「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status-response)」エンドポイントで取得する`acceptedTime`プロパティの値（タイムスタンプ）から14日間（336時間）未満の配信であること
    - 送信処理が完了していること（「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status-response)」で、レスポンスの`phase`プロパティの値が`succeeded`であること）
    ::::

  ###### 演算子オブジェクト

  積集合（AND）、和集合（OR）、差集合（NOT）を使用して、複数のレシピエントオブジェクトから、新たなレシピエントオブジェクトを作成できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `operator`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      and

      #undefined
      レシピエントオブジェクトの配列

      配列で指定したレシピエントオブジェクトの積集合（AND）を、新たなレシピエントオブジェクトとします。

      ![Audience 1 and Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_and.png){className="[\"w-fix-360\"]"}
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      or

      #undefined
      レシピエントオブジェクトの配列

      配列で指定したレシピエントオブジェクトの和集合（OR）を、新たなレシピエントオブジェクトとします。

      ![Audience 1 or Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_or.png){className="[\"w-fix-360\"]"}
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      not

      #undefined
      レシピエントオブジェクト

      指定したレシピエントオブジェクトを配信対象外にした、新たなレシピエントオブジェクトとします。

      ![not Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_not.png){className="[\"w-fix-360\"]"}
      :::::
    ::::

  ※`and`プロパティ、`or`プロパティ、`not`プロパティのいずれか1つだけ、必ず指定してください。また、空配列は指定できません。
  :::

  :::reference-code
  *レシピエントオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "operator",
        "and": [
          {
            "type": "audience",
            "audienceGroupId": 5614991017776
          },
          {
            "type": "operator",
            "not": {
              "type": "redelivery",
              "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

##### デモグラフィックフィルターオブジェクト

::reference-with-code
  :::reference-content
  デモグラフィックフィルターオブジェクトは、送信対象をフィルタリングする条件（性別、年齢、OSの種類、地域、友だち期間）を表すオブジェクトです。演算子オブジェクトを利用すると、条件を組み合わせて送信対象をフィルタリングできます。

    ::::admonition{title="属性情報の利用について" type="note"}
    - 属性情報は約3日前（前後する可能性があります）の属性情報を元に絞り込みます。
    - 属性を指定しない場合は、属性が「不明」になっているユーザーを含めた全員に配信されます。
    - 属性情報を利用するには、100人以上の:::::glossary-tooltip{glossary-id="target-reach"}
    [ターゲットリーチ](/glossary/#target-reach)
    :::::

    が必要です。

      - ターゲットリーチが100人未満の場合はステータスコード`403`が返されます。
    ::::

  ###### 性別

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `gender`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      指定した性別を送信対象とします。以下のいずれかの値を指定します。

      - `male`
      - `female`
      :::::
    ::::

  ###### 年齢

  年齢の範囲を指定してフィルタリングします。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `age`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      gte

      #undefined
      String

      指定した年齢以上を送信対象とします。

      以下のいずれかの値を指定します。ただし、`lt`プロパティで指定した値より小さい値を指定してください。

      - `age_15`
      - `age_20`
      - `age_25`
      - `age_30`
      - `age_35`
      - `age_40`
      - `age_45`
      - `age_50`
      - `age_55`
      - `age_60`
      - `age_65`
      - `age_70`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      lt

      #undefined
      String

      指定した年齢未満を送信対象とします。

      以下のいずれかの値を指定します。ただし、`gte`プロパティで指定した値より大きい値を指定してください。

      - `age_15`
      - `age_20`
      - `age_25`
      - `age_30`
      - `age_35`
      - `age_40`
      - `age_45`
      - `age_50`
      - `age_55`
      - `age_60`
      - `age_65`
      - `age_70`
      :::::
    ::::

  ※`gte`プロパティまたは`lt`プロパティの両方またはいずれか一方を、必ず指定してください。

  ###### OSの種類

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `appType`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      指定したOSを送信対象とします。以下のいずれかの値を指定します。

      - `ios`
      - `android`
      :::::
    ::::

  ###### 地域

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `area`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      指定した地域を送信対象とします。以下のいずれかの値を指定します。  
      **日本 // JP (country code=392)**

      - `jp_01`：北海道 // Hokkaido
      - `jp_02`：青森県 // Aomori
      - `jp_03`：岩手県 // Iwate
      - `jp_04`：宮城県 // Miyagi
      - `jp_05`：秋田県 // Akita
      - `jp_06`：山形県 // Yamagata
      - `jp_07`：福島県 // Fukushima
      - `jp_08`：茨城県 // Ibaraki
      - `jp_09`：栃木県 // Tochigi
      - `jp_10`：群馬県 // Gunma
      - `jp_11`：埼玉県 // Saitama
      - `jp_12`：千葉県 // Chiba
      - `jp_13`：東京都 // Tokyo
      - `jp_14`：神奈川県 // Kanagawa
      - `jp_15`：新潟県 // Niigata
      - `jp_16`：富山県 // Toyama
      - `jp_17`：石川県 // Ishikawa
      - `jp_18`：福井県 // Fukui
      - `jp_19`：山梨県 // Yamanashi
      - `jp_20`：長野県 // Nagano
      - `jp_21`：岐阜県 // Gifu
      - `jp_22`：静岡県 // Shizuoka
      - `jp_23`：愛知県 // Aichi
      - `jp_24`：三重県 // Mie
      - `jp_25`：滋賀県 // Shiga
      - `jp_26`：京都府 // Kyoto
      - `jp_27`：大阪府 // Osaka
      - `jp_28`：兵庫県 // Hyougo
      - `jp_29`：奈良県 // Nara
      - `jp_30`：和歌山県 // Wakayama
      - `jp_31`：鳥取県 // Tottori
      - `jp_32`：島根県 // Shimane
      - `jp_33`：岡山県 // Okayama
      - `jp_34`：広島県 // Hiroshima
      - `jp_35`：山口県 // Yamaguchi
      - `jp_36`：徳島県 // Tokushima
      - `jp_37`：香川県 // Kagawa
      - `jp_38`：愛媛県 // Ehime
      - `jp_39`：高知県 // Kouchi
      - `jp_40`：福岡県 // Fukuoka
      - `jp_41`：佐賀県 // Saga
      - `jp_42`：長崎県 // Nagasaki
      - `jp_43`：熊本県 // Kumamoto
      - `jp_44`：大分県 // Oita
      - `jp_45`：宮崎県 // Miyazaki
      - `jp_46`：鹿児島県 // Kagoshima
      - `jp_47`：沖縄県 // Okinawa

      **台湾 // TW (country code=158)**

      - `tw_01`：台北市 // Taipei City
      - `tw_02`：新北市 // New Taipei City
      - `tw_03`：桃園市 // Taoyuan City
      - `tw_04`：台中市 // Taichung City
      - `tw_05`：台南市 // Tainan City
      - `tw_06`：高雄市 // Kaohsiung City
      - `tw_07`：基隆市 // Keelung City
      - `tw_08`：新竹市 // Hsinchu City
      - `tw_09`：嘉義市 // Chiayi City
      - `tw_10`：新竹県 // Hsinchu County
      - `tw_11`：苗栗県 // Miaoli County
      - `tw_12`：彰化県 // Changhua County
      - `tw_13`：南投県 // Nantou County
      - `tw_14`：雲林県 // Yunlin County
      - `tw_15`：嘉義県 // Chiayi County
      - `tw_16`：屏東県 // Pingtung County
      - `tw_17`：宜蘭県 // Yilan County
      - `tw_18`：花蓮県 // Hualien County
      - `tw_19`：台東県 // Taitung County
      - `tw_20`：澎湖県 // Penghu County
      - `tw_21`：金門県 // Kinmen County
      - `tw_22`：連江県 // Lienchiang County

      **タイ // TH (country code=764)**

      - `th_01`：バンコク // Bangkok
      - `th_02`：パタヤ // Pattaya
      - `th_03`：北部 // Northern
      - `th_04`：中央部 // Central
      - `th_05`：南部 // Southern
      - `th_06`：東部 // Eastern
      - `th_07`：東北部 // NorthEastern
      - `th_08`：西部 // Western
      :::::
    ::::

  ###### 友だち期間

  友だち期間の範囲を指定してフィルタリングします。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `subscriptionPeriod`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      gte

      #undefined
      String

      指定した日数以上を送信対象とします。  

      以下のいずれかの値を指定します。ただし、`lt`プロパティで指定した値より小さい値を指定してください。

      - `day_7`
      - `day_30`
      - `day_90`
      - `day_180`
      - `day_365`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      lt

      #undefined
      String

      指定した日数未満を送信対象とします。  

      以下のいずれかの値を指定します。ただし、`gte`プロパティで指定した値より大きい値を指定してください。

      - `day_7`
      - `day_30`
      - `day_90`
      - `day_180`
      - `day_365`
      :::::
    ::::

  ※`gte`プロパティまたは`lt`プロパティの両方またはいずれか一方を、必ず指定してください。

  ###### 演算子オブジェクト

  積集合（AND）、和集合（OR）、差集合（NOT）を使用して、複数のデモグラフィックフィルターオブジェクトから、新たなデモグラフィックフィルターオブジェクトを作成できます。1回のリクエストごとに、デモグラフィックフィルターオブジェクトは、合計10件まで指定できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `operator`
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      and

      #undefined
      デモグラフィックフィルターオブジェクトの配列

      配列で指定したデモグラフィックフィルターオブジェクトの積集合（AND）を、新たなデモグラフィックフィルターオブジェクトとします。
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      or

      #undefined
      デモグラフィックフィルターオブジェクトの配列

      配列で指定したデモグラフィックフィルターオブジェクトの和集合（OR）を、新たなデモグラフィックフィルターオブジェクトとします。
      :::::

      :::::parameter-table-entry{annotation="※"}
      #undefined
      not

      #undefined
      デモグラフィックフィルターオブジェクト

      指定したデモグラフィックフィルターオブジェクトを配信対象外にした、新たなデモグラフィックフィルターオブジェクトとします。
      :::::
    ::::

  ※`and`プロパティ、`or`プロパティ、`not`プロパティのいずれか1つだけ、必ず指定してください。また、空配列は指定できません。
  :::

  :::reference-code
  *性別を使用してフィルタリングするデモグラフィックフィルターオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "gender",
        "oneOf": ["male", "female"]
      }
      ```
      :::::
    ::::
  :::
::

##### リミットオブジェクト

::reference-with-code
  :::reference-content
  リミットオブジェクトは、ナローキャストメッセージの最大送信数を制限する場合に設定します。

  各プロパティの設定による最大送信数の制御について詳しくは、『Messaging APIドキュメント』の「[リミットオブジェクトによる最大送信数の制御](/docs/messaging-api/sending-messages/#maximum-send-numbers-control)」を参照してください。

    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      max

      #undefined
      Number

      ナローキャストメッセージの最大送信数。このナローキャストメッセージによる送信数を制限する場合に指定します。なお送信対象は、無作為に抽出されます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      upToRemainingQuota

      #undefined
      Boolean

      `true`を指定すると、配信可能な上限数の範囲内でメッセージを送信します。デフォルト値は`false`です。なお送信対象は、無作為に抽出されます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      forbidPartialDelivery

      #undefined
      Boolean

      送信対象の一部にのみメッセージが配信されることを防ぐためのオプションです。`upToRemainingQuota`プロパティに`true`を指定し、`forbidPartialDelivery`プロパティにも`true`を指定すると、送信対象の人数がメッセージの最大送信数を超えていた場合、メッセージの配信を行いません。

      メッセージの配信が中止されたかどうかは、[ナローキャストメッセージの進行状況を取得](#get-narrowcast-progress-status)することで確認できます。配信が中止された場合、進行状況を取得した際のレスポンスで`phase`プロパティが`failed`となり、`errorCode`プロパティで`5`が返されます。

      `forbidPartialDelivery`プロパティは`upToRemainingQuota`プロパティが`true`の場合にのみ、指定できます。
      :::::
    ::::
  :::

  :::reference-code
  *リミットオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "max": 100,
        "upToRemainingQuota": true,
        "forbidPartialDelivery": true
      }
      ```
      :::::
    ::::
  :::
::

`max`プロパティおよび`upToRemainingQuota`プロパティの設定値と、メッセージの予約数および最大送信数の関係は以下のとおりです。

| `max`プロパティ | `upToRemainingQuota`プロパティ | 予約数および最大送信数                           |
| ---------- | ------------------------- | ------------------------------------- |
| 未指定        | false                     | ターゲットリーチの数                            |
| 任意の数値      | false                     | ターゲットリーチの数と、`max`プロパティのうちの最小値         |
| 未指定        | true                      | ターゲットリーチの数と、当月分の上限目安のうちの最小値           |
| 任意の数値      | true                      | ターゲットリーチの数、当月分の上限目安、`max`プロパティのうちの最小値 |

#### レスポンス

HTTPステータスコード`202`と空のJSONオブジェクトを返します。

ナローキャストメッセージの送信は非同期に行われます。ナローキャストメッセージの送信状況を確認する方法について詳しくは、「[ナローキャストメッセージの進行状況を取得する](#get-narrowcast-progress-status)」を参照してください。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                                                                                                       |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | メッセージを送信できませんでした。次のような理由が考えられます。- [再配信オブジェクト](#narrowcast-recipient-redelivery-object)に無効なリクエストIDが指定されている。 - ステータスが`READY`以外など、無効なオーディエンスが指定されている。 - 無効なメッセージオブジェクトが指定されている。 - 無効な組み合わせのリクエストパラメータが指定されている。                              |
  | `403` | 送信対象が不足しています。詳しくは、「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](#send-narrowcast-message-restrictions)」を参照してください。                                                                                                                                     |
  | `409` | 同じリトライキーを含むリクエストがすでに受理されています。詳しくは、「APIリクエストを再試行する」の「[すでにリクエストが受理されていた場合のレスポンス](#retry-api-request-response)」を参照してください。                                                                                                                   |
  | `429` | リクエスト数が上限を超過しました。次のような理由が考えられます。- このエンドポイントの[レート制限](#send-narrowcast-rate-limit)を超過した。 - [当月に送信できるメッセージ数の上限目安](#get-quota)を超過した。  メッセージ数の上限目安について詳しくは、『Messaging APIドキュメント』の「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、どのユーザーに対してもメッセージは送信されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なオーディエンスIDを指定した場合（400 Bad Request）
      {
          "message": "Invalid audience group id: {audience ID}"
      }

      // 再配信オブジェクトに無効なリクエストIDを指定した場合（400 Bad Request）
      {
          "message": "Invalid request id: {request ID}"
      }

      // limit.upToRemainingQuotaにtrueを設定せずにlimit.forbidPartialDeliveryにtrueを指定した場合（400 Bad Request）
      {
          "message": "The option forbidPartialDelivery must be used with upToRemainingQuota."
      }

      // 十分な友だち数がない場合（403 Forbidden）
      {
          "message": "Your account does not have enough friends"
      }
      ```
      :::::
    ::::
  :::
::
