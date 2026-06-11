---
title: How the Messaging API development team designed the text message (v2) syntax
navigation: true
description: Hi, I'm Habara, an engineer working on the Messaging API.
meta: >-
  {"date":"2026-06-11 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/06/11/text-v2-message-design-history
__hash__: W8r7fsoKbgsHhv7SvdGwwtgPb6qM7xWGVuwi1LK_E0w
seo:
  title: How the Messaging API development team designed the text message (v2) syntax
  description: Hi, I'm Habara, an engineer working on the Messaging API.
---

::Tips
# :page-title

  :::display-date{date="2026/06/11" .!mb-20}

  :::

Hi, I'm Habara, an engineer working on the Messaging API.

The Messaging API includes a message type called [text message (v2)](/reference/messaging-api/#text-message-v2), which makes it easy to embed mentions and LINE emojis. Unlike the original [text message](/reference/messaging-api/#text-message), you can specify where mentions and emojis appear directly within the text body.

In this article, I'd like to walk through the design decisions behind the current text message (v2) syntax.

  :::toc

  :::

## The text message (v2) syntax

Before getting into the design story, let's take a quick look at the syntax of text message (v2).

```json
{
  "type": "textV2",
  "text": "Hello {you}! {smile}",
  "substitution": {
    "you": {
      "type": "mention",
      "mentionee": {
        "type": "user",
        "userId": "U0123456789ab..."
      }
    },
    "smile": {
      "type": "emoji",
      "productId": "...",
      "emojiId": "..."
    }
  }
}
```

Inside `text`, you write placeholders like `{you}` or `{smile}`, and `substitution` defines what each placeholder maps to: a mention, a LINE emoji, and so on.

In this syntax, the replacement content is specified in a separate `substitution` property. We also defined `textV2` as a new type instead of extending the existing `text` type. From here on, we'll look back at each of these design decisions in turn.

## Why we chose a `substitution` property for replacement

The first candidate we considered was a format that packs all the information about mentions and emojis directly into the text itself. The syntax would have looked something like this:

```json
{
  "type": "text",
  "text": "Hello {@U0123456789ab...}! {:smile:}"
}
```

We decided not to go with this format. That's because we wanted to prevent situations where syntax misuse leads to user ID exposure. For example, if the braces (`{` and `}`) were omitted and `Hello @U0123456789ab...!` were sent, the raw user ID that should have become a mention would appear directly in the recipient's chat. LINE Official Accounts are used by businesses and shops as channels for communicating with their customers. That's why we needed a conservative, accident-resistant design.

Instead, we landed on the `substitution`-based approach shown at the top of the article. With this approach, sensitive information like user IDs stays inside `substitution`. As a result, even with a typo in `text`, the worst the recipient sees is a placeholder name like `{you}`. This structure makes it less likely for the raw user ID to leak into the message body.

## Why we introduced a new `textV2` type

At first, we considered extending the existing `text` type rather than creating a new one. However, handling placeholders requires treating `{` and `}` as control characters, and applying this rule to the existing `text` type would break backward compatibility.

Because `{` and `}` are treated as control characters, for the `textV2` type we adopted the escape syntax used in Python's `str.format` (`{{` and `}}`) for cases where they need to be sent as plain text. If we applied this rule to the `text` type, implementations that had been sending a string like `{{example}}` as-is would send `{example}` instead. We couldn't change the behavior of existing code like that.

In other words, the `text` type would have needed two distinct modes:

- A mode where `{` and `}` are control characters, requiring `{{` or `}}` to use them as literal characters
- The existing mode, where `{` and `}` are treated as ordinary characters

One way to distinguish these two would be to switch on whether a `substitution` property is present. Developers using the new mode would naturally specify `substitution`, while existing code in the old mode wouldn't use this property, so this seems like a natural approach. However, if we split `substitution`'s state into three cases ("has entries", "`{}` (empty object)", and "`null` or unspecified"), the question becomes which side the middle case (`{}`) belongs to.

If we group `{}` with the new mode, then `{}` and `null` would behave differently. In a language or framework that treats both empty objects and `null` as empty values, the message could end up being sent in a different mode than the developer intended. This is one of the traps to watch out for when designing JSON-based APIs.

Conversely, if we group `{}` with the old mode, the zero-substitution case requires one of two workarounds: either skip the escape processing for `{` and `}` as a special case, or insert a dummy entry to switch to the new mode. Either way, developers would need to add extra handling that shouldn't normally be necessary.

Since neither classification works cleanly, we abandoned switching modes based on the `substitution` property and decided to lock the mode at the `type` level. That is the main reason we introduced a separate `textV2` type. The `text` type continues to behave exactly as before, while we could design the `textV2` type without backward-compatibility constraints.

## Wrap-up

Designing even a single syntax meant balancing more than usability: the risk of misuse, the impact on existing code, and how to interpret JSON-expressible values at the API level.

API design stories like this usually stay behind the scenes, but I hope you enjoyed this little glimpse into how the syntax came together.

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
