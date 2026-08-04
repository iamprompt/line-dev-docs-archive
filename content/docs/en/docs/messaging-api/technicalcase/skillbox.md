---
title: >-
  SkillBox technical case study: LINE notifications greatly increased usage rate
  of engagement surveys, even for employees without email addresses
navigation: true
description: ''
meta: >-
  {"tags":"messaging-api","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/skillbox
__hash__: ACGaaqi37LeRQpNblxRWyrXxMWhLrwTroeeQQcd3Lq0
seo:
  title: >-
    SkillBox technical case study: LINE notifications greatly increased usage
    rate of engagement surveys, even for employees without email addresses
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![HRCOM Co.](/media/messaging-api/technicalcase/skillbox/en/skillbox-logo.png){className="[\"w-fix-240\"]"}

**HRCOM Co. Ltd.**

We are experts in improving employee engagement, facilitating the implementation of employee engagement surveys, including questionnaire design, analysis report creation, as well as the proposal and application of improvement measures. We also offer "SkillBox", a solution for enhancing engagement such as solving internal communication issues.

---

:toc---

## SkillBox, a praise-based mentor system

SkillBox is a praise-based mentor system that effortlessly enhances engagement. When comparing organizations with low engagement to those with high engagement, low-engagement organizations lack encouragement for employees, while high-engagement organizations offer frequent supportive feedback, such as "Nice work!", "Is there anything you're struggling with?" and "Keep it up!" SkillBox naturally creates a situation where both new employees and senior employees can frequently offer positive feedback to each other with just 1–2 minutes of interaction each week, thereby improving engagement.

Specifically, new employees conduct a weekly self-review by selecting either "Task completed" or "Not completed" for each item on a predefined action list. The self-review screen also includes an optional, free text field for the new employee to share their efforts or seek advice, allowing them to report their current status to their mentor. Mentors can react to the review with stickers or comments, allowing them to easily provide the necessary follow-up as a mentor through these interactions.

Through SkillBox, we aim to address the challenge of early turnover among young employees. More than 30% of university graduates leave their jobs within three years of joining a company,(*1) and many organizations view the turnover of young employees as a serious issue. Mentor programs are one approach to addressing this challenge. They have been adopted by 48% of companies, and 70% of those companies report that the programs are effective.(*2) However, in many cases, the burden placed on mentors—who are typically senior employees—through regular meetings and other commitments is significant. As a result, these programs are sometimes reduced to a formality at the discretion of individual teams. By utilizing SkillBox, companies can minimize the burden on mentors and ensure that the mentoring system functions properly, further reducing turnover rates.

*1: [Ministry of Health, Labour and Welfare: “Employment Status of New Graduates (March 2020 Graduates)"](https://www.mhlw.go.jp/content/11805001/001158687.pdf){rel="[\"nofollow\"]"}

*2: [HR Research Institute: “Survey on Employee Development: New Employee Training” – Report of Findings (2020)](https://hr-souken.jp/research/2550/){rel="[\"nofollow\"]"}

### Image

![service-image](/media/messaging-api/technicalcase/skillbox/en/skillbox-ui-img.png)

---

## Integration with LINE

### Requesting responses effectively with smart notifications

SkillBox leverages the LINE API to deliver notifications for requesting responses when messages are sent through the platform. Users are required to submit a weekly response reflecting on the week. However, when participation depends solely on users proactively logging in, a certain number of users may forget to respond. For this reason, sending response request notifications directly to users each week is extremely important. Initially, users were able to register their email addresses to receive notifications such as "Please submit your response for this week".

However, as the number of SkillBox users increased, we realized that, for example, among people working at stores such as restaurants, there are employees who do not have a company email address. Thus, we also needed a way to notify these people. In many cases, employees without a company email address also do not have a company-issued computer assigned to them individually. This created another challenge: determining which device they should use to submit their responses.

To address both issues, we concluded that users should be able to submit responses and receive notifications using their personal smartphones. As the ability to send notifications through an app that is used by nearly everyone with a smartphone was critical, we determined that using the LINE API was the most appropriate solution and decided to adopt it.

### Efforts to support the effective operation of the mentor program

As we do not perform segmented distribution for LINE notifications, we do not collect any specific data related to the notification delivery itself. However, from a service-wide data collection and utilization perspective, data is accumulated when users access SkillBox via LINE notifications and submit their responses on the platform. The collected data includes action list completion rates, response rates, and the content entered in the free-text fields. SkillBox uses this data to generate turnover alerts.(*3) In addition, mentors’ comments on the free-text responses are also collected as data. By analyzing this information, we have begun developing a generative AI feature that creates comment suggestions for mentors based on the submitted responses. Once this feature is completed, the system will be able to propose comment drafts, and if the suggested draft is appropriate, mentors will be able to send the comment to new employees with a single click, further reducing their burden.

*3: A turnover alert is a feature that detects employees requiring individual care and issues an alert.

---

## System overview

![System architecture diagram](/media/messaging-api/technicalcase/skillbox/en/skillbox-system.png)

### Technical architecture of AWS-based projects

We selected Amazon Web Services (AWS) as the core system infrastructure for our project. For the backend, we use Python, a programming language that allows machine learning models to be easily integrated. As the project framework, we adopted Flask, a lightweight framework that runs smoothly on both ECS and Lambda. Furthermore, we built a frontend environment in which Vue.js runs using CloudFront and S3, and a backend environment using ECS and Flask. We use Amazon Aurora as the database. ECS handles callbacks from the LINE API, while AWS Lambda executes scheduled notification processes for users via the LINE API. We use GitHub Actions for continuous integration (CI) and AWS CodePipeline for continuous delivery (CD). Since LINE is used specifically for notification purposes in this project, we use LINE WORKS and the Messaging API.

### Building response habits and contributing to lower turnover

SkillBox is now being adopted even by companies whose employees do not have company email addresses. Companies that have implemented SkillBox using LINE API integrations (LINE WORKS and the Messaging API) have given it highly favorable evaluations for being simple and easy to use. For example, a real-life case is Olive Spa, which operates beauty clinics across Japan. Previously, the company supported new employees using paper-based daily reports. SkillBox has been well received as a convenient evolution of that approach. Regarding the use of personal smartphones, the company commented that "there were no issues at all when operations began, and it was smoothly accepted at the workplace", and that "we genuinely feel it is helping to prevent employee turnover". (*4)

*4: [SkillBox case study: Olive Spa Co., Ltd.](https://www.skillbox.jp/eduken/interview006){rel="[\"nofollow\"]"}

### Future prospects for SkillBox feature improvements

We plan to continue improving SkillBox so that it becomes even more convenient to use and delivers greater results over time. One principle we emphasize internally is that the system must be enjoyable for users. This includes the functional aspects of the system, such as incorporating game-like elements through gamification, as well as operational considerations, such as how to encourage the habit of responding in a natural, low-stress way. Therefore, we believe it is important to continuously rethink how response request notifications are delivered and which devices will be used for submitting responses. In this regard, further refinement of our API integration with LINE may present additional opportunities. For example, future ideas include enabling users to submit responses on SkillBox directly via LINE Official Account, or allowing them to read comments made in SkillBox directly on the official account. While these are still conceptual at this stage, we aim to continue advancing initiatives that make SkillBox even more convenient for users.

### Requests for the LINE API

LINE API offers extensive documentation, which allowed us to implement it smoothly. While at present, notifications are sent via LINE and users enter their responses on the web, we also considered enabling responses to be made directly within LINE. However, for forms that require multiple selections or inputs, the flow for canceling or editing submitted responses tended to become complex, so we decided not to pursue this approach. We also use the LINE WORKS API for notification processing. In some cases, the error messages provided limited information, making it difficult to determine the exact cause of an error or narrow it down to a single factor.

### A message for those developing new services

We have been operating a service that uses the LINE API for more than two years. To date, we have encountered very few communication errors and other issues, and the service has proven to be consistently more stable than similar third-party services that we use at the same time.

---

## Related Links

- [HRCOM Co. Ltd.](https://hrcom.co.jp/){rel="[\"nofollow\"]"}
- [SkillBox](https://www.skillbox.jp/){rel="[\"nofollow\"]"}
