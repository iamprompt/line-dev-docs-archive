---
title: Flow when receiving a LINE notification message
navigation: true
description: >-
  LINE notification messages is a service that lets you send messages by
  specifying a user's phone number without knowing the user's user ID. You can
  send messages from the LINE Official Account even if the user hasn't added the
  LINE Official Account as a friend.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/partner-docs/line-notification-messages/flow-when-receiving-message
__hash__: A3JFV7Jiz0zfYHOKDydmWN4PNRWLfC1vvUY0Zql9_6s
seo:
  title: Flow when receiving a LINE notification message
  description: >-
    LINE notification messages is a service that lets you send messages by
    specifying a user's phone number without knowing the user's user ID. You can
    send messages from the LINE Official Account even if the user hasn't added
    the LINE Official Account as a friend.
---

# :page-title

:markdown-controls::admonition
---
title: Use of optional functions requires an application
type: note
---
Only corporate users who have submitted the required applications can use the functions described in this document. To use these functions with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## User flow when receiving LINE notification messages

In addition to agreeing to receive LINE notification messages, users must authenticate their phone number by SMS (SMS verification) once every 180 days to receive LINE notification messages.

![User flow when receiving LINE notification messages](/media/line-notification-message/pnp-receive-flow-en.png){className="[\"w-fix-520\",\"bg-border\"]"}

- [Flow for the case where a user has already agreed to receive LINE notification messages and doesn't need SMS authentication](#receiving-line-notification-messages)
- [Flow for the case where a user hasn't agreed to receive LINE notification messages and doesn't need SMS authentication](#user-consent-flow-for-receiving-line-notification-messages-1)
- [Flow for the case where a user hasn't agreed to receive LINE notification messages and SMS authentication is needed](#user-consent-flow-for-receiving-line-notification-messages-2)
- [Flow for the case where a user has already agreed to receive LINE notification messages and SMS authentication is needed](#user-consent-flow-for-receiving-line-notification-messages-3)
- [Note: Flow for changing the phone number registered to the LINE account](#when-changing-your-phone-number)

::admonition
---
title: Settings for receiving LINE notification messages are comprehensive
type: note
---
Once a user agrees to receive LINE notification messages, they're considered to have agreed to receive LINE notification messages from all LINE Official Accounts.

For example, if a user who has agreed to receive LINE notification messages in response to a LINE notification message sent from LINE Official Account A also receives a LINE notification message sent from a different LINE Official Account B, the user will have agreed to receive LINE notification messages and won't need to give consent again.
::

::admonition
---
title: >-
  SMS authentication must be done once every 180 days for each user's LINE
  account
type: note
---
Once a user performs SMS authentication, SMS authentication isn't needed when receiving LINE notification messages sent from all LINE Official Accounts for 180 days.

For example, if a user who has performed SMS authentication in response to a LINE notification message sent from LINE Official Account A receives a LINE notification message sent from another LINE Official Account B within 180 days, the user will have already been SMS authenticated and won't be needed to perform SMS authentication again.
::

::admonition
---
title: Cases where SMS authentication isn't needed
type: note
---
SMS authentication isn't needed when receiving a LINE notification message in these cases:

- Within 180 days of creating a new LINE account
- Within 180 days of changing the phone number registered to the user's LINE account.
::

### Flow for the case where a user has already agreed to receive LINE notification messages and doesn't need SMS authentication

| Number | Image                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ![](/media/line-notification-message/type1-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}      ![](/media/line-notification-message/type1-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"} | If a user has already agreed to receive LINE notification messages and doesn't need SMS authentication, the "LINE" system account will send a "LINE Notification Message Received" message to the user. At the same time, the requested LINE notification message will be sent to the user. |

### Flow for the case where a user hasn't agreed to receive LINE notification messages and doesn't need SMS authentication

| Number | Image                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                               |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ![](/media/line-notification-message/type1-pnpflow-1-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | If a user hasn't agreed to receive LINE notification messages and doesn't need SMS authentication, when the user receives a LINE notification message, the user will receive a "You have received a LINE notification message" and "Set up to receive LINE notification messages" message from the "LINE" system account. |
| 2      | ![](/media/line-notification-message/type1-pnpflow-2-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | Clicking the "Set" button under "Set up to receive LINE notification messages" will take the user to the consent screen for receiving LINE notification messages.                                                                                                                                                         |
| 3      | ![](/media/line-notification-message/type1-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}      ![](/media/line-notification-message/type1-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"} | If the user agrees to the "Set up to receive LINE notification messages", the user will receive a message from the "LINE" system account stating that you've received a LINE notification message. The requested LINE notification message is then sent to the user.                                                      |

### Flow for the case where a user hasn't agreed to receive LINE notification messages and SMS authentication is needed

| Number | Image                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ![](/media/line-notification-message/type3-pnpflow-1-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | If a user hasn't agreed to receive LINE notification messages and SMS authentication is needed, the "LINE" system account will send the user a "You have received a LINE notification message" and "Set up to receive LINE notification messages" message when the user receives a LINE notification message.                            |
| 2      | ![](/media/line-notification-message/type3-pnpflow-2-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | Clicking the "Set" button under "Set up to receive LINE notification messages" will take the user to the consent screen for receiving LINE notification messages.                                                                                                                                                                        |
| 3      | ![](/media/line-notification-message/type3-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | If the user agrees to the "Set up to receive LINE notification messages", a confirmation dialog box for sending an SMS message to the phone number registered in the LINE account will be displayed. At this time, the user can also change the phone number to which the SMS is sent (the phone number registered in the LINE account). |
| 4      | ![](/media/line-notification-message/type3-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | An SMS message will be sent to the specified phone number. Enter the PIN number provided in the message.                                                                                                                                                                                                                                 |
| 5      | ![](/media/line-notification-message/type1-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}      ![](/media/line-notification-message/type1-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"} | Once the SMS verification is completed, the "LINE" system account will send a "LINE Notification Message Received" message to the user. At the same time, the requested LINE notification message will be sent to the user.                                                                                                              |

### Flow for the case where a user has already agreed to receive LINE notification messages and SMS authentication is needed

| Number | Image                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                           |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ![](/media/line-notification-message/type2-pnpflow-1-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | If a user has already agreed to receive LINE notification messages and SMS authentication is needed, the "LINE" system account will send the user a "LINE notification message received" message and a "phone number authentication" message when the user receives a LINE notification message.      |
| 2      | ![](/media/line-notification-message/type2-pnpflow-2-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | Clicking "Set" in the "Phone number authentication" message will take the user to the phone number authentication screen.                                                                                                                                                                             |
| 3      | ![](/media/line-notification-message/type2-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | When the "Send SMS" button is pressed, a confirmation dialog box for sending an SMS message to the phone number registered in the LINE account will be displayed. At this time, the user can also change the phone number to which the SMS is sent (the phone number registered in the LINE account). |
| 4      | ![](/media/line-notification-message/type2-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"}                                                                                                           | An SMS message will be sent to the specified phone number. Enter the PIN number provided in the message.                                                                                                                                                                                              |
| 5      | ![](/media/line-notification-message/type1-pnpflow-3-ja.png){className="[\"border\",\"w-fix-280\"]"}      ![](/media/line-notification-message/type1-pnpflow-4-ja.png){className="[\"border\",\"w-fix-280\"]"} | Once the SMS verification is completed, the "LINE" system account will send a "LINE Notification Message Received" message to the user. At the same time, the requested LINE notification message will be sent to the user.                                                                           |

## Note: Flow for changing the phone number registered to the LINE account

To change the phone number registered with the LINE account, the user taps **Change** during SMS authentication when receiving a LINE notification message, taps **Next**, and then enters the phone number.

::admonition
---
title: Change the phone number registered in the LINE account
type: tip
---
You can also change your phone number by going to **Settings** > **Profile** > **Phone number** in the LINE app. For more information, see [Checking/changing your phone number](https://help.line.me/line/smartphone/pc?lang=en&contentId=20000120){rel="[\"nofollow\"]"} in the LINE Help Center.
::

| Number | Image                                                                                                      | Description                                                                                                                                        |
| ------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ![](/media/line-notification-message/change-phone-number-1-en.png){className="[\"border\",\"w-fix-280\"]"} | Enter the phone number you wish to change and click "Next".                                                                                        |
| 2      | ![](/media/line-notification-message/change-phone-number-2-en.png){className="[\"border\",\"w-fix-280\"]"} | An SMS message will be sent to the specified phone number. Enter the PIN code provided in the message.                                             |
| 3      | ![](/media/line-notification-message/change-phone-number-3-ja.png){className="[\"border\",\"w-fix-280\"]"} | After successfully authenticating your phone number via SMS, you'll receive a "Your phone number has been changed" message from your LINE account. |
