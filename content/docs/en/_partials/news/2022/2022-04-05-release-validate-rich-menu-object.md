---
title: The endpoint for validating rich menu object has been added
navigation: true
description: >-
  We've added an endpoint for validating a rich menu object to the Messaging
  API.
meta: >-
  {"date":"2022-04-05 00:00 UTC","tags":"messaging-api,
  rich-menu","locale":"en"}
path: /en/_partials/news/2022/2022-04-05-release-validate-rich-menu-object
__hash__: '-ZfYfXvwboTC5XQo9-9FrtFHhsUd5Nx1WqIGD0YQPb0'
seo:
  title: The endpoint for validating rich menu object has been added
  description: >-
    We've added an endpoint for validating a rich menu object to the Messaging
    API.
---

We've added an endpoint for validating a rich menu object to the Messaging API.

Previously, when checking that a [rich menu object](/reference/messaging-api/#rich-menu-object) is valid, you must execute [create rich menu](/reference/messaging-api/#create-rich-menu) endpoint. However, this method creates a rich menu if a rich menu object is valid.

By using the newly added endpoint, you can validate that a rich menu object is valid without creating a rich menu.

### Added endpoint

- [Validate rich menu object](/reference/messaging-api/#validate-rich-menu-object)

For more information about creating rich menu, see [Creating rich menus with the Messaging API](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-using-the-messaging-api) in the Messaging API documentation.
