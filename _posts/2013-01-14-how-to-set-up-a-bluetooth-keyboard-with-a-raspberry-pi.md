---
layout: "post"
title: "How to set up a bluetooth keyboard with a Raspberry Pi"
tags: 
- "articles"
date: "2013-01-14 22:03:05"
ogtype: "article"
bodyclass: "post"
---

This has been asked a few times, and I just finished going through the process myself, so I thought I’d share how to set up a bluetooth keyboard with a Raspberry Pi..

First, this assumes you have a bluetooth USB dongle.

Once you’ve booted your RPi up, go into the terminal and type the following commands:


    sudo apt-get update
    sudo apt-get install bluez python-gobject bluetooth bluez-utils blueman 
    


Once this finishes, you can go to Preferences > Bluetooth Manager from the menu and choose your device.

Once you pair your keyboard, I suggest you make it trusted so that it will always connect on boot.