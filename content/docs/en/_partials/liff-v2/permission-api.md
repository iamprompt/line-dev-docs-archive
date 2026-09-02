---
title: Permission Api
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/permission-api
__hash__: k6P6X2jVkCxel9xzcw2Hhj3Fn6cDO4Bh9-XruENqbwY
seo:
  description: ''
---

### liff.permission.getGrantedAll()

::reference-with-code
  :::reference-content
  Gets a list of scopes for which the user has agreed to grant permission.

  The scopes that you can get with this method are as follows:

  - [`profile`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`chat_message.write`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`openid`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`email`](/docs/liff/registering-liff-apps/#registering-liff-app)

    ::::admonition
    ---
    title: Difference between liff.getContext() and liff.permission.getGrantedAll()
    type: tip
    ---
    The [`liff.getContext()`](#get-context) method gets a list of scopes for the LIFF app (*).

    On the other hand, the `liff.permission.getGrantedAll()` method gets a list of scopes for which the user has agreed to grant permission among the scopes for the LIFF app.

    * The scopes specified in the "Scope" section under the **LIFF** tab in a LINE Login channel
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.getGrantedAll().then((scopes) => {
        // ["profile", "chat_message.write", "openid", "email"]
        console.log(scopes);
      });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permission.getGrantedAll();
```

#### Arguments

None

#### Return value

When the `Promise` is resolved, an array of scopes for which the user has agreed to grant permission is passed.

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

### liff.permission.query()

::reference-with-code
  :::reference-content
  Verifies whether the user agrees to grant the specified permission.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.query("profile").then((permissionStatus) => {
        // permissionStatus = { state: 'granted' }
      });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permission.query(permission);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  permission

  #undefined
  String

  The permission to be checked. Specify one of the following scopes:

  - [`profile`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`chat_message.write`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`openid`](/docs/liff/registering-liff-apps/#registering-liff-app)
  - [`email`](/docs/liff/registering-liff-apps/#registering-liff-app)
  :::
::

#### Return value

`Promise` object returned.

When `Promise` is resolved, an object containing the following properties is returned.

::parameter-table
  :::parameter-table-entry
  #undefined
  state

  #undefined
  String

  Contains one of the following values:

  - `granted`: User has consented to the authorization.
  - `prompt`: User hasn't consented to authorization.
  - `unavailable`: Not available because the channel does not have the specified scope.
  :::
::

### liff.permission.requestAll()

Displays the "Verification screen" for the permissions requested by LINE MINI Apps.

![verification screen](/media/line-mini-app/verification-screen-en.png){className="[\"border\",\"w-fix-200\"]"}

::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: Operating environment of liff.permission.requestAll()
    type: note
    ---
    `liff.permission.requestAll()` only operates on [LINE MINI Apps](/docs/line-mini-app/).

    To execute this method, you need to turn on **Channel consent simplification** in advance on the [LINE Developers Console](/console/). For more information on setting up the Channel consent simplification feature, see [The "Channel consent simplification" feature setup](/docs/line-mini-app/develop/channel-consent-simplification/#simplification-feature-setup) of the LINE MINI App documentation.
    ::::

    ::::admonition
    ---
    title: >-
      Make sure that the user has consented to all the permissions before executing
      this method
    type: note
    ---
    If the user has already consented to all the permissions and you execute `liff.permission.requestAll()`, `Promise` will be rejected and [`LiffError`](/reference/liff/#liff-errors) will be returned. Therefore, use [`liff.permission.query()`](/reference/liff/#permission-query) to check whether the user has consented to all the permissions, and execute `liff.permission.requestAll()` only if the user has unconsented permissions.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.permission.query("profile").then((permissionStatus) => {
        if (permissionStatus.state === "prompt") {
          liff.permission.requestAll();
        }
      });

      // When Use multiple accounts is enabled for the LINE MINI App channel
      liff.permission.query("profile").then((permissionStatus) => {
        if (permissionStatus.state === "prompt") {
          liff.permission.requestAll({
            officialAccount: {
              id: "@819...",
              fallback: true,
            },
          });
        }
      });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.permission.requestAll(params);
```

#### Arguments

The arguments are available only in LINE MINI Apps. LIFF SDK v2.30.0 or later is required, and **Use multiple accounts** must be enabled for the LINE MINI App channel. For more information, see [Add a LINE Official Account as a friend in a LINE MINI App (add friend option)](/docs/line-mini-app/service/add-friend-option/) in the LINE MINI App documentation.

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  Parameter object
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.officialAccount

  #undefined
  Object

  Object used to specify the LINE Official Account that users are prompted to add as a friend or unblock through the add friend option. If omitted, the default LINE Official Account is displayed.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  officialAccount.id

  #undefined
  String

  The ID of the LINE Official Account that users are prompted to add as a friend or unblock through the add friend option. Specify the basic ID or :glossary-tooltip[[premium ID](/glossary/#premium-id)]{glossary-id="premium-id"}.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  officialAccount.fallback

  #undefined
  Boolean

  Whether to display the default LINE Official Account if the LINE Official Account specified in the `officialAccount.id` property doesn't exist, isn't registered in the allowlist, or can't be used for another reason. The default value is `true`.

  - `true`: Display the default LINE Official Account.
  - `false`: Don't display any LINE Official Account.
  :::
::

#### Return value

Returns a `Promise` object.

#### Error response

When the `Promise` is rejected, a [`LiffError`](#liff-errors) is passed. The following errors are specific to the `liff.permission.requestAll()` method:

| Error code         | Error message                                   | Description                                                            |
| ------------------ | ----------------------------------------------- | ---------------------------------------------------------------------- |
| `FORBIDDEN`        | `All permissions have already been approved.`   | The user has already consented to all the permissions.                 |
| `FORBIDDEN`        | `SkipChannelVerificationScreen is unavailable.` | **Channel consent simplification** is disabled.                        |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".`       | The value of the `officialAccount.id` property doesn't start with `@`. |
