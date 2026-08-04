---
title: >-
  Blockchain Service channels will now have a "Pending" status if the Service
  wizard on the LINE Blockchain Developers is incomplete
navigation: true
description: >-
  To develop a service using the Blockchain service, you must create a
  Blockchain Service channel on the LINE Developers Console, and complete the
  Service wizard on the LINE Blockchain Developers.
meta: >-
  {"date":"2021-11-25 01:00 UTC","tags":"console,
  line-blockchain","locale":"en"}
path: /en/_partials/news/2021/2021-11-25-blockchain-service-channel-pending-status
__hash__: GD628txOF9Wbpr84b0SAfvHOD9Os_3Mn6J4frHOB06Y
seo:
  title: >-
    Blockchain Service channels will now have a "Pending" status if the Service
    wizard on the LINE Blockchain Developers is incomplete
  description: >-
    To develop a service using the Blockchain service, you must create a
    Blockchain Service channel on the LINE Developers Console, and complete the
    Service wizard on the LINE Blockchain Developers.
---

To develop a service using the [Blockchain service](https://blockchain.line.biz/#/){rel="[\"nofollow\"]"}, you must create a Blockchain Service channel on the [LINE Developers Console](/console/), and complete the [Service wizard](https://docs-blockchain.line.biz/glossary/#service-wizard){rel="[\"nofollow\"]"} on the [LINE Blockchain Developers](https://blockchain.line.biz/#/){rel="[\"nofollow\"]"}.

Previously, the status when you first created a Blockchain Service channel had been "Developing", whether you completed the LINE Blockchain Developers Service wizard or not. From now on, when you first create a Blockchain Service channel, the default status will be "Pending".

| "Developing" Blockchain service channel                                                                                                                                         | "Pending" Blockchain service channel                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Developing status on blockchain service channel](/media/blockchain-service/blockchain-service-channel-developing-en.png){className="[\"lazy\",\"w-fix-280\"]" loading="lazy"} | ![Pending status on blockchain service channel](/media/blockchain-service/blockchain-service-channel-pending-en.png){className="[\"lazy\",\"w-fix-280\"]" loading="lazy"} |

"Pending" means that the Service wizard on the LINE Blockchain Developers is incomplete. When the status of the Blockchain Service channel is "Pending", the following restrictions apply:

- The LINE Login feature is unavailable
- The Messaging API feature is unavailable
- The channel can't be published

When you complete the LINE Blockchain Developers Service wizard, the status of the Blockchain Service channel will change from "Pending" to "Developing", and the above restrictions will be removed.

The newly-added "Pending" status won't be applied to existing Blockchain Service channels, even if the LINE Blockchain Developers Service wizard has not yet been completed.

For more information on the Blockchain service, see [LINE Blockchain Docs](https://docs-blockchain.line.biz/){rel="[\"nofollow\"]"}.
