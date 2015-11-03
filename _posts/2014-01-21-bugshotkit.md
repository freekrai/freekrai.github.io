---
layout: "post"
title: "BugshotKit"
link: "http://www.marco.org/2014/01/20/bugshotkit"
tags: 
- "links"
date: "2014-01-21 17:25:25"
ogtype: "article"
bodyclass: "post"
---

Marco Arment:

> I’m starting the Overcast beta soon, and I wanted an easy way for my testers to report (non-crash) bugs and provide UI feedback. I also wanted a way to remind myself of UI or feature ideas easily, and I’ve occasionally needed to view the error console on the device when tracking down difficult bugs.
> 
> BugshotKit addresses all of these: it’s an embeddable Bugshot annotation interface and console logger, invoked anywhere in your app by an otherwise unused gesture (e.g. a two-finger swipe up, a three-finger double-tap, pulling out from the right screen edge, etc.), that lets you or your testers quickly email you with helpful details, screenshots, and diagnostic information.

I’m an avid user of Bugshot, and like this new direction Marco’s taken with his code.

After it’s release last night, I added BugshotKit to an app I’m working on, and it works great:  screenshot annotations and logging are available in a single screen that doesn’t require you to switch between apps, save screenshots, copy logs, and put everything together in Mail.

If you are an app developer and you’re building an app, I urge you to consider implementing [BugshotKit](https://github.com/marcoarment/BugshotKit "marcoarment/BugshotKit · GitHub") to have happier, more efficient beta testers.