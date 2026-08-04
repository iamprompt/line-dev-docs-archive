---
title: 'Important: Specification change to API'
navigation: true
description: >-
  We will be making changes to the specifications of an API on the LINE Login
  Platform.
meta: '{"date":"2015-08-31 00:00 UTC","tags":"LINE Login","local":"en"}'
path: /en/_partials/news/2015/2015-08-31-spec-change
__hash__: xvs3GAas6CwhfuLw763jalO3m9lwG2uswymSRDQVIfU
seo:
  title: 'Important: Specification change to API'
  description: >-
    We will be making changes to the specifications of an API on the LINE Login
    Platform.
---

We will be making changes to the specifications of an API on the LINE Login Platform.

[API]  
[https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}

[Changes]  

The expires_in value will be displayed in seconds instead of milliseconds.

It will be possible to refresh tokens before they expire. Currently, an error will occur when you refresh a token before it has expired.

[Reason]  

To comply with OAuth2 specifications.

[Date and Time]  

16:00 on September 14, 2015
