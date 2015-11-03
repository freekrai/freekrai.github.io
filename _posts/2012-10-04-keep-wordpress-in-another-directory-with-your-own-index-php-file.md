---
layout: "post"
title: "Keep WordPress in Another Directory with your own index.php file"
tags: 
- "code"
date: "2012-10-04 11:16:03"
ogtype: "article"
bodyclass: "post"
---

Recently, I had to set up a WordPress site for a client, and they wanted to keep WordPress’ files in a seperate directory, but still have people see everything in the root of the site like they normally would..

So you’d go to http://mysite.com/ and see the site, but all the WordPress files are actually in the wp/ folder, your visitors just wouldn’t know it..

First, I installed WordPress in a folder called *wp/*

Then in the root of the site, I created two files, the first was index.php:


    <?php
        define('WP_USE_THEMES', true);
        require('./wp/wp-blog-header.php');
    ?>
    


That’s it, nothing fancy, those two lines tell WordPress to start up.

Then I created a .htaccess file and added the usual mod_rewrite rules:


    ## BEGIN WORDPRESS
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
    </IfModule>
    
    ## END WORDPRESS
    


Now, whenever someone goes to the site, they see WordPress, but we can also have other files in the same root area that don’t access WordPress and don’t cause interference.