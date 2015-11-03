---
layout: "post"
title: "Quick Function: embed Gists in your wordpress posts with shortcode"
tags: 
- "code"
date: "2013-01-24 17:08:19"
ogtype: "article"
bodyclass: "post"
---

I’m trying to start using Gists for most code on here now, especially longer code that may get updated. But I also wanted to make it work as short code, hence this particular piece of code:

<script src="https://gist.github.com/4625115.js"></script>

Place this in your `functions.php` file and then all you have to do to embed a gist on your site is add `[gist 4625115]`.

It’s handy, otherwise, you’d grab the embed code, which I admit isn’t much work to do, but I felt lazy at the time. :)