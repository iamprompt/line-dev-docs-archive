---
title: Get Language
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/get-language
__hash__: tQNEdNxf56XRXLK5HSwkxcsIWu-pwQAbaTnpIJxXQsA
seo:
  description: ''
---

### liff.getLanguage()

::admonition
---
title: The liff.getLanguage() method is deprecated
type: note
---
The `liff.getLanguage()` method is deprecated. To get the language setting of the environment in which the LIFF app is running, use the [`liff.getAppLanguage()`](#get-app-language) method. For more information, see the news from [July 23, 2024](/news/2024/07/23/release-liff-2-24-0/).
::

Gets the language setting of the environment in which the LIFF app is running.

::admonition
---
title: This method can be used before the LIFF app is initialized
type: tip
---
You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.
::

#### Syntax

```javascript
liff.getLanguage();
```

#### Arguments

None

#### Return value

String containing language settings specified in `navigator.language` in the LIFF app's running environment.
