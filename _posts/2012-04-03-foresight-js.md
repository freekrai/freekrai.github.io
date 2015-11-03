---
layout: "post"
title: "foresight.js"
link: "https://github.com/adamdbradley/foresight.js"
tags: 
- "links"
date: "2012-04-03 12:16:25"
ogtype: "article"
bodyclass: "post"
---

Been dealing with media queries lately, and this project by Adam D. Bradley looks promising:

> Foresight.js gives webpages the ability to tell if the user’s device is capable of viewing high-resolution images (such as the 3rd generation iPad) before the image is requested from the server. Additionally, it judges if the user’s device currently has a fast enough network connection for high-resolution images.
> 
> Depending on device display and network connectivity, foresight.js will request the appropriate image for the webpage. It modifies context image requests, specifically the img src attribute, but the server does the image resizing. Media queries however should be used when dealing with CSS background-images, while foresight.js is used to handle inline img elements (or until current web standards are improved).