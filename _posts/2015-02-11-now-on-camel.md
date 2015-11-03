---
layout: "post"
title: "Goodbye WordPress, Hello Camel"
tags: 
- "blogging"
date: "2015-02-11 10:12:45"
image: "http://rogerstringer.com/media/camel.png"
ogtype: "article"
bodyclass: "post"
---

<div style="text-align:center">

![](http://rogerstringer.com/media/camel.png)

</div>

I spent the past few days migrating this blog from WordPress to the [Camel](https://github.com/cliss/camel) blog engine by [Casey Liss](http://www.caseyliss.com/).

And today, I'm happy to say, after several days of testing, the site has been pushed live on Heroku.

Camel is interesting because it's a semi-static blog engine written in node.js.

The version running on here is the same [modified version](https://github.com/DataMcFly/camel) I've been running the [Data McFly blog](http://blog.datamcfly.com) on since October, and it's been running smoothly for me over there so I decided to make this move this week.

At over a decade old, this blog has a lot of posts to it, so it's been interesting to convert from a database blog to a file system blog.

And yet, also not the first time I've done this move, as a few years ago, I spent a year on the second crack blog engine.

**Why Camel over other static blog engines?**

Primarily, Camel handles archives really nicely, which means less work setting up how to see a year's, a month's or even a day's worth of posts. 

I've added code to support [categories](/tags/) to help organize posts, but that was pretty straight forward to add in.

Otherwise, I like being able to use apps such as Byword or Editorial to edit posts over the WordPress app.

The workflow for this blog is the same as the Data McFly blog, so posts are drafted or edited on Dropbox, then deployed to the site on Heroku.

For the `most popular` posts section on the bottom of the site, formerly, this was a query to WordPress where I'd increment the views to each post by 1 and then grab the five most popular, since this site no longer uses a database, I went to a resource that I am infinitely familiar with[^1], and built a most popular posts tracker inside [Data McFly](http://datamcfly.com), so that when on a post, I increment the views by 1, same as the old method, then I use javascript to return the five most popular posts.

Currently, there are over 2549 articles, so I think this is easily one of the largest sites running Camel to date. :)

[^1]: Mostly because I am the founder, and lead developer of the system :)