---
title: >-
  How to build a bookmark feature to revisit messages from LINE Official
  Accounts
navigation: true
description: >-
  When sending messages via LINE Official Accounts, there are use cases where
  users want to revisit the information later.
meta: >-
  {"date":"2026-04-16 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/04/16/bookmark-function-implementation
__hash__: gSZglgp2XglaiFa-TZ8ts1ot_K7uPUwt7o5fvBc8vaE
seo:
  title: >-
    How to build a bookmark feature to revisit messages from LINE Official
    Accounts
  description: >-
    When sending messages via LINE Official Accounts, there are use cases where
    users want to revisit the information later.
---

::Tips
# :page-title

  :::display-date{date="2026/04/16" .!mb-20}

  :::

When sending messages via LINE Official Accounts, there are use cases where users want to revisit the information later.

In this article, we’ll introduce key points for implementing a bookmark feature using the LINE Platform, which allows users to save broadcast content and web pages.

## Purpose

By introducing a bookmark feature, you can expect the following benefits:

- Users can save information individually based on their needs
- Easier access to information, improving the user experience
- Visibility into the content users are interested in
- Data available for personalized messaging

The goal of a bookmark feature is not just to send information, but to create a state where it continues to be used afterward.

## Implementation flow

There are several ways to implement this feature, but a simple approach would look like this:

1. Add a bookmark button to messages and send a webhook event when it is tapped
2. Retrieve the user ID and content information from the webhook event and store them in a database
3. Provide an entry point (such as a rich menu) for users to access their bookmark list

What you’re doing is simple: just store a relationship between the user ID and the content.

For this reason, this article does not go into detailed implementation, but instead focuses on key points:

- [Design content to be uniquely identifiable](#unique-id-design)
- [Make it easy to revisit later](#not-just-save-and-finish)
- [Design for extensibility](#design-for-extensibility)

### Design content to be uniquely identifiable

To associate a user ID with content, you need a way to uniquely identify each item.

For example:

- Issue an identifier for each message
- Manage content using a combination of category + identifier
- (If the content is a web page) Use the URL directly

Which approach you choose depends on your operation, but it’s recommended to decide based on how easy it will be to manage later.

For message-based content, including an identifier in the `data` field of a [postback action](/reference/messaging-api/#postback-action) simplifies processing when receiving webhook events.

  :::admonition
  ---
  title: We recommend setting displayText for postback actions
  type: tip
  ---
  By setting the `displayText` property of a postback action, you can display a message in the chat when the action is executed. This makes it easier for users to recognize that the action has been performed.
  :::

### Make it easy to revisit later

Next, let’s look at the “revisiting later” aspect.

In a bookmark feature, accessibility is key—users should be able to easily revisit saved information.  

That means considering where users can access it and how quickly they can view the list.

Even small improvements can significantly enhance the user experience, such as:

- Enabling one-tap access from a rich menu
- Displaying the list in an easy-to-read format (e.g., Flex Messages or a web page)

If you display the bookmark list on a web page, you will need to retrieve the user ID.
You can use [LIFF](/services/liff/) or [LINE Login](/services/line-login/) for this purpose.

By using LIFF or LINE Login, you can seamlessly link LINE users with their actions on the web.

### Design for extensibility

Since this mechanism is simple, it is relatively easy to extend later.

Although not covered in detail in this article, you may find a need for features such as:

- Deleting bookmarks
- Favorite/like functionality
- Leveraging data for recommendations
- Reminders for bookmarked content expiration

Depending on the scale of your service, it’s worth considering these extensions as well.

## Summary

The bookmark feature is simple to implement but highly practical.

It transforms messages from “fleeting information” into “accumulated assets,” contributing to a better user experience.

Start with a simple setup and consider how you can incorporate it into your service.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
