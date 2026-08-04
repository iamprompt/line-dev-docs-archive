---
title: Share Target Picker
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/share-target-picker
__hash__: IAm30Kw0351uNnIyxPpm_xPiDzDnY__aJCcgNt006NE
seo:
  description: ''
---

### liff.shareTargetPicker()

::reference-with-code
  :::reference-content
  ターゲットピッカー（送信先を選択する画面）を表示し、ターゲットピッカーで選択した相手に、開発者が作成したメッセージを送信します。このメッセージは、ユーザーが送信したかのように、選択した送信先に表示されます。

  ターゲットピッカーでは、グループ、友だち、トークから送信先を選択できます。オープンチャットは含まれません。

  ターゲットピッカーで選択できる送信先について詳しくは、『LIFFドキュメント』の「[シェアターゲットピッカーで選択できる送信先](/docs/liff/developing-liff-apps/#share-target-picker-displayed-targets)」を参照してください。

  #### liff.shareTargetPicker()メソッドの使用条件

  `liff.shareTargetPicker()`メソッドを使用するには、以下の条件をすべて満たす必要があります。

  - ユーザーがログインしている。
  - [LINE Developersコンソール](/console/)でシェアターゲットピッカーがオンになっている。詳しくは、『LIFFドキュメント』の「[シェアターゲットピッカーを利用するには](/docs/liff/developing-liff-apps/#using-share-target-picker)」を参照してください。

    ::::admonition
    ---
    title: スマートフォンの外部ブラウザでliff.shareTargetPicker()メソッドを実行した際に、メールアドレスログインの画面が表示されることがあります
    type: note
    ---
    :glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}でターゲットピッカーを表示するには、[シングルサインオン（SSO）によるログイン](/docs/line-login/integrate-line-login/#line-sso-login)セッションが必要です。

    [自動ログイン](/docs/line-login/integrate-line-login/#line-auto-login)によるログイン処理では、SSOによるログインセッションが発行されないため、`liff.shareTargetPicker()`メソッドの実行時にターゲットピッカーが表示されず、代わりに[メールアドレスログイン](/docs/line-login/integrate-line-login/#mail-or-qrcode-login)の画面が表示されることがあります。

    メールアドレスとパスワードを入力してログインすると、SSOによるログインセッションが発行され、ターゲットピッカーが表示されるようになります。
    ::::

    ::::admonition{title="ユーザーがシェアターゲットピッカーでメッセージを送信した人数は、取得できません" type="note"}
    ユーザーのプライバシーを保護するため、シェアターゲットピッカーで、何人にメッセージが送信されたかの情報は取得できません。また、提供も行なっておりません。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .shareTargetPicker(
          [
            {
              type: "text",
              text: "Hello, World!",
            },
          ],
          {
            isMultiple: true,
          },
        )
        .then(function (res) {
          if (res) {
            // succeeded in sending a message through TargetPicker
            console.log(`[${res.status}] Message sent!`);
          } else {
            // sending message canceled
            console.log("TargetPicker was closed!");
          }
        })
        .catch(function (error) {
          // something went wrong before sending a message
          console.log("something wrong happen");
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.shareTargetPicker(messages, options);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of objects

  [メッセージオブジェクト](/reference/messaging-api/#message-objects)  

  最大件数：5  

  Messaging APIの以下のタイプのメッセージを送信できます。

  - [テキストメッセージ](/docs/messaging-api/message-types/#text-messages)。ただし、`emojis`プロパティおよび`quoteToken`プロパティは利用できません。
  - [画像メッセージ](/docs/messaging-api/message-types/#image-messages)。
  - [動画メッセージ](/docs/messaging-api/message-types/#video-messages)。ただし、`trackingId`プロパティは利用できません。
  - [音声メッセージ](/docs/messaging-api/message-types/#audio-messages)。
  - [位置情報メッセージ](/docs/messaging-api/message-types/#location-messages)。
  - [テンプレートメッセージ](/docs/messaging-api/message-types/#template-messages)。ただし、設定できるアクションは[URIアクション](/docs/messaging-api/actions/#uri-action)のみです。
  - [Flex Message](/docs/messaging-api/message-types/#flex-messages)。ただし、設定できるアクションは[URIアクション](/docs/messaging-api/actions/#uri-action)のみです。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  シェアターゲットピッカーのオプション
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.isMultiple

  #undefined
  Boolean

  ユーザーがターゲットピッカーで選択するメッセージ送信先として、複数の送信先を選択可能にするかどうかを、以下のどちらかの値で指定します。デフォルト値は`true`です。

  - `true`：ユーザーはグループ、友だち、トークの中から、複数の送信先を選択できます。
  - `false`：ユーザーは友だちの中から、1人のみを送信先として選択できます。
  :::
::

::admonition
---
title: isMultipleにfalseを設定しても、1人の友だちのみにメッセージが送信されることは保証できません
type: note
---
`isMultiple`プロパティに`false`を設定しても、シェアターゲットピッカーを複数回呼び出すことや、シェア後のメッセージをユーザー側で再度シェアすることで、複数のユーザーへのメッセージ送信が可能です。厳密にユーザーから1人の友だちに対して、一度しかメッセージを送信できないようにする場合には、LIFFアプリ実装時に制限をかける必要があります。

URLを含むメッセージを送信し、URLへのアクセスを制限する場合の例を紹介します。

1. URLにユニークなトークンを付与し、メッセージを送信します。
2. メッセージ内のURLへアクセスされた際にサーバー側でトークンを検証し、複数のユーザーからのアクセスを制限します。
::

#### 戻り値

`Promise`オブジェクトが返されます。

- 正しくメッセージが送信されると、`Promise`がresolveされ、以下のプロパティを持つオブジェクトが渡されます。
  ::parameter-table

  :parameter-table-entry[#undefined
status

#undefined
String

常に`success`です。]
::
- メッセージを送信する前に、ユーザーがキャンセルしてターゲットピッカーを閉じると、`Promise`がresolveされますが、オブジェクトは渡されません。
- ターゲットピッカーが表示される前に問題が発生した場合は、`Promise`がrejectされ、`LiffError`が渡されます。LiffErrorオブジェクトについては、「[LIFF SDKのエラー](#liff-errors)」を参照してください。

::admonition{title="注意" type="note"}
`Promise`がresolveした場合とrejectした場合のコールバック関数内で、`alert()`を実行すると一部端末で正しく動作しません。
::
