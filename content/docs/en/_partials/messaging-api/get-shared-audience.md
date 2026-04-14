---
title: Get Shared Audience
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-shared-audience
__hash__: GaE0D7W1BYDHAL-2lbHNU05Z0Kq7nwp_qKtGXDcI3CY
seo:
  description: ''
---

### Get shared audience data in Business Manager

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId}"}::reference-with-code
  :::reference-content
  Gets a shared audience in [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"} (only available in Japanese).

    ::::admonition{title="About Business Manager" type="tip"}
    Business Manager allows you to share specific audiences across multiple services. By sharing audiences in Business Manager, you can better communicate with your end users.

    For more information, see [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"} (only available in Japanese) in LINE DATA SOLUTION.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per minute

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  The audience ID of the audience you want to get information about.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroup

      #undefined
      Object

      Audience group object.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceGroupId

      #undefined
      Number

      The audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.createRoute

      #undefined
      String

      How the audience was created. One of:

      - `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}
      - `MESSAGING_API`: Audience created with Messaging API
      - `POINT_AD`: Audience created with [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (only available in Japanese)
      - `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}
      - `BUSINESS_MANAGER`: Audience created with [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}
      - `YAHOO_DISPLAY_ADS`: Audience created with [LY Ads Display Ads](https://www.lycbiz.jp/en/#advertising){rel="[\"nofollow\"]"}
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.type

      #undefined
      String

      The audience type. One of:

      - `UPLOAD`: An audience used for uploading user IDs
      - `CLICK`: Message click audience
      - `IMP`: Message impression audience
      - `CHAT_TAG`: Chat tag audience
      - `FRIEND_PATH`: Friend path audience
      - `RESERVATION`: Reservation audience
      - `RICHMENU_IMP`: Rich menu impression audience
      - `RICHMENU_CLICK`: Rich menu click audience
      - `APP_EVENT`: App event audience
      - `VIDEO_VIEW`: Video view audience
      - `WEBTRAFFIC`: Web traffic audience (LINE Tag)
      - `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience (Tracking Tag)
      - `IMAGE_CLICK`: Image click audience
      - `POP_AD_IMP`: LINE Beacon Network ad impression audience

      For more information, see the [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/){rel="[\"nofollow\"]"} page on LINE for Business. This page isn't currently available in English.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.description

      #undefined
      String

      The audience's name.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.status

      #undefined
      String

      The audience's status. One of:

      - `IN_PROGRESS`: Pending. It may take several hours for the status to change to `READY`. If the number of users included in the audience is insufficient (at least 50 are required) for an audience with a user count restriction, the status will remain `IN_PROGRESS` and won't be updated.
      - `READY`: Ready to accept messages.
      - `FAILED`: An error occurred while creating the audience.
      - `EXPIRED`: Expired. Audiences are automatically deleted a month after they expire.
      - `INACTIVE`: The audience is inactive.
      - `ACTIVATING`: The audience is activating.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceCount

      #undefined
      Number

      The number of users included in the audience. To protect the users' privacy, 0 is returned when it is less than 20, unless the audience type is one of the following:

      - An audience used for uploading user IDs (in case of recipients being specified by their user IDs)
      - Chat tag audience

      Since the audience may include users who have already blocked LINE Official Account, the value of `audienceGroup.audienceCount` and the number of users to whom messages will be sent will differ.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.created

      #undefined
      Number

      When the audience was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.permission

      #undefined
      String

      Update permissions for the audience. Returns `READ_WRITE` if the current Messaging API channel can update the target audience, or `READ` if it can't.

      - `READ`: Can use, but can't update the audience.
      - `READ_WRITE`: Can use and update the audience.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.isIfaAudience

      #undefined
      Boolean

      The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:

      - `true`: Accounts are specified with IFAs.
      - `false` (default): Accounts are specified with user IDs.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].webtraffic

      #undefined
      Object

      [Web traffic object](#get-shared-audience-response-webtraffic). This is only included when `audienceGroups[].type` is `WEBTRAFFIC` or `TRACKINGTAG_WEBTRAFFIC`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.requestId

      #undefined
      String

      The request ID that was specified when the audience was created. This is only included when `audienceGroup.type` is `CLICK` or `IMP`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.clickUrl

      #undefined
      String

      The URL that was specified when the audience was created. This is only included when `audienceGroup.type` is `CLICK` and link URL is specified.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.failedType

      #undefined
      String

      The reason why the operation failed. This is only included when `audienceGroup.status` is `FAILED`. One of:

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Insufficient number of users included in the audience (at least 50 are needed)
      - `INTERNAL_ERROR`: Internal server error
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.activated

      #undefined
      Number

      Time the audience was activated. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.inactivatedTimestamp

      #undefined
      Number

      Time of audience inactivation. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.expireTimestamp

      #undefined
      Number

      Audience expiration in UNIX time (in seconds). Only returned for specific audiences.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs

      #undefined
      Array

      An array of jobs. This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs. Empty array is returned for any other type of audience.  
      Max: 50
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupJobId

      #undefined
      Number

      A job ID.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupId

      #undefined
      Number

      An audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].description

      #undefined
      String

      The job's description. If you don't specify a value with the `uploadDescription` property when adding a user ID or IFA, `null` will be returned.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].type

      #undefined
      String

      The job's type. One of:

      - `DIFF_ADD`: Indicates that a user ID or IFA was added via the Messaging API.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].status

      #undefined
      String

      This property is deprecated. See `jobs[].jobStatus` for the status of jobs.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].failedType

      #undefined
      String

      The reason why the operation failed. This is only included when `jobs[].jobStatus` is `FAILED`. One of:

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Insufficient number of users included in the audience (at least 50 are needed)
      - `INTERNAL_ERROR`: Internal server error

      If `jobs[].jobStatus` isn't `FAILED`, `null` is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceCount

      #undefined
      Number

      The number of accounts (recipients) that were added or removed.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].created

      #undefined
      Number

      When the job was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].jobStatus

      #undefined
      String

      The job's status. One of:

      - `QUEUED`: Waiting to run
      - `WORKING`: Running
      - `FINISHED`: Completed
      - `FAILED`: Failed
      :::::

      :::::parameter-table-entry
      #undefined
      owner.serviceType

      #undefined
      String

      Name of the service that created the audience. One of:

      - `bm`: Business Manager
      - `lap`: LINE Ads
      - `account`: LINE Official Account
      - `yda`: LY Ads
      :::::

      :::::parameter-table-entry
      #undefined
      owner.id

      #undefined
      String

      ID of the account that created the audience.
      :::::

      :::::parameter-table-entry
      #undefined
      owner.name

      #undefined
      String

      Name of the account that created the audience.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Example of a web traffic audience
      {
        "audienceGroup": {
          "audienceGroupId": 1234567890123,
          "createRoute": "BUSINESS_MANAGER",
          "type": "WEBTRAFFIC",
          "description": "Web traffic audience",
          "status": "READY",
          "audienceCount": 0,
          "created": 1668179144,
          "permission": "READ",
          "isIfaAudience": true,
          "webtraffic": {
            "webtrafficIsMyTag": false,
            "webtrafficBmTagSharingStatus": "SHARED",
            "webtrafficIsTagDeleted": false,
            "webtrafficTagCreateRoute": "OA_MANAGER",
            "webtrafficVisitType": "VISIT_ALL",
            "webtrafficRetentionDays": 30,
            "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
            "webtrafficConditionGroup": [],
            "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
          }
        },
        "jobs": [],
        "owner": {
          "serviceType": "bm",
          "id": "0123456789ABCDEFGHIJKLMNOP",
          "name": "LINE Developers"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Web traffic object

::reference-with-code
  :::reference-content
  Web traffic object represent webtraffic audience data.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      webtrafficIsMyTag

      #undefined
      Boolean

      - For LINE Tag: Returns `true` if the LINE Tag is created by the LINE Official Account linked to your Messaging API channel.
      - For Tracking Tag: Always returns `false`.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficBmTagSharingStatus

      #undefined
      String

      The value that indicates the Business Manager sharing status of the LINE Tag or Tracking Tag used in the web traffic audience.

      For LINE Tag, one of:

      - `SHARED`: Shared on the Business Manager.
      - `UNSHARED`: Not shared on the Business Manager.
      - `ERROR`: Tag details can't be retrieved due to a temporary error.

      For Tracking Tag, one of:

      - `SHARED`: The organization in the Business Manager that created the Tracking Tag is linked to the LINE Official Account.
      - `UNSHARED`: The organization in the Business Manager that created the Tracking Tag isn't linked to the LINE Official Account.
      - `ERROR`: Tag details can't be retrieved due to a temporary error.

      For more information on linking a Business Manager organization with a LINE Official Account, see [How to link a LINE Official Account to an organization](https://help.linebiz.com/lineadshelp/s/article/L000001362?language=ja){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficIsTagDeleted

      #undefined
      Boolean

      - For LINE Tag: Returns `true` if the LINE Tag used in this web traffic audience has already been deleted.
      - For Tracking Tag: Always returns `false`.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficTagCreateRoute

      #undefined
      String

      Routes that created the webtraffic audience. One of the following values:

      - `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}
      - `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}
      - `BUSINESS_MANAGER`: Audience created with [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficVisitType

      #undefined
      String

      Matching method for the LINE Tag or Tracking Tag. One of:

      - `VISIT_ALL`: All visiting users
      - `URL_MATCHING`: URL condition
      - `EVENT_MATCHING`: Event specification
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficRetentionDays

      #undefined
      String

      Retention period for the web traffic audience.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      webtrafficTagEventType

      #undefined
      String

      Type of event code. Only included if `webtrafficVisitType` is `EVENT_MATCHING`. One of:

      - `CONVERSION_EVENT`: Conversion codes
      - `CUSTOM_EVENT`: Custom event codes
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      webtrafficCustomEventName

      #undefined
      String

      Custom event name. Only included if `webtrafficVisitType` is `EVENT_MATCHING` and `webtrafficTagEventType` is `CUSTOM_EVENT`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      webtrafficMatchingType

      #undefined
      String

      Event matching method for the LINE Tag or Tracking Tag. Only included if `webtrafficVisitType` is `EVENT_MATCHING` or `URL_MATCHING`. Value is always `NORMAL`.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup

      #undefined
      Array

      Array of matching conditions.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup[].conditionType

      #undefined
      String

      Matching condition for keywords in the `keywords` array. One of:

      - `CONTAIN`: Contains keywords
      - `NOT_CONTAIN`: Does not contain keywords
      - `EQUAL_TO`: Matches keywords
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficConditionGroup[].keywords[]

      #undefined
      Array of strings

      Array of keywords used for matching criteria.
      :::::

      :::::parameter-table-entry
      #undefined
      webtrafficTagId

      #undefined
      String

      Tag ID for the LINE Tag or Tracking Tag.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      webtrafficTagOwnerName

      #undefined
      String

      Name of the account that issued the LINE Tag. This is only included when the web traffic audience uses a LINE Tag.
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "webtrafficIsMyTag": false,
        "webtrafficBmTagSharingStatus": "SHARED",
        "webtrafficIsTagDeleted": false,
        "webtrafficTagCreateRoute": "OA_MANAGER",
        "webtrafficVisitType": "VISIT_ALL",
        "webtrafficRetentionDays": 30,
        "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
        "webtrafficConditionGroup": [],
        "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                           |
  | ----- | ------------------------------------- |
  | `400` | A non-existent audience is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent audience (400 Bad Request)
      {
        "message": "audience group not found",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NOT_FOUND"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
