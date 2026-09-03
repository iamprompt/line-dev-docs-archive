---
title: >-
  Show the benefits of adding your LINE Official Account as a friend with the
  liff.requestFriendship() template property
navigation: true
description: >-
  Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
  Developers site.
meta: >-
  {"date":"2026-09-03 00:00 UTC","tags":"liff,
  line-mini-app","locale":"en","sidebar":false}
path: /en/tips/2026/09/03/liff-request-friendship
__hash__: GH-eRtDPMUyrxAAJRD31ParZbmSW-SFrdUCK_gKI0Mc
seo:
  title: >-
    Show the benefits of adding your LINE Official Account as a friend with the
    liff.requestFriendship() template property
  description: >-
    Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
    Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/09/03" .!mb-20}

  :::

Hi! I’m Okajima, a technical writer in charge of documentation for the LINE Developers site.

You can use the [`liff.requestFriendship()`](/reference/liff/#request-friendship) method to prompt users to add a LINE Official Account as a friend in a LIFF app or LINE MINI App.

![](/media/liff/request-friendship/request-friendship-add-friend-en.png){className="[\"border\",\"w-fix-320\"]"}

The `liff.requestFriendship()` method was enhanced in LIFF v2.30.0 with support for the `template` property. With this property, you can select a suitable [template](/reference/liff/#request-friendship-template) from a predefined list and display it as the message prompting users to add the account as a friend.

For example, if you specify `coupon` in the `template.id` property, the message "Get coupons and special offers from this official account." is displayed instead of the default message "Add this official account as a friend?".

```javascript
try {
  await liff.requestFriendship({
    template: { id: "coupon" },
  });
} catch (error) {
  console.log(error);
}
```

![](/media/tips/2026/liff-request-friendship-coupon-en.png){className="[\"border\",\"w-fix-320\"]"}

This allows you to do more than simply prompt users to add the account as a friend—you can also explain the benefits they'll receive afterward. This information can help users who are unsure decide whether to add the account, making them more likely to do so.

There are 15 templates, including "Coupons", "Events and rewards", and "Important announcements". You can choose the one that most closely matches the experience users will gain by adding the account as a friend. For more information, see [Template](/reference/liff/#request-friendship-template) in the LIFF API reference.

![](/media/tips/2026/liff-request-friendship-event-reward-en.png){className="[\"border\",\"w-fix-320\",\"inline-block\",\"mb-0-important\"]"} ![](/media/tips/2026/liff-request-friendship-important-announcement-en.png){className="[\"border\",\"w-fix-320\",\"inline-block\"]"}

## Wrap-up

With the `template` property of the `liff.requestFriendship()` method, you can not only prompt users to add an account as a friend but also explain the benefits they'll receive afterward.

Find a template that suits your service and use it to design a user flow that encourages users to add your LINE Official Account as a friend.

For more information about the `liff.requestFriendship()` method, see [`liff.requestFriendship()`](/reference/liff/#request-friendship) in the LIFF API reference.

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
