---
title: Event experience demo
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/demo/mixwayapi-demo
__hash__: 0OiGrbi0z-5_rmivIUZyTHC6AzyU-x5UQWpb7MOrwLQ
seo:
  title: Event experience demo
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}By combining LINE with the multimodal route search service [mixway API](https://mixway.ekispert.net/lp/api){rel="[\"nofollow\"]"} (only available in Japanese), you can create a smarter event experience for participants at concerts, festivals, fireworks displays, and other events.

From the end user’s perspective, participating in an event seems like a single process. In reality, however, it consists of multiple smaller steps—such as booking the event (purchasing tickets), checking the route to the venue, arranging transportation, and attending the event (presenting tickets, etc.). Until now, each process required its own dedicated app, meaning users had to create and manage separate accounts for each one.

By integrating all these processes into a single LINE MINI App, and centralizing them to one account, you can remove the small barriers users face when participating in events. This is what we call a smarter event experience.

:toc## View the demo

The demo app lets you experience a new way to participate in events, simulating the scenario of "going to a fireworks festival with friends". You can view the demo by launching LINE on your smartphone and scanning this QR code.

![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-qr-demo-en.webp){className="[\"w-fix-240\"]"}

::admonition{title="Data that the demo app retrieves" type="note"}
Before using the demo app, please note that the app will access your LINE account profile information, including your display name and user ID. Your user ID will be stored on the server, but this data will be deleted daily.
::

## How to use the demo app

* The screen design may vary depending on your version.

| dummy                                                                                                    | dummy                                                                                                    | dummy                                                                                                   | dummy                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-image1-en.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-image2-en.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-image3-en.png){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-image4-en.png){className="[\"w-fix-200\"]"} |
| 1.Initialize App                                                                                         | 2.Event Ticket Purchase Process                                                                          | 3.Search & Select Route                                                                                 | 4.Send Notifications                                                                                    |

::admonition{title="Point" type="tip"}
1. Completes all necessary event participation processes within LINE.
2. Delivers notifications in LINE about event schedules and transportation delays.
3. Enables route searching that considers proprietary transportation such as event-specific buses (e.g. demand mobility).
4. Facilitates easy development of route searches that combine public transportation with demand mobility.
5. Requires no complicated procedures, allowing users to start easily.
6. Expected to enhance safety and reduce congestion at event venues.
::

## Benefits

### End user benefits

#### 1. Completes all necessary event participation processes within LINE

Booking, payment, checking the route to the venue, arranging transportation, and presenting tickets are all completed within the familiar LINE app. This eliminates the hassle of using separate dedicated apps for each process, creating and managing dedicated accounts, or printing tickets.

#### 2. Delivers notifications in LINE about event schedules and transportation delays

Event schedules and delay information for reserved transportation are delivered in the LINE app (push notifications). Users don’t have to worry about forgetting an event or missing information about transportation disruptions in unfamiliar areas.

#### 3. Enables route searching that considers proprietary transportation such as event-specific buses (e.g. demand mobility)

Users can search for routes that include demand mobility, temporary buses, or temporary shared cycles that only operate on event days and are typically not covered by standard route search apps. Since the search considers the operating times of demand mobility, users can create more detailed schedules.

### Service provider benefits

#### 1. Facilitates easy development of route searches that combine public transportation with demand mobility

By using mixway API, a multi-route search API for MaaS, you can achieve multimodal navigation that combines public transportation with walking, driving, shared cycles, demand mobility, and more.

#### 2. Requires no complicated procedures, allowing users to start easily

Since end users can handle booking, payment, route search, and ticket presentation through the familiar LINE app, the barrier to event participation is reduced. You can deliver a new event experience directly through LINE.

#### 3. Expected to enhance safety and reduce congestion at event venues

Large-scale events often face congestion issues at venues and in surrounding areas. By understanding the number of participants through LINE and supporting their transportation both to and from the event, you can provide a safer and smoother event experience.

## System and sequence diagram of the demo application

This figure shows how the demo app uses the LINE API.

* The figure includes functions that are not implemented in the demo app.

**System diagram**

![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-system-diagram-en.png){className="[\"border\"]"}

- System diagram for using the other services

  - :file-link[
  System diagram using AWS]{file="/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-system-diagram-aws-en.png"}
  - :file-link[
  System diagram using Azure]{file="/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-system-diagram-azure-en.png"}

**Sequence diagram**

![](/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-sequence-diagram-en.png){className="[\"border\"]"}

- Sequence diagram for using the other services

  - :file-link[
  Sequence diagram using AWS]{file="/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-sequence-diagram-aws-en.png"}
  - :file-link[
  Sequence diagram using Azure]{file="/media/line-mini-app/demo/mixwayapi-demo/maas-mixwayapi-sequence-diagram-azure-en.png"}

## Related links

- [Messaging API documentation](/docs/messaging-api/)
- [LINE MINI App documentation](/docs/line-mini-app/)
