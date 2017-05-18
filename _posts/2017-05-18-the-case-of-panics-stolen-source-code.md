---
layout: post 
published: true 
title: "The Case of Panics Stolen Source Code" 
date: 2017-05-18T10:31:34.197Z 
link: https://panic.com/blog/stolen-source-code/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

Steven Frank:

> Last week, for about three days, the [macOS video transcoding app HandBrake was compromised](https://blog.malwarebytes.com/threat-analysis/mac-threat-analysis/2017/05/handbrake-hacked-to-drop-new-variant-of-proton-malware/). One of the two download servers for HandBrake was serving up a special malware-infested version of the app, that, when launched, would essentially give hackers remote control of your computer.
> 
> In a case of extraordinarily bad luck, even for a guy that has a lot of bad computer luck, I happened to download HandBrake in that three day window, and my work Mac got pwned.
> 
> Long story short, somebody, somewhere, now has quite a bit of source code to several of our apps
> 
> Before I continue, three important points:
> 
> - There’s no indication any customer information was obtained by the attacker.
> - Furthermore, there’s no indication Panic Sync data was accessed.
> - Finally, our web server was not compromised.