---
title: Webhook Signature Validation
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-signature-validation
__hash__: Ku2_MNuq3b6WsKO-nsRLfcyS7VWsiygjS36GZ4HlQM0
seo:
  description: ''
---

### Signature validation

::reference-with-code
  :::reference-content
  When the bot server receives a webhook event, verify the signature included in the request header before processing the [webhook event objects](/reference/messaging-api/#webhook-event-objects). This verification step is important to confirm that the webhook came from the LINE Platform and wasn’t tampered with during transmission.

  For more information, see [Verify webhook signature](/docs/messaging-api/verify-webhook-signature/).
  :::

  :::reference-code
  *Example of signature validation*

    ::::code-tabs
      :::::tab{lang="java"}
      ```java
      String channelSecret = '...'; // Channel secret string
      String httpRequestBody = '...'; // Request body string
      SecretKeySpec key = new SecretKeySpec(channelSecret.getBytes(), "HmacSHA256");
      Mac mac = Mac.getInstance("HmacSHA256");
      mac.init(key);
      byte[] source = httpRequestBody.getBytes("UTF-8");
      String signature = Base64.encodeBase64String(mac.doFinal(source));
      // Compare x-line-signature request header string and the signature
      ```
      :::::

      :::::tab{lang="ruby"}
      ```ruby
      CHANNEL_SECRET = '...' # Channel secret string
      http_request_body = request.raw_post # Request body string
      hash = OpenSSL::HMAC::digest(OpenSSL::Digest::SHA256.new, CHANNEL_SECRET, http_request_body)
      signature = Base64.strict_encode64(hash)
      # Compare x-line-signature request header string and the signature
      ```
      :::::

      :::::tab{lang="go"}
      ```go
      defer req.Body.Close()
      body, err := ioutil.ReadAll(req.Body)
      if err != nil {
        // ...
      }
      decoded, err := base64.StdEncoding.DecodeString(req.Header.Get("x-line-signature"))
      if err != nil {
        // ...
      }
      hash := hmac.New(sha256.New, []byte("<channel secret>"))
      hash.Write(body)
      // Compare decoded signature and `hash.Sum(nil)` by using `hmac.Equal`
      ```
      :::::

      :::::tab{lang="php"}
      ```php
      $channelSecret = '...'; // Channel secret string
      $httpRequestBody = '...'; // Request body string
      $hash = hash_hmac('sha256', $httpRequestBody, $channelSecret, true);
      $signature = base64_encode($hash);
      // Compare x-line-signature request header string and the signature
      ```
      :::::

      :::::tab{lang="perl"}
      ```perl
      use Digest::SHA 'hmac_sha256';
      use MIME::Base64 'encode_base64';

      my $channel_secret= '...'; # Channel secret string
      my $http_body = '...'; # Request body string
      my $signature = encode_base64(hmac_sha256($http_body, $channel_secret));
      # Compare x-line-signature request header string and the signature
      ```
      :::::

      :::::tab{lang="python"}
      ```python
      import base64
      import hashlib
      import hmac

      channel_secret = '...' # Channel secret string
      body = '...' # Request body string
      hash = hmac.new(channel_secret.encode('utf-8'),
          body.encode('utf-8'), hashlib.sha256).digest()
      signature = base64.b64encode(hash)
      # Compare x-line-signature request header and the signature
      ```
      :::::

      :::::tab{lang="nodejs"}
      ```javascript
      const crypto = require("crypto");

      const channelSecret = "..."; // Channel secret string
      const body = "..."; // Request body string
      const signature = crypto
        .createHmac("SHA256", channelSecret)
        .update(body)
        .digest("base64");
      // Compare x-line-signature request header and the signature
      ```
      :::::
    ::::
  :::
::
