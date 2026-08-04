---
title: Action Object Datetime Picker
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-datetime-picker
__hash__: iORxRthV9LKO5DhzlHeWnrp7QFDnHOgobaHK50HncgA
seo:
  description: ''
---

### 日時選択アクション

::reference-with-code
  :::reference-content
  このアクションが関連づけられたコントロールがタップされると、日時選択ダイアログでユーザーが選択した日時を含む[ポストバックイベント](#postback-event)が、Webhookを介して返されます。日時選択アクションはタイムゾーンの違いに対応していません。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `datetimepicker`
      :::::

      :::::parameter-table-entry{annotation="説明を参照"}
      #undefined
      label

      #undefined
      String

      アクションのラベル。アクションを設定するオブジェクトごとに、仕様が異なります。詳しくは、「[ラベルの仕様](#action-object-label-spec)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      data

      #undefined
      String

      Webhookを介して、[ポストバックイベント](#postback-event)の`postback.data`プロパティで返される文字列  

      最大文字数：300
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      mode

      #undefined
      String

      アクションモード  
      `date`：日付を選択します。  
      `time`：時刻を選択します。  
      `datetime`：日付と日時を選択します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      initial

      #undefined
      String

      日付または時刻の初期値
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      max

      #undefined
      String

      選択可能な日付または時刻の最大値。`min`の値より大きい必要があります。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      min

      #undefined
      String

      選択可能な日付または時刻の最小値。`max`の値より小さい必要があります。
      :::::
    ::::
  :::

  :::reference-code
  *日時選択アクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "datetimepicker",
        "label": "Select date",
        "data": "storeId=12345",
        "mode": "datetime",
        "initial": "2017-12-25t00:00",
        "max": "2018-01-24t23:59",
        "min": "2017-12-25t00:00"
      }
      ```
      :::::
    ::::
  :::
::

#### 日付と日時の形式

`initial`、`max`、および`min`の値の日付と日時の形式は以下のとおりです。`full-date`、`time-hour`、および`time-minute`の形式は、[RFC3339](https://www.ietf.org/rfc/rfc3339.txt){rel="[\"nofollow\"]"}プロトコルで定義されています。

| モード      | 形式                                                                                                                          | 例                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| date     | `full-date`   最大値：2100-12-31   最小値：1900-01-01                                                                               | 2017-06-18                          |
| time     | `time-hour`:`time-minute`   最大値：23:59   最小値：00:00                                                                           | 00:00   06:15   23:59               |
| datetime | `full-date`T`time-hour`:`time-minute`または`full-date`t`time-hour`:`time-minute`   最大値：2100-12-31T23:59   最小値：1900-01-01T00:00 | 2017-06-18T06:15   2017-06-18t06:15 |
