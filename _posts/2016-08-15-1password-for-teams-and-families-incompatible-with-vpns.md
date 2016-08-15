---
layout: post 
published: false 
title: "1Password for Teams and Families incompatible with VPNs" 
date: 2016-08-15T21:22:30.853Z 
link: http://dafacto.com/2016/1password-for-teams-and-families-incompatible-with-vpns/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

Matt Henderson:

> One of the services for which I’ve truly been happy to pay is 1Password for Families, which allows my wife and I to centrally manage information vaults that are shared among ourselves, and among our kids, across all our Mac and iOS devices.
> 
> Some time ago, I wrote about how I [secure our home network with a VPN](http://dafacto.com/2016/how-to-protect-your-home-network-with-a-vpn-router/). After doing that, we began having to frequently respond to CAPTCHAs when accessing any website that uses the CloudFlare security platform, as CloudFlare (understandably) doesn’t trust the IP addresses of the Private Internet Access VPN service that we use. This is an annoyance, but certainly something we can live with.

> Unfortunately, however, I recently discovered that all of our 1Password applications (iOS and Mac) have stopped syncing their data with 1Password’s servers. And to make matters worse, the apps don’t provide any feedback to the user that synchronization has failed! It was only after removing a Families account from one of the devices, and trying to add it back did I finally see a “No response from server” error.
> 
> […]
> 
> Right now, because so few users are affected by this, 1Password’s response is just: “Sorry, you can’t use our service if you’re going to use a VPN.” This seems short-sighted for the following reasons:
> 
> 1. The problem doesn’t only affect users on Private Internet Access IP addresses. It affects users on any IP address that CloudFlare distrusts. Currently that’s at least PIA users, and almost certainly includes other popular VPN providers. But over time, one can certainly expect that set of IP addresses will expand.
> 
> 2. More fundamentally, when accessing a website, CloudFlare provides a means by which a legitimate user on a distrusted IP address can successfully get through—by responding to a CAPTCHA. In other words, there’s a model in place by CloudFlare that anticipates false positives. _If you’re going to put your software API in front of CloudFlare, as 1Password has done, then you must also engineer a model and user experience that accounts for false positives_. (Perhaps CloudFlare offers a mechanism to surface a CAPTCHA like mechanism to the human user of an app that’s getting trapped on its API by CloudFlare.)

I like CloudFlare and 1Password, I've been a loyal user of both for several years, but they do need to have a way to detect something better for this. Maybe there aren't a lot of home VPN users, but there are more than they might think.