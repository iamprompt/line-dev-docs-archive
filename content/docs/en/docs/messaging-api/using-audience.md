---
title: Use audiences
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/using-audience
__hash__: PW0f4KA5bhMMH8tritnB9A7zFrNdVRQ34H4zfBqwE9M
seo:
  title: Use audiences
  description: null
---

# :page-title

:markdown-controlsAudiences help you to apply advanced targeting. For example, you can target a group of users who read your message or clicked a URL in a message.

::admonition{type="note"}
Only the LINE Official Accounts created by users in Japan, Thailand and Taiwan are permitted to create audiences.
::

::admonition{type="note" title="To use Identifiers for Advertisers (IFA)"}
You can use IFAs to specify recipients, but this is only available to corporate users who submit an application form. To use IFA with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## Create an audience

You can use the Messaging API to create audiences. Supported audience types are:

| Audience                                                                                  | Description                                                                                                                                |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Audience for uploading user IDs](/reference/messaging-api/#create-upload-audience-group) | A set of users specified with :glossary-tooltip[[user IDs](/glossary/#user-id)]{glossary-id="user-id"} or IFA (Identifier For Advertisers) |
| [Message click audience](/reference/messaging-api/#create-click-audience-group)           | A set of users who clicked a URL in a message sent                                                                                         |
| [Message impression audience](/reference/messaging-api/#create-imp-audience-group)        | A set of users who read a message sent                                                                                                     |

You can't create the following types of audiences with the Messaging API:

- Chat tag audience
- Friend path audience
- Reservation audience
- Rich menu impression audience
- Rich menu click audience
- Web traffic audience (LINE Tag)
- Web traffic audience (Tracking Tag)
- App event audience
- Video view audience
- Image click audience
- LINE Beacon Network ad impression audience

::admonition{type="note" title="Limit on concurrent operations"}
For user ID based audiences, the number of concurrent endpoint operations is limited per audience ID (`audienceGroupId`). This limitation is applied on creating an audience for uploading user IDs and adding user IDs to an audience. For more information, see [Limit on the number of concurrent operations](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations).
::

## Use audiences

You can use audiences to send narrowcast messages. For more information, see [Send narrowcast messages](/docs/messaging-api/sending-messages/#send-narrowcast-message).

## Share audiences

The Messaging API and the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} can use the audiences created for the same LINE Official Account with each other. There are no initial settings required to use audiences with each other.

If you want to use audiences between the Messaging API and tools other than the LINE Official Account Manager (such as the [LINE Ads Manager](https://admanager.line.biz/){rel="[\"nofollow\"]"}), you will need to set up audience sharing. For more information about how to share audiences, see [Share your audience in Business Manager](#audience-sharing-business-manager).

| Tool that creates audience                     | Tool that uses audience                        | Availability of audience |
| ---------------------------------------------- | ---------------------------------------------- | ------------------------ |
| Messaging API                                  | LINE Official Account Manager                  | ✅                        |
| LINE Official Account Manager                  | Messaging API                                  | ✅                        |
| Messaging API                                  | Tools other than LINE Official Account Manager | ✅ *1                     |
| Tools other than LINE Official Account Manager | Messaging API                                  | ✅ *1                     |

*1 Available if you share the audience in the Business Manager.

### Share your audience in Business Manager

The [Business Manager](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"} allows you to share specific audiences across multiple services (such as the LINE Ads Manager) and use the audiences with each other.

You can share audiences between Messaging API channels under the same provider by using the audience sharing function in the Business Manager. However, only verified accounts and :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"} can set audience sharing in the Business Manager.

You can get data of the shared audience in Business Manager by using the following endpoints:

- [Get a list of shared audiences in Business Manager](/reference/messaging-api/#get-shared-audience-list)
- [Get shared audience data in Business Manager ](/reference/messaging-api/#get-shared-audience)

For more information on how to share audiences, see [Sharing Resources](https://www.lycbiz.com/jp/manual/BusinessManager/BMmaniyuarushare003/){rel="[\"nofollow\"]"} (only available in Japanese) in the Business Manager manual.

## Audience specification

The audience specification is as follows.

| Property                                                                                                                                                                                                                     | Specification                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Number of audiences per channel                                                                                                                                                                                              | 1,000 at maximum                                                                                                           |
| Retention period                                                                                                                                                                                                             | 180 days (15,552,000 seconds) at maximum                                                                                   |
| Number of user IDs or IFAs uploadable per request to make an audience                                                                                                                                                        | - JSON: 10,000 at maximum - File: 1,500,000 at maximum                                                                     |
| Number of users per audience                                                                                                                                                                                                 | - Audience for uploading user IDs: No limit - Message click audience: Minimum 50 - Message impression audience: Minimum 50 |
| Time limit to create a retargeting audience:sup[[1](#user-content-fn-retargeting-audiences){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-retargeting-audiences}]   after you send a message | 60 days (5,184,000 seconds) at maximum                                                                                     |

For more information on narrowcast message restrictions, see [Restrictions on sending messages using attributes and audiences](/reference/messaging-api/#send-narrowcast-message-restrictions) in the Messaging API reference.

::section
---
className:
  - footnotes
dataFootnotes: ''
---
## Footnotes

1. This applies only on message click audience and message impression audience [↩](#user-content-fnref-retargeting-audiences){ariaLabel="Back to reference 1" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
::
