---
layout: "post"
title: "Open URLs in Chrome for iPhone Instead of Mobile Safari"
link: "http://blog.jonabrams.com/post/26099585134/open-in-chrome"
tags: 
- "links"
date: "2012-06-30 00:51:57"
ogtype: "article"
bodyclass: "post"
---

Jon Abrams:

> Already it’s pretty clear that it’s a much better browser than iOS’s default Safari browser. Unfortunately, even if you want to use Chrome, clicking a link in any other iOS app will launch Safari.
> 
> My current workaround is this bit of javascript that will launch the current page in Chrome. Just copy and paste it into a bookmark in Safari, then if you ever find yourself in Safari, but would rather be in Chrome, tap the bookmark and voila! You’re now in Chrome but on the same page!


    javascript:location.href="googlechrome"+location.href.substring(4);
    


**Install instructions:**

1. Copy the code above.
2. Bookmark this page.
3. Open the Safari bookmarks, click “edit”, and edit the new bookmark.
4. Rename it to “Open in Chrome” or something like that.
5. Delete the URL that’s there and paste in the above code.