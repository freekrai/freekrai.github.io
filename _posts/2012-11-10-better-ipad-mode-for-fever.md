---
layout: "post"
title: "Better iPad Mode For Fever"
link: "https://github.com/niepi/fever-iPadMode"
tags: 
- "links"
- "code"
date: "2012-11-10 04:33:19"
ogtype: "article"
bodyclass: "post"
---

Fever is great for reading RSS feeds, but it would be nice to have a decent iPad client..

I may be working on something, but until then, this little hack from Thomas Niepraschk is handy for giving a cleaner iPad interface:

Open up *firewall/app/views/default/reader/header.php* and the following code:


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script type="text/javascript" src="http://github.com/niepi/fever-iPadMode/raw/master/ipadmode.js"></script>