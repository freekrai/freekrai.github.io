---
layout: "post"
title: "Neat Tip: Add A Recent Applications Stack to the Dock"
tags: 
- "articles"
date: "2012-05-28 00:00:41"
ogtype: "article"
bodyclass: "post"
---

I came across this handy tip a few days ago, and thought I’d post it for any other Mac users out there. :)

Launch the terminal and type the following command:


    defaults write com.apple.dock persistent-others -array-add '{ "tile-data" = { "list-type" = 1; }; "tile-type" = "recents-tile"; }'
    


Then you’ll have to restart the Dock by issuing the following command:


    killall Dock
    


The Dock will disappear for a moment then reappear. Your Dock will have a Recent Applications Stack located to the left of the Trash icon.

*If you ever want to get rid the stack, just drag it off the Dock and it will no longer show up.*