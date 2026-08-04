---
title: >-
  [Updated] As of March 29, 2022, only users who have agreed to the privacy
  policy (revised March 2022) will be added to an audience for uploading user
  IDs
navigation: true
description: ''
meta: '{"date":"2022-03-15 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2022/2022-03-15-upload-audience-group-specification-change
__hash__: ekV7QmKL1N0On6ielTGZOOD02lnv3vE2C_TFBuEtHnc
seo:
  title: >-
    [Updated] As of March 29, 2022, only users who have agreed to the privacy
    policy (revised March 2022) will be added to an audience for uploading user
    IDs
  description: ''
---

::admonition{title=" Added on March 24, 2022" type="note"}
The [scheduled date of change](#update-audience-date-20220315) was announced as March 24, 2022, but has been changed to March 29, 2022.
::

As announced on "[Revisions to the LINE Corporation Privacy Policy](https://guide.line.me/privacy-policy_update/2022/0001/?lang=en-jp){rel="[\"nofollow\"]"}," we've made changes to the LINE Privacy Policy.

With the changes to the LINE Privacy Policy, we plan to change specifications to add only users who have agreed to the revised privacy policy when you add the user IDs to an audience for uploading user IDs.

### Scheduled date of change

March 29, 2022

### Impact

As of March 29, 2022, when adding user IDs to an audience, if the user IDs include those of users who haven't agreed to the privacy policy, users who haven't agreed will be ignored and only users who have agreed will be added.

Therefore, the number of valid recipients of the audience may be less than that of user IDs specified.

The affected APIs by this specification changes are as follows:

- [Create audience for uploading user IDs (by JSON)](/reference/messaging-api/#create-upload-audience-group)
- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)](/reference/messaging-api/#update-upload-audience-group)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)

::admonition
---
title: >-
  Users who haven't agreed to the privacy policy at the time of audience
  creation won't be automatically added to the audience even if they agree to
  the privacy policy afterwards
type: note
---
To add users who agree to the privacy policy after creating an audience, use the API again.
::

LINE will continue to improve the quality of its services for its customers. Thank you for your understanding.
