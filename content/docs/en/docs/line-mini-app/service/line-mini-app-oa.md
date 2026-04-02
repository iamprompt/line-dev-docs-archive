---
title: Use LINE Official Account
navigation: true
description: Use a LINE Official Account to promote your LINE MINI App.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/service/line-mini-app-oa
__hash__: eun8aIhWvXxmXtsctJnFEgwfRV5C-W4pUWLvNf398T4
seo:
  title: Use LINE Official Account
  description: Use a LINE Official Account to promote your LINE MINI App.
---

# :page-title

:markdown-controlsThis page introduces how to use a LINE Official Account to promote your LINE MINI App. For more information about how to create a LINE Official Account, see [Create a LINE Official Account](/docs/messaging-api/getting-started/#create-oa) in the Messaging API documentation.

![Promote your LINE MINI App on LINE Official Account](/media/line-mini-app/mini_with_oa.png){className="[\"w-fix-280\"]"}

## Send rich messages

Sending visually engaging rich messages helps users quickly understand the value of your LINE MINI App and encourages more users to access it.

For more information about rich messages, see [Rich messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

## Set a link to your LINE MINI App in a rich menu

By setting your LINE MINI App's :glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"} or :glossary-tooltip[[permanent link](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"} in a rich menu, users can easily access your LINE MINI App from the LINE Official Account chat screen.

For more information about rich menus, see [Rich menus overview](/docs/messaging-api/rich-menus-overview/) in the Messaging API documentation.

## Add the LINE Official Account as a friend on the LINE MINI App (add friend option)

You can display an option to add your LINE Official Account as a friend on the [verification screen](/docs/line-mini-app/develop/configure-console/#verification-screen) or the [channel consent screen](/docs/line-mini-app/develop/configure-console/#consent-screen-settings) of your LINE MINI App. This is called the add friend option.

To link a LINE MINI App to a LINE Official Account using the add friend option, all of the following conditions must be met:

- The LINE Official Account uses the Messaging API (*1).
- The Messaging API channel linked to the LINE Official Account and the LINE MINI App channel belong to the same provider.
- The account used to perform the operation has both the Admin role for the LINE MINI App channel (*2) and the Administrator role for the LINE Official Account (*3).

*1 For more information about how to use the Messaging API with a LINE Official Account, see [Enable the Messaging API for your LINE Official Account](/docs/messaging-api/getting-started/#using-oa-manager) in the Messaging API documentation.  
*2 You can check the Admin role for a LINE MINI App channel in the [LINE Developers Console](/console/).  
*3 You can check the Administrator role for a LINE Official Account in the [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}.

### How to set the add friend option

1. In the [LINE Developers Console](/console/), click the **Basic settings** tab of the LINE MINI App channel.
2. In the "Linked LINE Official Account" section, click **Edit**.
3. Select the LINE Official Account to link to the LINE MINI App channel, then click **Update**.
4. Click the **Web app settings** tab of the LINE MINI App channel.
5. In the "Add friend option" section, click **Edit**.
6. Select **On (normal)**, then click **Update**.

::admonition
---
title: >-
  For certified providers, the add friend option on authorization screens is
  enabled by default
type: tip
---
If a LINE MINI App channel belongs to a [certified provider](/docs/line-developers-console/overview/#certified-provider), the add friend option on the verification screen and the channel consent screen is enabled by default.

Unless users manually turn off the option, the LINE Official Account specified for the add friend option will be added as a friend when users grant authorization on the verification screen or the channel consent screen.
::
