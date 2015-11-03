---
layout: "post"
title: "Related Posts without a plugin"
tags: 
- "code"
date: "2014-01-22 19:58:14"
ogtype: "article"
bodyclass: "post"
---

This site uses related posts, but it doesn’t use a plugin to load them, instead it uses a weighted search system which is similar to what other related posts plugins use.

I’ve had this code around for a while, and have used it on various other projects, but this is the first time I’ve added it to this site.

This will search based on three criteria: post title, post content, and taxonomies the post belongs to. Each of these are weighted and can be adjusted. I currently place a heavier weight on titles and taxonomies than post content, but that is easily adjustable.

Here’s the class:

<script src="https://gist.github.com/8564097.js"></script>You add that to your theme, and include it, then inside your single.php loop, you add this code:

<script src="https://gist.github.com/8565373.js"></script>I included the related.class.php file in that code, but you can (*and should*) include it inside functions.php instead.

What this does, is return a list of related post ids, based on the post title, post content, categories and tags the post is in.

When you pass the call to related, you can customize what appears by setting the following variables: post id, limit, strict limit, and weight which is an array with the keys of body,title and tax.

As seen in this example:

<script src="https://gist.github.com/8566195.js"></script>Adjusting the weights will change your related results.

There’s no doubt room for improvement, and as I tweak the code, I’ll update the gist.