---
layout: "post"
title: "Grab first image in a post and store it as featured image"
tags: 
- "code"
date: "2014-06-19 18:28:29"
ogtype: "article"
bodyclass: "post"
---

In cases of older blogs, authors may not have used featured images, but lately, featured images are used more and more as you can use them to handle your blog layout better.

So what do you do on those posts that have no featured image?

This code is a set of functions that I’ve found handy to add to your functions.php.

It will search a post for the first attached image and store it as a featured image. This code also includes functions to check youtube or vimeo if the post has video instead of images:

<script src="https://gist.github.com/8609207.js"></script>In your loop.php, or single.php, or anywhere else you use featured images, you would then call it as such:

<script src="https://gist.github.com/18c9845778b68766e0d4.js"></script>