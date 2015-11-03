---
layout: "post"
title: "Justin Williams on Hosting Jekyll on Microsoft Azure"
link: "http://carpeaqua.com/2014/04/20/hosting-jekyll-on-azure-web-sites/"
tags: 
- "links"
date: "2014-04-21 21:24:01"
ogtype: "article"
bodyclass: "post"
---

Justin Williams:

> If you are reading this post, your DNS has successfully updated and you are viewing carpeaqua now hosted on Microsoft’s [Azure Web Sites](http://azure.microsoft.com/en-us/services/web-sites/) service. As I wrote in [Hurdles](http://carpeaqua.com/2014/02/24/hurdles/), the process of publishing this site is a 7-step process using[Jekyll](http://jekyllrb.com/). I am in the process of trying to simplify that process, and one of the first things was moving to a new host.
> 
> Why Azure? Well, for one I’m a fan of the platform. Glassboard uses it extensively for managing its API, web app, and data.
> 
> Second, it allows me to remove a step from my 7-step deployment story. Previously to publish this site, I would have to run a Rake command that would rsync my site’s content to the host. With Azure Web Sites, I’ve connected carpeaqua’s [public GitHub repository](https://github.com/justin/carpeaqua.com/) to Azure and it automatically listens for a new commit to `<code style="color: #111111;">master`. When it detects that new commit (it takes just a few seconds), it automatically updates and deploys the updated site.

Justin Williams recently moved his Web site to Azure. Microsoft has been getting a lot of play recently with Azure hosting apps and Web sites.

I actually have a few WordPress sites on Azure, and they are working pretty good so far…