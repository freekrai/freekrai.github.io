---
layout: post 
published: true 
title: "How One Developer Broke Node, Babel, and Thousands of Projects" 
date: 2016-03-23T17:45:33.533Z 
tags:
  - code
ogtype: article 
bodyclass: post 
---

[Chris Williams](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/):

> A couple of hours ago, Azer Koçulu unpublished more than 250 of his modules from [NPM](https://www.npmjs.com/), which is a popular package manager used by JavaScript projects to install dependencies.
> 
> Koçulu yanked his source code because, we’re told, one of the modules was called Kik and that apparently [attracted the attention of lawyers](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rrf4u36oh) representing the instant-messaging app of the same name.
> 
> […]
> 
> Unfortunately, one of those dependencies was [left-pad](https://github.com/azer/left-pad/blob/master/index.js). The code is below. It pads out the lefthand-side of strings with zeroes or spaces. And thousands of projects including Node and Babel relied on it.

[Azer Koçulu](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.mfy88jega) ( via [Erik Aybar](https://twitter.com/erikthedev_/status/712408970225438720) ):

> When I started coding [Kik](https://github.com/starters/kik), didn’t know there is a company with same name. And I didn’t want to let a company force me to change the name of it. After I refused them, they reached NPM’s support emphasizing their lawyer power in every single e-mail CC’ing me.
> 
> […]
> 
> I’m apologize from you if your stuff just got broken due to this. You can either point your dependency to repo directly (azer/dependency) or if you volunteer to take ownership of any module in my Github, I’ll happily transfer the ownership