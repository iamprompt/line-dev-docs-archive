---
title: >-
  In the Messaging API, you can now replace or unlink the rich menu linked to
  the users in batches
navigation: true
description: >-
  In the Messaging API, we've added endpoints to replace or unlink the rich menu
  linked to the users in batches.
meta: >-
  {"date":"2023-07-04 00:00 UTC","tags":"Messaging API, Rich
  menu","locale":"en"}
path: /en/_partials/news/2023/2023-07-04-messaging-api-updated
__hash__: Jr2V33VdiTOi8NCXYR32PdhiVPDGt-dzrzt3BkqADQ4
seo:
  title: >-
    In the Messaging API, you can now replace or unlink the rich menu linked to
    the users in batches
  description: >-
    In the Messaging API, we've added endpoints to replace or unlink the rich
    menu linked to the users in batches.
---

In the Messaging API, we've added endpoints to replace or unlink the rich menu linked to the users in batches.

- [Endpoint to replace or unlink the linked rich menus in batches](#bach-control-20230704)
- [Endpoint to get the status of batch control the rich menus](#bach-control-status-20230704)
- [Endpoint to validate the request of batch control the rich menus](#bach-control-validation-20230704)
- [To safely retry replacing the rich menus](#bach-control-example-20230704)

### Endpoint to replace or unlink the linked rich menus in batches

You can use this endpoint to batch control the rich menu linked to the user using the endpoint such as [Link rich menu to user](/reference/messaging-api/#link-rich-menu-to-user). The following operations are available:

1. Replace a rich menu with another rich menu for all users linked to a specific rich menu
2. Unlink a rich menu for all users linked to a specific rich menu
3. Unlink a rich menu for all users linked to the rich menu

Previously, to replace or unlink a rich menu linked to a user, you needed to know all of the :glossary-tooltip[[user ID](/glossary/#user-id)]{glossary-id="user-id"} that is subject to change. By using this endpoint, you can replace or unlink the linked rich menu without specifying the user ID.

A request to this endpoint is processed asynchronously in the background. You can check the status of the process by using the [Endpoint to get the status of batch control the rich menus](#bach-control-status-20230704).

Note that multiple rich menu operations can be specified in a single request. When multiple rich menu operations are specified, each operation in the rich menu is executed in parallel, one for each user.

For more information, see [Replace or unlink the linked rich menus in batches](/reference/messaging-api/#batch-control-rich-menus-of-users) in the Messaging API reference.

### Endpoint to get the status of batch control the rich menus

You can use this endpoint to get the status of replacing or unlinking the rich menu linked to the user.

The progress status can be obtained within less than the past 14 days (336 hours) from the time the request for batch control of the rich menu is accepted.

For more information, see [Get the status of rich menu batch control](/reference/messaging-api/#get-batch-control-rich-menus-progress-status) in the Messaging API reference.

### Endpoint to validate the request of batch control the rich menus

You can use this endpoint to validate the [request body](/reference/messaging-api/#batch-control-rich-menus-of-users-request-body) for the endpoint to replace or unlink the linked rich menus in batches.

By using this endpoint, you can verify in advance whether a request is an error or not.

For more information, see [Validate a request of rich menu batch control](/reference/messaging-api/#validate-batch-control-rich-menus-request) in the Messaging API reference.

### To safely retry replacing the rich menus

The process of batch control the rich menu is executed asynchronously for each user. Therefore, if the process has failed for some users and you retry with the same request body, the rich menu may be unintentionally replaced.

For example, suppose you replace the rich menu linked to the user as follows:

1. Replace the rich menu of all users linked to `richmenu ID A` with `richmenu ID B`
2. Replace the rich menu of all users linked to `richmenu ID B` with `richmenu ID A`

An example of a request in this case is as follows:

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{richmenu ID A}",
      "to": "{richmenu ID B}"
    },
    {
      "type": "link",
      "from": "{richmenu ID B}",
      "to": "{richmenu ID A}"
    }
  ]
}'
```

You can get whether this request was successfully processed or not by using the [Endpoint to get the status of batch control the rich menus](#bach-control-status-20230704).

If the progress is retrieved and the process has failed, suppose you retry with the above request. At this time, the user's rich menu, which was replaced from `richmenu ID B` to `richmenu ID A` on the first request, is replaced back to `richmenu ID B`.

Therefore, we recommend that you specify the `resumeRequestKey` property, which is a retry key, when replacing or unlinking the rich menu in batches. The following is an example of a request with the `resumeRequestKey` property:

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{richmenu ID A}",
      "to": "{richmenu ID B}"
    },
    {
      "type": "link",
      "from": "{richmenu ID B}",
      "to": "{richmenu ID A}"
    }
  ],
  "resumeRequestKey":"{an arbitrary key}"
}'
```

If you specify an arbitrary key in the `resumeRequestKey` property on your first request, sending the request again with the same key will only resume processing for the user who hasn't completed processing. By using the `resumeRequestKey` property, you can safely retry.

The `resumeRequestKey` property expires in 14 days (336 hours). If the expiration date is exceeded, the request will be treated as a new request.
