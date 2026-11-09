---
title: >-
  For the add friend option in LINE MINI Apps, we've resumed the feature to
  switch the LINE Official Account displayed on the channel consent screen
navigation: true
description: >-
  We've resumed the feature to switch the LINE Official Account displayed on the
  channel consent screen for the add friend option in LINE MINI Apps, which was
  temporarily suspended on September 15, 2026.
meta: '{"date":"2026-11-09 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-11-09-add-friend-option
__hash__: 5WcoeO7IsvHg6szJNhiFP_yAT125WbnREKWqHd4ftOY
seo:
  title: >-
    For the add friend option in LINE MINI Apps, we've resumed the feature to
    switch the LINE Official Account displayed on the channel consent screen
  description: >-
    We've resumed the feature to switch the LINE Official Account displayed on
    the channel consent screen for the add friend option in LINE MINI Apps,
    which was temporarily suspended on September 15, 2026.
---

We've resumed the feature to switch the LINE Official Account displayed on the channel consent screen for the add friend option in LINE MINI Apps, which was temporarily suspended on [September 15, 2026](/news/2026/09/15/use-multiple-accounts/).

We sincerely apologize for any inconvenience that this may have caused.

### Changes accompanying the resumption

Some specifications of the feature to switch the LINE Official Account displayed on the channel consent screen have changed with its resumption. Note the following changes:

| Before                                                                                                                                                      | After (current)                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Available in all LIFF SDK versions - Specify the LINE Official Account to display on the channel consent screen using the `prompt_bot_id` query parameter | - Available in LIFF v2.32.0 or later - Specify the LINE Official Account to display on the channel consent screen using the `liff_prompt_bot_id` query parameter |

### Switch the LINE Official Account displayed on the channel consent screen

To switch the LINE Official Account displayed on the channel consent screen, add the `liff_prompt_bot_id` query parameter to the :glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"} or a :glossary-tooltip[[permanent link](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}.

For the `liff_prompt_bot_id` query parameter, specify the ID of the LINE Official Account that users are prompted to add as a friend, using its basic ID or :glossary-tooltip[[premium ID](/glossary/#premium-id)]{glossary-id="premium-id"}.

```text
https://miniapp.line.me/123456-abcedfg?liff_prompt_bot_id=@819...
```

```text
https://liff.line.me/123456-abcedfg?liff_prompt_bot_id=@819...
```

For more information, see [Switch the LINE Official Account displayed on the channel consent screen](/docs/line-mini-app/service/add-friend-option/#channel-consent-screen) in the LINE MINI App documentation.
