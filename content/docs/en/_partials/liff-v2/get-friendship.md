---
title: Get Friendship
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-friendship
__hash__: uRvykRg7NgMz_MsKiz0KphvkH94xMRzCxk9DGdrOCiA
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
liff.getFriendship(params);
```

#### Arguments

::admonition
---
title: >-
  The feature to use multiple accounts using the add friend option is scheduled
  to be available in September 2026
type: note
---
The arguments are available only when you're using LIFF SDK v2.30.0 or later and **Use multiple accounts** is enabled for the LINE MINI App channel. **Use multiple accounts** is scheduled to be available for LINE MINI Apps in Japan in September 2026.
::

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  Parameter object. If omitted, the friendship status with the default LINE Official Account is retrieved.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  params.officialAccountId

  #undefined
  String

  The ID of the LINE Official Account whose friendship status you want to retrieve. Specify the basic ID or :glossary-tooltip[[premium ID](/glossary/#premium-id)]{glossary-id="premium-id"}.
  :::
::

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

#### Error response

When the `Promise` is rejected, a [`LiffError`](#liff-errors) is passed. The following errors are specific to the `liff.getFriendship()` method:

| Error code         | Error message                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `400`              | `Bot not found`                                              | The LINE Official Account whose friendship status is being retrieved can't be found. Possible causes include:  - The LINE Official Account specified in the `officialAccountId` property doesn't exist. - The LINE Official Account specified in the `officialAccountId` property isn't registered in the allowlist. - The LINE Official Account specified in the `officialAccountId` property is suspended or deleted. |
| `400`              | `There is no login bot linked to this channel.`              | The LINE Official Account whose friendship status is being retrieved doesn't exist. Possible causes include:  - :b[Linked LINE Official Account] isn't configured for the LINE Login channel. - :b[Default LINE Official Account] isn't configured for the LINE MINI App channel, and the `officialAccountId` property isn't specified.                                                                                 |
| `403`              | `LOGIN_MULTI_LINKED_BOT_PROMPT feature license is required.` | The `officialAccountId` property is specified, but **Use multiple accounts** is disabled for the LINE MINI App channel.                                                                                                                                                                                                                                                                                                 |
| `INVALID_ARGUMENT` | `officialAccountId must start with "@".`                     | The value of the `officialAccountId` property doesn't start with `@`.                                                                                                                                                                                                                                                                                                                                                   |
