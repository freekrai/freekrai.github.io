---
layout: "post"
title: "Resetting Launch Services On Mountain Lion"
link: "http://furbo.org/2013/04/22/launch-services-woes/"
tags: 
- "links"
date: "2013-04-24 04:09:00"
ogtype: "article"
bodyclass: "post"
---

Craig Hockenberry:

> So, the next time you’re seeing general slowness on your Mac, don’t forget to give Launch Services a kick in the pants. Guaranteed to be more effective than zapping your PRAM.


    /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -kill -seed -r
    


Useful tip.. I ran into this on the MacBook Pro I use at the office and my air..