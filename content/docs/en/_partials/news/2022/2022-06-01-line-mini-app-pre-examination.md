---
title: >-
  In Japan, the pre-examination for LINE MINI Apps has been eliminated, making
  it easier to start development
navigation: true
description: >-
  We've made the following two changes to the process of releasing LINE MINI
  Apps in Japan:
meta: '{"date":"2022-06-01 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-06-01-line-mini-app-pre-examination
__hash__: Z_XL1ceH1KDYejJqYgbZ9xDOLmiMy0v5t5nixYCvH_k
seo:
  title: >-
    In Japan, the pre-examination for LINE MINI Apps has been eliminated, making
    it easier to start development
  description: >-
    We've made the following two changes to the process of releasing LINE MINI
    Apps in Japan:
---

We've made the following two changes to the process of releasing LINE MINI Apps in Japan:

1. The pre-examination has been eliminated
2. The submission of a [PSD file of the icon](/docs/line-mini-app/design/line-mini-app-icon/) is no longer required

By providing your service as a LINE MINI App, your users can use the service without downloading the service app. In addition, notifications of services offered on your LINE MINI App can be sent as [Service Messages](/docs/line-mini-app/discover/custom-features/#service-messages) free of charge, which will improve the user experience.

Until now, there have been two processes involved in the release of LINE MINI Apps: a pre-examination prior to development (LINE MINI App Development Program) and a release review prior to the release of LINE MINI Apps. With this change, the pre-examination has been eliminated.

In addition, the submission of PSD file of the icon, which was previously required, is no longer necessary. These changes have made it easier to start developing LINE MINI Apps.

::admonition{title="Creating LINE MINI App channel" type="tip"}
If you are unable to create a LINE MINI App channel even though your service area is Japan, try the following:

- If you are logged into the [LINE Developers Console](/console/) using your business account, link your business account to your LINE account. For more information on linking your business account to your LINE account, see [Link your business account with your LINE account](/docs/line-developers-console/login-account/#link-business-account-with-line-account) in the LINE Developers Console documentation.
::

For more information on the process of developing and publishing LINE MINI Apps, see [Overall Process](/docs/line-mini-app/quickstart/#overall-process).

### Notes on LINE MINI App development

Note the following three points regarding changes to the process of publishing in the LINE MINI Apps:

1. [Include the correct service description in the channel description](#mini-channel-description-20220601)
2. [Check the LINE MINI App policy](#mini-policy-20220601)
3. [Create your icons according to the guidelines](#mini-guideline-20220601)

#### 1. Include the correct service description in the channel description

With the elimination of the pre-examination, it's no longer necessary to submit a proposal. For this reason, during the release review process, the **Channel description** on the **Basic settings** tab of the [LINE Developers Console](/console/) will be checked in order to understand the contents of the service. Make sure to enter the correct service description in the **Channel description**.

![Channel description](/media/line-mini-app/line-mini-app-channel-description-en.png){className="[\"border\",\"w-fix-640\"]"}

For more information about channel description, see [Channel description](/docs/line-mini-app/discover/console-guide/#channel-description).

#### 2. Check the LINE MINI App policy

With the elimination of the pre-examination, the only opportunity to confirm whether or not your application can be released as a LINE MINI App is the release review. Check the [LINE MINI App policy](/docs/line-mini-app/submit/line-mini-app-policy/) when considering releasing your application as a LINE MINI App.

Also, for more information on the most frequently asked questions about the planning, examination and development of LINE MINI Apps, see [LINE MINI Apps](https://help.linebiz.com/lineadshelp/s/topic/0TO5i000000DxxsGAC/line%E3%83%9F%E3%83%8B%E3%82%A2%E3%83%97%E3%83%AA?language=ja){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

::admonition
---
title: Contact for inquiries regarding the release of LINE MINI Apps
type: tip
---
If, after checking the above, you're still unsure whether the service you are considering is suitable for release as a LINE MINI App, see [How can I check whether my service project is eligible for release before developing a LINE MINI App](https://help.linebiz.com/lineadshelp/s/article/L000002024?language=ja){rel="[\"nofollow\"]"} (only available in Japanese).

Note that the above page is only for those who intend to release LINE MINI Apps in Japan. The above page can only be used to check if the contents of the LINE MINI Apps you are planning to release are releasable.
::

#### 3. Create your icons according to the guidelines

In the LINE MINI App, it's no longer necessary to submit PSD files for icon, which was previously required.

Although the submission of PSD file is no longer required, continue to use the icon template and follow the guidelines to create icon that are easily recognizable by users.

For more information on icon template and guidelines, see [Creating a LINE MINI App icon](/docs/line-mini-app/design/line-mini-app-icon/).
