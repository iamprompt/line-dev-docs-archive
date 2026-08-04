---
title: >-
  [Updated] We've ended the provision of the feature to change the authority
  level of the audience
navigation: true
description: ''
meta: >-
  {"date":"2025-03-26 00:00 UTC","tags":"messaging-api, end-of-life,
  life-cycle","locale":"en"}
path: /en/_partials/news/2025/2025-03-26-cross-targeting-closing
__hash__: Qy7R1V3xWD7Z2lCFOplE8ifqm7DKKUFIj5ur6i5FytE
seo:
  title: >-
    [Updated] We've ended the provision of the feature to change the authority
    level of the audience
  description: ''
---

::admonition{title="Added on April 16, 2025" type="tip"}
We've added the Activate audience endpoint to the [list of endpoints that have been discontinued](#endpoints-20250326).
::

As announced on [February 6, 2025](/news/2025/02/06/cross-targeting-closing/), the features to set and check the public/private setting of audiences created with the Messaging API has been discontinued as of March 26, 2025.

### Endpoints that have been discontinued

The following endpoints have been discontinued:

- Change the authority level of the audience
- Get the authority level of the audience
- Activate audience

### Details

In order to use audiences created with the Messaging API in the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}, it was previously necessary to set the audience's authority level to `PUBLIC` using the "Change the authority level of the audience" endpoint in the Messaging API.

As of March 26, 2025, this conventional feature for setting the audience authority level to public or private has been discontinued.

The audiences in the Messaging API and the LINE Official Account Manager continue to be mutually usable. In addition, all existing audiences that were set to private (`PRIVATE`) and couldn't be used with the LINE Official Account Manager are now available.

| Tool that creates   audience  | Tool that uses   audience     | Authority level of   audience | Before   discontinuation | After   discontinuation (current) |
| ----------------------------- | ----------------------------- | ----------------------------- | ------------------------ | --------------------------------- |
| Messaging API                 | LINE Official Account Manager | Private                       | ❌                        | ✅                                 |
| Messaging API                 | LINE Official Account Manager | Public                        | ✅                        | ✅                                 |
| LINE Official Account Manager | Messaging API                 | Private                       | ❌                        | ✅                                 |
| LINE Official Account Manager | Messaging API                 | Public                        | ✅                        | ✅                                 |

✅: "Tool that uses audience" can use the audience.  
❌: "Tool that uses audience" can't use the audience.

For more information about how to use audiences created with the Messaging API in other tools, see [Share audiences](/docs/messaging-api/using-audience/#audience-sharing) in the Messaging API documentation.
