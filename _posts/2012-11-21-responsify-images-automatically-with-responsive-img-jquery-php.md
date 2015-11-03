---
layout: "post"
title: "Responsify Images Automatically With Responsive Img (jQuery + PHP)"
link: "http://responsiveimg.com/"
tags: 
- "links"
date: "2012-11-21 19:16:20"
ogtype: "article"
bodyclass: "post"
---

We need different sizes of an image for responsive layouts so that they fit perfectly and so that visitors won’t need to download the full size when they are viewing from smaller screens.

However, it can be pretty time-consuming to create images with different sizes and “what is we need different sizes in the future”?

Responsive Img is a solution to all which combines a jQuery plugin with a PHP image pre-processor.

The plugin enables the page to change the src attributes of the images in parallel to the container width and the PHP file auto-creates the new/resized images.

Images are only created when requested for the first time and this process won’t be repeated for future requests to perform better.