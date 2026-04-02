---
title: >-
  Introducing infrastructure as low code for LINE-based service development case
  study on improving development efficiency with CNAP
navigation: true
description: ''
meta: >-
  {"tags":"messaging-api","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/softbank
__hash__: T1Hnm2Xh4gSCnL0U2J77Qq5HZP_ExSQsDJfmjVujCbM
seo:
  title: >-
    Introducing infrastructure as low code for LINE-based service development
    case study on improving development efficiency with CNAP
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![SoftBank Corp.](/media/messaging-api/technicalcase/softbank/en/softbank-logo.webp){className="[\"w-fix-240\"]"}

**SoftBank Corp.**

SoftBank Corp. operates a wide range of businesses, including telecommunications, cloud security, AI, and robotics. SoftBank Corp. aims to become “the company needed most by people around the world” by contributing to happiness for everyone through the Information Revolution, and will aim to realize an ideal society where everyone can live conveniently, comfortably, and safely by building on the business foundation we have established and leveraging the power of digital technologies.

---

:toc---

## What is CNAP and how does it shorten application development period?

Conventional application development has faced the following challenges.

- Development and infrastructure operations were handled by separate teams, so change requests had to be submitted for each release, which caused the release process to take longer.
- Development and execution environments, design practices, and policies lacked consistency, making it difficult to ensure proper governance.
- Operational tasks relied heavily on individuals and were not standardized, posing a risk of operational errors.

These challenges can be addressed by following DevOps principles, such as automating build and operation processes and standardizing system configurations. However, it is extremely challenging to prepare such an environment in-house, as it involves a high learning cost, requires significant time to build technical expertise, and demands ongoing maintenance to keep up with frequent version updates. The Cloud Native Application Platform (CNAP) is a service that provides a standardized and automated platform, which consolidates the DevOps know-how practiced by SoftBank. CNAP offers low-code configuration packages in which designs are standardized and build processes are automated. By maintaining and managing these packages, clients can overcome conventional challenges and focus on their core development. In this article, we introduce a case study on the use of CNAP in developing an inquiry management system using the LINE Messaging API.

### Image

![roadmap](/media/messaging-api/technicalcase/softbank/en/softbank-overview-1.webp)

![cnap-benefits](/media/messaging-api/technicalcase/softbank/en/softbank-overview-2.webp)

![about-cnap](/media/messaging-api/technicalcase/softbank/en/softbank-overview-3.webp)

![service-image](/media/messaging-api/technicalcase/softbank/en/softbank-overview-4.webp)

---

## Integration with LINE

### CNAP PoC: Developing an inquiry management system using the LINE Messaging API

In conducting a PoC for CNAP, we considered projects that would be easy for clients to understand. Among the projects considered, we decided to develop an inquiry management system using LINE, which is frequently requested by clients. LINE has established a solid position as a leading communication platform in Japan, with 94 million monthly active users (as of the end of December 2022, based on former LINE Corporation research). By using LINE as a touchpoint with end users, corporate clients can also expect to achieve greater reach and improved customer satisfaction.

### What benefits has your company seen since the release of CNAP?

CNAP was launched in June 2022.

CNAP is already being used or considered by many clients, and we have received numerous positive comments. In developing the inquiry management system using the LINE Messaging API, the adoption of CNAP allowed complex infrastructure to be defined through abstracted configuration files, resulting in a significant reduction in infrastructure provisioning time. In addition, the architecture enables application developers themselves to perform release, monitoring, and operations on a self-service basis, which has also contributed to faster releases.

### Leveraging data via the LINE Messaging API and initiatives for personal information protection

Various types of data, such as user information and messages obtained via the LINE Messaging API, are stored in a database. As user information is considered personal information, only user IDs are stored in the database of the system developed for this project. Any additional information is retrieved via the Messaging API on a per-request basis after obtaining user consent. This approach not only minimizes the amount of personal information handled, but also minimizes the need to consider changes to user information. Message data is retained for review and analysis, but the system is designed to allow the data to be deleted after a certain period, which prevents unnecessary cost increases. CNAP automatically configures a secret manager to manage secret information used by the system.

---

## System overview

![System architecture diagram](/media/messaging-api/technicalcase/softbank/en/softbank-system-diagram.webp)

### Automated deployment to Azure environments using CNAP

All infrastructure, from the front end to the back end, is built on Azure. We provide managed service provider (MSP) services that support public cloud platforms, including Microsoft Azure, Google Cloud, and Amazon Web Services (AWS). By developing these services in-house, we have built broad expertise in public cloud platforms. Among these, Azure is our most experienced public cloud platform as we began providing MSP services early, starting in October 2019. Thus, we chose Azure for this project. CNAP allows users to deploy and manage not only Kubernetes environments but also related resources in a unified manner by simply pushing YAML files that define system configurations in an abstracted form to a Git repository. Google Cloud and AWS are also supported.

### Performance and cost optimization using Azure Kubernetes Service

As the application runs on a Kubernetes cluster, Azure Kubernetes Service (AKS) accounts for the largest portion of the overall costs. Also, since multiple pods can be placed on each node in the cluster, it is possible to host multiple services together as long as node resources are available. In addition, Kubernetes enables dynamic scaling based on workload. As a result, the system allows performance optimization for each service based on its workload, while minimizing costs.

### Components of CNAP, including AKS

CNAP is a platform that supports automation of infrastructure operations through tightly integrated OSS components built around managed services such as AKS. We adopt Helm as the application packaging platform and use Flux CD as the continuous delivery (CD) platform to implement GitOps. In addition, we use Prometheus and Grafana for monitoring application metrics, logs, and errors. Based on the know-how accumulated through our own application development and operations, CNAP offers OSS components with a proven track record that come with recommended configurations, allowing clients to manage, operate, and monitor their systems on a self-service basis.

### Future goals

By abstracting away the application infrastructure layer and providing managed platforms, CNAP offers an environment that allows clients to focus on application development. Through CNAP, we believe we can support a wide range of application development projects, including applications using LINE APIs. We will continue to expand our services and strive to better meet our clients' needs.

### A message for those developing new services

As mentioned earlier, LINE has an exceptionally large active user base. As a result, services offered on the LINE Platform can reach a much broader range of end users. LINE also offers a rich set of APIs, allowing developers to create a wide variety of applications through different combinations and creative ideas. Please consider CNAP as an option when developing applications.

---

## Related links

- [Cloud-Native Application Platform（CNAP）](https://www.softbank.jp/biz/services/platform/msp-service/cnap/){rel="[\"nofollow\"]"}
- [MSP Service](https://www.softbank.jp/biz/services/platform/msp-service/){rel="[\"nofollow\"]"}
- [SoftBank Corp.](https://global.tm.softbank.jp/en/){rel="[\"nofollow\"]"}
