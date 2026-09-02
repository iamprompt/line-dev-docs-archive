---
title: Get Friendship
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-friendship
__hash__: pTkvSdSfZdUD3lOfpyMNtTpWk1sY9MhJCA-_x0v-4oM
seo:
  description: ''
---

### liff.getFriendship()

::reference-with-code
  :::reference-content
  ユーザーとLINE公式アカウントの友だち関係を取得します。

  ただし、LIFFアプリが追加されているLINEログインのチャネルに、LINE公式アカウントがリンクされている場合に、そのLINE公式アカウントとの友だち関係のみを取得できます。LINEログインのチャネルに、LINE公式アカウントをリンクする方法については、『LINEログインドキュメント』の「[LINEログインしたときにLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-login/link-a-bot/)」を参照してください。

    ::::admonition{title="スコープを選択してください" type="note"}
    [LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/)ときに、`profile`スコープを選択してください。スコープを選択しなかった場合やユーザーが認可しなかった場合は、友だち関係を取得できません。スコープの選択は、LIFFアプリ追加後も[LINE Developersコンソール](/console/)のLIFFタブで変更できます。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.getFriendship().then((data) => {
        if (data.friendFlag) {
          // something you want to do
        }
      });

      // LINEミニアプリチャネルの［複数アカウントを使用］がオンの場合
      liff
        .getFriendship({
          officialAccountId: "@819...",
        })
        .then((data) => {
          if (data.friendFlag) {
            // something you want to do
          }
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getFriendship(params);
```

#### 引数

引数は、LINEミニアプリでのみ利用できます。また、LIFF SDKがv2.30.0以上、かつLINEミニアプリチャネルの［**複数アカウントを使用**］をオンにする必要があります。詳しくは、『LINEミニアプリドキュメント』の「[LINEミニアプリ上でLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-mini-app/service/add-friend-option/)」を参照してください。

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  パラメータオブジェクト。省略すると、デフォルトのLINE公式アカウントの友だち関係を取得します。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params.officialAccountId

  #undefined
  String

  友だち関係を取得するLINE公式アカウントのID。ベーシックIDまたは:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}で指定します。
  :::
::

#### 戻り値

::reference-with-code
  :::reference-content
  `Promise`オブジェクトが返されます。

  友だち関係を取得できると、`Promise`がresolveされ、友だち関係に関する情報が渡されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      friendFlag

      #undefined
      Boolean

      - `true`：ユーザーがLINE公式アカウントを友だち追加済みで、ブロックしていない。
      - `false`：それ以外の場合。
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "friendFlag": true
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。`liff.getFriendship()`メソッドに特有のエラーは次のとおりです。

| エラーコード             | エラーメッセージ                                                     | 説明                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `400`              | `Bot not found`                                              | 友だち関係を取得するLINE公式アカウントが見つからない。次のような原因が考えられます。  - `officialAccountId`プロパティで指定したLINE公式アカウントが存在しない。 - `officialAccountId`プロパティで指定したLINE公式アカウントが許可リストに登録されていない。 - `officialAccountId`プロパティで指定したLINE公式アカウントが一時停止されているか削除されている。 |
| `400`              | `There is no login bot linked to this channel.`              | 友だち関係を取得するLINE公式アカウントが存在しない。次のような原因が考えられます。  - LINEログインチャネルの［:b[リンクされたLINE公式アカウント]］を設定していない。 - LINEミニアプリチャネルの［:b[デフォルトのLINE公式アカウント]］を設定していない、かつ`officialAccountId`プロパティを指定していない。                                         |
| `403`              | `LOGIN_MULTI_LINKED_BOT_PROMPT feature license is required.` | `officialAccountId`プロパティを指定しているが、LINEミニアプリチャネルの［:b[複数アカウントを使用]］がオフになっている。                                                                                                                                                |
| `INVALID_ARGUMENT` | `officialAccountId must start with "@".`                     | `officialAccountId`プロパティの値が`@`から始まっていない。                                                                                                                                                                                 |
