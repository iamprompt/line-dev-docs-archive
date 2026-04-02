---
title: Liff Errors
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/liff-errors
__hash__: ruzlIKxT3-LQSyMfWCMWfPWEzUwJRUh8aPgZnWWAY38
seo:
  description: ''
---

### LIFF SDKのエラー

::reference-with-code
  :::reference-content
  LIFF SDKのエラーはLiffErrorオブジェクトで返されます。

    ::::admonition{title="エラーを識別する際は、エラーコードとエラーメッセージの両方を参照してください" type="note"}
    エラーメッセージは予告なく変更されることがあるため、エラーをエラーメッセージの完全一致で識別すると、LIFFアプリが正常に動作しなくなる可能性があります。エラーを識別する際は、エラーメッセージが変更されてもLIFFアプリが正常に動作するよう、エラーコードとエラーメッセージの両方を参照してください。

    なお、エラーコードによってエラーを一意に識別できるよう、将来的に改善する予定です。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "code": "INIT_FAILED",
        "message": "Failed to init LIFF SDK"
      }
      ```
      :::::
    ::::
  :::
::

#### LiffErrorオブジェクト

::parameter-table
  :::parameter-table-entry
  #undefined
  code

  #undefined
  String

  エラーコード
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  message

  #undefined
  String

  エラーメッセージ
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  cause

  #undefined
  Unknown

  エラーの原因
  :::
::

#### エラー内容

| エラーコード                 | 説明                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400                    | リクエストに問題があります。リクエストパラメータとJSONの形式を確認してください。                                                                                                                                                                                            |
| 401                    | Authorizationヘッダーを正しく送信していることを確認してください。                                                                                                                                                                                               |
| 403                    | APIを使用する権限がありません。ご契約中のプランやアカウントに付与されている権限を確認してください。                                                                                                                                                                                   |
| 429                    | リクエスト頻度をレート制限内に抑えてください。                                                                                                                                                                                                               |
| 500                    | APIサーバーの一時的なエラーです。                                                                                                                                                                                                                    |
| INIT_FAILED            | LIFF SDKの初期化時にエラーが発生しました。                                                                                                                                                                                                             |
| INVALID_ARGUMENT       | 無効な引数が指定されました。                                                                                                                                                                                                                        |
| UNAUTHORIZED           | - ユーザーが認可しませんでした。 - アクセストークンを指定せずにAPIが呼ばれました。 - ログイン処理を行う前に、シェアターゲットピッカーを呼び出しました。                                                                                                                                                     |
| FORBIDDEN              | - 必要な権限がありません。 - サポートされていない環境で機能を利用しようとしました。                                                                                                                                                                                          |
| INVALID_CONFIG         | 無効な設定です。- [`liff.init()`](/reference/liff/#initialize-liff-app)を使ってLIFFアプリを初期化するには、liffIdを指定する必要があります。 - [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url)を実行したページのURLが、［**エンドポイントURL**］に指定したURLで始まりません。 |
| INVALID_ID_TOKEN       | IDトークンが正規のものであることを確認できませんでした。                                                                                                                                                                                                         |
| EXCEPTION_IN_SUBWINDOW | サブウィンドウで問題が発生しました。- ターゲットピッカー（グループまたは友だちを選択する画面）を表示後、10分以上操作しなかった場合など                                                                                                                                                                 |
| UNKNOWN                | 不明なエラーです。                                                                                                                                                                                                                             |
