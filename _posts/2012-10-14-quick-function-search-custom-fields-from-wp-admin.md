---
layout: "post"
title: "Quick Function: Search Custom Fields From wp-admin"
tags: 
- "code"
date: "2012-10-14 16:03:23"
ogtype: "article"
bodyclass: "post"
---

Recently, I had to make it so you could filter posts in wp-admin by custom fields. By default, the search in wp-admin searches by title.

Add the following code to your functions.php file, and then you can search by custom field values in wp-admin:

<script src="https://gist.github.com/8527001.js"></script>It’s handy when you have a post type that uses several custom fields and you want to filter by the value instead of just the title, so enjoy this handy tool.