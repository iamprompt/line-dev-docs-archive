---
title: >-
  Technical case study of anybot for ChatGPT: achieving smoother communication
  by fully leveraging ChatGPT
navigation: true
description: ''
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"en"}
path: /en/docs/messaging-api/technicalcase/evolany-ai
__hash__: 1OR4uQ-MIN2jGrYWW6p29-Tqr1elD_LIuxp8UIXPtVU
seo:
  title: >-
    Technical case study of anybot for ChatGPT: achieving smoother communication
    by fully leveraging ChatGPT
  description: ''
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-articles/"}![Evolany Co., Ltd.](/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_logo.webp){className="[\"w-fix-240\"]"}

**Evolany Co., Ltd.**

Evolany Co., Ltd. is an IT startup founded in Japan in 2018 by Song Yu and Christian Forestell. Under the motto of delivering the benefits of digital transformation (DX) to local shop owners, we strive to solve problems for various companies using digital technology, and have achieved a rapid growth of over 200% annually for four consecutive years. As of November 2022, we have supported more than 3,500 companies.

---

:toc---

## Development background of anybot for ChatGPT

“anybot for ChatGPT” leverages ChatGPT to deliver AI-driven responses to user queries based on pre-trained information. Facilitating internal communication and promoting communication with customers requires high costs, making it a very challenging area to find a fundamental solution. However, the advent of ChatGPT has enabled the accurate interpretation of natural language and the summarization and delivery of comprehensible responses without human intervention. Leveraging this potential, we decided to implement features that facilitate and promote communication through anybot. On the other hand, ChatGPT presents several limitations, including the inability to manage conversation histories, retain newly acquired information, and access up-to-date data (knowledge cutoff in September 2021 for ChatGPT-3 as of November 2023). These limitations are often cited as reasons why adoption among companies has been slow. Therefore, we decided to use our expertise accumulated through the provision of chatbots to date, to offer a safe service that addresses the weaknesses of ChatGPT—thus leading to the development of "anybot for ChatGPT."

### Image

![service-image](/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_overview_1.webp)

---

## Integration with LINE

### The LINE Official Account, which connects companies with customers

Since the introduction of the LINE Official Account, a growing number of companies have adopted LINE as a platform for customer engagement. With its extensive daily user base, LINE facilitates information delivery and can be considered a highly effective application connecting companies with LINE users. Therefore, we decided to use this tool that is already embedded in users’ daily lives to facilitate smoother communication.

### Strong interest from numerous companies and challenges

Since the product’s release, we have received more than 1,000 inquiries per month. As more companies use our service, the limitations of current ChatGPT capabilities and the challenge of determining how to best divide responsibilities between AI and human operators have become apparent. Accordingly, we are engaging in daily trial and error to determine if these issues can also be resolved.

### Efforts to improve the quality of training data

We retrieve data relevant to user inquiries from registered training data and utilize conversation history with users to enable ChatGPT to accurately understand the context and the intent behind inquiries. Furthermore, user input information and registered data are used for several purposes: compiling lists of user inquiries that anybot was unable to answer to encourage the registration of training data; switching the training data set based on user attributes; and notifying administrators during periods of OpenAI’s API instability or error detection, thereby facilitating preparation for potential risks. By storing inquiries from users and responses provided by our service, we contribute to the improvement of the quality of customers' training data and the optimization of settings. Note: Behavioral data linked to LINE accounts is collected and used only after obtaining user consent.

---

## System overview

![System architecture diagram](/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_system_diagram.webp)

### Customer support system using AWS and ChatGPT

In selecting our infrastructure, we chose services that meet specific needs. We adopted Amazon Simple Storage Service (AWS S3) to manage large volumes of training data, such as PDF files. Additionally, we use Amazon Elastic File System (AWS EFS) to provide high-speed and secure access to files that are frequently required during processing. This file storage service allows simultaneous access from multiple Amazon Elastic Container Service (hereinafter, "AWS ECS") instances and is utilized, for example, for searching processed training data.

We adopted AWS ECS to host our applications. Its purpose is to ensure stable service delivery through easy update management and the ability to scale in or out based on the number of accesses and load conditions. Furthermore, we introduced ChatGPT (OpenAI) for question-and-answer sessions. This AI tool can respond to user inquiries using natural language processing. ChatGPT (Azure OpenAI Service) is also used for similar purposes, catering to companies already familiar with the Azure environment or those wishing to utilize Microsoft Azure's security features.

### Improving infrastructure operation efficiency and enhancing security with AWS

Amazon CloudWatch (hereinafter, “AWS CloudWatch”) and Amazon Elastic Container Registry Service (hereinafter, “AWS ECR”) play important roles in our infrastructure operations. We use AWS CloudWatch for log management. This tool is a powerful service for monitoring and analyzing log data generated by both infrastructure and applications. We chose AWS CloudWatch for its ability to collect and monitor real-time data, allowing us to track system performance and respond quickly when necessary. It also plays a critical role in swiftly detecting unexpected system issues or security breaches, enabling effective countermeasures. Meanwhile, we use AWS ECR for update management. AWS ECR is a service that manages and securely stores containerized application images. We chose this tool primarily to simplify and streamline the application update process. Using AWS ECR facilitates version control of container images and enables consistent workflow from development to deployment. These operational tools support infrastructure performance monitoring and update process efficiency, playing an important role in enhancing system safety and security.

### Future outlook

While many AI-related services have a steep learning curve, we aim to provide services that allow users to achieve their objectives as easily as possible. We recognize that some users have concerns regarding the security and stability of ChatGPT. In line with our existing approach, we will continue to maintain services that maximize its strengths while addressing its weaknesses.

### Requests for the LINE API

Generative AI for language has the characteristics of generating responses one token at a time, rather than all at once. Consequently, it takes some time for the full text to be generated. Therefore, from a UI/UX perspective, we believe the ability to stream responses and display content will become critical for practical use. We would welcome future support for streaming functionality for sending content within the LINE platform.

### A message for those developing new services

We believe that generative AI services are on the brink of a new era. While the field remains complex, with rapid technological evolution and shifting regulatory landscapes, we are excited at the prospect of contributing to the advancement of generative AI services together with fellow developers.

---

## Related links

- [Evolany Co., Ltd.](https://evolany.com/en/){rel="[\"nofollow\"]"}
- [anybot](https://anybot.me/campaign){rel="[\"nofollow\"]"}
- [anybot for ChatGPT](https://chatgpt.anybot.me/){rel="[\"nofollow\"]"}
