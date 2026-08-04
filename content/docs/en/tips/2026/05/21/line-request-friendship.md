---
title: >-
  Use the liff.requestFriendship() method to naturally prompt users to add your
  LINE Official Account as a friend or unblock it
navigation: true
description: Hello! I'm Furuki, a technical writer.
meta: >-
  {"date":"2026-05-21 00:00 UTC","tags":"liff,
  line-mini-app","locale":"en","sidebar":false}
path: /en/tips/2026/05/21/line-request-friendship
__hash__: tym_FDAmh-CALY0WRQtIqXggTyd1M1OdSW-OU7mOed4
seo:
  title: >-
    Use the liff.requestFriendship() method to naturally prompt users to add
    your LINE Official Account as a friend or unblock it
  description: Hello! I'm Furuki, a technical writer.
---

::Tips
# :page-title

  :::display-date{date="2026/05/21" .!mb-20}

  :::

Hello! I'm Furuki, a technical writer.

The LIFF SDK used in LIFF apps and LINE MINI Apps continues to gain new methods. In this article, I'd like to introduce the [`liff.requestFriendship()`](/reference/liff/#request-friendship) method, added on [March 24, 2026](/news/2026/03/24/release-liff-2-28-0/), as one of my favorite methods.

* Here, "favorite" simply reflects the author's personal opinion.

  :::toc

  :::

## What is the `liff.requestFriendship()` method?

The `liff.requestFriendship()` method displays a subwindow that prompts the user to add the LINE Official Account linked to the channel as a friend, or to unblock it.

> - If the user has not added the LINE Official Account as a friend, a subwindow that prompts the user to add it as a friend is displayed.
> - If the user has blocked the LINE Official Account, a subwindow that prompts the user to unblock it is displayed.
> - If the user is already friends with the LINE Official Account, the subwindow is displayed and then automatically closed.

The following images show how it works:

| Not added                                                                             | Blocked                                                                                   | Added                                                                                |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ![](/media/tips/2026/tips-request-friendship-add-en.gif){className="[\"w-fix-240\"]"} | ![](/media/tips/2026/tips-request-friendship-unblock-en.gif){className="[\"w-fix-240\"]"} | ![](/media/tips/2026/tips-request-friendship-added.gif){className="[\"w-fix-240\"]"} |

Note that the `liff.requestFriendship()` method is available only when the LIFF browser screen size is `Full`. For more information, see [Size of the LIFF browser](/docs/liff/overview/#screen-size) in the LIFF documentation.

## Why I like it

- [A seamless UX that doesn't interrupt app usage](#favorite-point-1)
- [Easy to execute without the `profile` scope](#favorite-point-2)
- [A design that fits naturally into use cases](#favorite-point-3)

### A seamless UX that doesn't interrupt app usage

The first reason I like this method is that it can prompt users to add a LINE Official Account as a friend or unblock it directly on the screen of the LIFF app or LINE MINI App they are already using.

Because the flow is completed in a subwindow without sending users to an external page or the LINE Official Account's profile page, users can easily return to the original screen. This makes it possible to prompt them to add the account as a friend without forcing them to leave the app, even while they are filling out a form or performing another task.

### Easy to execute without the `profile` scope

The next reason I like it is that the `liff.requestFriendship()` method itself doesn't require the `profile` scope.

This makes it easy to integrate when you want to prompt users to add the account as a friend first, without checking the friendship status beforehand.

In particular, for LINE MINI Apps, you can execute this method as long as the user has granted the `openid` scope through the [Channel consent simplification](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification) flow. Since you don't need to assume additional permission requests up front, it becomes easier to keep both the implementation and the user flow simple.

  :::admonition
  ---
  title: The profile scope is required to get the friendship status
  type: tip
  ---
  The [`liff.getFriendship()`](/reference/liff/#get-friendship) method, which gets the friendship status between the user and the LINE Official Account, requires the `profile` scope.

  For this reason, if you use a flow like the following to call the `liff.requestFriendship()` method only when the user hasn't added the account as a friend, the `profile` scope is required.

  ```javascript
  const { friendFlag } = await liff.getFriendship();

  // Whether the user has added the account as a friend
  if (!friendFlag) {
    // If not, send a friendship request
    try {
      await liff.requestFriendship();
    } catch (error) {
      console.log(error);
    }
  }
  ```
  :::

### A design that fits naturally into use cases

The third reason I like it is that the design fits naturally into use cases where you want to prompt users to add the account as a friend.

It has a simple and intuitive design that fits naturally into use cases centered around adding the account as a friend, such as delivering coupons, sending reminder notifications, and providing member-only information.

![](/media/tips/2026/tips-request-friendship-add-en.png){className="[\"border\",\"w-fix-240\"]"}

For example, after showing guidance such as "Add this LINE Official Account as a friend to receive the benefit," you can display the subwindow to make the required flow easy for users to understand.

## Wrap-up

In this article, I introduced the [`liff.requestFriendship()`](/reference/liff/#request-friendship) method as one of my favorite methods. The `liff.requestFriendship()` method is a practical way to add a path to your LINE Official Account inside your app with only a small amount of implementation work. If you want to prompt users to add the account as a friend or unblock it without significantly disrupting the user experience, this method is well worth considering!

**About the author**

Furuki (Technical Writer): In charge of documentation for the [LINE Developers site](/). Also organizes [Technical Writing Meetup](https://tw-meetup.connpass.com/){rel="[\"nofollow\"]"}, a community about technical writing.

  :::style
  html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
