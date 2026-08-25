---
title: >-
  A case study on the development of "Resort Baito Dive" to enhance temporary
  staff satisfaction
navigation: true
description: ''
meta: >-
  {"tags":"messaging-api","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/resortbaito-dive
__hash__: svhmvKgYB-FehwLlaMz-01vtmsDYPRkHCCsgKvF3Yos
seo:
  title: >-
    A case study on the development of "Resort Baito Dive" to enhance temporary
    staff satisfaction
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![Dive Inc.](/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-logo.png){className="[\"w-fix-240\"]"}

**Dive Inc.**

Dive Inc. is a startup whose core business is providing staffing services for tourist facilities, mainly through "resort baito" (short-term resort jobs). We contribute to addressing the critical labor shortage faced by the tourism industry. Our service website has more than 40,000 registered users annually, and the number of LINE friends has surpassed 150,000. By creating employment opportunities that connect workers with local communities, we are committed to regional revitalization and the growth of the tourism industry.

---

:toc---

## Service overview and issues to address

At Dive Inc., our resort part-time resort staffing service, “Resort Baito Dive”, uses a LINE Official Account. Through the LINE Official Account, temporary staff communicate daily with sales representatives and customer support. These interactions cover a wide range of topics, from day-to-day concerns during assignments to consultations about job searches. During peak months, the number of messages sent reaches approximately 63,000 per month. We strive to handle each interaction with care, and as a result, we have received highly positive feedback from temporary staff.

### Image

![service-image](/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-ui-img.webp)

![service-cms-image](/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-ui-img-2.png)

---

## Integration with LINE

### Addressing staffing operation challenges with the Messaging API and LINE Chat Plus

Previously, we used the chat functionality of the LINE Official Account Manager (hereinafter, “LINE OAM”). However, as our peak monthly message volume grew to approximately 63,000 messages, we occasionally fell outside the supported scope of LINE OAM, giving rise to the following challenges:

- System integration with our internal CRM
- The need to assign and manage a large number of tags to coordinate between sales representatives
- Managing the "Read" status and preventing missed responses

To address these issues while preserving our core strength of providing attentive support to temporary staff, we decided to develop a new chat system using the Messaging API and LINE Chat Plus. User experience design and development are being carried out in collaboration with Classmethod, Inc., a provider of comprehensive LINE support services.

### How we use collected data

By connecting our CRM data with LINE IDs, we were able to display CRM information directly within the chat system and automatically assign sales representatives. This feature eliminated the time spent on assigning representatives, improving the speed of chat responses.

---

## System Overview

![System architecture diagram](/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-system.png)

### Technologies that support Resort Baito Dive and their impacts

Our infrastructure is built on AWS. The front-end is delivered using CloudFront and S3, while the back-end API is built using ALB (Application Load Balancer) and ECS on Fargate.

The Webhook that receives chat messages from users is designed using a combination of API Gateway and SQS (Simple Queue Service), with subsequent processing handled by Lambda. This architecture ensures reliable reception of user messages. We have adopted Aurora Serverless v2 for the database, enhancing operational efficiency through automated provisioning. Furthermore, these infrastructure configurations are managed as code using AWS CDK, and deployments are automated with GitHub Actions. As our development language, TypeScript is used consistently across the front-end, back end, and infrastructure to reduce engineers’ cognitive load. This unified approach enables efficient and high-quality system operations.

Following the release, responses to chat messages received between the end of the previous business day and the start of the next were completed by the morning, whereas previously this work extended into the afternoon. Additionally, enhancements to search functionality reduced the time required for routine checks for missed chat responses conducted several times a day—from approximately one hour per check to around 30 minutes—resulting in substantial improvements in operational efficiency.

### Future outlook for Resort Baito Dive

With chat data now accumulated within the company, we plan to utilize this data for analytical purposes to further improve user satisfaction.

### Requests for the LINE API

Because the API for retrieving user IDs of members in group chats and multi-person chats can only be executed by verified accounts, we encountered difficulties testing with development accounts. We would appreciate it if, through a special application process for testing purposes, this API could also be made available to unverified accounts.

- [Get group chat member user IDs](/reference/messaging-api/#get-group-member-user-ids)
- [Get multi-person chat member user IDs](/reference/messaging-api/#get-room-member-user-ids)

### A message for those developing new services

When you need to receive user messages such as chats without fail, an effective approach is to place messages received via a Webhook into a queue. Separating message reception from processing in this way creates a scalable architecture.

---

## Related Links

- [Dive Inc.](https://resortbaito-dive.com/){rel="[\"nofollow\"]"}
- [Development Company: Classmethod, Inc.](https://classmethod.jp/){rel="[\"nofollow\"]"}
