---
title: Membership card demo
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/demo/membership-demo
__hash__: mlADZEhSpnl3dX1Hee2vgYyShMo1U20hGQnb0Mi1Sn8
seo:
  title: Membership card demo
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}You can use the LINE MINI App to provide membership cards for your own services on LINE.

For example, companies that provide membership cards at offline stores, such as supermarkets, drugstores, and apparel stores, can also shift to online membership cards. It's possible to build a communication channel with users that can't be achieved with physical membership cards alone. Specifically, you can use the user ID obtained with the LINE MINI App to send push messages such as sales promotions.

* You must obtain the user's consent to collect and utilize behavioral data linked to their LINE account.

:toc## View the demo

You can view the demo by launching LINE on your smartphone and scanning this QR code.

![](/media/line-mini-app/demo/membership-demo/membership-en-qr-img.webp){className="[\"w-fix-560\"]"}

::admonition{title="Data that the demo app retrieves" type="note"}
Before using the demo app, please note that the app will access your LINE account profile information, including your display name and user ID. Your user ID will be stored on the server, but this data will be deleted daily.
::

## How to use the demo app

* The screen design may vary depending on your version.

| dummy                                                                                                 | dummy                                                                                                 | dummy                                                                                                 | dummy                                                                                                 |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/demo/membership-demo/membership-en-image1.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-en-image2.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-en-image3.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-en-image4.webp){className="[\"w-fix-200\"]"} |
| 1.Scan the QR code                                                                                    | 2.Authorize the required permissions                                                                  | 3.Issue membership card                                                                               | 4.Electronic receipt                                                                                  |

::admonition{title="Point" type="tip"}
1. No more need for physical membership cards
2. No physical cards to deliver, reducing physical contact
3. Membership cards can be issued immediately without entering any personal information
4. Messages can be delivered based on the activity history associated with the online membership card
::

## Benefits

### End-user benefits

#### 1. No more need for physical membership cards

Online membership cards are not bulky in your wallet like physical membership cards. You can simply issue your membership card by scanning the QR code at the store. You can also present your online membership card by simply opening LINE.

#### 2. No physical cards to deliver, reducing physical contact

The membership card can be displayed on the LINE app, eliminating the need to hand over a physical card. This can help reduce the chance of contact and therefore help prevent infections.

### Service provider benefits

#### 1. Membership cards can be issued immediately without entering any personal information

Generally, when issuing a membership card, personal information such as name and address is required to identify the individual. However, online membership cards using the LINE MINI App can be linked to the user's registered information on LINE. In other words, since there is no need to receive personal information from users, membership cards can be issued safely without incurring unnecessary costs to prevent personal information leakage.

#### 2. Messages can be delivered based on the activity history associated with the online membership card

You can record behavioral history by linking it to the user ID. If the conditions are met, you can use these records to send out useful information to users via LINE as a sales promotion measure, such as increasing the rate of repeat business.

## System and sequence diagram of the demo application

This figure shows how the demo app uses the LINE API.

* The figure includes functions that are not implemented in the demo app.

**System diagram**

![](/media/line-mini-app/demo/membership-demo/membership-system-diagram-en.webp){className="[\"border\"]"}

- System diagram for using the other services

  - :file-link[
  System diagram using AWS]{file="/media/line-mini-app/demo/membership-demo/membership-system-diagram-aws-en.webp"}
  - :file-link[
  System diagram using Azure]{file="/media/line-mini-app/demo/membership-demo/membership-system-diagram-azure-en.webp"}

**Sequence diagram**

![](/media/line-mini-app/demo/membership-demo/membership-sequence-diagram-en.webp){className="[\"border\"]"}

- Sequence diagram for using the other services

  - :file-link[
  Sequence diagram using AWS]{file="/media/line-mini-app/demo/membership-demo/membership-sequence-diagram-aws_en.webp"}
  - :file-link[
  Sequence diagram using Azure]{file="/media/line-mini-app/demo/membership-demo/membership-sequence-diagram-azure_en.webp"}

## Related links

- [Messaging API documentation](/docs/messaging-api/)
- [LINE MINI App documentation](/docs/line-mini-app/)
