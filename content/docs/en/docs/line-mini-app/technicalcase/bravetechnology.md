---
title: >-
  How queue management solutions are scaling with the LINE MINI App: The
  development use case of "matoca" and "yoboca"
navigation: true
description: ''
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/line-mini-app/technicalcase/bravetechnology
__hash__: sKeFqTIjQkO38-A3EIWM9bEwXeZg8Ti-dKdSNOlfYkU
seo:
  title: >-
    How queue management solutions are scaling with the LINE MINI App: The
    development use case of "matoca" and "yoboca"
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![BraveTechnology inc.](/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_logo.webp){className="[\"w-fix-240\"]"}

**BraveTechnology inc.**

Waiting in line is something everyone experiences. At BraveTechnology, our mission is to reduce the stress that comes with it by providing waitlist and notification services through LINE MINI Apps.

---

:toc---

## The service provider’s thoughts on developing the system

We deliver services to realize our mission of reducing the stress of waiting for everyone.

Most people dislike waiting—whether it's unexpected long waits or delays even with a reservation. On the other hand, businesses also face the stress of keeping customers waiting and of potentially disrupting nearby areas. During the COVID-19 pandemic, this stress has only intensified as people tried to avoid the "Three Cs" (closed spaces, crowded places, and close-contact settings).

To address these issues, we provide two services: "matoca" for waitlist management and "yoboca" for pickup notifications. With matoca, users can secure a place in line without physically standing in a queue and are notified via LINE when it is their turn. In situations where there is a wait between purchase and pickup, yoboca sends LINE notifications when an order is ready for pickup. With these services, users are free to relax at a cafe or run errands until they are called, helping to reduce the stress of waiting.

There are countless moments of waiting in everyday life, and each brings its own stress. We will continue working to reduce this waiting stress using LINE.

### Image

![service image](/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_screenshot.webp)

---

## Integration with LINE

### Avoiding the hurdle of installing a new app with LINE

Both matoca and yoboca are built on LINE MINI Apps. The primary reason for this choice is the LINE app’s high active user rate and its widespread use across genders and age groups. We also considered offering these services as standalone smartphone apps. While native apps provide greater development flexibility and are appealing from a developer’s perspective, they present a high barrier for users when it comes to installing a new app. Installing a new app is already a hurdle, and it is questionable whether users would be willing to download one solely for waiting in line while they are out. Rather than that, we believe it is more important to offer a service that runs on the LINE app—already installed by a large percentage of users—and can be used easily and instantly on the spot.

### Reducing user registration costs to drive friend acquisition for partner businesses

By adopting the LINE MINI App, we have helped partner businesses significantly increase their friend acquisition. With LINE MINI Apps, users are automatically added as friends on first use, allowing businesses to gain friends simply by having customers visit their stores and use the service. Compared with encouraging users to register as friends by offering incentives such as coupons, this approach has been well received for reducing the cost of acquiring new friends. In addition, the predecessor to matoca, "LINE de Junbanmachi" (Waiting in line with LINE), used the LINE Messaging API to send push messages when orders were ready. Migrating to the LINE MINI App allowed us to use the service message templates for notifications, eliminating the cost associated with sending push messages.

### Using the data collected to improve store operations

We provide partner businesses with data such as the number of customers who used the service, the number who left before entering, and how long they waited before entry. These insights help improve store operations and support other enhancements. Looking ahead, we plan to leverage service usage data to introduce features that foster stronger loyalty among repeat customers.

---

## System overview

![System architecture diagram](/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_system_diagram.webp)

### Adopting AWS with future scalability in mind

We have been using AWS since the days of "LINE de Junbanmachi", adopting cloud services so that both development and operations can be handled by a small team. Released last September, yoboca adopts a serverless architecture. It is built on pay-as-you-go, fully managed services such as AWS Lambda and Amazon SQS, combined with automation through CI/CD. This architecture helps reduce both operational and financial costs while providing a scalable foundation for future growth.

### Aiming to deliver services that enhance marketing and customer loyalty through integration with other services

Recently, we released APIs that enable matoca and yoboca to integrate with POS systems, ticketing machines, and e-commerce sites. Previously, these services operated independently, but by integrating with in-store equipment such as POS systems, no additional devices are required, and operational steps for staff at partner businesses can be reduced. In addition to integrating with other devices and services, we plan to further leverage user behavior data to develop services that enhance marketing initiatives and customer loyalty for partner businesses.

### A message for those developing new services

As mentioned earlier, LINE is a platform with an exceptionally large number of active users and a wide range of available APIs. Like any platform, it has certain constraints, while developers may naturally aspire to build more flexible and sophisticated systems. However, such complexity is not always what users are looking for. We encourage developers to focus on creating services that genuinely meet user needs and to select technologies and platforms accordingly. If ease of use is a top priority, leveraging the LINE Platform can be an effective choice. In such cases, we recommend considering LINE as one of your options.

---

## Related links

- [BraveTechnology inc.](https://bravetechnology.co.jp/){rel="[\"nofollow\"]"}
- [matoca](https://junbanmachi.jp/){rel="[\"nofollow\"]"}
- [yoboca](https://yoboca.jp/){rel="[\"nofollow\"]"}
