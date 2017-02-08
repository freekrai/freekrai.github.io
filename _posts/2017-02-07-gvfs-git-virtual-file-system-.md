---
layout: post 
published: false 
title: "GVFS (Git Virtual File System)" 
date: 2017-02-08T05:37:24.653Z 
link: https://blogs.msdn.microsoft.com/visualstudioalm/2017/02/03/announcing-gvfs-git-virtual-file-system/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

Saeed Noursalehi:

> Here at Microsoft we have teams of all shapes and sizes, and many of them are already using Git or are moving that way. For the most part, the Git client and Team Services Git repos work great for them. However, we also have a handful of teams with repos of unusual size! For example, the Windows codebase has over 3.5 million files and is over 270 GB in size. The Git client was never designed to work with repos with that many files or that much content. You can see that in action when you run “git checkout” and it takes up to 3 hours, or even a simple “git status” takes almost 10 minutes to run. That’s assuming you can get past the “git clone”, which takes 12+ hours.
> 
> Even so, we are fans of Git, and we were not deterred. That’s why we’ve been working hard on a solution that allows the Git client to scale to repos of any size. Today, we’re introducing GVFS (Git Virtual File System), which virtualizes the file system beneath your repo and makes it appear as though all the files in your repo are present, but in reality only downloads a file the first time it is opened. GVFS also actively manages how much of the repo Git has to consider in operations like checkout and status, since any file that has not been hydrated can be safely ignored. And because we do this all at the file system level, your IDEs and build tools don’t need to change at all!

