---
layout: "post"
title: "How to disable file edition in WordPress admin"
link: "http://www.wprecipes.com/how-to-disable-file-edition-in-wordpress-admin"
tags: 
- "links"
- "coda"
date: "2012-10-09 17:26:39"
ogtype: "article"
bodyclass: "post"
---

> I really love the fact that WordPress have built-in editors for themes and plugins, but when you’re a freelancer installing WP on a client website, you often want to make sure that the client will not break anything by editing the code. So here is a clean way to disable any file edition in WordPress admin.
> 
> Paste the following (or only the needed line) in your wp-config.php file. This file is located at the root of your WordPress install.


    define('DISALLOW_FILE_EDIT', true); //Disallow edition of files throught WP editor
    define('DISALLOW_FILE_MODS',true); //Disallow install of upgrades
    


Useful snippet..