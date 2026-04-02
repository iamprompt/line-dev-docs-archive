---
title: >-
  Technical case study of Smart Public Lab: LINE utilization strategy supporting
  administrative digital transformation
navigation: true
description: ''
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/playnext-lab
__hash__: wl8CqifbxtorOLIMruw7r3A2ieKepaptVI-Ft3On1UE
seo:
  title: >-
    Technical case study of Smart Public Lab: LINE utilization strategy
    supporting administrative digital transformation
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![Playnext Lab Inc.](/media/messaging-api/technicalcase/playnext-lab/en/playnext-lab-logo.png){className="[\"w-fix-240\"]"}

**Playnext Lab Inc.**

Founded in 2016, we operate under the vision of “Building the future through technology and diversity,” and provide a wide range of services including smartphone games, HR tech services, and chatbot system development. In recent years, we have also focused on providing GovTech services that connect governments and citizens. Leveraging the development capabilities of a global engineer team with members from 17 countries, we strive to grow our own services and aim to support digital transformation for both society and our clients through cutting-edge technologies.

---

:toc---

## Service overview and the challenges we want to solve

Smart Public Lab is a service that supports the operational efficiency of municipal staff while enhancing resident satisfaction. Built around “Smart Public Lab with LINE SMART CITY GovTech Program,” which enables next-generation digital transformation of administrative services through LINE accounts in a simple and accessible manner, and online application services, Smart Public Lab serves as a comprehensive digital contact point for municipalities. It eliminates the need for in-person visits, waiting at service counters, and paper-based procedures, and is currently used through the official LINE accounts of approximately 100 local governments across Japan.

Smart Public Lab GovTech Program provides an extensive set of functions, including document and form creation, segmented information delivery with granular condition settings, advanced scenario-based chatbot messaging, calendar-based reservations for public facilities and events, a disaster mode optimized for emergency response, location-based spot search, and payment functions. These capabilities extend beyond those available through standard LINE Official Account features. The online application service of Smart Public Lab supports applications that require identity verification using My Number Cards, as well as online payments convenient for paying issuance fees and administrative charges. It also supports access to LGWAN (Local Government Wide Area Network), allowing use of existing government-issued computers and minimizing the burden of implementation. The Tourist Guide service of Smart Public Lab enables local governments to develop a tourism guide service that customizes spot search functions and utilizes content from tourism websites to deliver relevant information to non-resident users via tourism-specific LINE Official Accounts. Chatbots guide users from the LINE chat screen and enable spot recommendations tailored to different usage scenarios.

Based on the users’ current location or selected area, the service can display relevant facilities by category, such as history, food, or accommodation. Since it is linked with Google Maps, another appealing feature is that users can quickly check routes and detailed information for selected spots.

### Image

![service-image](/media/messaging-api/technicalcase/playnext-lab/en/playnext-lab-ui-img.png)

---

## Integration with LINE

### Streamlining administrative services by leveraging the Messaging API and GPS

As digitalization in modern society extends to administrative services, we recognized that selecting a platform easy for all generations to use is crucial in establishing administrative digital transformation (DX) that improves convenience for citizens. That led us to focus on LINE when selecting the appropriate platform. With 96 million MAU (as of the end of September 2023), LINE is widely used in daily life in Japan, making it possible to provide administrative services in a familiar environment for users. During development, we began working on chatbots utilizing the Messaging API. Location information services utilizing GPS demonstrate strong compatibility with administrative services, particularly in providing disaster information, evacuation shelter information, and tourism-related information. In addition, integration with payment functions promotes the digitalization of application procedures and contributes to faster and more convenient application processes. Through actual service deployment, we have recognized the ease with which the LINE platform can be updated and extended with additional features.

### Advancing administrative digital transformation utilizing LINE: Over 100 implementations and improved citizen satisfaction

The number of service implementations has now exceeded 100, and we believe that recognition of administrative DX using LINE is increasing. So far, we have found that the reduction in workload for over-the-counter and application operations—as well as the convenience of being able to complete procedures from a smartphone—has been highly appreciated by residents. One of our strengths is the ability to provide customized development. With in-house development and design teams, we can create original rich menus and develop customized content for tourism guides, as well as provide tailored development for medical institutions and other use cases.

**Comments from municipalities that have introduced the Smart Public Lab GovTech Program**

- We can easily deliver information at the right timing to align with events and tourism campaigns.
- In addition to online reservations, various other functions are available. By referring to use cases from other municipalities, we hope to plan and implement initiatives that further improve citizen satisfaction.
- We receive many inquiries about waste disposal rules, and LINE makes it convenient for residents to ask questions anytime, 24 hours a day, through a platform they already use.
- Although there were many aspects that were unclear during implementation, adopting the service allowed us to handle vaccination appointment reservations through LINE, resulting in significant benefits such as reduced time spent handling phone inquiries and more efficient management of reception lists and systems.
- In accepting reservations for various health services, the program has delivered greater-than-expected results in reducing workload and improving administrative efficiency. Given the strong potential for effective use as an organization-wide information dissemination tool, we plan to continue internal discussions and further enhance resident services through digitalization.

---

## System Overview

![System architecture diagram](/media/messaging-api/technicalcase/playnext-lab/en/playnext-lab-system-diagram.png)

### Improving administrative services using acquired data

Through the administrative DX system, resident surveys can be shifted from paper to LINE, improving operational efficiency through data digitization. In addition, notifications for cancer screenings can be sent based on residents’ dates of birth, and appointments for cancer screenings can be made through LINE.* By having residents register the types of information they wish to receive on LINE, information can be delivered to specific segments. As a result, LINE is widely used as a channel for communicating administrative information to residents across a broad range of age groups.

*Behavioral data linked to LINE accounts is collected and used only after obtaining user consent.

### Background to selecting AWS for system construction

We adopted Amazon Web Services (hereinafter “AWS”) for building the administrative DX systems. Because administrative services are directly linked to citizens’ daily lives, systems must operate reliably at all times and provide scalability to handle sudden spikes in access. AWS delivers high performance that meets these requirements. In addition, security is one of the most critical considerations when handling administrative data. AWS offers robust security measures and abundant compliance certifications, providing a reliable environment for the secure management of confidential information.

Ease of operation and maintenance was also one of the factors in the selection. AWS provides a broad set of tools and services that streamline management and maintenance, reducing operational burden and enabling prompt service improvements. We have extensive experience using AWS and have accumulated the expertise needed to make full use of the platform. We adopted AWS for these reasons. We regularly review the infrastructure's running costs using AWS Billing and Cost Management, and analyze trends such as each user's usage frequency. We use GitHub for source code management during development because it is easy to manage.

### Future outlook for municipal digital service counters

As part of administrative DX initiatives, Smart Public Lab aims to expand the range of functions that address challenges faced by residents and municipal staff, thereby broadening the scope of support offered by municipal digital service counters.

In January 2023, we launched an online application service that enables My Number Card authentication on LINE Official Accounts. In Okawa City, Fukuoka Prefecture, 96% of applications for childbirth and childcare support benefits were received through its LINE official account (survey by PlayNext Lab Inc.), providing residents with a highly user-friendly system. While highly functional systems often become more difficult to operate, Smart Public Lab is designed specifically for local governments. We remain committed to providing services with a strong focus on UI and UX, ensuring that both residents and staff can continue to use the system in an intuitive and simple way.

### Requests for LINE API development

We felt that the availability of APIs that allow the retrieval of users’ location information and “Read” status would further expand the range of services that can be offered on LINE.

### A message for those developing new services

One of the greatest advantages of LINE is its overwhelming user base and high active user rate, which allows us to reach users across all age groups. By utilizing LINE authentication, the reservation feature of Smart Public Lab eliminates the need for user registration.

In fact, 54% of consultation reservations (survey by PlayNext Lab Inc.) have been made via LINE. Leveraging the LINE API has helped us expand our user reach and reduce user drop-offs, enabling the development of a system that contributes to lower costs associated with marketing and growth hacking.

---

## Related links

- [Smart Public Lab](https://www.playnext-lab.co.jp/govtech/){rel="[\"nofollow\"]"}
