---
layout: "post"
title: "Serving iOS retina startup images for the new iPad"
link: "http://miniapps.co.uk/blog/post/serving-ios-retina-startup-images-for-the-new-ipad/"
tags: 
- "links"
- "mobile"
date: "2012-04-06 21:48:09"
ogtype: "article"
bodyclass: "post"
---

> In the past we have touched on how to serve iOS startup images for full screen web apps using both CSS media queries and JavaScript techniques. Now that the latest iPad sports a retina calibre display, we must again look at the best way to serve startup images in our web apps.
> 
> Given the potential bandwidth cost incurred by downloading such large images (2048 x 1496 landscape, 1536 x 2006 portrait), the most advisable technique is to use JavaScript to serve only the assets a device requires (rather than downloading every asset, which would happen if we used media queries). This can be done using the following code snippet in the of your page.