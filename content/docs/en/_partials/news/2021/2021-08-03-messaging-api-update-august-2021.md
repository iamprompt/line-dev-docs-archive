---
title: Messaging API Update (August, 2021)
navigation: true
description: The following features have been changed in this update of the Messaging API.
meta: '{"date":"2021-08-03 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-08-03-messaging-api-update-august-2021
__hash__: 3jKPgKKCf_MAYJUCOzDRMdxWRMcKfZTwMyh16es7Sks
seo:
  title: Messaging API Update (August, 2021)
  description: >-
    The following features have been changed in this update of the Messaging
    API.
---

The following features have been changed in this update of the Messaging API.

- [The period for getting "Narrowcast Message Status" has been extended from 7 days to 14 days](#messaging-api-202108-01)
- [The maximum character limit for URLs for images, video, and audio files has increased from 1000 to 2000](#messaging-api-202108-02)

### The period for getting "Narrowcast Message Status" has been extended from 7 days to 14 days

You can check the status of a narrowcast message using the [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) endpoint, after making a send request. The period during which you can get this "narrowcast message status" has now been extended.

Refer to the table below for the differences between before and after the change.

| Item                   | Before change             | After change(current)      |
| ---------------------- | ------------------------- | -------------------------- |
| **Acquisition period** | within 7 days (168 hours) | within 14 days (336 hours) |

For more information, see [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) in the Messaging API reference.

### The maximum character limit for URLs for images, videos, and audio files has increased from 1000 to 2000

The maximum character limit for URLs for images, videos and audio files in [Message objects](/reference/messaging-api/#message-objects) has increased from 1000 to 2000. These are the target properties.

| Message object                                                                   | Target                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Message common properties](/reference/messaging-api/#message-common-properties) | - [Quick reply button object](/reference/messaging-api/#quick-reply-button-object) `imageUrl` property                                                                                                                                                                                                                     |
| [Image message](/reference/messaging-api/#image-message)                         | - `originalContentUrl` property - `previewImageUrl` property                                                                                                                                                                                                                                                               |
| [Video message](/reference/messaging-api/#video-message)                         | - `originalContentUrl` property - `previewImageUrl` property                                                                                                                                                                                                                                                               |
| [Audio message](/reference/messaging-api/#audio-message)                         | - `originalContentUrl` property                                                                                                                                                                                                                                                                                            |
| [Image map message](/reference/messaging-api/#imagemap-message)                  | - `baseUrl` property - `video.originalContentUrl` property - `video.previewImageUrl` property                                                                                                                                                                                                                              |
| [Template message](/reference/messaging-api/#template-messages)                  | - [Button template](/reference/messaging-api/#buttons) `thumbnailImageUrl` property - [Column object for carousel](/reference/messaging-api/#column-object-for-carousel) `thumbnailImageUrl` property - [Column object for image carousel](/reference/messaging-api/#column-object-for-image-carousel) `imageUrl` property |
| [Flex Message](/reference/messaging-api/#flex-message)                           | - [Image](/reference/messaging-api/#f-image) component `url` property - [Icon](/reference/messaging-api/#icon) component `url` property                                                                                                                                                                                    |
