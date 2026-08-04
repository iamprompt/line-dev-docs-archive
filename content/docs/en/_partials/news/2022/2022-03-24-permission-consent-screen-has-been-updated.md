---
title: The design of the channel consent screen has been changed
navigation: true
description: >-
  As announced on March 9, 2022, we've changed the design of the channel consent
  screen.
meta: >-
  {"date":"2022-03-24 02:00 UTC","tags":"liff, line-mini-app, LINE
  Login","locale":"en"}
path: /en/_partials/news/2022/2022-03-24-permission-consent-screen-has-been-updated
__hash__: z6_I7KteSdSCiT-qSMa_pzQLsvGRCHj2cNwAlfmXpq4
seo:
  title: The design of the channel consent screen has been changed
  description: >-
    As announced on March 9, 2022, we've changed the design of the channel
    consent screen.
---

As announced on [March 9, 2022](/news/2022/03/09/permission-consent-screen-will-be-updated/), we've changed the design of the channel consent screen.

This design change includes the change to display the **Company or owner's country or region** for a channel on the channel consent screen.

::admonition
---
title: >-
  With the design change of the channel consent screen, configure the company or
  owner's country or region as soon as possible
type: note
---
If the **Company or owner's country or region** is not set after March 24, 2022, "Unspecified" will be displayed on the channel consent screen. This content will be displayed when the user is asked to confirm whether or not they agree to the authorization. Therefore, configure the **Company or owner's country or region** as soon as possible.

![Unidentified display image](/media/news/2022/permission-consent-scree-not-set-20220324-en.png){className="[\"border\",\"w-fix-320\"]"}

For more information about the target channels and how to configure them, see the news from [February 10, 2022](/news/2022/02/10/country-or-region-setting-request/).
::

### Changes

The main changes to the channel consent screen are as follows. The changes differ for each version of LINE Login.

| Changes                     | LINE Login v2.1 | LINE Login v2.0 |
| --------------------------- | --------------- | --------------- |
| Added **Country or region** | ✅               | ✅               |
| Other design changes        | ✅               | ❌               |

The changes to the channel consent screen for LINE Login v2.1 are as follows:

| Before changes                                                                                                                                     | After changes                                                                                                                               | Main changes                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Channel consent screen before changes](/media/news/2022/permission-consent-screen-before20220324-en.png){className="[\"border\",\"w-fix-320\"]"} | ![Channel consent screen after changes](/media/news/2022/permission-consent-screen-20220324-en.png){className="[\"border\",\"w-fix-320\"]"} | - Added **Country or region** - Removed LINE logo from screen title - Changed size and shape of channel icon - Deleted text `This service's provider is requesting the following permissions.` - Moved **Add friend** button of LINE Official Account to the top (which is displayed by the [bot link feature](/docs/line-login/link-a-bot/)) - Changed permission switches to toggle buttons |
