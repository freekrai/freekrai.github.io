---
layout: "post"
title: "Hammer.js - Easily add multi-touch to your websites"
link: "https://github.com/eightmedia/hammer.js"
tags: 
- "links"
date: "2012-06-03 14:22:56"
ogtype: "article"
bodyclass: "post"
---

With the continued growth of mobile devices, handling touch (and multi-touch) events is no longer optional. Hammer.js is a small – dependency free – library that makes handling touch events dead simple.

You can easily add tap (touch/click), double tap, hold, drag (touchmove/mousemove), swipe, and transform (pinch) events to your website with very little code.


    var hammer = new Hammer(document.getElementById("hammertime"));
    hammer.ondoubletap = function(e){
        console.log("CAN touch this!");
    };
    


And if jQuery is your thing, they have a simple plugin that you can download as well.

[View the demo](http://eightmedia.github.com/hammer.js/) or [browse the source on GitHub](https://github.com/eightmedia/hammer.js).