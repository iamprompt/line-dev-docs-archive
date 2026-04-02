---
title: >-
  [Updated] Added features such as automatic opening and closing of the rich
  menu when tapping a rich menu
navigation: true
description: ''
meta: '{"date":"2022-05-13 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2022/2022-05-13-richmenu-keyboard
__hash__: vpCQYA0nW54BWjgNQNXOzfEr95QCEPIzGjvzoEvbIak
seo:
  title: >-
    [Updated] Added features such as automatic opening and closing of the rich
    menu when tapping a rich menu
  description: ''
---

::admonition{title="Added on May 18, 2022" type="note"}
We've updated the [Target version](#target-version-20220513).
::

In [postback action](/docs/messaging-api/actions/#postback-action) of the Messaging API, we've added features to open and close a rich menu and open keyboard and voice message input mode based on user action.

Previously, when a user tapped on a rich menu and messages were sent from the LINE Official Account, these messages would overlap the rich menu, making them difficult to read. With this new feature, the rich menu can now be automatically closed when the user taps on the rich menu.

### Added display methods

With this new addition, the following display methods can be specified depending on user action:

- Close rich menu
- Open rich menu
- Open keyboard
- Open voice message input mode

### Added properties

The following two properties have been added to the [postback action](/reference/messaging-api/#postback-action) of an action object in conjunction with these features addition.

| Property name | Type   | Summary                                                                                                                                                                                                                                              |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inputOption   | String | The display method of such as rich menu based on user action. Specify one of the following values:  - `closeRichMenu`: Close rich menu - `openRichMenu`: Open rich menu - `openKeyboard`: Open keyboard - `openVoice`: Open voice message input mode |
| fillInText    | String | String to be pre-filled in the input field when the keyboard is opened. Valid only when the `inputOption` property is set to `openKeyboard`. The string can be broken by a newline character (`\n`).   Max character limit: 300                      |

#### Example of postback action object

For example, suppose the user taps a control with a postback action object such as the following. At this time, the user's keyboard is automatically opened. In addition, the input field will be pre-filled with the string specified by `fillInText`.

```json
{
  "type": "postback",
  "label": "Buy",
  "data": "action=buy&itemid=123",
  "displayText": "Buy",
  "inputOption": "openKeyboard",
  "fillInText": "---\nName: \nPhone: \nBirthday: \n---"
}
```

### Target version

These added features are available on LINE version `12.6.0` or later for iOS or Android.
