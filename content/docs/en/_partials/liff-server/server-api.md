---
title: Server Api
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-server/server-api
__hash__: hRs0du6LUIVedOtCcV137Mp5apJrwpHl3V0zfuqeTaA
seo:
  description: ''
---

::admonition{title="Version number differs from LIFF SDK" type="tip"}
The version number of the server API is different from that of LIFF SDK. The currently released version of LIFF SDK is `v2`, but the version of the server API is `v1`.
::

## Server API

### Preparing a channel access token

The LIFF server API is used to operate the LIFF apps on the LINE Login channel. Therefore, in order to use the server API, a channel access token for the LINE Login channel is required. The types of channel access tokens available are [short-lived channel access tokens](/reference/messaging-api/#issue-shortlived-channel-access-token) or [stateless channel access tokens](/reference/messaging-api/#issue-stateless-channel-access-token).
