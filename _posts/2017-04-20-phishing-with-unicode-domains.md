---
layout: post 
published: true 
title: "Phishing with Unicode Domains" 
date: 2017-04-20T22:52:38.528Z 
link: https://www.xudongz.com/blog/2017/idn-phishing/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

Xudong Zheng:

> Punycode makes it possible to register domains with foreign characters. It works by converting individual domain label to an alternative format using only ASCII characters. For example, the domain “xn--s7y.co” is equivalent to “短.co”.
> 
> From a security perspective, Unicode domains can be problematic because many Unicode characters are difficult to distinguish from common ASCII characters. It is possible to register domains such as “xn--pple-43d.com”, which is equivalent to “аpple.com”. It may not be obvious at first glance, but “аpple.com” uses the Cyrillic “а” (U+0430) rather than the ASCII “a” (U+0061). This is known as a homograph attack.

Take a look at his example of making Apple.com’s URL look correct but end up at a potential phishing site.
