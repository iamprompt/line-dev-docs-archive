---
title: Rich menus overview
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/rich-menus-overview
__hash__: MUs7rVEvtv_bTSFyDIW0kKtp1bHOmXxsf1u_Dty1gg4
seo:
  title: Rich menus overview
  description: null
---

# :page-title

:markdown-controlsLearn about the rich menus you can display in chat rooms your LINE Official Account is participating in:

## What is rich menu

Rich menus are the menus displayed at the bottom of a chat room with a LINE Official Account. Set rich menus with links to external sites, reservation pages, and LINE Official Account features to make your user experience more "rich". Use [tools to create rich menus](#choosing-tool-for-creating-rich-menus) based on the [rich menu structure](#rich-menu-structure).

::admonition{title="Rich menus are unavailable on LINE for PC" type="note"}
Rich menus aren't displayed on LINE for PC (macOS, Windows).
::

## Rich menu structure

Rich menus are composed of a menu image, tappable areas, and a chat bar.

![](/media/messaging-api/rich-menu/bot-demo-rich-menu-image.png){className="[\"w-fix-240\"]"}

1. Rich menu image: A single JPEG or PNG image file that has menu items. For more information about image requirements, see [Requirements for rich menu image](/reference/messaging-api/#upload-rich-menu-image-requirements) in the Messaging API reference.
2. Tappable areas: Areas you divide as menu items. Assign an [action](/reference/messaging-api/#action-objects) on each menu item, such as getting a postback event and opening a URL.
3. Chat bar: A menu that opens and closes the rich menu. You can customize the text of this menu.

## Tools for setting rich menus

To create rich menus, use [LINE Official Account Manager](#creating-a-rich-menu-with-the-line-manager) or the [Messaging API](#creating-a-rich-menu-using-the-messaging-api). Find which tool best suits your needs.

::admonition{title="Only one tool for one rich menu" type="note"}
You can't use both tools to retrieve or edit the same instance of rich menu. A rich menu created with the LINE Official Account Manager is retrievable and editable only through the LINE Official Account Manager. Likewise, you can't use the LINE Official Account Manager on the rich menu created with the Messaging API.
::

| Tool                                                                             | Benefits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} | - Fast development time - Easy-to-use graphical interface - Display period is available - Statistics such as display count and click-through rate are available  For more information, see [How to use the rich menus](https://www.lycbiz.com/jp/column/line-official-account/technique/20180731-01/){rel="[\"nofollow\"]"} (only available in Japanese) and [Insight - Rich menus](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_rich-menus/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.                                                                   |
| Messaging API                                                                    | - Advanced customization - You can set [postback action](/reference/messaging-api/#postback-action) and [datetime picker action](/reference/messaging-api/#datetime-picker-action) on a rich menu. - You can [switch between tabs on rich menus](/docs/messaging-api/switch-rich-menus/). - Statistics such as display count and click count ([totals](/reference/messaging-api/#get-rich-menu-insight-summary), [by day](/reference/messaging-api/#get-rich-menu-insight-daily)) are available  If you want to try out rich menu features, see [Play with rich menus](/docs/messaging-api/try-rich-menu/). |

### Set rich menus with LINE Official Account Manager

You can create and set a rich menu as default from the LINE Official Account Manager. Users see the default rich menu unless a different rich menu is set with a higher [display priority](#rich-menu-display).

Using the GUI of the LINE Official Account Manager, you can set tappable areas of a rich menu based on predefined templates. For more information, see the [LINE Official Account Manager manual](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-menus/){rel="[\"nofollow\"]"} (only available in Japanese).

### Set rich menus with the Messaging API

To set a rich menu with the Messaging API, the required endpoints must be called in sequence. The basic steps are as follows:

1. Prepare a rich menu image.
2. Use the [Create rich menu](/reference/messaging-api/#create-rich-menu) endpoint.
3. Use the [Upload rich menu image](/reference/messaging-api/#upload-rich-menu-image) endpoint.
4. Use the [Set default rich menu](/reference/messaging-api/#set-default-rich-menu) endpoint.

For more information on how to set a rich menu with the Messaging API, see [Use rich menus](/docs/messaging-api/using-rich-menus/).

## Scope of rich menus

Rich menus have two scopes, which you can set using different tools.

| Scope                                                                                 | Tool                                            |
| ------------------------------------------------------------------------------------- | ----------------------------------------------- |
| All users who opened the chat screen of the LINE Official Account (Default rich menu) | - LINE Official Account Manager - Messaging API |
| Per user (Per-user rich menu)                                                         | Messaging API                                   |

Depending on the scope and the setting tool, the display priority of the rich menu and the timing of when the change takes effect on the user's chat screen will vary.

- [Display priority of rich menus](#rich-menu-display)
- [When rich menu setting changes take effect](#when-setting-change-takes-effect)

### Display priority of rich menus

Three types of rich menus are available, different by how you set them and who they target. The display priority of the types are the order they are listed, from the highest to the lowest:

1. Per-user rich menu set with the Messaging API
2. Default rich menu set with the Messaging API
3. Default rich menu set with the [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}

### When rich menu setting changes take effect

When you change the settings of a rich menu, the change takes place at different timings, depending on the scope and the setting tool of the rich menu.

| Scope and setting tool                                       | When change takes effect                                                                                                                                                                            |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Per-user rich menu set with the Messaging API                | Immediately. But if you delete the rich menu without [unlinking it from the user](/reference/messaging-api/#unlink-rich-menu-from-user), the deletion takes effect when the user re-opens the chat. |
| Default rich menu set with the Messaging API                 | When the user re-opens the chat. It may take up to a minute until the change takes effect.                                                                                                          |
| Default rich menu set with the LINE Official Account Manager | When the user re-opens the chat                                                                                                                                                                     |

### When users who are not friends with your LINE Official Account open the chat screen

When users who are not friends with your LINE Official Account open the chat screen, the default rich menu set in the LINE Official Account manager or with the Messaging API will be displayed.

Note that you can't link a rich menu to a user who are not friends with your LINE Official Account. For more information, see [Conditions for linking rich menu](/reference/messaging-api/#link-rich-menu-to-user-conditions) in the Messaging API reference.

## Rich menu insights

You can retrieve statistics, such as the number of times a rich menu was displayed and clicked, for rich menus created using the Messaging API.

- [Get rich menu insight totals](/reference/messaging-api/#get-rich-menu-insight-summary)
- [Get rich menu insight by day](/reference/messaging-api/#get-rich-menu-insight-daily)

Statistics for rich menus created using the Messaging API or LINE Official Account Manager can only be viewed with the tool used to create them.

| Tool used to create rich menu | Retrieve statistics   using the Messaging API | View statistics in   LINE Official Account Manager |
| ----------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Messaging API                 | ✅                                             | ❌                                                  |
| LINE Official Account Manager | ❌                                             | ✅                                                  |

## Rich menu API reference

- [Rich menu](/reference/messaging-api/#rich-menu)
- [Per-user rich menu](/reference/messaging-api/#per-user-rich-menu)
- [Rich menu alias](/reference/messaging-api/#rich-menu-alias)
