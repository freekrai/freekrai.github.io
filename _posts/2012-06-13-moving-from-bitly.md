---
layout: "post"
title: "Moving from bitly"
tags: 
- "code"
date: "2012-06-13 12:40:15"
ogtype: "article"
bodyclass: "post"
---

I’ve been using bitly for my shorter URLs for a few years now..

But when I moved this blog to second crack, I decided to use lessn for the shorter URLs and that’s worked well, the only thing was that my old URLs were on my old domain (strings.me) and my new URLs were on a new domain..

Last week, I decided to fix that.. And also to modify lessn to not use MySQL..

Instead, it’s using my [Lawnchair.php](https://github.com/freekrai/Lawnchair.php) library for JSON storage and it’s residing at strings.me again…

Part of this involved setting up an app on bitly to export my old links and store them locally, and then it was just a matter of changing the files.

Some of this is to test using Lawnchair.php in a more app setting, and some is to just stop relying on another service.

I’ve posted my modified version of [lessn on github](https://github.com/freekrai/LessnLawnChair), there’s still some work to do.. I have it collecting stats right now, and I’ll be making a nice stats section shortly for it, but otherwise, it is fully usable and working well..