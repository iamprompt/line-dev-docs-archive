---
title: You can now create audiences with the same name in the Messaging API
navigation: true
description: >-
  Until now, Messaging API had a restriction that prevented you from reusing an
  existing audience name. This restriction has been removed.
meta: '{"date":"2021-05-27 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-05-27-same-audience-name-can-be-used
__hash__: YJpBOZp07mAtHGGnueZXjeb931jZu3IXuMDziQI2Jr8
seo:
  title: You can now create audiences with the same name in the Messaging API
  description: >-
    Until now, Messaging API had a restriction that prevented you from reusing
    an existing audience name. This restriction has been removed.
---

Until now, Messaging API had a restriction that prevented you from reusing an existing audience name. This restriction has been removed.

For example, even if an audience named "AudienceGroupName_01" already exists, the removal of this restriction now allows you to create another audience with the same name. Each audience created can be distinguished by the audience ID passed in the response.

### Impacted endpoints

- [Create audience for click-based retargeting](/reference/messaging-api/#create-click-audience-group)
- [Create audience for impression-based retargeting](/reference/messaging-api/#create-imp-audience-group)
- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Create audience for uploading user IDs (by JSON)](/reference/messaging-api/#create-upload-audience-group)
- [Rename an audience](/reference/messaging-api/#set-description-audience-group)

For more information on audiences, see [Using audiences](/docs/messaging-api/using-audience/) in the Messaging API documentation.

LINE will continue to improve the quality of its services. Thank you for your understanding.
