---
title: Specification change to API completed
navigation: true
description: >-
  The specifications of the following API has been changed as shown below as
  announced on August 31.
meta: '{"date":"2015-09-14 00:00 UTC","tags":"LINE Login"}'
path: /ja/_partials/news/2015/2015-09-14-spec-change
__hash__: L6PugOrXSk8ML6XZcIpOCxGPFcZOOXtMu8dE5nzP_Gg
seo:
  title: Specification change to API completed
  description: >-
    The specifications of the following API has been changed as shown below as
    announced on August 31.
---

The specifications of the following API has been changed as shown below as announced on August 31.

[API]  
[https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}

[Changes]  

The expires_in value will be displayed in seconds instead of milliseconds.

It will be possible to refresh tokens before they expire. Currently, an error will occur when you refresh a token before it has expired.

[Reason]  

To comply with OAuth2 specifications.

[Date and Time]  

16:00 on September 14, 2015 (Finished)
