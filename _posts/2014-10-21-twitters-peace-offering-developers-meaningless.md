---
layout: "post"
title: "Twitter’s “peace offering” to developers is meaningless"
link: "http://www.marco.org/2014/10/20/wsj-twitter-peace-offering"
tags: 
- "links"
date: "2014-10-21 16:25:12"
ogtype: "article"
bodyclass: "post"
---

> [WSJ](http://online.wsj.com/articles/twitter-to-offer-new-tools-for-app-developers-1413770895):
> 
> > Twitter Inc. has a proposition for app makers: Let’s start over.
> > 
> > Two years ago, Twitter irked developers with stricter rules around applications that plug into the social-media service. This week Twitter hopes to regain their trust and attract a broader set of app makers when it hosts its first developer conference in four years.
> > 
> > As a peace offering, Twitter on Wednesday is expected to announce a suite of tools that aim to make it easier for programmers to build apps, according to people familiar with the matter.
> 
> I’m not sure whether this “let’s start over” talking point is coming from Twitter PR or the WSJ, but it’s misguided.
> 
> Twitter’s API requires OAuth not only for its alleged security improvements, which are [weak](http://seriot.ch/abusing_twitter_api.php), but also to **control and limit app developers.** If any app could make API calls with HTTPS Basic Auth like the original Twitter API, Twitter would have no reliable way to identify which requests came from which app, so they wouldn’t be able to enforce [their restrictions](https://dev.twitter.com/overview/terms/policy) and [branding requirements](https://dev.twitter.com/overview/terms/display-requirements). Any API that requires apps to register with the service and identify themselves with each request is politically unreliable because the service will always have a much bigger stick to wield whenever it’s convenient.
> 
> But that’s not the biggest problem — even an anonymous API is shaky ground because it can always change or disappear, like Twitter’s original API did. The problem is still the complete power over an increasingly important communication medium residing in a single company and its single centralized service.
> 
> Companies grow and change. Business needs change. Founders and leaders move on and get replaced.