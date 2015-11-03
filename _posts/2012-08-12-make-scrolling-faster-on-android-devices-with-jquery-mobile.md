---
layout: "post"
title: "Make scrolling faster on android devices with jquery mobile"
tags: 
- "code"
date: "2012-08-12 23:01:38"
ogtype: "article"
bodyclass: "post"
---

Recently, when setting up a new jquery mobile app on Android, I ran into slowness related to scrolling..

The fix is simple, apply the following javascript to your html file, or to your javascript file you use for your application:


    <script>
        $(document).bind("mobileinit", function(){
            $.mobile.touchOverflowEnabled = false;
            $.mobile.defaultPageTransition = 'none';
            $.mobile.defaultDialogTransition = 'none';
            $.mobile.useFastClick = false
            $.mobile.buttonMarkup.hoverDelay = 0;  
            $.mobile.page.prototype.options.domCache = false;                   
            $.event.special.swipe.scrollSupressionThreshold = 100;
        });
        $(document).bind("touchstart", function(event){})
    </script>
    


Then in your CSS file, add this set of code:


    .ui-body-a, .ui-bar-a, .ui-btn-up-a,.ui-btn-hover-a,.ui-btn-down-a,
    .ui-body-b,.ui-bar-b,.ui-btn-up-b,.ui-btn-hover-b,.ui-btn-down-b,
    .ui-body-c,.ui-bar-c,.ui-btn-up-c,.ui-btn-hover-c,.ui-btn-down-c,
    .ui-body-d,.ui-bar-d,.ui-btn-up-d,.ui-btn-hover-d,.ui-btn-down-d,
    .ui-body-e,.ui-bar-e,.ui-btn-up-e,.ui-btn-hover-e,.ui-btn-down-e,
    .ui-shadow-inset,
    .ui-icon-shadow,
    .ui-focus,
    .ui-overlay-shadow,
    .ui-shadow,
    .ui-btn-active{
        text-shadow: none !important;
        box-shadow: none !important;
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -webkit-transform: translateZ(0);
    }
    


These two items combined, make for a faster experience with your android apps, and solved several headaches once I worked it out last week..

I’ll be adding this to the Starter Kit shortly, along with a few other additions.