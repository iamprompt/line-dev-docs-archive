---
title: A LINE MINI App case study of an on-demand autonomous bus reservation system
navigation: true
description: ''
meta: >-
  {"tags":"messaging-api","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/boldly
__hash__: khhmtNZiUqr13nrzS-6MY70WAjNvGlrteBPWtg1BWs4
seo:
  title: A LINE MINI App case study of an on-demand autonomous bus reservation system
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![BOLDLY Inc.](/media/messaging-api/technicalcase/boldly/en/boldly_logo.webp){className="[\"w-fix-240\"]"}

**BOLDLY Inc.**

BOLDLY is working toward a world where everyone can travel freely, affordably, and safely. By leveraging IoT and autonomous driving technologies, BOLDLY collaborates with local transportation providers and vehicle developers around the globe to implement sustainable public transportation solutions.

---

:toc---

## The service provider’s thoughts on developing the system

We design our autonomous buses to function as a “horizontal elevator” for the community.

This solution increases convenience for the residents by providing low-speed and frequent mobility services within a limited area.

In a town like Sakai-machi in Ibaraki Prefecture, where large areas lack access to public transportation, running buses on fixed schedules to cover the entire area is not practical from a cost and efficiency perspective.

So, we decided to create a service that works like a taxi—something you can easily call whenever you need it. While many on-demand ride dispatch applications already exist, we chose to develop this system on the LINE Platform, which has 92 million users (according to LINE Corporation research; LINE app monthly active users as of the end of June 2022). Our hope is that if elderly residents, who may not be familiar with smartphones, become comfortable using LINE, they will gain more than just a bus reservation tool; they will gain a way to stay in touch with family and friends. We believe that if people can call an autonomous bus from the LINE app they already use, instead of having to learn how to use a new app, it will give them the confidence to go out more freely. This is also why we named the LINE Official Account after the character "Sakai ARMA." We want people to be able to call the autonomous bus as if they are talking to a friend.

### Image

![service image](/media/messaging-api/technicalcase/boldly/en/boldly_screenshot.webp)

---

## Integration with LINE

### Easy authentication via a familiar LINE Official Account was the deciding factor

The primary reason for choosing LINE was its high penetration rate. Utilizing an existing platform significantly reduces the setup cost for users compared to developing a dedicated application.

The same goes for the authentication function; if users are using LINE, they can authenticate by adding our LINE Official Account as a friend from their personal account, which also lowered the user’s set up cost. From a developer’s perspective, the decision was also driven by the extensive API libraries such as LIFF and the Messaging API, as well as the user-friendly and feature-rich LINE Developers Console.

### A decision was made to launch autonomous bus operations, aiming to demonstrate the value of remote monitoring systems

In March 2022, we conducted a demonstration experiment for our autonomous bus reservation system in Sakai-machi, Ibaraki Prefecture.

Over a four-day period, 76 participants experienced the reservation and boarding process, allowing us to identify areas for improvement in both the system and its operations. We received a lot of positive feedback from participants, including comments such as "I want to use this every day as soon as possible" and "This would be great for getting home after a night out." Consequently, we decided to proceed with full-scale operations.

By enabling both scheduled and on-demand services, the value of "Dispatcher"—a remote monitoring system capable of seamlessly managing both types of operations—has become clear. We believe this will be a powerful selling point for expanding the practical application of autonomous buses to other regions.

### Reservations made via LINE are reflected in real time, preventing double bookings between users

Through the LINE API, reservations made via LINE are now reflected in Dispatcher’s booking data in real time. This ensures that when multiple users attempt to book simultaneously, unavailable time slots are immediately updated to prevent double-booking.

Looking ahead, we are considering the introduction of LINE-based on-demand bookings to optimize vehicle utilization during hours without scheduled service. Furthermore, we aim to integrate facial recognition by having users register their photo during the LINE booking process, which will be used for identity verification upon boarding.

---

## System overview

![System architecture diagram](/media/messaging-api/technicalcase/boldly/en/boldly_system_diagram.webp)

### Optimizing operations by migrating to AWS

Since our existing in-house systems were already running on AWS, we implemented the infrastructure for the LINE reservation system on the same platform.

While the initial prototype utilized tools like Google Apps Script, we migrated the entire infrastructure to AWS as we moved toward full-scale service development and operation, to align the new service’s architecture and data management with our existing systems.

By migrating our infrastructure, we have also been able to optimize operations, including integrating build pipelines with existing systems.

### Running costs of cloud infrastructure

In addition to API-based integration, Dispatcher relies on multiple communication channels, including the transmission of video and audio from onboard devices and the real-time exchange of telemetry data via WebSocket.

For this reason, from the early stages of service development, we had a clear intention to use cloud infrastructure to reduce the costs associated with infrastructure management and maintenance. In addition, as the number of connected vehicles increases and communication volumes are expected to grow accordingly, we leverage cloud infrastructure that can be easily scaled in line with service growth, allowing us to manage resources efficiently.

### Exploring a boarding authentication system using facial recognition with data registered through LINE

We are considering an update to the passenger authentication process at boarding.

Currently, passengers can board the bus by presenting an ID issued at the time of reservation to the driver. However, as autonomous buses move toward driverless operation, this approach has clear limitations.

To address this challenge, we are developing a passenger authentication system based on facial recognition. By using cameras at the time of boarding, the system verifies whether the passenger is the same person who made the reservation, based on facial data registered through LINE. From an operational efficiency perspective, we are also considering an update to the reservation system that would enable ride-sharing.

### A message for those developing new services

In our service, users are required to complete everything themselves—from vehicle reservations to boarding authentication. For B2C services like this, developers often face challenges related to customer communication and customer list management. The LINE Platform offers a wide range of features to address these challenges, including communication through chat and customer management via friend registration. By leveraging these features in our reservation system, we were able to proceed with development without encountering major obstacles. If you are building a B2C service, we encourage you to consider using the LINE Platform.

---

## Related links

- [BOLDLY Inc.](https://www.softbank.jp/drive/){rel="[\"nofollow\"]"}
