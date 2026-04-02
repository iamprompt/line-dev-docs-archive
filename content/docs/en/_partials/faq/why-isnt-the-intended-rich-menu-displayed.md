---
title: Why isn't the intended rich menu displayed?
navigation: true
description: 'There are several reasons why the intended rich menu may not be displayed:'
meta: >-
  {"date":"2025-05-19 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/why-isnt-the-intended-rich-menu-displayed
__hash__: S_3RFPixERzrR8q9WJgpsiROmCU4d3E6k1Fm1OZkp0I
seo:
  title: Why isn't the intended rich menu displayed?
  description: 'There are several reasons why the intended rich menu may not be displayed:'
---

There are several reasons why the intended rich menu may not be displayed:

- A rich menu with a higher display priority has been already set  
Rich menus are displayed based on their display priority, not the set date and time. For example, suppose you have set a per-user rich menu. If you then set a default rich menu, the per-user rich menu will be displayed because it has a higher priority than the default rich menu.  
For more information, see [When the intended rich menu isn't displayed](/docs/messaging-api/switch-rich-menus/#when-the-intended-rich-menu-isnt-displayed) in the Messaging API documentation.
- The user blocked the LINE Official Account and then unblocked it  
If a user blocks the LINE Official Account after linking a per-user rich menu, and then unblocks the account, that [rich menu will be unlinked from the user](/reference/messaging-api/#unlink-rich-menu-from-user).
- The developer deleted the rich menu  
If the developer deletes a per-user rich menu, that rich menu will no longer be displayed.  
If a default rich menu is set, the default rich menu will be displayed instead. If no default rich menu has been set, the rich menu itself won't be displayed.
