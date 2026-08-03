---
title: >-
  Default setting of require two-factor authentication when creating a channel
  has been changed to on
navigation: true
description: >-
  When creating a LINE Login channel and a Blockchain Service channel on the
  LINE Developers Console, the default setting of Require two-factor
  authentication has been changed to on.
meta: '{"date":"2023-07-26 00:00 UTC","tags":"line-login, console","locale":"en"}'
path: /en/_partials/news/2023/2023-07-26-change-default-setting-for-2fa
__hash__: rrEysXJMt8t4Qom5f1NmIl4mANZIXlW9wjZIiovigHU
seo:
  title: >-
    Default setting of require two-factor authentication when creating a channel
    has been changed to on
  description: >-
    When creating a LINE Login channel and a Blockchain Service channel on the
    LINE Developers Console, the default setting of Require two-factor
    authentication has been changed to on.
---

When creating a LINE Login channel and a Blockchain Service channel on the [LINE Developers Console](/console/), the default setting of **Require two-factor authentication** has been changed to on.

### Date of change

July 26, 2023

### Details of the change

[On June 28th, 2023](/news/2023/06/28/require-2fa-on-channels/), we've added a function to LINE Login that allows service providers to require two-factor authentication.

You can set to require two-factor authentication when creating a LINE Login channel and a Blockchain Service channel, and when editing an existing channel on the LINE Developers Console.

The default setting of **Require two-factor authentication** when creating a channel was "off", but will now be "on".

If two-factor authentication isn't required, you can turn off with a toggle switch.

![](/media/news/2023/2fa-on-a-channel-en.png){className="[\"bg-border\"]"}

Existing channel settings won't be affected by this change.

### Require two-factor authentication setting on the LINE Developers Console

If you set LINE Login to require two-factor authentication, users will be required to authenticate with two-factor authentication when they log in to that channel. By using two-factor authentication, you're more likely to reduce the risk of unauthorized logins, such as list-based attacks.

From a user protection perspective, we recommend that you require two-factor authentication. However, please note that this may cause restrictions for users, such as requiring a smartphone with the LINE app installed.

For more information on setting to require two-factor authentication, see [Require two-factor authentication](/docs/line-login/overview/#two-factor-authentication) in the LINE Login documentation.
