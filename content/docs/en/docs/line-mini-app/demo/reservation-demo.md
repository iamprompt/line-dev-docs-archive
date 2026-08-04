---
title: Store reservation demo
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/demo/reservation-demo
__hash__: sfSSgu0fSRxEyDUZUeaa32isfpndEmJNBHTZYR7oozQ
seo:
  title: Store reservation demo
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}You can use LINE MINI Apps to make reservations, such as at hair salons and restaurants.

To prevent users from forgetting their appointment, LINE MINI Apps can send reminders via LINE message when the appointment time is approaching. Also, if the conditions are met, the user ID obtained from the LINE MINI App can be used to send not only reservation notifications, but also push messages for sales promotions, etc.

* You must obtain the user's consent to collect and utilize behavioral data linked to their LINE account.

:toc## View the demo

You can view the demo by launching LINE on your smartphone and scanning this QR code.

![](/media/line-mini-app/demo/reservation-demo/reserve-en-qr-img.webp){className="[\"w-fix-800\"]"}

::admonition{title="Data that the demo app retrieves" type="note"}
Before using the demo app, please note that the app will access your LINE account profile information, including your display name and user ID. Your user ID will be stored on the server, but this data will be deleted daily.
::

## How to use

* The screen design may vary depending on your version.

| dummy                                                                                               | dummy                                                                                               | dummy                                                                                               | dummy                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/demo/reservation-demo/reserve-en-image1.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-en-image2.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-en-image3.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-en-image4.webp){className="[\"w-fix-200\"]"} |
| 1.Scan the QR code                                                                                  | 2.Authorize the required permissions                                                                | 3.Make a reservation by specifying the date and time                                                | 4.Reminder notification                                                                             |

::admonition{title="Point" type="tip"}
1. No need to download the app or register as a member
2. Help users remember reservations with reminder notifications
3. Deliver messages based on the operation and store visit history of the user's reservation app
::

## Benefits

### End user benefits

#### 1. No need to download the app or register as a member

LINE MINI Apps require no download or installation on your smartphone and no personal information input, so you can make a reservation right away.

#### 2. Prevent users from forgetting with reminder notifications

A service message will be sent to your chat room as a reminder notification before your visit. You can freely select the notification date. Even if you're busy with work or private life, you won't forget your reservation date.

### Service provider benefits

#### 1. Help users remember reservations with reminder notifications

To prevent users from forgetting to come to the store, users can be reminded by LINE message on the day of their visit, the day before their visit, or any other day they wish.

#### 2. Deliver messages based on the operation and store visit history of the user's reservation app

You can record the operation and store visit history of the reservation app by linking them to the user ID. You can use these records to send out useful information to users via LINE as a sales promotion measure, such as increasing the rate of repeat visits.

## System and sequence diagram of the demo application

This figure shows how the demo app uses the LINE API.

* The figure includes functions that are not implemented in the demo app.

### Hair salon

**System diagram**

![](/media/line-mini-app/demo/reservation-demo/reserve-system-diagram-en.webp){className="[\"border\"]"}

- System diagram for using the other services

  - :file-link[
  System diagram using AWS]{file="/media/line-mini-app/demo/reservation-demo/reserve-system-diagram-aws-en.webp"}
  - :file-link[
  System diagram using Azure]{file="/media/line-mini-app/demo/reservation-demo/reserve-system-diagram-azure-en.webp"}

**Sequence diagram**

![](/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram-en.webp){className="[\"border\"]"}

- Sequence diagram for using the other services

  - :file-link[
  Sequence diagram using AWS]{file="/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram-aws_en.webp"}
  - :file-link[
  Sequence diagram using Azure]{file="/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram-azure_en.webp"}

### Restaurant

**System diagram**

![](/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram-en.webp){className="[\"border\"]"}

- System diagram for using the other services

  - :file-link[
  System diagram using AWS]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram-aws-en.webp"}
  - :file-link[
  System diagram using Azure]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram-azure_en.webp"}

**Sequence diagram**

![](/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram-en.webp){className="[\"border\"]"}

- Sequence diagram for using the other services

  - :file-link[
  Sequence diagram using AWS]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram-aws_en.webp"}
  - :file-link[
  Sequence diagram using Azure]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram-azure_en.webp"}

## Related links

- [Messaging API documentation](/docs/messaging-api/)
- [LINE MINI App documentation](/docs/line-mini-app/)
