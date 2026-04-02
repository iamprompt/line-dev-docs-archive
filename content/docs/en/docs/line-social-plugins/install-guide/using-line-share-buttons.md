---
title: Using Share buttons
navigation: true
description: >-
  You can easily create and add the Share button from LINE Social Plugins to the
  website of your choice. If you want to add this to iOS or Android native apps,
  we recommend that you use the Share with screen. For more information on how
  to add this screen, refer to the Using LINE Features with the LINE URL Scheme
  page.
meta: >-
  {"sidebar_title":"Using Share
  buttons","tags":null,"author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/line-social-plugins/install-guide/using-line-share-buttons
__hash__: PYOkgrixjXXzQSCu6YsWFu75VNy8TtB2NK0v-RByDXY
seo:
  title: Using Share buttons
  description: >-
    You can easily create and add the Share button from LINE Social Plugins to
    the website of your choice. If you want to add this to iOS or Android native
    apps, we recommend that you use the Share with screen. For more information
    on how to add this screen, refer to the Using LINE Features with the LINE
    URL Scheme page.
---

# :page-title

## About

You can easily create and add the Share button from LINE Social Plugins to the website of your choice. If you want to add this to iOS or Android native apps, we recommend that you use the "Share with" screen. For more information on how to add this screen, refer to the "[Using LINE Features with the LINE URL Scheme](/docs/line-login/using-line-url-scheme/)" page.

There are two ways to create the Share button. You can either create a button using the default designs provided by LY Corporation, or use your own design to create a custom icon.

## Using official LINE icons

Follow the steps below to create a Share button using the default designs provided by LY Corporation. All you need to do is simply select a language, enter the URL of a webpage where you want to add the button, and select a design for the button.

:button-generator{type="share"}## Using custom icons

You can see the link if you read and agree to the LINE Social Plugins usage guidelines below. You can create a Share button using your custom icon if you copy the link and apply it to your button.

:custom-share-generator::admonition{title="Tip" type="tip"}
Example (URL: `https://line.me/en`), (Text: `text`)

`https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fline.me%2Fen&text=text`
::

Once the DOM tree is constructed and content is produced on your site, call `LineIt.loadButton()` to enable the Share button.

```sh
<script type="text/javascript">LineIt.loadButton();</script>
```

    

 

For custom icons, you can check the number of shares by following the steps below.

#### HTTP request

`GET https://api.line.me/social-plugin/metrics?url=https://line.me/en`

#### Request parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  url

  #undefined
  String

  The URL to get the share count for.   

  (For example: `https://line.me/en`)
  :::
::

#### Sample request

```sh
curl -X GET 'https://api.line.me/social-plugin/metrics?url=https://line.me/en'
```

#### Sample response

```json
{
    "share": "4173",
}
```

#### Status codes

::parameter-table
  :::parameter-table-entry
  #undefined
  200

  #undefined
  OK

  The request succeeded.
  :::

  :::parameter-table-entry
  #undefined
  400

  #undefined
  Bad request

  The request contains invalid parameters or values.
  :::

  :::parameter-table-entry
  #undefined
  500

  #undefined
  Internal Server Error

  An internal server error occurred.
  :::
::

## Need more help?

- [FAQs](/faq/tags/sp-share/)

:bottom-plugin
