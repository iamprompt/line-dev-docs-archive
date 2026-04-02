---
title: Common Others
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/common-others
__hash__: qnUkbyAA-IijQmlinBrI-FleqWTn9aDgFfu-a7kjq6k
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
