---
title: Common Profile Quick-fill design regulations
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/quick-fill/design-regulations
__hash__: kBkfXPgRWwlqdZfA3ROftqcOcUzJZFCi0XSyPcSCfkE
seo:
  title: Common Profile Quick-fill design regulations
  description: null
---

# :page-title

:markdown-controls::admonition{title="Available only in verified MINI Apps" type="tip"}
To use Common Profile Quick-fill, your LINE MINI App must be verified and you must apply to use Quick-fill. For more information, see [Steps for using Quick-fill](/docs/line-mini-app/quick-fill/overview/#process).
::

## User experience with Quick-fill

In the LINE MINI App Quick-fill, when the end user taps the [Auto-fill button](#what-is-auto-fill-button), a modal will appear to confirm the user's profile. After confirming the profile in the displayed modal, the user can tap **Auto-fill** and the profile information will be entered automatically.

You can display the modal by calling the [`liff.$commonProfile.get()`](/reference/line-mini-app/#get-common-profile) method. Therefore, there is no need to develop the modal by your company.

The timing of displaying the modal can be set freely according to the configuration of the LINE MINI App, but the following patterns are recommended and prohibited.

- [Recommended screen transitions](#recommended-screen-transition)
- [Prohibited screen transitions](#prohibited-screen-transition)

### Recommended screen transitions

When integrating Quick-fill into your LINE MINI App, we recommend the following screen transitions:

- [Display a modal immediately after moving to the member registration screen](#show-modal-immediately-after-transition)
- [Display a modal when the user selects an input form](#show-modal-when-selecting-input-form)
- [Display a modal after the user taps the Auto-fill button](#show-modal-when-tapping-auto-fill-button)
- [Display a modal at the destination after the user agrees on the channel consent screen](#show-modal-after-consent-screen)

#### Display a modal immediately after moving to the member registration screen

When the user moves to the registration screen, display a modal immediately by calling the [`liff.$commonProfile.get()`](/reference/line-mini-app/#get-common-profile) method. In this case, place an Auto-fill button on the member registration screen so that the user can display the modal again even if the user close it once.

![](/media/line-mini-app/quick-fill/recommended-screen-transition-02.png){className="[\"bg-border\",\"w-fix-680\"]"}

#### Display a modal when the user selects an input form

Display a modal by calling the [`liff.$commonProfile.get()`](/reference/line-mini-app/#get-common-profile) method when the user selects an input form on the registration screen.

![](/media/line-mini-app/quick-fill/recommended-screen-transition-04.png){className="[\"bg-border\",\"w-fix-680\"]"}

#### Display a modal after the user taps the Auto-fill button

Display a modal by calling the [`liff.$commonProfile.get()`](/reference/line-mini-app/#get-common-profile) method when the user taps the Auto-fill button on the member registration screen.

![](/media/line-mini-app/quick-fill/recommended-screen-transition-01.png){className="[\"bg-border\",\"w-fix-680\"]"}

#### Display a modal at the destination after the user agrees on the channel consent screen

When the user taps **Allow** on the [channel consent screen](/docs/line-mini-app/develop/configure-console/#consent-screen-settings) of the LINE MINI App, transition the user directly to the registration screen. After transitioning to the registration screen, display a modal immediately by calling the [`liff.$commonProfile.get()`](/reference/line-mini-app/#get-common-profile) method. In this case, place an Auto-fill button on the member registration screen so that the user can display the modal again even if the user close it once.

![](/media/line-mini-app/quick-fill/recommended-screen-transition-03.png){className="[\"bg-border\",\"w-fix-680\"]"}

### Prohibited screen transitions

We prohibit the following types of screen transitions when Integrating Quick-fill into the LINE MINI App. If we find an app that performs a prohibited screen transition, we may revoke Quick-fill permission based on the terms of use you agreed to when you applied to use Quick-fill.

- [Display a modal on a screen that doesn't have a form to automatically fill in](#show-modal-on-non-auto-fill-form)
- [Getting items that don't exist in the form](#get-non-existent-item)
- [Move to the confirmation screen without auto-filling the form](#skip-input-form)

#### Display a modal on a screen that doesn't have a form to automatically fill in

It is prohibited to display a modal on a screen that doesn't have a form that automatically fills in the fields.

![](/media/line-mini-app/quick-fill/prohibited-screen-transition-01.png){className="[\"bg-border\",\"w-fix-480\"]"}

#### Getting items that don't exist in the form

It is prohibited to get items that don't exist on the form. For example, you must not get phonetic information even though there is no phonetic field on the registration form.

![](/media/line-mini-app/quick-fill/prohibited-screen-transition-02.png){className="[\"bg-border\",\"w-fix-480\"]"}

#### Move to the confirmation screen without auto-filling the form

It is prohibited to immediately move to the screen without auto-filling the form after the user taps the **Auto-fill** button in the modal. For example, you must not move to the registration confirmation screen without auto-filling the form, or register without displaying the acquired profile information and move to the registration completion screen.

![](/media/line-mini-app/quick-fill/prohibited-screen-transition-03.png){className="[\"bg-border\",\"w-fix-680\"]"}

## Auto-fill button guidelines

You must comply with the following items when Integrating Quick-fill into your LINE MINI App.

### What is the Auto-fill button

There are 4 types, with a total of 13 different Auto-fill buttons. Use the buttons you want in accordance with your LINE MINI App. You can see a list of the buttons at [Types of Auto-fill buttons](#auto-fill-button).

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-01.png){className="[\"border\",\"w-fix-600\"]"}

### Example of using the Auto-fill button

Use the button as it is, without modifying or editing it, or adding animation or effects (zoom, rotate, decorate, etc.). For more information on prohibited items, see [Prohibited items for Auto-fill button](#auto-fill-button-prohibition).

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-02.png){className="[\"border\",\"w-fix-600\"]"}

### Location of the Auto-fill button

To improve user visibility, align the Auto-fill button with the left or center of the form input field.

#### Example of left alignment

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-03.png){className="[\"border\",\"w-fix-600\"]"}

#### Example of center alignment

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-04.png){className="[\"border\",\"w-fix-600\"]"}

#### Notes on placement

Place the Auto-fill button in a appropriate position where the user can see the form that will be filled in after tapping the button.

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-05.png){className="[\"border\",\"w-fix-600\"]"}

#### Leave a clear space around the button

To ensure the visibility and independence of the buttons, leave a 10px margin above, below, left and right of the buttons.

![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-06.png){className="[\"border\",\"w-fix-600\"]"}

### Prohibited items for the Auto-fill button

The following actions with the Auto-fill button are prohibited.

| ❌ Zoom in and out                                                                                              | ❌ Transform (skew, rotate, italicize, normalize)                                                               |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-07.png){className="[\"border\",\"w-fix-480\"]"} | ![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-08.png){className="[\"border\",\"w-fix-480\"]"} |

| ❌ Decoration (shadows, borders, 3D display)                                                                    | ❌ Displaying elements on top of each other                                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-09.png){className="[\"border\",\"w-fix-480\"]"} | ![](/media/line-mini-app/quick-fill/auto-fill-button-guideline-10.png){className="[\"border\",\"w-fix-480\"]"} |

The following types of display and usage of the Auto-fill button are also prohibited.

| ❌ Use your own custom buttons                                                                                    | ❌ Add text below the Auto-fill button                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/quick-fill/auto-fill-button-prohibition-01.png){className="[\"border\",\"w-fix-240\"]"} | ![](/media/line-mini-app/quick-fill/auto-fill-button-prohibition-02.png){className="[\"border\",\"w-fix-240\"]"} |

| ❌ Zoom in and out on the Auto-fill button                                                                        | ❌ Hide the Auto-fill button                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/quick-fill/auto-fill-button-prohibition-03.png){className="[\"border\",\"w-fix-240\"]"} | ![](/media/line-mini-app/quick-fill/auto-fill-button-prohibition-04.png){className="[\"border\",\"w-fix-240\"]"} |

## Types of Auto-fill buttons

There are 4 types, with a total of 13 different Auto-fill buttons. Use the buttons you want in accordance with your LINE MINI App.

- [Type A](#type-a)
- [Type B](#type-b)
- [Type C](#type-c)
- [Type D](#type-d)

::admonition
---
title: Display the Auto-fill button at the specified size
type: tip
---
Display the Auto-fill buttons at the size specified for each type. The Auto-fill button image is twice the specified size. Therefore, be careful not to display the image in its original size.
::

::admonition
---
title: Use the image of the Auto-fill button by specifying the URL
type: note
---
The image of the auto-input button may be changed without notice. Be sure to use the URL directly specified on this page, rather than downloading and using the image. In addition, we may delete specific images or change URLs after giving advance notice. Thank you for your understanding.
::

### Type A

In Type A, number 1 is the basic shape. Numbers 2 through 4 are color variations. The size is 264px wide by 73px high. For the ALT attribute, specify `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`.

|     | Auto-input button                                                                                               | URL                                                                             |
| --- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_black.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_black.png` |
| 2   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_white.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_white.png` |
| 3   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_gray.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_gray.png`  |
| 4   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_blue.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_blue.png`  |

### Type B

In Type B, number 1 is the basic shape. Numbers 2 through 4 are color variations. The size is 264px wide by 73px high. For the ALT attribute, specify `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`.

|     | Auto-input button                                                                                                   | URL                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 1   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_black.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_black.png` |
| 2   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_white.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_white.png` |
| 3   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_gray.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_gray.png`  |
| 4   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_blue.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_blue.png`  |

### Type C

Type C is only available in the basic shape. The size is 264px wide by 73px high. For the ALT attribute, specify `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`.

|     | Auto-input button                                                                                               | URL                                                                             |
| --- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LY_white.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LY_white.png` |

### Type D

In Type D, number 1 is the basic shape. Numbers 2 through 4 are color variations. The size is 288px wide by 66px high. For the ALT attribute, specify `LINEで自動入力しますか？氏名、電話番号、メールアドレス、住所など。自動入力`.

|     | Auto-input button                                                                                                 | URL                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_white.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_white.png` |
| 2   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_black.png){className="[\"bg-border\"]"} | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_black.png` |
| 3   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_gray.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_gray.png`  |
| 4   | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_blue.png){className="[\"bg-border\"]"}  | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_blue.png`  |
