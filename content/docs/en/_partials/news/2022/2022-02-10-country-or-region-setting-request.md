---
title: >-
  [Updated] With the enforcement of the Amended Act on the Protection of
  Personal Information, companies or owners that manage the LINE Official
  Account or the authorized apps should configure the country or region in which
  they are located
navigation: true
description: ''
meta: >-
  {"date":"2022-02-10 00:00 UTC","tags":"messaging-api, liff, line-mini-app,
  LINE Login, console, line-blockchain","locale":"en"}
path: /en/_partials/news/2022/2022-02-10-country-or-region-setting-request
__hash__: 2Ev_malSV94fM0uSloY5R1bO4y5F0Eii4Rtdx68s_N0
seo:
  title: >-
    [Updated] With the enforcement of the Amended Act on the Protection of
    Personal Information, companies or owners that manage the LINE Official
    Account or the authorized apps should configure the country or region in
    which they are located
  description: ''
---

::admonition{title="Added on February 17, 2022" type="note"}
Configuration function to set the country or region for existing channels is now available to the following channel types:

- [Messaging API](#how-to-configure-20220210)
  - Only Messaging API channels on which LIFF apps were added before February 5, 2020
- [Blockchain Service](#how-to-configure-20220210)
- [LINE MINI App](#how-to-configure-mini-app-20220210)

In addition, we've added the following information of the country or region settings for the LINE MINI App:

- [Configuring for new LINE MINI App channels](#configuring-new-mini-channel-20220210)
- [Configuring for existing LINE MINI App channels](#configuring-existing-mini-channel-20220210)
  - You can configure the country or region to your existing LINE MINI App channels until March 8, 2022.
::

Japanese "[Amended Act on the Protection of Personal Information](https://www.ppc.go.jp/en/legal/){rel="[\"nofollow\"]"}" will be enforced on April 1, 2022. Accordingly, the country or region the of company or owner that manage the LINE Official Account or the authorized apps are located is required to be published to end users within LINE app.

Therefore, the LINE Developers Console has added a **Company or owner's country or region** field to the following channel types. Channel administrators, regardless of whether they are corporations or individuals, can configure the **Company or owner's country or region** for the corresponding channel.

| Channel type                                                                  | Configuring for new channels                                                                                                                                  | Configuring for existing channels                                                                                              |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [LINE Login](/docs/line-login/)                                               | Configure in the screen to create a channel.                                                                                                                  | Configure in the **Basic settings** tab.                                                                                       |
| [Messaging API](/docs/messaging-api/)                                         | Configure in the screen to create a channel.   The same settings will be applied to the LINE Official Account corresponding to the Messaging API channel. (*) | Configure only for Messaging API channels on which LIFF apps were added before February 5, 2020 in the **Basic Settings** tab. |
| [Blockchain Service](https://docs-blockchain.line.biz/){rel="[\"nofollow\"]"} | Configure in the screen to create a channel.                                                                                                                  | Configure in the **Basic settings** tab.                                                                                       |
| [LINE MINI App](/docs/line-mini-app/)                                         | LINE will configure the country or region based on the information that registered for enrollment in the LINE MINI App development program.                   | Configure in the **Basic settings** tab.                                                                                       |

* The **Company or owner's country or region** settings configured when creating a Messaging API channel can't be checked or changed from the LINE Developers Console.

### Display to end users of the country or region

The country or region of the company or owner that manages the channel will be displayed to end users in late March 2022. The screens where the country or region will be displayed are as follows:

- The permission consent screen of the channel
- The profile screen of the LINE Official Account

If country or region is not set, the message such as "Unknown" or "Unconfirmed" will be displayed.

### How to configure the country or region for LINE Login, Messaging API, and Blockchain Service

Set the appropriate country/region from the list of **Company or owner's country or region**. When setting the country or region, select the location where the company/individual providing the LINE Official Account or the authorized app is located.

::admonition
---
title: We strongly recommend configuring Company or owner's country or region
type: note
---
These settings are related to the laws that will be enforced in Japan. Therefore, we strongly recommend that you configure these settings if you are providing the LINE Official Account or authorized apps. In addition, **Company or owner's country or region** is an optional field in an existing channel, but there may be mandatory after April 1, 2022.
::

#### If the country or region to be selected does not exist in the list

If your country or region isn't on the list of **Company or owner's country or region**, let us know the details via our [inquiry form](https://contact-cc.line.me/detailId/11589){rel="[\"nofollow\"]"} by entering the following:

::parameter-table
**Select your Country**:
description: |
Select the major country or region that provide the LINE Official Account or the authorized apps.
**Reply Email**:
description: |
We'll send our response to this email address.  

Please check your email settings beforehand and make sure you can receive messages from [do_not_reply@linecorp.com](mailto:do_not_reply@linecorp.com).
**Phone Number**:
description: |
Enter the phone number registered with your LINE account or any phone number.
**Your Registered Email**:
description: |
Enter the email address registered with your LINE account or any email address.
**1)What is the name of the app?**:
description: |
Enter the exact name of your channel. If you have not yet created a channel, there is no need to enter.
**2)What is the Channel ID?**:
description: |
Enter the exact :glossary-tooltip[[Channel ID](/glossary/#channel-id)]{glossary-id="channel-id"} of your channel. If you have not yet created a channel, there is no need to enter.
**3)What is your login email address?**:
description: |
Enter the email address of your developer account. If you are unsure, log in to the LINE Developers Console, click **Accounts** in the top-right corner of the screen, and enter the email address displayed.
**4)When did the issue occur? Please give the date and time.**:
description: |
There is no need to enter.
**5)What are the details of the issue?**:
description: |
Enter the following details:
- That there were no items to select from the list of **Company or owner's country or region**.
- The country/region where you want to set.
::

For items not listed in the table above, submit the form with the default values.

### How to configure the country or region for LINE MINI App

#### Configuring for new LINE MINI App channels

The same value as **Region** set at the time of review request will be reflected. At the time of review request, you must agree to the following checkbox:

![I represent and warrant that the region to provide the LINE MINI App and service company's country or region are the same.](/media/news/country-or-region-setting-request-mini-en.png){className="[\"border\",\"w-fix-800\"]"}

#### Configuring for existing LINE MINI App channels

You can configure the **Company or owner's country or region** to your existing LINE MINI App channels in the **Basic settings** tab. The value that can be configured is either the same value as **Region** or "Other".

::admonition
---
title: >-
  The period during which the Company or owner's country or region can be set
  for the existing LINE MINI App channels
type: note
---
After March 9, 2022, you won't be able to edit the **Company or owner's country or region**.

Set the **Company or owner's country or region** for the existing LINE MINI App channels by March 8, 2022.
::

LINE will continue to improve the quality of its services for its customers. Thank you for your understanding.
