---
title: Common Response Headers
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/common-response-headers
__hash__: ywSDMx5i_hqqhuJojG10CGSZ6yaeGKbjJWVZV6FP3WU
seo:
  description: ''
---

### Response headers

The following HTTP headers are included in Messaging API responses:

| Response headers                                                                                 | Description                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X-Line-Request-Id                                                                                | Request ID. An ID is issued for each request.                                                                                                                                                         |
| X-Line-Accepted-Request-Id :div[Not always included]{className="[\"parameter-label\",\"gray\"]"} | If the request has already been accepted using the same retry key, the `x-line-request-id` of the accepted request is shown. For more information, see [Retrying an API request](#retry-api-request). |
