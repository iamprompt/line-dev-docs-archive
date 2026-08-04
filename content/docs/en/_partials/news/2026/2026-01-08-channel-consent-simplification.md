---
title: >-
  For new LINE MINI App channels in Japan, the &quot;Channel consent
  simplification&quot; feature is always enabled as of January 8, 2026
navigation: true
description: >-
  As announced on October 31, 2025, for new LINE MINI App channels in Japan, the
  use of the "Channel consent simplification" feature has been mandatory as of
  January 8, 2026.
meta: '{"date":"2026-01-08 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-01-08-channel-consent-simplification
__hash__: D4o5yY68EiVL4yxE4QvFTFU6pOMPSVLfmTedflTV_yo
seo:
  title: >-
    For new LINE MINI App channels in Japan, the &quot;Channel consent
    simplification&quot; feature is always enabled as of January 8, 2026
  description: >-
    As announced on October 31, 2025, for new LINE MINI App channels in Japan,
    the use of the "Channel consent simplification" feature has been mandatory
    as of January 8, 2026.
---

As announced on [October 31, 2025](/news/2025/10/31/channel-consent-simplification/), for new LINE MINI App channels in Japan, the use of the "[Channel consent simplification](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" feature has been mandatory as of January 8, 2026.

### Specification change date and time

January 8, 2026 12:00 (UTC+9)

### LINE MINI App channels subject to the specification changes

LINE MINI App channels created after the specification changes and whose **Region to provide the service** under the **Basic settings** tab is set to "Japan"

### LINE MINI App channels not subject to the specification changes

- LINE MINI App channels created before the specification changes
- LINE MINI App channels whose **Region to provide the service** under the **Basic settings** tab is set to "Thailand" or "Taiwan"

### Specification changes

[The applicable LINE MINI App channels](#channel-consent-simplification-subject-20260108) have been changed as follows:

- The "Channel consent simplification" feature is always enabled.

  - Accordingly, the toggle button for **Channel consent simplification** under the **Web app settings** tab has been removed, and you can no longer disable the feature.

The above changes also apply to unverified MINI Apps if the LINE MINI App channels are subject to the specification changes. However, the "Channel consent simplification" feature is available only in unverified MINI Apps for Developing and for Review.

### Impact on the add friend option

In the LINE MINI App, you can use the [add friend option](/docs/line-mini-app/service/line-mini-app-oa/#link-a-line-official-account-with-your-channel) to prompt users to add your LINE Official Account from the [verification screen](/docs/line-mini-app/develop/configure-console/#verification-screen) or the [channel consent screen](/docs/line-mini-app/develop/configure-console/#consent-screen-settings).

![](/media/news/2025/line-mini-app-playground-verification-screen-en.png){className="[\"border\",\"w-fix-280\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/news/2025/line-mini-app-playground-channel-consent-screen-en.png){className="[\"border\",\"w-fix-280\",\"inline-block\"]"}

However, if only `openid` is specified in the "Scope" section of the **Web app settings** tab in your LINE MINI App channel, enabling the "Channel consent simplification" feature will prevent the verification screen and the channel consent screen from appearing. As a result, you can't prompt users to add friends using the add friend option.

To prompt users to add your LINE Official Account as a friend using the add friend option, specify scopes other than `openid` in the "Scope" section of the **Web app settings** tab in your LINE MINI App channel, and display the verification screen using one of the following methods:

- [Method 1. Use the `liff.permission.query()` method and the `liff.permission.requestAll()` method](#channel-consent-simplification-method1-20260108)
- [Method 2. Use methods that require permissions other than the `openid` scope](#channel-consent-simplification-method2-20260108)

#### Method 1. Use the `liff.permission.query()` method and the `liff.permission.requestAll()` method

You can use the [`liff.permission.query()`](/reference/liff/#permission-query) method and the [`liff.permission.requestAll()`](/reference/liff/#permission-request-all) method to display the verification screen.

```javascript
// Display the verification screen when the user hasn't consented to the profile scope
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll();
  }
});
```

For more information, see [`liff.permission.query()`](/reference/liff/#permission-query) and [`liff.permission.requestAll()`](/reference/liff/#permission-request-all) in the LIFF API reference.

#### Method 2. Use methods that require permissions other than the `openid` scope

You can use methods that require permissions other than the `openid` scope to display the verification screen. The following methods require permissions other than the `openid` scope:

| Scope                | Method                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `email`              | - [`liff.getIDToken()`](/reference/liff/#get-id-token) - [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token) |
| `profile`            | - [`liff.getProfile()`](/reference/liff/#get-profile) - [`liff.getFriendship()`](/reference/liff/#get-friendship)            |
| `chat_message.write` | - [`liff.sendMessages()`](/reference/liff/#send-messages)                                                                    |

To prompt users to add your LINE Official Account as a friend right after your LINE MINI App launches, like the channel consent screen does, implement [Method 1](#channel-consent-simplification-method1-20260108) or [Method 2](#channel-consent-simplification-method2-20260108) so that they run right after your LINE MINI App launches.

### Background of the specification changes

The specification changes aim to improve the user experience and encourage the use of LINE MINI Apps by allowing users to use them more smoothly.

We'll continue to work to further improve our service to our customers. Thank you for your understanding.
