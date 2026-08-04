---
title: '[Updated] Messaging API update for August 2020'
navigation: true
description: ''
meta: '{"date":"2020-08-04 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-08-04-messaging-api-update-august-2020
__hash__: B4Q6Ayeo0SHFY4qd7pOxNDkSieEz47W740OXBEdoayw
seo:
  title: '[Updated] Messaging API update for August 2020'
  description: ''
---

::admonition{title="Added on August 6, 2020" type="note"}
As previously announced, these endpoints are now available.

- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)
::

We've added new webhook events and an API endpoint to the Messaging API.

These are the features added in this update:

- [Unsend event has been added](#august-unsend-event)
- [Video viewing complete event has been added](#august-video-viewing-complete)
- [The `audiences` property is now optional instead of required for a certain endpoint](#august-audiences)
- [Recipients of an audience can be now specified by file](#august-by-file)

### Unsend event has been added

In addition to existing webhook events, such as join, leave, and send messages, a new "Unsend event" has been added, which indicates that the message has been cancelled.

- [Unsend event](/reference/messaging-api/#unsend-event)

### Video viewing complete event has been added

A new "Video viewing complete event" has been added. This event occurs when a user finishes watching a video with a `trackingId` property for video identification.

- [Video viewing complete](/reference/messaging-api/#video-viewing-complete)

### The `audiences` property is now optional instead of required for a certain endpoint

The `audiences` property has been changed from required to optional for the following endpoint.

- [Create audience for uploading user IDs (by JSON)](/reference/messaging-api/#create-upload-audience-group)

This spec change allows you to prepare an audience by creating an audience with no recipient specified first, and then adding user IDs or IFAs to the audience later.

### Recipients of an audience can be now specified by file

You can now specify the recipients of an audience by file.

- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)
