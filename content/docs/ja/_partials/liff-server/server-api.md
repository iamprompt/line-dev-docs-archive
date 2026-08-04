---
title: Server Api
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-server/server-api
__hash__: fIbkI-Xq3mcVbUuwv_JoTbcGN7lIghsSI_ncEJfTacY
seo:
  description: ''
---

::admonition{title="LIFF SDKとはバージョン番号が異なります" type="tip"}
サーバーAPIのバージョン番号は、LIFF SDKのバージョン番号とは異なります。現在公開されているLIFF SDKのバージョンは`v2`ですが、サーバーAPIのバージョンは`v1`です。
::

## サーバーAPI

### チャネルアクセストークンを準備する

LIFFのサーバーAPIは、LINEログインチャネル上のLIFFアプリを操作するためのAPIです。このため、サーバーAPIを利用するには、LINEログインチャネルのチャネルアクセストークンが必要です。利用できるチャネルアクセストークンの種類は、[短期のチャネルアクセストークン](/reference/messaging-api/#issue-shortlived-channel-access-token)または[ステートレスチャネルアクセストークン](/reference/messaging-api/#issue-stateless-channel-access-token)です。
