---
title: Get Friendship
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/get-friendship
__hash__: PxdEojwbsw7sdELartuXZHLJkax1W5qQ1oVfaMB0QhU
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
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.getFriendship();
```

#### 引数

なし

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

  ##### エラーレスポンス

  `Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。
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
