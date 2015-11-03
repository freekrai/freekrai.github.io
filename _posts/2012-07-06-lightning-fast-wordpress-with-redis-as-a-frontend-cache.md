---
layout: "post"
title: "Lightning Fast WordPress with Redis as a Frontend Cache"
link: "http://www.jimwestergren.com/wordpress-with-redis-as-a-frontend-cache/"
tags: 
- "links"
date: "2012-07-06 15:07:10"
ogtype: "article"
bodyclass: "post"
---

> Redis is an advanced key-value store. Like memcached on steroids. Everything is in the RAM and you can theoretically reach 100 000 GET per second with Redis.
> 
> My solution below will cache all the HTML output in Redis and display it without the need to load WordPress. I am using Redis instead of Varnish as it is easier to setup and probably also faster.

Interesting way to use Redis for WordPress caching.. I have a couple larger WordPress projects that might be able to benefit from trying this out..