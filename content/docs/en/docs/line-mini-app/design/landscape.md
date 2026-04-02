---
title: Safe area of LINE MINI App
navigation: true
description: >-
  To make every part of your LINE MINI App visible, even on devices with a
  notch, use CSS to contain LINE MINI App in safe area.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/design/landscape
__hash__: w8eeKnWwr8XOPeQeJwz-XyFnW1SlVA4p7JibpDnheec
seo:
  title: Safe area of LINE MINI App
  description: >-
    To make every part of your LINE MINI App visible, even on devices with a
    notch, use CSS to contain LINE MINI App in safe area.
---

# :page-title

:markdown-controlsTo make every part of your LINE MINI App visible, even on devices with a notch, we recommend to use CSS to contain LINE MINI App in safe area.
LINE MINI App supports both normal mode and landscape mode. Normal mode and landscape mode require different safe areas.

Set the padding of the LINE MINI App page as follows:

:toc## For normal mode

- Bottom: 34px

Example padding:

```text
{
  padding-bottom: 34px;
}
```

![](/media/line-mini-app/mini_design_safearea_normal.png){className="[\"w-fix-280\"]"}

## For landscape mode

- Left and right: 44px
- Bottom: 21px

Example padding:

```text
{
  padding-right: 44px;
  padding-bottom: 21px;
  padding-left: 44px;
}
```

![](/media/line-mini-app/mini_design_safearea_landscape.png){className="[\"w-fix-520\"]"}
