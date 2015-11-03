---
layout: "post"
title: "Easy, nice-looking footnotes with wp-bigfoot"
tags: 
- "code"
date: "2013-12-17 18:49:59"
ogtype: "article"
bodyclass: "post"
---

Marco Arment posted about a jquery plugin called “[Bigfoot](http://cmsauve.com/labs/bigfoot/)” a few days ago.[^1]

Footnotes are something I’ve been wanting to add to this site, and the style used by Instapaper was one I’ve liked, but hadn’t gotten around to building myself. Bigfoot works nicely by adding that style of footnotes to the site so I quickly turned it into a WordPress plugin.

When installed, you can add footnotes to a post via shortcodes [ footnote] and then end with a closing [ /footnote] so you would have:


```javascript
	Lorem ipsum. [ footnote]My note.[ /footnote]
```

But without the spaces between [ and footnote.]

I’ll add some further options later, but at the moment, you get your footnotes showing up as a handy popover where the footnote was specified and also as a list at the bottom of the post.

---

<div class="well" style="padding:5px; text-align:center;">

[Download the zip file](https://github.com/freekrai/wp-bigfoot/archive/master.zip)    or    [Fork it](https://github.com/freekrai/wp-bigfoot/)

</div>

I’ve also added the plugin to the wordpress.org plugin directory [here](wordpress.org/plugins/wp-bigfoot/)

[^1]: <a href="http://www.marco.org/2013/12/15/bigfoot">http://www.marco.org/2013/12/15/bigfoot</a>