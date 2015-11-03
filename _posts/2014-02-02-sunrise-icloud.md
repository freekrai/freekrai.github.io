---
layout: "post"
title: "Sunrise Calendar App No Longer Sends iCloud Credentials Over Network"
link: "http://blog.sunrise.im/post/74146344289/about-icloud"
tags: 
- "links"
date: "2014-02-02 23:44:43"
ogtype: "article"
bodyclass: "post"
---

Remember the [news](http://rogerstringer.com/2014/01/23/sunrise-calendar-app-asks-for-apple-id-and-password/ "Sunrise Calendar App Asks for Apple ID and Password") last week about the Sunrise calendar app for iOS asking users for their iCloud user name and password? I thought I’d share some news on an update they just implemented:

> Update: since our 2.11 version, we are not sending iCloud credentials to our servers, the app generates the secure token client-side. We use them to generate a secure token from Apple. This secure token is the only thing we store on our servers, we never store your actual iCloud credentials.

This is a good move on their part…