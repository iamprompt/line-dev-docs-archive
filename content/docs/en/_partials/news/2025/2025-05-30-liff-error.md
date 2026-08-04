---
title: >-
  When identifying LIFF SDK errors, refer to both the error code and the error
  message
navigation: true
description: >-
  LIFF SDK errors are returned in LiffError objects. You can identify errors by
  referencing the values of each property of the LiffError object. We've seen
  implementations that identify errors based only on an exact match of the error
  message (the value of the message property in the LiffError object).
meta: '{"date":"2025-05-30 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2025/2025-05-30-liff-error
__hash__: b6Pu3XN6KzjgrA28tNY8NNUOVUhNYHxknwqIFhYFE7M
seo:
  title: >-
    When identifying LIFF SDK errors, refer to both the error code and the error
    message
  description: >-
    LIFF SDK errors are returned in LiffError objects. You can identify errors
    by referencing the values of each property of the LiffError object. We've
    seen implementations that identify errors based only on an exact match of
    the error message (the value of the message property in the LiffError
    object).
---

[LIFF SDK errors](/reference/liff/#liff-errors) are returned in `LiffError` objects. You can identify errors by referencing the values of each property of the `LiffError` object. We've seen implementations that identify errors based only on an exact match of the error message (the value of the `message` property in the `LiffError` object).

Since the error messages are subject to change without notice, identifying LIFF SDK errors based on an exact match of the error message may cause your LIFF app to malfunction. To ensure that your LIFF app continues to work properly even when error messages change, identify LIFF SDK errors by referring to both the error code (the value of the `code` property in the `LiffError` object) and the error message (the value of the `message` property in the `LiffError` object).

We plan to make improvements so that errors can be uniquely identified by error codes.
