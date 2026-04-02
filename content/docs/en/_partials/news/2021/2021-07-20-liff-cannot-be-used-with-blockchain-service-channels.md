---
title: Users can no longer add LIFF apps to Blockchain Service channels
navigation: true
description: >-
  As announced on 17th June, 2021, after July 20, 2021, users can no longer add
  LIFF apps to Blockchain Service channels in the LINE Developers Console. LINE
  Login and LINE MINI App channels aren't affected by this change.
meta: >-
  {"date":"2021-07-20 00:00 UTC","tags":"LIFF, Console, LINE
  Blockchain","locale":"en"}
path: >-
  /en/_partials/news/2021/2021-07-20-liff-cannot-be-used-with-blockchain-service-channels
__hash__: pT7R51PImvtdrPkdhifEyUBntyiyCBAtW00gLpVwa6Y
seo:
  title: Users can no longer add LIFF apps to Blockchain Service channels
  description: >-
    As announced on 17th June, 2021, after July 20, 2021, users can no longer
    add LIFF apps to Blockchain Service channels in the LINE Developers Console.
    LINE Login and LINE MINI App channels aren't affected by this change.
---

As announced on [17th June, 2021](/news/2021/06/17/liff-cannot-be-used-with-blockchain-service-channels/), after July 20, 2021, users can no longer add LIFF apps to Blockchain Service [channels](/docs/line-developers-console/overview/#channel) in the LINE Developers Console. LINE Login and LINE MINI App channels aren't affected by this change.

This table shows the channel types to which LIFF apps can be added, before and after the change.

| Item         | Before change                                                                                                                                             | After change (Current state)                                              |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Channel type | - [LINE Login](/docs/line-login/) - [LINE MINI App](/docs/line-mini-app/) - [Blockchain Service](https://docs-blockchain.line.biz/){rel="[\"nofollow\"]"} | - [LINE Login](/docs/line-login/) - [LINE MINI App](/docs/line-mini-app/) |

### Date of change

July 20, 2021

### Impact

LIFF apps that have already been added to a Blockchain Service channel will continue to work after the specification change but will be :glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"} with these caveats:

- Unable to support LIFF functional enhancements.
- Open to the possibility that LIFF apps may not be available in the future.

In order to continue using all the features of LIFF without any restrictions, migrate your LIFF app from the Blockchain Service channel to a LINE Login channel by following the instructions in [Migration to LINE Login channel](#blockchain-20210720-03).

### Migration to LINE Login channel

To continue using LIFF apps that have already been added to a Blockchain Service channel without any restrictions, add the LIFF app to a LINE Login channel.

If you add the LIFF app to another channel, the LIFF ID will be reissued. These points must be noted:

- If you are using LIFF v2, change the LIFF ID specified in `liff.init()`.
- The LIFF URL for launching LIFF (e.g. `https://liff.line.me/1234567890-AbcdEfgh`) will change.

For more information, see [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/) in the LIFF documentation.

We appreciate your patience and apologize for any inconvenience this may cause.
