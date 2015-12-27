---
layout: post 
published: false 
title: "    Stop Apple Photos from Auto Launching in OS X with One Command" 
date: 2015-12-27T05:47:51.019Z 
link: http://petapixel.com/2015/12/21/stop-apple-photos-from-auto-launching-in-os-x-with-one-command/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

> If you’re a Mac user and are annoyed that OS X automatically launches Apple Photos every time you connect a device or insert a memory card, there’s good news for you: you can disable the program from launching for all devices with a single command.
> 
> Melbourne-based photographer Ben Fon tells PetaPixel that all you need to do is Open up Terminal, and enter the following line:
> 
> defaults -currentHost write com.apple.ImageCapture disableHotPlug -bool YES
> 
> Then press Enter.