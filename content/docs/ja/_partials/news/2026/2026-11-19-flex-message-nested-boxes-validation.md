---
title: Messaging APIにおいて、Flex Messageのボックスをネストできる深さを制限しました
navigation: true
description: Messaging APIにおいて、Flex Messageのボックス内に別のボックスを繰り返し配置（ネスト）できる深さを制限しました。
meta: '{"date":"2026-11-19 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2026/2026-11-19-flex-message-nested-boxes-validation
__hash__: dJG5VUAbxM6FNgvDphEUbJBODl6gqpn-eoM43b-fpV8
seo:
  title: Messaging APIにおいて、Flex Messageのボックスをネストできる深さを制限しました
  description: Messaging APIにおいて、Flex Messageのボックス内に別のボックスを繰り返し配置（ネスト）できる深さを制限しました。
---

Messaging APIにおいて、Flex Messageの[ボックス](/reference/messaging-api/#box)内に別のボックスを繰り返し配置（ネスト）できる深さを制限しました。

### 仕様変更日

2026年11月19日

### 変更内容

ボックスをネストできる深さは、これまで制限していませんでしたが、最大20階層に制限する仕様変更を行いました。一番外側のボックスを1階層目、その子ボックスを2階層目として、順に数えます。

Messaging APIで、ネストの深さが20階層を超えるFlex Messageを送信すると、`400 Bad Request`が返されます。

ボックスの仕様について詳しくは、『Messaging APIリファレンス』の「[ボックス](/reference/messaging-api/#box)」を参照してください。
