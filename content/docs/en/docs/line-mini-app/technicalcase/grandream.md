---
title: >-
  Technical case study of the GDL platform: achieving both cost-efficiency and
  flexibility
navigation: true
description: ''
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/line-mini-app/technicalcase/grandream
__hash__: U2UL-XDJ1w68Ws7K2DaOcJ53mpliSMDXsyu8yjzRIp4
seo:
  title: >-
    Technical case study of the GDL platform: achieving both cost-efficiency and
    flexibility
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![grandream](/media/line-mini-app/technicalcase/grandream/en/grandream-logo.webp){className="[\"w-fix-240\"]"}

**Grandream Inc.**

We are a system development company with high technical capabilities and proposal skills, providing end-to-end support ranging from web application development to infrastructure construction and operation. Our primary focus lies in application development utilizing LINE technologies, with a particular emphasis on LINE MINI App in recent years. We commit to serving as a partner that guides your business to success.

---

:toc---

## Service overview and the challenges we want to solve

Developing applications with the LINE API requires not only creating solutions for specific business issues but also building generic functions. Examples include the management of friends’ follow and block statuses, payment, rich menus, and 1-on-1 chats. Consequently, allocating development budgets to both generic functions and business solutions can often make it difficult to build essential features. To address this, our GDL Platform offers a hybrid solution: we provide generic functions as SaaS or packages, while delivering systems tailored to solve your specific business issues. This approach allows developers to focus on building critical features. In May 2023, we released the beta version of the "MONSTER" app, a monthly subscription-based service designed to protect children from bullying. This service represents a successful case study in which development costs were reduced by utilizing the GDL Platform for user information management and payment functions.

MONSTER website: [https://www.monster-line.com](https://www.monster-line.com/){rel="[\"nofollow\"]"}

### Image

![service-overview](/media/line-mini-app/technicalcase/grandream/en/grandream-service-img.webp)

![service-image](/media/line-mini-app/technicalcase/grandream/en/grandream-ui-img.webp)

---

## Integration with LINE

### Overcoming the hurdle of app downloads: the appeal and flexibility of LINE

Would you download a native app (iOS/Android app) just to place an order at a restaurant? Native apps present a hurdle to usage, as they require downloading, installing, and creating an account before you can use their functions. With LINE, you can start using a service simply by scanning a QR code and adding a LINE official account as a friend. We believe this ease of entry is excellent from a UX perspective, and there is no need to create separate applications for iOS and Android. Furthermore, the extensive range of available APIs enables the construction of systems that integrate with customer data in existing core systems.

### Promoting sustainable purchasing behavior through LINE

Many clients have adopted our services after recognizing the benefits of applications that utilize the aforementioned LINE technology—specifically their user-friendliness. Offline and online retailers, in particular, have successfully fostered continuous purchasing behavior and increased sales by implementing sales promotion measures via LINE.

---

## System overview

![System architecture diagram](/media/line-mini-app/technicalcase/grandream/en/grandream-system-dialog.webp)

### Utilizing system data in services

We record* user actions in LINE Official Account and LINE MINI App to our database as much as possible to enable more granular segment management. By creating appropriate segments, we can not only deliver relevant information to users but also help reduce message transmission costs.

*User consent is required to acquire and utilize behavioral data linked to LINE accounts.

### Utilizing AWS for its diverse services

We have been developing on AWS for many years, accumulating a wealth of infrastructure construction assets, including Infrastructure as Code (IaC). Another advantage of AWS is that, due to its vast diversity of services, we can complete everything we need entirely within the platform.

### Cloud infrastructure running costs

A significant portion of our AWS running costs comes from "always-on" services such as Amazon Elastic Compute Cloud ("AWS EC2"), Amazon Elastic Container Service ("AWS ECS"), Amazon ElastiCache ("AWS ElastiCache"), and Amazon Relational Database Service ("AWS RDS"). While we provide two standard environments—a staging environment for feature verification and a production environment for operating live services—we specifically focus on reducing running costs in the development environment. Here are three examples of our cost reduction initiatives.

First is AWS EventBridge, which we use in both our staging and production environments. AWS EventBridge is a serverless service that enables event-driven architectures by connecting application components using events. An event-driven architecture enables the construction of loosely coupled software systems that work together by emitting and responding to events. This enhances agility and helps build highly reliable and scalable applications. For our services, we use the AWS EventBridge scheduler to run scripts that automatically stop services outside of necessary development hours.

Second is AWS ECS. AWS ECS is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications. Running costs depend heavily on the resources selected and usage volume. To reduce costs, we utilize "Fargate Spot," an AWS option for running container workloads that prioritizes cost efficiency.

Third is AWS ElastiCache. AWS ElastiCache is a managed service that makes it easy to set up, manage, and scale distributed in-memory cache environments. This service provides high-speed in-memory caching to improve application performance. As data can be retrieved much faster from in-memory caches than from databases, caching frequently accessed data can significantly improve application response times, boosting application performance and reducing database load. Costs depend on several factors, including the amount of data transferred and how long instances run. For the development environment, we reduce costs by building Redis instances on AWS EC2 instead of using AWS ElastiCache.

### Operational tools that support our infrastructure

We have adopted the AWS Cloud Development Kit ("AWS CDK") as the IaC solution to support our infrastructure. This allows us to manage AWS resources programmatically as the AWS infrastructure can be built using code. Furthermore, we have adopted TypeScript as the language used for AWS CDK. This allows us to fully utilize type inference and type checking features in development tools (VS Code), which makes coding more efficient and ensures that typos are caught before execution. Also, because the infrastructure is defined programmatically, we can easily configure distinct settings for different environments, including staging and production. While we have experience building AWS environments using various tools in the past (such as CloudFormation templates and Terraform), we currently feel that AWS CDK is the best tool available.

### Future goals

As we provide the GDL Platform to a diverse range of companies, we are continuously expanding its functionality. We want to ensure that our existing clients also benefit from these ongoing enhancements.

---

## Related links

- [Grandream Inc.](https://www.grandream.jp/){rel="[\"nofollow\"]"}
