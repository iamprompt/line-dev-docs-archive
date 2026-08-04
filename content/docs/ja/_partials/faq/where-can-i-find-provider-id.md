---
title: プロバイダーIDはどこで確認できますか？
navigation: true
description: プロバイダーIDは、LINE Developersコンソールで確認できます。
meta: >-
  {"date":"2021-06-21 00:00 UTC","tags":"console, line-platform, line-login,
  liff, line-mini-app, messaging-api","priority":null,"locale":"ja"}
path: /ja/_partials/faq/where-can-i-find-provider-id
__hash__: I6YrSBpvYbJrfBIq3wUKe2aoxC6a7e9sRg-SjNGYWhI
seo:
  title: プロバイダーIDはどこで確認できますか？
  description: プロバイダーIDは、LINE Developersコンソールで確認できます。
---

プロバイダーIDは、[LINE Developersコンソール](/console/)で確認できます。

- プロバイダーのAdmin権限がある場合  
[LINE Developersコンソール](/console/)でプロバイダーを選択して、［**プロバイダー設定**］タブをクリックします。「**基本情報**」の項目に、プロバイダーIDが表示されます。  
![Provider ID Admin](/media/faq/provider_2_ja.png){className="[\"border\",\"w-fix-720\"]"}
- プロバイダーのAdmin権限がない場合  
[LINE Developersコンソール](/console/)でプロバイダーを選択します。表示されたページのURLのうち、`/provider/`の後ろのセグメントがプロバイダーIDです。  
![Provider ID URL](/media/faq/provider_1_fix_ja.png){className="[\"border\",\"w-fix-720\"]"}
