---
title: Get Insight Demographic
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-insight-demographic
__hash__: UBkv0TATqPW4yczl5lKcRr6WIVV2ofdcqf4q-mB-9WM
seo:
  description: ''
---

### 友だちの属性情報に基づく統計情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/demographic"}::reference-with-code
  :::reference-content
  LINE公式アカウントの友だちの属性情報に基づく統計情報を取得します。友だちの属性情報に基づく統計情報を取得するには、以下の条件をすべて満たす必要があります。

  - ::::glossary-tooltip{glossary-id="target-reach"}
  [ターゲットリーチ](/glossary/#target-reach)
  ::::

  が20人以上である。
  - 日本（JP）、タイ（TH）、台湾（TW）のユーザーが作成したLINE公式アカウントである。

    ::::admonition{title="リアルタイムデータではありません" type="note"}
    友だちの属性情報に基づく統計情報が反映されるまで約3日かかります。そのため、取得できる情報は約3日前の数値です。なお、反映されるタイミングは前後する可能性があります。
    ::::

    ::::admonition{title="属性情報について" type="tip"}
    友だちの属性情報は、LINEファミリーサービスにおいて、LINEユーザーが登録した性別、年代、エリア情報と行動履歴をもとに分類した「みなし属性」となります。携帯キャリアおよびOSは、みなし属性に含まれません。

    みなし属性は、ユーザーがLINE上で購入、使用したスタンプや興味のあるコンテンツのほか、どのようなLINE公式アカウントと友だちになっているかといった傾向をもとに分類したものです。分類の元となる情報に電話番号、メールアドレス、アドレス帳、トーク内容などの機微情報は含みません。

    属性情報の推定は統計的に実施され、特定の個人の識別は行っていません。また、特定の個人を識別可能な情報の第三者（広告主など）への提供は実施していません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/insight/demographic \
      -H 'Authorization: Bearer {channel access token}'
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
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      available

      #undefined
      Boolean

      - `true`：友だちの属性情報に基づく統計情報が利用できる。
      - `false`：次のような理由で、友だちの属性情報に基づく統計情報が利用できない。

        - ::::::glossary-tooltip{glossary-id="target-reach"}
        [ターゲットリーチ](/glossary/#target-reach)
        ::::::

        が20人未満である。
        - 日本（JP）、タイ（TH）、台湾（TW）以外のユーザーが作成したLINE公式アカウントである。

      レスポンス内の各配列（`genders`、`ages`、`areas`、`appTypes`、`subscriptionPeriods`）の要素は、`available`の値が`true`の場合にのみレスポンスに含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      genders

      #undefined
      Array

      性別ごとの割合。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      genders[].gender

      #undefined
      String

      ユーザーの性別に基づいて、以下の値が返されます。

      - `male`
      - `female`
      - `unknown`
      :::::

      :::::parameter-table-entry
      #undefined
      genders[].percentage

      #undefined
      Number

      割合
      :::::

      :::::parameter-table-entry
      #undefined
      ages

      #undefined
      Array

      年齢ごとの割合。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      ages[].age

      #undefined
      String

      ユーザーの年齢に基づいて、以下の値が返されます。

        ::::::admonition{title="タイのLINE公式アカウントを利用している場合" type="note"}
        タイのLINE公式アカウントの統計情報を取得する場合、レスポンス内の`ages[].age`の値として、`from0to14`と`from15to19`の割合は返されません。年齢が20歳未満のユーザーは、`unknown`として集計されます。
        ::::::

      - `from0to14`
      - `from15to19`
      - `from20to24`
      - `from25to29`
      - `from30to34`
      - `from35to39`
      - `from40to44`
      - `from45to49`
      - `from50`
        - 2024年9月5日より、[50歳から70歳までの割合を取得できるようになりました](/news/2024/09/05/age-percentage-subdivision/)。
      - `from50to54`
      - `from55to59`
      - `from60to64`
      - `from65to69`
      - `from70`
      - `unknown`
      :::::

      :::::parameter-table-entry
      #undefined
      ages[].percentage

      #undefined
      Number

      割合
      :::::

      :::::parameter-table-entry
      #undefined
      areas

      #undefined
      Array

      地域ごとの割合。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      areas[].area

      #undefined
      String

      ユーザーの国や地域に基づいて、以下の値が返されます。  
      **JP**

      - `北海道`
      - `青森`
      - `岩手`
      - `宮城`
      - `秋田`
      - `山形`
      - `福島`
      - `茨城`
      - `栃木`
      - `群馬`
      - `埼玉`
      - `千葉`
      - `東京`
      - `神奈川`
      - `新潟`
      - `富山`
      - `石川`
      - `福井`
      - `山梨`
      - `長野`
      - `岐阜`
      - `静岡`
      - `愛知`
      - `三重`
      - `滋賀`
      - `京都`
      - `大阪`
      - `兵庫`
      - `奈良`
      - `和歌山`
      - `鳥取`
      - `島根`
      - `岡山`
      - `広島`
      - `山口`
      - `徳島`
      - `香川`
      - `愛媛`
      - `高知`
      - `福岡`
      - `佐賀`
      - `長崎`
      - `熊本`
      - `大分`
      - `宮崎`
      - `鹿児島`
      - `沖縄`
      - `unknown`

      **TW**

      - `台北市`
      - `新北市`
      - `桃園市`
      - `台中市`
      - `台南市`
      - `高雄市`
      - `基隆市`
      - `新竹市`
      - `嘉義市`
      - `新竹縣`
      - `苗栗縣`
      - `彰化縣`
      - `南投縣`
      - `雲林縣`
      - `嘉義縣`
      - `屏東縣`
      - `宜蘭縣`
      - `花蓮縣`
      - `台東縣`
      - `澎湖縣`
      - `金門縣`
      - `連江縣`
      - `unknown`

      **TH**

      - `Bangkok`
      - `Pattaya`
      - `Northern`
      - `Central`
      - `Southern`
      - `Eastern`
      - `NorthEastern`
      - `Western`
      - `unknown`
      :::::

      :::::parameter-table-entry
      #undefined
      areas[].percentage

      #undefined
      Number

      割合
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes

      #undefined
      Array

      OSごとの割合。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes[].appType

      #undefined
      String

      ユーザーが使用するOSに基づいて、以下の値が返されます。

      - `ios`
      - `android`
      - `others`
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes[].percentage

      #undefined
      Number

      割合
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods

      #undefined
      Array

      友だち期間ごとの割合。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods[].subscriptionPeriod

      #undefined
      String

      ユーザーとの友だち期間に基づいて、以下の値が返されます。友だち期間とは、ユーザーがLINE公式アカウントを友だち追加してからの期間のことです。ユーザーがLINE公式アカウントを友だち追加した翌日を1日目として起算します。

      - `within7days`：7日未満
      - `within30days`：7日以上30日未満
      - `within90days`：30日以上90日未満
      - `within180days`：90日以上180日未満
      - `within365days`：180日以上365日未満
      - `over365days`：365日以上
      - `unknown`：不明
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods[].percentage

      #undefined
      Number

      それぞれの`subscriptionPeriod`に対するユーザーの割合。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // ターゲットリーチが20人未満で統計情報が利用できない場合
      {
        "available": false,
        "genders": [],
        "ages": [],
        "areas": [],
        "appTypes": [],
        "subscriptionPeriods": []
      }

      // ターゲットリーチが20人以上で統計情報が利用できる場合
      {
          "available": true,
          "genders": [
              {
                  "gender": "unknown",
                  "percentage": 37.6
              },
              {
                  "gender": "male",
                  "percentage": 31.8
              },
              {
                  "gender": "female",
                  "percentage": 30.6
              }
          ],
          "ages": [
              {
                  "age": "unknown",
                  "percentage": 37.6
              },
              {
                  "age": "from50",
                  "percentage": 17.3
              },
              ...
          ],
          "areas": [
              {
                  "area": "unknown",
                  "percentage": 42.9
              },
              {
                  "area": "徳島",
                  "percentage": 2.9
              },
              ...
          ],
          "appTypes": [
              {
                  "appType": "ios",
                  "percentage": 62.4
              },
              {
                  "appType": "android",
                  "percentage": 27.7
              },
              {
                  "appType": "others",
                  "percentage": 9.9
              }
          ],
          "subscriptionPeriods": [
              {
                  "subscriptionPeriod": "over365days",
                  "percentage": 96.4
              },
              {
                  "subscriptionPeriod": "within365days",
                  "percentage": 1.9
              },
              {
                  "subscriptionPeriod": "within180days",
                  "percentage": 1.2
              },
              {
                  "subscriptionPeriod": "within90days",
                  "percentage": 0.5
              },
              {
                  "subscriptionPeriod": "within30days",
                  "percentage": 0.1
              },
              {
                  "subscriptionPeriod": "within7days",
                  "percentage": 0
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
