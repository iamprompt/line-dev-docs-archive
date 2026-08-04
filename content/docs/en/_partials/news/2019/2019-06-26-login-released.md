---
title: 'LINE Login: new parameters and properties added'
navigation: true
description: 'We''ve added new parameters and properties to LINE Login v2.1:'
meta: '{"date":"2019-06-26 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2019/2019-06-26-login-released
__hash__: ab-tG8tHbtduN7LjFzgGskui0xSPzr-JC1DMUFEK-9A
seo:
  title: 'LINE Login: new parameters and properties added'
  description: 'We''ve added new parameters and properties to LINE Login v2.1:'
---

We've added new parameters and properties to [LINE Login v2.1](/services/line-login/):

- The parameter `ui_locales` lets you specify the display language and script for LINE Login.
- The property `amr` specifies the authentication methods used in authentication. This corresponds to the OpenID Connect 1.0 `amr` Claim.  
The `amr` property is automatically added to all LINE login v2.1 enabled channels, so no additional development work is required.

See also [Integrating LINE login with your web app](/docs/line-login/integrate-line-login/). If you haven't integrated LINE Login yet, we hope you'll consider doing so now.

::admonition{title="Note" type="note"}
New or changed LINE Login functions may cause changes in the structure of the payload JSON object. These changes may include added properties, variations in property order, and added/removed white space and line breaks. Make sure your implementation can handle both current and future payload data objects.

Any functionality we offer may be changed without notice. However, we'll try notify you in advance if we believe that the change will significantly affect developers.
::
