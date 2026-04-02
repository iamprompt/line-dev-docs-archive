---
title: Get Insight Demographic
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-insight-demographic
__hash__: xrEMvwO3GU6N0B4J7kj4TfN0EZZbqMkSOuECevnV6L0
seo:
  description: ''
---

### Get friend demographics

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/demographic"}::reference-with-code
  :::reference-content
  Retrieves the friend demographic information of the friends of the LINE Official Account. To retrieve the friend demographic information, all of the following conditions must be met:

  - The target reach is 20 or more people.
  - The LINE Official Account was created by a user in Japan (JP), Thailand (TH) or Taiwan (TW).

    ::::admonition{title="Not real-time data" type="note"}
    It takes approximately 3 days for the friend demographic information to be reflected. Therefore, the information that can be obtained will be approximately 3 days old. Note that the timing may vary.
    ::::

    ::::admonition{title="About friend demographic information" type="tip"}
    Friend demographic information is classified as "deemed attributes" based on the gender, age, area information, and action history registered by LINE users in the LINE Family service. Mobile carriers and operating systems aren't included in the deemed attributes.

    Deemed Attributes are classified based on trends such as stickers purchased and used on LINE, content of interest, and the types of LINE Official Accounts that users are friends with. Sensitive information such as phone numbers, email addresses, address books, and chat content isn't included in the information used as the basis for classification.

    The estimation of friend demographic information is statistical and doesn't identify specific individuals. Information that could identify specific individuals isn't shared with third parties (e.g., advertisers).
    ::::
  :::

  :::reference-code
  *Example request*

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

#### Rate limit

60 requests per hour

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      available

      #undefined
      Boolean

      - `true`: Friend demographic information is available.
      - `false`: Friend demographic information isn't available. Consider these reasons:

        - The target reach is less than 20 people.
        - The LINE Official Account wasn't created by a user in Japan (JP), Thailand (TH) or Taiwan (TW).

      The elements of each array in the response (`genders`, `ages`, `areas`, `appTypes`, `subscriptionPeriods`) are only included in the response if the value of `available` is `true`.
      :::::

      :::::parameter-table-entry
      #undefined
      genders

      #undefined
      Array

      Percentage per gender. If the friend demographic information isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      genders[].gender

      #undefined
      String

      Returns these values based on the users' gender:

      - `male`
      - `female`
      - `unknown`
      :::::

      :::::parameter-table-entry
      #undefined
      genders[].percentage

      #undefined
      Number

      Percentage
      :::::

      :::::parameter-table-entry
      #undefined
      ages

      #undefined
      Array

      Percentage per age group. If the friend demographic information isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      ages[].age

      #undefined
      String

      Returns these values based on the users' age:

        ::::::admonition
        ---
        title: When you are using a Thai LINE Official Account
        type: note
        ---
        When you retrieve the demographic information of a Thai LINE Official Account, the percentages with `ages[].age` values of `from0to14` and `from15to19` won't be included in the response. Users under the age of 20 will be counted as `unknown`.
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
        - As of September 5, 2024, [you can now get the percentage of friends between the ages of 50 and 70](/news/2024/09/05/age-percentage-subdivision/).
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

      Percentage
      :::::

      :::::parameter-table-entry
      #undefined
      areas

      #undefined
      Array

      Percentage per area. If the friend demographic information isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      areas[].area

      #undefined
      String

      Returns these values based on the users' country and region:   
      **JP**

      - `北海道` (Hokkaido)
      - `青森` (Aomori)
      - `岩手` (Iwate)
      - `宮城` (Miyagi)
      - `秋田` (Akita)
      - `山形` (Yamagata)
      - `福島` (Fukushima)
      - `茨城` (Ibaraki)
      - `栃木` (Tochigi)
      - `群馬` (Gunma)
      - `埼玉` (Saitama)
      - `千葉` (Chiba)
      - `東京` (Tokyo)
      - `神奈川` (Kanagawa)
      - `新潟` (Niigata)
      - `富山` (Toyama)
      - `石川` (Ishikawa)
      - `福井` (Fukui)
      - `山梨` (Yamanashi)
      - `長野` (Nagano)
      - `岐阜` (Gifu)
      - `静岡` (Shizuoka)
      - `愛知` (Aichi)
      - `三重` (Mie)
      - `滋賀` (Shiga)
      - `京都` (Kyoto)
      - `大阪` (Osaka)
      - `兵庫` (Hyogo)
      - `奈良` (Nara)
      - `和歌山` (Wakayama)
      - `鳥取` (Tottori)
      - `島根` (Shimane)
      - `岡山` (Okayama)
      - `広島` (Hiroshima)
      - `山口` (Yamaguchi)
      - `徳島` (Tokushima)
      - `香川` (Kagawa)
      - `愛媛` (Ehime)
      - `高知` (Kochi)
      - `福岡` (Fukuoka)
      - `佐賀` (Saga)
      - `長崎` (Nagasaki)
      - `熊本` (Kumamoto)
      - `大分` (Oita)
      - `宮崎` (Miyazaki)
      - `鹿児島` (Kagoshima)
      - `沖縄` (Okinawa)
      - `unknown`

      **TW**

      - `台北市` (Taipei City)
      - `新北市` (New Taipei City)
      - `桃園市` (Taoyuan City)
      - `台中市` (Taichung)
      - `台南市` (Tainan City)
      - `高雄市` (Kaohsiung)
      - `基隆市` (Keelung)
      - `新竹市` (Hsinchu City)
      - `嘉義市` (Chiayi City)
      - `新竹縣` (Hisnchu County)
      - `苗栗縣` (Miaoli County)
      - `彰化縣` (Changhua County)
      - `南投縣` (Nantou County)
      - `雲林縣` (Yunlin County)
      - `嘉義縣` (Chiayi County)
      - `屏東縣` (Pingtung County)
      - `宜蘭縣` (Yilan County)
      - `花蓮縣` (Hualien County)
      - `台東縣` (Taitung County)
      - `澎湖縣` (Penghu County)
      - `金門縣` (Kinmen County)
      - `連江縣` (Lianjiang County)
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

      Percentage
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes

      #undefined
      Array

      Percentage by OS. If the friend demographic information isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes[].appType

      #undefined
      String

      Returns these values based on the users' OS:

      - `ios`
      - `android`
      - `others`
      :::::

      :::::parameter-table-entry
      #undefined
      appTypes[].percentage

      #undefined
      Number

      Percentage
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods

      #undefined
      Array

      Percentage per friendship duration. If the friend demographic information isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods[].subscriptionPeriod

      #undefined
      String

      Returns these values for friendship duration. "Friendship duration" is defined as the time period counted from the day after a user adds a LINE Official Account as a friend.

      - `within7days`: Less than 7 days
      - `within30days`: Equal to or greater than 7 days but less than 30 days
      - `within90days`: Equal to or greater than 30 days but less than 90 days
      - `within180days`: Equal to or greater than 90 days but less than 180 days
      - `within365days`: Equal to or greater than 180 days but less than 365 days
      - `over365days`: Equal to or greater than 365 days
      - `unknown`: Unknown
      :::::

      :::::parameter-table-entry
      #undefined
      subscriptionPeriods[].percentage

      #undefined
      Number

      Percentage of users corresponding to the respective `subscriptionPeriod` values.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the friend demographic information isn't available because the target reach is lower than 20
      {
        "available": false,
        "genders": [],
        "ages": [],
        "areas": [],
        "appTypes": [],
        "subscriptionPeriods": []
      }

      // If the friend demographic information is available because the target reach is 20 or higher
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

#### Error response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
