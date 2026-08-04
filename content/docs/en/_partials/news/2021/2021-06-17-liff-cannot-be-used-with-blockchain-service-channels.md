---
title: Users can no longer add LIFF apps to Blockchain Service channels
navigation: true
description: >-
  After July 20, 2021, users will no longer be able to add LIFF apps to
  Blockchain Service channels in the LINE Developers Console. LINE Login and
  LINE MINI App channels are not affected by this change.
meta: >-
  {"date":"2021-06-17 00:00 UTC","tags":"LIFF, Console, LINE
  Blockchain","locale":"en"}
path: >-
  /en/_partials/news/2021/2021-06-17-liff-cannot-be-used-with-blockchain-service-channels
__hash__: d8TrrcxN4cf7NxLzokPuNPP6ZLuOzZPP-N1rNZEBerY
seo:
  title: Users can no longer add LIFF apps to Blockchain Service channels
  description: >-
    After July 20, 2021, users will no longer be able to add LIFF apps to
    Blockchain Service channels in the LINE Developers Console. LINE Login and
    LINE MINI App channels are not affected by this change.
---

After July 20, 2021, users will no longer be able to add LIFF apps to Blockchain Service [channels](/docs/line-developers-console/overview/#channel) in the LINE Developers Console. LINE Login and LINE MINI App channels are not affected by this change.

This table shows the channel types to which LIFF apps can be added, before and after the change.

| Item         | Before change                                                                                                                                             | After change                                                              |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Channel type | - [LINE Login](/docs/line-login/) - [LINE MINI App](/docs/line-mini-app/) - [Blockchain Service](https://docs-blockchain.line.biz/){rel="[\"nofollow\"]"} | - [LINE Login](/docs/line-login/) - [LINE MINI App](/docs/line-mini-app/) |

### Scheduled date of change

July 20, 2021

### Impact

LIFF apps that have already been added to a Blockchain Service channel will continue to work after the specification change, but will be :glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"} with these restrictions:

- Unable to support LIFF functional enhancements.
- There is a possibility that LIFF apps will not be available in the future.

In order to continue using all the features of LIFF without any restrictions, migrate your LIFF app from the Blockchain Service channel to a LINE Login channel by following the instructions in [Migration to LINE Login channel](#blockchain-20210617-03).

### Migration to LINE Login channel

To continue using LIFF apps that have already been added to a Blockchain Service channel without any restrictions, add the LIFF app to a LINE Login channel.

If you add the LIFF app to another channel, the LIFF ID will be re-issued. These points must be noted:

- If you are using LIFF v2, change the LIFF ID specified in `liff.init()`.
- The LIFF URL for launching LIFF (e.g. `https://liff.line.me/1234567890-AbcdEfgh`) will change.

For more information, see [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/) in the LIFF documentation.

We appreciate your patience and apologize for any inconvenience this may cause.
