---
title: Get Friendship
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-friendship
__hash__: PWhMZSBh0_N40w0TPSZXqtls5zJEyRCljrd7-tJSTfU
seo:
  description: ''
---

### liff.getFriendship()

::reference-with-code
  :::reference-content
  Gets the friendship status between a user and a LINE Official Account.

  However, you can only get the friendship status between a user and a LINE Official Account that has been linked to the same LINE Login channel to which your LIFF app has been added. To learn how to link a LINE Official Account to a LINE Login channel, see [Add a LINE Official Account as a friend when logged in (add friend option)](/docs/line-login/link-a-bot/) in the LINE Login documentation.

    ::::admonition{title="Select a scope" type="note"}
    When [adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), select the `profile` scope. You can't get the friendship statuses if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](/console/) even after adding the LIFF app.
    ::::
  :::

  :::reference-code
  *Example*

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

#### Syntax

```javascript
liff.getFriendship();
```

#### Arguments

None

#### Return value

::reference-with-code
  :::reference-content
  Returns a `Promise` object.

  When acquiring the status of friendship, the `Promise` is resolved and the information about friendship is passed.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      friendFlag

      #undefined
      Boolean

      - `true`: The user has added the LINE Official Account as a friend and has not blocked it.
      - Otherwise, `false`.
      :::::
    ::::

  ##### Error response

  When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.
  :::

  :::reference-code
  *Example*

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
