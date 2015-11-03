---
layout: "post"
title: "Fix for JetPack and the WordPress SEO plugin double open graph tags"
tags: 
- "code"
date: "2012-12-05 22:02:11"
ogtype: "article"
bodyclass: "post"
---

I use jetpack for some things, and I use the WordPress SEO plugin for a lot of things, so when I found out they were doing double open graph tags for facebook in the header, I started looking at fixes..

There are some fixes here on [the post at yoast.com](http://yoast.com/jetpack-and-wordpress-seo/#utm_source=rss&utm_medium=rss&utm_campaign=jetpack-and-wordpress-seo), but those fixes didn’t work for me.

The fix that worked was to add this line:


    remove_action('wp_head','jetpack_og_tags');
    


into my functions.php, and voila, only one set of open graph tags on the site..