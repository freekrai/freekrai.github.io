---
layout: "post"
title: "String Hashing in PHP"
tags: 
- "code"
date: "2012-08-28 01:22:33"
ogtype: "article"
bodyclass: "post"
---

I’ve been doing some work with Amazon’s Web Services like S3 and SimpleDB this week, and to relate records to each other, I wanted to use a [hashing algorithm](http://www.cse.yorku.ca/~oz/hash.html) instead of just a string..

For speed, I decided to use a DJB2 hash as shown below:

<script src="https://gist.github.com/8527310.js"></script>Using this function, a string like “bacon” becomes “134152229”..

Now as to why I’m using SimpleDB for a project.. Scalability.. SimpleDB is built for scalability, and also for use across multiplte platforms.. In the case of this project, it’s being used on a couple different interfaces such as a web app, iOS app, Android app, and multiple servers, so Simple DB makes sense here for what is needed..