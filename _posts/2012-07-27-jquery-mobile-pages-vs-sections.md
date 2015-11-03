---
layout: "post"
title: "JQuery Mobile: Pages vs Sections"
tags: 
- "code"
date: "2012-07-27 15:18:45"
ogtype: "article"
bodyclass: "post"
---

I get this question a lot:

> do you prefer using separate HTML pages or sections on one page for different sections of a jquery mobile project?

And to confuse things more, my [jquery mobile starter kit](http://rogerstringer.com/2012/07/07/jquery-mobile-starter) uses HTML pages…

I used pages for the starter kit so people can get a clearer view of everything without being too messy.

To be honest, it depends on the project…

Smaller projects work fine with sections while larger projects can benefit from HTML pages.. Since you can keep your sections organized better…

But here’s a catch…

Using sections are faster!

When you benchmark side by side, you get better performance by just having separate sections on one page compared to separate HTML files that are loaded by Ajax.

So in the end, I leave it to you, fellow coders, to choose which you want to use.