---
title: Common Others
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/common-others
__hash__: prkmNMuuuJ4D4OQ0kS0f9i11nVqk30HIgseliTo6ucQ
seo:
  description: ''
---

### Other common specifications

#### About the encoding of a URL specified in a request body property

Domain names, paths, query parameters, and fragments in the property should be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding){rel="[\"nofollow\"]"} using UTF-8.

For example, if you specify a URI with the following components, it should be `https://example.com/path?q=Good%20morning#Good%20afternoon`.

| Scheme | Domain name | Path  | Query parameter | Fragment       |
| ------ | ----------- | ----- | --------------- | -------------- |
| https  | example.com | /path | q=Good morning  | Good afternoon |

#### Specify the endpoint path accurately

When you send a request to a Messaging API endpoint, specify the correct endpoint shown in the Messaging API reference. If you don't specify the correct endpoint, for example by adding an unnecessary trailing slash (`/`) to the end of the endpoint path, the behavior isn't guaranteed.

| ✅️ Example of a correct endpoint          | ❌️ Example of an incorrect endpoint        |
| ----------------------------------------- | ------------------------------------------ |
| `https://api.line.me/v2/bot/message/push` | `https://api.line.me/v2/bot/message/push/` |

::admonition{title="Use the Messaging API official SDKs" type="tip"}
If you implement your integration using the Messaging API [official SDKs](/docs/messaging-api/line-bot-sdk/#official-sdks), you don't need to worry about endpoint URLs or paths — they're always correct.
::
