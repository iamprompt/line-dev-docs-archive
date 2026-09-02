---
title: Stop using your LINE Official Account
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/stop-using-line-official-account
__hash__: OjvYzvTKlyQSyaBIujs4bHkfKxLR87xgykele2KV5P4
seo:
  title: Stop using your LINE Official Account
  description: null
---

# :page-title

:markdown-controls::admonition{title="Stop using the Messaging API" type="tip"}
If you want to continue using your LINE Official Account linked to a Messaging API channel, but want to stop using the Messaging API, see [Stop using the Messaging API](/docs/messaging-api/stop-using-messaging-api/).
::

To stop using your LINE Official Account linked to a Messaging API channel, follow the steps below to delete your LINE Official Account. When you delete your LINE Official Account linked to a Messaging API channel, the Messaging API channel will also be deleted.

1. Select the Messaging API channel you want to delete on the [LINE Developers Console](/console/).
2. The **Basic settings** tab will appear. Click **Delete** in the "Delete this channel" section.

![](/media/messaging-api/stop-using-line-official-account/delete-this-channel-en.png){className="[\"border\",\"w-fix-720\"]"}

1. The "Delete this channel?" modal will appear. Click **Go to LINE Official Account Manager**.

![](/media/messaging-api/stop-using-line-official-account/display-line-official-account-manager-en.png){className="[\"border\",\"w-fix-720\"]"}

1. The LINE Official Account Manager will open in new tab and the "Delete LINE official account" screen will appear. The following steps will be performed on the LINE Official Account Manager. Check **I agree to the above and wish to permanently delete my LINE official account** and click **Delete account**.

![](/media/messaging-api/stop-using-line-official-account/delete-account-en.webp){className="[\"border\",\"w-fix-720\"]"}

::admonition
---
title: >-
  "403 Forbidden" is displayed instead of the "Delete LINE official account"
  screen
type: note
---
To delete your LINE Official Account, you must have the Admin role. The Admin role of your LINE Official Account can be set in the [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}. For more information, see [Permisson settings](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_permission/){rel="[\"nofollow\"]"} and [Add or change the administrator of a LINE Official Account](https://help.linebiz.com/lineadshelp/s/article/L000001104?language=ja){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
::

1. The "Permanently delete this LINE official account?" modal will appear. When you click **Delete**, your LINE Official Account will be deleted and the Messaging API channel linked to your LINE Official Account will also be deleted.

![](/media/messaging-api/stop-using-line-official-account/delete-en.webp){className="[\"border\",\"w-fix-720\"]"}
