---
title: Request Consent Agreement
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/request-consent-agreement
__hash__: kXzTX34CLLOeVIoN-XAWSll9tVgSjuFpUdqo7bafO8I
seo:
  description: ''
---

### liff.iap.requestConsentAgreement()

ユーザーに対して、[LINEアプリ内課金利用規約](https://terms.line.me/line_iap_tou_1){rel="[\"nofollow\"]"}への同意を求めます。

ユーザーがLINEアプリ内課金利用規約に対し未同意の場合や、新たな同意が必要な場合は同意画面が表示されます。

::admonition{title="常に最新の同意状況を確認してください" type="tip"}
[LINEアプリ内課金利用規約](https://terms.line.me/line_iap_tou_1){rel="[\"nofollow\"]"}が更新された場合、再度の同意が必要になります。アプリ内課金を開始する前には、必ずこのメソッドを呼び出して最新の同意状況を確認してください。
::

#### 構文

```javascript
await liff.iap.requestConsentAgreement();
```

#### 引数

なし

#### 戻り値

`Promise`オブジェクトが返されます。

- ユーザーが同意するとresolveされます。
- ユーザーが同意しない場合や、ネットワーク上の問題、ユーザー端末やLINEプラットフォーム側のサーバー内部で問題が発生して失敗した場合は、エラーオブジェクトを伴ってrejectされます。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  `Promise`が`reject`されたときは、[`LiffError`](/reference/liff/#liff-error-object)が渡されます。

  発生する可能性があるエラーには、次のようなものがあります。

  | エラーメッセージ                                           | 説明                                                                                           |
  | -------------------------------------------------- | -------------------------------------------------------------------------------------------- |
  | The user did not agree to the terms.               | ユーザーが[LINEアプリ内課金利用規約](https://terms.line.me/line_iap_tou_1){rel="[\"nofollow\"]"}に同意しませんでした。 |
  | Need access_token for api call, Please login first | ユーザーがログインしていません。                                                                             |
  | In-App Purchase is not allowed in external browser | メソッドが外部ブラウザで実行されました。                                                                         |
  | In-App Purchase is not allowed in this LIFF app    | ユーザーが実行したLINEミニアプリがアプリ内課金をサポートしていません。                                                        |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "code": "TERMS_AGREEMENT_ERROR",
        "message": "The user did not agree to the terms."
      }
      ```
      :::::
    ::::
  :::
::
