---
title: >-
  If a user shares my LINE Official Account with a friend, can I see the result
  of the friend referral (whether my LINE Official Account was added as a friend
  or not, and how many people added the LINE Official Account)?
navigation: true
description: No, you can't.
meta: >-
  {"date":"2023-07-14 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/can-i-see-the-results-of-friend-referrals
__hash__: mtCzbJkCsz7rmYqCvwbrtWBR5-ZGGIfmw1tC0frJhls
seo:
  title: >-
    If a user shares my LINE Official Account with a friend, can I see the
    result of the friend referral (whether my LINE Official Account was added as
    a friend or not, and how many people added the LINE Official Account)?
  description: No, you can't.
---

No, you can't.

When the person to whom the LINE Official Account was referred adds them as a friend or unblocks them, a webhook [follow event](/reference/messaging-api/#follow-event) is sent from the LINE Platform to the bot server. However, you can't use the Messaging API to confirm how the user added the LINE Official Account as a friend (i.e., whether the user added the LINE Official Account as a friend through someone's referral).

It is also not possible to confirm the number of people who have friended the LINE Official Account as a result of friend referrals.
