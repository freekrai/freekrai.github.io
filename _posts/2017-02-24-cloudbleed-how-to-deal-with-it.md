---
layout: post 
published: false 
title: "Cloudbleed: How to deal with it" 
date: 2017-02-24T17:23:24.603Z 
link: https://medium.com/@octal/cloudbleed-how-to-deal-with-it-150e907fd165#.l2mqxkha2 
tags:
  - links
ogtype: article 
bodyclass: post 
---

> Tavis Ormandy ([Tavis Ormandy](https://www.twitter.com/taviso)) of Google’s Project Zero uncovered a major vulnerability in the Cloudflare Internet infrastructure service. Essentially, web requests to Cloudflare-backed sites received answers which included random information from other Cloudflare-backed sites! 
> 
> This information could potentially include confidential information (private messages on dating sites, emails), user identity information (Personally Identifying Information (PII), and potentially in a healthcare context, Protected Health Information (PHI), or user, application, or device credentials (passwords, API keys, authentication tokens, etc.)
> 
> Both Project Zero and Cloudflare acted promptly. The bug was reported on 2017–02–17 and a mitigation was in place within an hour. Public notification was given on 2017–02–23.