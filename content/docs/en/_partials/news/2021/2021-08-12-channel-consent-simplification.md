---
title: >-
  Skip the consent screen with the newly-released "Channel consent
  simplification" feature
navigation: true
description: >-
  A new feature, "Channel consent simplification", has been released, enabling
  users to skip the Consent screen that is displayed when they first access LINE
  MINI Apps.
meta: '{"date":"2021-08-12 00:00 UTC","tags":"LINE MINI app, console","locale":"en"}'
path: /en/_partials/news/2021/2021-08-12-channel-consent-simplification
__hash__: SFTiTm4XSXA1s96w3XlEzWc9p_LfoVNWiskj2nlag-g
seo:
  title: >-
    Skip the consent screen with the newly-released "Channel consent
    simplification" feature
  description: >-
    A new feature, "Channel consent simplification", has been released, enabling
    users to skip the Consent screen that is displayed when they first access
    LINE MINI Apps.
---

A new feature, "Channel consent simplification", has been released, enabling users to skip the [Consent screen](/docs/line-mini-app/develop/configure-console/#consent-screen-settings) that is displayed when they first access LINE MINI Apps.

::admonition
---
title: Permission consent skipped with the "Channel consent simplification" feature
type: note
---
The only permission consent that can be skipped with the "Channel consent simplification" feature is :glossary-tooltip[[user ID](/glossary/#user-id)]{glossary-id="user-id"} (`openid` scope). Permission required to get user profile information (the `profile` scope) or permission to send messages (the `chat_message.write` scope) aren't covered by "Channel consent simplification".
::

## Channel consent simplification feature setup

From your LINE MINI App channel on the [LINE Developers Console](/console/), locate the **Channel consent simplification** section under the LIFF tab, and toggle the slider on (right) to enable the "Channel consent simplification" feature.

![simplification feature setup](/media/line-mini-app/simplification-feature-setup-en.png){className="[\"border\",\"w-fix-760\"]"}

::admonition
---
title: Cautions for using the Channel consent simplification feature
type: note
---
- "Channel consent simplification" is a feature that can only be configured if the **Region** is set to "Japan" in the LINE MINI App channel.
- "Channel consent simplification" can only be enabled for a LINE MINI App channel in the **Developing** process.
- The `openid` scope will automatically be enabled for a channel with "Channel consent simplification" enabled.
::

## Detailed workflow of LINE MINI App with "Channel consent simplification" enabled

When a user first access a LINE MINI App with "Channel consent simplifcation" enabled, the channel consent screen is displayed, requesting consent regarding the use of :glossary-tooltip[[User ID](/glossary/#user-id)]{glossary-id="user-id"}.

![channel consent screen](/media/line-mini-app/simplification-process-01-en.png){className="[\"border\",\"w-fix-200\"]"}

Users will have to go through the consent process described above only once, upon which whenever they access another LINE MINI App for the first time, they will be able to skip the consent process and start using the service immediately.

![Consent simplification enabled](/media/line-mini-app/channel-consent-simplification-enabled-en.png){className="[\"w-fix-680\"]"}

For more information, see [Skipping the consent screen](/docs/line-mini-app/develop/channel-consent-simplification/) in the LINE MINI App documentation.
