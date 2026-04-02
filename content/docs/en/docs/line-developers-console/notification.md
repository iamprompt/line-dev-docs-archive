---
title: Receive notifications via email or the notification center
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-developers-console/notification
__hash__: '-z0ZwrDIrMud4rLcwJUq96dQ-7t8KPsl0iRdlzva6rE'
seo:
  title: Receive notifications via email or the notification center
  description: null
---

# :page-title

:markdown-controlsFrom the notifications center of the [LINE Developers Console](/console/), you can receive various updates in real time. This page explains the types of notifications you can receive and how to configure the settings for receiving notifications.

## Types of notifications that can be received

You can receive the following types of notifications:

| Type of notifications                                            | Overview                                                     |
| ---------------------------------------------------------------- | ------------------------------------------------------------ |
| [Important announcements](#notification-important-announcements) | Important announcements regarding the LINE Platform          |
| [Activity](#notification-activity)                               | Your activities on the LINE Developers Console               |
| [News](#notification-news)                                       | Announcements from the LINE Developers site                  |
| [Channel activity](#notification-channel-activity)               | Activities related to channels that you have the admin role  |
| [Provider activity](#notification-provider-activity)             | Activities related to providers that you have the admin role |

### Important announcements

Notifies you of important announcements regarding the LINE Platform.

Example: [Notice Concerning Use of Information in Connection with Group Restructuring (share target picker)](/news/2023/09/21/notice-concerning-use-of-information-for-liff/)

### Activity

Notifies you of your activities on the LINE Developers Console. The following activities are notified.

| Type of operations                  | Activity detail                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Operations related to the providers | - Create a provider - Delete a provider - Send an invitation email to join a provider - Grant a provider role to your developer account |
| Operations related to the channels  | - Create a channel - Delete a channel - Send an invitation email to join a channel - Grant a channel role to your developer account     |

### News

Notifies you of announcements from the LINE Developers site. When [news](/news/) is published, the news title will be notified.

### Channel activity

Notifies you of activities related to the channels for which you have the admin role. The following activities are notified.

| Type of channels       | Activity detail                                                                                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channels in general    | - Delete a channel - Add a new member to a channel                                                                                                                                                                                      |
| LINE MINI App channels | - Channel status updates based on review - Enable search for the LINE MINI App - Automatically delete review files attached to the channel (when the review is complete or if the review is not requested even after 30 days of upload) |

### Provider activity

Notifies you of activities related to the providers for which you have the admin role. The following activities are notified.

- Delete a provider
- Add a new member to a provider

## Configure notification types and reception methods

You can configure the types and reception methods of your notifications. Go to your profile in the LINE Developers Console and, in the **Settings** section, toggle the slider on (right) or off (left) next to the notification option to enable or disable that setting. Note that **Important announcements** can't be turned off.

![Settings section of the profile of the LINE Developers console](/media/line-developers-console/console-notification-center-settings-en.png){className="[\"border\",\"w-fix-360\"]"}

::admonition{title="Notification email" type="note"}
Your email address registered in your LINE Developers Console profile must be verified to receive email notifications. If the email address in your profile is labeled as **Your email is not yet verified**, click on **Get Verification Link** to verify your email address.

You will only receive email notifications for the notification settings you enabled.
::

## Check notifications

To display the notification center, click on the bell icon in the top-right corner of the LINE Developers Console. If there are unread notifications, there will be a green dot next to the icon.

![Notification center icon of the LINE Developers Console](/media/news/console-notification-center-icon.png){className="[\"border\",\"w-fix-240\"]"}

If you click on this icon, you will see the notification center. From here, your can check recent updates and activities.

![The dropdown menu of the notification center of the LINE Developers Console](/media/line-developers-console/notification-01-en.png){className="[\"border\",\"w-fix-480\"]"}
