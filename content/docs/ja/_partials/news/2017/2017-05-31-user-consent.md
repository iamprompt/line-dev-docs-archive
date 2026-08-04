---
title: Changes to the user consent process and data retrieved in webhooks
navigation: true
description: >-
  The user consent process and the data included in certain webhooks will change
  from LINE version 7.5.0 (iOS and Android). The details of the changes are
  shown below.
meta: '{"date":"2017-05-31 00:00 UTC","tags":"Messaging API"}'
path: /ja/_partials/news/2017/2017-05-31-user-consent
__hash__: XFyeEdyhbGFGQ4Ejftk-qBdj4jCwHFVmOzB9Ln7j3zs
seo:
  title: Changes to the user consent process and data retrieved in webhooks
  description: >-
    The user consent process and the data included in certain webhooks will
    change from LINE version 7.5.0 (iOS and Android). The details of the changes
    are shown below.
---

The user consent process and the data included in certain webhooks will change from LINE version 7.5.0 (iOS and Android). The details of the changes are shown below.

1. Changes to the user consent process  
The way that users give consent to bots (LINE@ accounts and LINE Official Accounts) will change with the release of LINE version 7.5.0. Instead of requiring users to agree to a consent screen for every bot they want to add as a friend or start a chat with, from version 7.5.0, users will provide consent to all bots at once through a new consent screen (called the “Official Accounts Terms of Use”). After users have agreed to this screen once, they will be able to add other bots as friends and add them to chats in a single action.  
For more information on the user consent process, see [User consent](/docs/messaging-api/user-consent/).
2. Changes to the Messaging API specifications  
Webhooks will include the user ID of users who send messages in a group or a room if the user has agreed to the “Official Accounts Terms of Use”. Note that the user ID will not be included in the webhook if the user is using a version of LINE below 7.5.0.
