---
layout: "post"
title: "Apple drops discoveryd in latest OS X beta following months of network issues"
date: "2015-05-27 10:00"
tags: 
- "links"
link: "http://9to5mac.com/2015/05/26/apple-drops-discoveryd-in-latest-os-x-beta-following-months-of-complaints-about-network-issues-with-yosemite/"
ogtype: "article"
bodyclass: "post"
---

Benjamin Mayo, for 9to5Mac:

> Looking at Activity Monitor on OS X 10.10 seed 4, discoveryd is no longer loaded by the system — instead relying on mDNSResponder. The ‘new’ process is really the one Apple used to use pre-Yosemite and did not have these problems.
> 
> It is still unclear why the change in the networking stack was ever made given that the old process worked so well and the new process had so many issues. There has been some speculation that the new stack is related to AirDrop and Handoff functionality although testing showed that these features still worked when the system was reverted back to the old process.

`discoveryd` is just confusing, I have no idea how it even shipped to begin with, and I still haven’t heard a plausible explanation on what Apple was hoping to accomplish with it in the first place. What was the point of it?

And now to backtrack and abandon it after all this time? Someone at Apple is eating a lot of crow over this.