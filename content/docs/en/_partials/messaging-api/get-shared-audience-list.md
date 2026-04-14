---
title: Get Shared Audience List
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-shared-audience-list
__hash__: cwEUFFOMruOctkdya7xfeuFxBbufpnv2wCOzp0g_LrQ
seo:
  description: ''
---

### Get a list of shared audiences in Business Manager

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/shared/list"}::reference-with-code
  :::reference-content
  Gets a list of shared audiences in [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"} (only available in Japanese).

  You can get more detailed information about each audience by using the [Get shared audience data in Business Manager](#get-shared-audience) endpoint.

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
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/list \
      --data-urlencode 'page=1' \
      --data-urlencode 'description=audienceGroupName' \
      --data-urlencode 'size=40' \
      --data-urlencode 'createRoute=OA_MANAGER' \
      -G \
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

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  page

  The page to return when getting (paginated) results. Must be `1` or higher. If omitted, page 1 is retrieved.

  If you want to retrieve all audiences, repeat the request while incrementing the `page` parameter until the `audienceGroups` array in the response is less than the page size (`size`).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  The name of the audience(s) to return. You can search for partial matches. This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical. If omitted, the name of the audience(s) will not be used as a search criterion.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  status

  The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion. One of:

  - `IN_PROGRESS`: Pending.
  - `READY`: Ready to accept messages.
  - `FAILED`: An error occurred while creating the audience.
  - `EXPIRED`: Expired. Audiences are automatically deleted a month after they expire.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  size

  The number of audiences per page. Default: `20`   

  Max: `40`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  createRoute

  How the audience was created. If omitted, all audiences are included.

  - `OA_MANAGER`: Return only audiences created with [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}.
  - `MESSAGING_API`: Return only audiences created with Messaging API.
  - `POINT_AD`: Return only audiences created with [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (only available in Japanese).
  - `AD_MANAGER`: Return only audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}.
  - `BUSINESS_MANAGER`: Return only audiences created with [Business Manager](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}.
  - `YAHOO_DISPLAY_ADS`: Return only audiences created with [LY Ads Display Ads](https://www.lycbiz.jp/en/#advertising){rel="[\"nofollow\"]"}.

  If you specify multiple parameters, the OR condition is used.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  includesOwnedAudienceGroups

  The setting that indicates whether to include the audiences created by your LINE Official Account in addition to the shared audiences in Business Manager. The default value is `false`.

  - `true`: Get the audiences, including those created by your LINE Official Account
  - `false`: Get only the shared audiences in Business Manager
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroups

      #undefined
      Array

      An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].audienceGroupId

      #undefined
      Number

      The audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].createRoute

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
      audienceGroups[].type

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

      For more information, see the [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].description

      #undefined
      String

      The audience's name.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].status

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
      audienceGroups[].audienceCount

      #undefined
      Number

      The number of users included in the audience. To protect the users' privacy, 0 is returned when it is less than 20, unless the audience type is one of the following:

      - An audience used for uploading user IDs (in case of recipients being specified by their user IDs)
      - Chat tag audience

      Since the audience may include users who have already blocked LINE Official Account, the value of `audienceGroups[].audienceCount` and the number of users to whom messages will be sent will differ.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].created

      #undefined
      Number

      When the audience was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].permission

      #undefined
      String

      Update permissions for the audience. Returns `READ_WRITE` if the current Messaging API channel can update the target audience, or `READ` if it can't.

      - `READ`: Can use, but can't update the audience.
      - `READ_WRITE`: Can use and update the audience.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroups[].isIfaAudience

      #undefined
      Boolean

      The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:

      - `true`: Accounts are specified with IFAs.
      - `false` (default): Accounts are specified with user IDs.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].activated

      #undefined
      Number

      Time the audience was activated. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (only available in Japanese).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].inactivatedTimestamp

      #undefined
      Number

      Time of audience inactivation. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (only available in Japanese).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].expireTimestamp

      #undefined
      Number

      Audience expiration in UNIX time (in seconds). Only returned for specific audiences.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].webtraffic

      #undefined
      Object

      [Web traffic object](#get-shared-audience-list-response-webtraffic). This is only included when `audienceGroups[].type` is `WEBTRAFFIC` or `TRACKINGTAG_WEBTRAFFIC`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].requestId

      #undefined
      String

      The request ID that was specified when the audience was created. This is only included when `audienceGroups[].type` is `CLICK` or `IMP`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].clickUrl

      #undefined
      String

      The URL that was specified when the audience was created. This is only included when `audienceGroups[].type` is `CLICK` and the link URL is specified.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroups[].failedType

      #undefined
      String

      The reason why the operation failed. This is only included when `audienceGroups[].status` is `FAILED` or `EXPIRED`. One of:

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Insufficient number of users included in the audience (at least 50 are needed)
      - `INTERNAL_ERROR`: Internal server error
      :::::

      :::::parameter-table-entry
      #undefined
      hasNextPage

      #undefined
      Boolean

      `true` when this is not the last page.
      :::::

      :::::parameter-table-entry
      #undefined
      totalCount

      #undefined
      Number

      The total number of audiences that can be returned with the specified filter.
      :::::

      :::::parameter-table-entry
      #undefined
      readWriteAudienceGroupTotalCount

      #undefined
      Number

      Of the audiences you can get with the specified filter, the number of audiences with the update permission (`audienceGroups[].permission`) is `READ_WRITE`.
      :::::

      :::::parameter-table-entry
      #undefined
      page

      #undefined
      Number

      The current page number.
      :::::

      :::::parameter-table-entry
      #undefined
      size

      #undefined
      Number

      The maximum number of audiences on the current page.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Example of when there are two audiences that match the specified filter
      {
        "audienceGroups": [
          {
            "audienceGroupId": 1234567890123,
            "createRoute": "BUSINESS_MANAGER",
            "type": "WEBTRAFFIC",
            "description": "Web traffic audience",
            "status": "READY",
            "audienceCount": 4871,
            "created": 1668179144,
            "permission": "READ",
            "isIfaAudience": true,
            "webtraffic": {
              "webtrafficIsMyTag": false,
              "webtrafficBmTagSharingStatus": "SHARED",
              "webtrafficIsTagDeleted": false,
              "webtrafficTagCreateRoute": "OA_MANAGER"
            }
          },
          {
            "audienceGroupId": 3210987654321,
            "createRoute": "AD_MANAGER",
            "type": "IMAGE_CLICK",
            "description": "Image click audience",
            "status": "IN_PROGRESS",
            "audienceCount": 2234,
            "created": 1718895503,
            "permission": "READ",
            "isIfaAudience": true
          }
        ],
        "hasNextPage": false,
        "totalCount": 2,
        "readWriteAudienceGroupTotalCount": 0,
        "size": 40,
        "page": 1
      }

      // Example of when there is no audience that matches the specified filter
      {
          "audienceGroups": [],
          "hasNextPage": false,
          "totalCount": 0,
          "readWriteAudienceGroupTotalCount": 0,
          "size": 40,
          "page": 1
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
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "webtrafficIsMyTag": false,
        "webtrafficBmTagSharingStatus": "UNSHARED",
        "webtrafficIsTagDeleted": false,
        "webtrafficTagCreateRoute": "BUSINESS_MANAGER"
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

  | Code  | Description                              |
  | ----- | ---------------------------------------- |
  | `400` | An invalid query parameter is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid query parameter (400 Bad Request)
      {
        "message": "size: must be less than or equal to 40",
        "details": [
          {
            "message": "TOO_HIGH"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
