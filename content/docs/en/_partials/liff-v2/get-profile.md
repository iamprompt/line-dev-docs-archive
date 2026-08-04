---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-profile
__hash__: Ybo1LV2_YiXgg2skwn2QA5Vgy4Rh9N6MOMGW2w9ft80
seo:
  description: ''
---

### liff.getProfile()

::reference-with-code
  :::reference-content
  Gets the current user's :glossary-tooltip[[profile information](/glossary/#profile-information)]{glossary-id="profile-information"}.

  You can only get the main profile information. You can't get the user's :glossary-tooltip[[subprofile](/glossary/#subprofile)]{glossary-id="subprofile"}.

    ::::admonition{title="Don't send user info to server" type="warning"}
    Don't send the user data obtained by this method to the server. For more information, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/) in the LIFF documentation.
    ::::

    ::::admonition{title="Select a scope" type="note"}
    When [adding a LIFF app to your channel](/docs/liff/registering-liff-apps/), select the `profile` scope. You can't get user profiles if you don't select the scope, or the user doesn't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](/console/) even after adding the LIFF app.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .getProfile()
        .then((profile) => {
          const name = profile.displayName;
        })
        .catch((err) => {
          console.log("error", err);
        });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.getProfile();
```

#### Arguments

None

#### Return value

::reference-with-code
  :::reference-content
  Returns a `Promise` object.

  When the `Promise` is resolved, the object containing the user's profile information is passed.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      User ID
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      Display name
      :::::

      :::::parameter-table-entry
      #undefined
      pictureUrl

      #undefined
      String

      Image URL. This property is not returned if it has not been set by the user.
      :::::

      :::::parameter-table-entry
      #undefined
      statusMessage

      #undefined
      String

      Status message. This property is not returned if it has not been set by the user.
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
        "userId": "U4af4980629...",
        "displayName": "Brown",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
        "statusMessage": "Hello, LINE!"
      }
      ```
      :::::
    ::::
  :::
::
