---
title: Request Friendship
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/request-friendship
__hash__: LG5fYqWoB6i4O0bz_JMsUgkcmK3OYV1R6i67040yw5s
seo:
  description: ''
---

### liff.requestFriendship()

::reference-with-code
  :::reference-content
  Displays a subwindow that prompts the user to add the LINE Official Account as a friend, or to unblock it.

  ![](/media/liff/request-friendship/request-friendship-add-friend-en.png){className="[\"border\",\"w-fix-200\"]"}

  - If the user has not added the LINE Official Account as a friend, a subwindow that prompts the user to add it as a friend is displayed.
  - If the user has blocked the LINE Official Account, a subwindow that prompts the user to unblock it is displayed.
  - If the user is already friends with the LINE Official Account, the subwindow is displayed and then automatically closed.

  The LINE Official Account to prompt the user to add as a friend or unblock can be specified by [linking a LINE Official Account with your channel](/docs/line-login/link-a-bot/#link-a-line-official-account). For more information, see [Add a LINE Official Account as a friend when logged in (add friend option)](/docs/line-login/link-a-bot/) in the LINE Login documentation.

  Only available when the screen size of the LIFF browser is `Full`. For more information, see [Size of the LIFF browser](/docs/liff/overview/#screen-size) in the LIFF documentation.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      try {
        await liff.requestFriendship();
      } catch (error) {
        console.log(error);
      }
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.requestFriendship();
```

#### Arguments

None

#### Return value

Returns a `Promise` object.

::admonition
---
title: The result of the user's action cannot be confirmed from the return value
type: note
---
It isn't possible to confirm from the return value whether the user has added the LINE Official Account as a friend or unblocked it. To check the friendship status after calling the `liff.requestFriendship()` method, use the [`liff.getFriendship()`](#get-friendship) method.
::

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

If the **Linked LINE Official Account** in the add friend option isn't set, or if the screen size of the LIFF app isn't `Full`, the error code `FORBIDDEN` is returned.
