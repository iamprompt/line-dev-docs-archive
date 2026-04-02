---
title: Get App Language
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-app-language
__hash__: BXwasBUyW_xv5n3TozPJic7BqbD-S3olPls06r2rf9c
seo:
  description: ''
---

### liff.getAppLanguage()

Gets the language setting of the LINE app running the LIFF app.

::admonition
---
title: This method can be used before the LIFF app is initialized
type: tip
---
You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.
::

#### Conditions of use

LIFF SDK versions v2.24.0 or later

#### Operating conditions

All of the following conditions must be met for the `liff.getAppLanguage()` method to work correctly:

- The LIFF application is running on the ::glossary-tooltip{glossary-id="liff-browser"}
[LIFF browser](/glossary/#liff-browser)
::

.
- The LINE app version is 14.11.0 or later.

If the above conditions aren't met, the `liff.getAppLanguage()` method behaves the same as the [`liff.getLanguage()`](#get-language) method.

#### Syntax

```javascript
liff.getAppLanguage();
```

#### Arguments

None

#### Return value

The language setting of the LINE app running the LIFF app is returned as a string that follows [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646){rel="[\"nofollow\"]"}.
