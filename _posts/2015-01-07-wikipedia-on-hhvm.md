---
layout: "post"
title: "Wikipedia on HHVM"
link: "http://hhvm.com/blog/7205/wikipedia-on-hhvm"
tags: 
- "links"
date: "2015-01-07 18:52:55"
ogtype: "article"
bodyclass: "post"
---

Wikipedia’s move to HHVM is a big win for Facebook’s alternative PHP engine.

I looked at running HHVM for Data McFly, but there were still way too many bugs and incompatibilities for my comfort. There’s still a while to go before it’s a drop-in replacement for everyone — as you can see, Wikipedia required a lot of custom work from HHVM’s developers — but it’s making progress.

I work with Node, Python, Ruby and Go on top of PHP, and I can’t help but think that most PHP developers and sysadmins would be better off either sticking with official PHP, because it is much easier and safer to rely on, or beginning a migration to a more widely supported new language that’s likely to have a longer useful lifespan.

Today, a large investment in HHVM or Hack seems to be worthwhile only if you’re paying much more for PHP CPU usage than engineering salaries, you have a lot of unused engineering capacity to migrate to and maintain the new setup (which takes more effort than official PHP because it’s so bleeding-edge), and your codebase is so large that it’s infeasible to start migrating away from PHP.