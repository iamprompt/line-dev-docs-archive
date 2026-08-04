---
title: Use
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/use
__hash__: YsIGuhpdX3r_-LyGo0CLElbZAe04PQYr0Hygura9SIs
seo:
  description: ''
---

### liff.use()

::reference-with-code
  :::reference-content
  Activates and initializes LIFF API in the [pluggable SDK](/docs/liff/pluggable-sdk/) or a [LIFF plugin](/docs/liff/liff-plugin/).
  :::

  :::reference-code
  *Example of LIFF API in the pluggable SDK*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      import liff from "@line/liff/core";
      import GetOS from "@line/liff/get-os";

      liff.use(new GetOS());

      liff.init({
        liffId: "123456-abcedfg", // Use own liffId
      });
      ```
      :::::
    ::::

  *Example of LIFF plugin*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      class greetPlugin {
        constructor() {
          this.name = "greet";
        }

        install() {
          return {
            hello: this.hello,
          };
        }

        hello() {
          console.log("Hello, World!");
        }
      }

      liff.use(new greetPlugin());
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.use(module, option);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  module

  #undefined
  Object

  A LIFF API module in the pluggable SDK or a LIFF plugin.

  If you pass a LIFF API module, you need to instantiate the LIFF API module. For more information, see [How to use the pluggable SDK](/docs/liff/pluggable-sdk/#how-to-use) in the LIFF documentation.

  If you pass a LIFF plugin and the LIFF plugin is a class, you need to instantiate the LIFF plugin. For more information, see [Using a LIFF plugin](/docs/liff/liff-plugin/#use-liff-plugin) in the LIFF documentation.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  option

  #undefined
  Any value

  Value to pass to the LIFF plugin specified by the `module` property. The value is passed as the second argument of the LIFF plugin's [`install()`](/docs/liff/liff-plugin/#install) method. For more information, see [option](/docs/liff/liff-plugin/#option) in the LIFF documentation.
  :::
::

#### Return value

Returns the `liff` object.
