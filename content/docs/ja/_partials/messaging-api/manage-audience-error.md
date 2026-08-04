---
title: Manage Audience Error
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/manage-audience-error
__hash__: RMw3omhcr9x8eeHGPj-moLFoQW2qthZPhqTBmUIVwxs
seo:
  description: ''
---

### オーディエンス管理に関するエラーの詳細

オーディエンス管理のエンドポイントでエラーが発生した際の詳細は、JSONレスポンスの`details[].message`プロパティに含まれます。主なエラーの詳細は以下のとおりです。

| メッセージ                                              | 説明                                                                                                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AUDIENCE_GROUP_CAN_NOT_UPLOAD_STATUS_EXPIRED`     | オーディエンスを作成してから180日（15,552,000秒）を超えたため、このオーディエンスは使用できません。                                                                                                                 |
| `AUDIENCE_GROUP_COUNT_MAX_OVER`                    | 作成できるオーディエンス数の上限（合計1,000件）に達しています。                                                                                                                                       |
| `AUDIENCE_GROUP_NAME_SIZE_OVER`                    | オーディエンスの名前が長すぎます。                                                                                                                                                        |
| `AUDIENCE_GROUP_NAME_WRONG`                        | オーディエンスの名前に、無効な文字（例：`\n`などの制御コード）を指定しました。                                                                                                                                |
| `AUDIENCE_GROUP_NAME_EMPTY`                        | オーディエンスの名前が空であるか、空白文字のみを指定しました。                                                                                                                                          |
| `AUDIENCE_GROUP_NOT_FOUND`                         | オーディエンスが見つかりません。                                                                                                                                                         |
| `AUDIENCE_GROUP_REQUESTID_DUPLICATE`               | 既存のオーディエンスに指定したリクエストIDと同じ値を指定しました。                                                                                                                                       |
| `AUDIENCE_GROUP_UPLOAD_DESCRIPTION_SIZE_OVER`      | オーディエンスの説明が長すぎます。                                                                                                                                                        |
| `REQUEST_NOT_FOUND`                                | 指定したリクエストIDが誤っているか、指定したリクエストIDでオーディエンスを作成する準備ができていません。                                                                                                                   |
| `TOO_OLD_MESSAGES`                                 | メッセージを配信してから60日（5,184,000秒）を超えた場合、そのメッセージ（リクエストID）に対するオーディエンスは作成できません。                                                                                                   |
| `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT` | - `file`プロパティに指定したファイルに、無効なユーザーIDまたはIFAが入力されています。 - `audiences[].id`プロパティに、無効なユーザーIDまたはIFAが指定されています。  このメッセージが返ってきた場合は、[対処方法](#manage-audience-error-handling)を参照してください。 |
| `UPLOAD_AUDIENCE_GROUP_NO_VALID_AUDIENCE_IDS`      | - `file`プロパティに指定したファイルに、有効なユーザーIDまたはIFAが入力されていません。 - `audiences[].id`プロパティに、有効なユーザーIDまたはIFAが指定されていません。                                                                   |
| `UPLOAD_AUDIENCE_GROUP_TOO_MANY_AUDIENCE_IDS`      | ユーザーIDまたはIFAの登録上限に達しています。                                                                                                                                                |
| `WRONG_BOT_ID`                                     | 指定したリクエストIDに含まれるボットIDが、アクセストークンを発行したチャネルに関連付けられたボットと異なります。                                                                                                               |
| `ALREADY_ACTIVE`                                   | オーディエンスグループは、すでに有効です。                                                                                                                                                    |

#### 対処方法

::admonition{title="audiencesプロパティに無効なユーザーIDが含まれている場合" type="note"}
`UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`が返る場合は、[プロフィール情報を取得する](#get-profile)エンドポイントを使って、JSONに指定しているすべてのユーザーIDのプロフィール情報を取得してください。ステータスコード`200`以外を返すユーザーIDをJSONから除外したうえで、失敗したエンドポイントを再実行してください。
::
