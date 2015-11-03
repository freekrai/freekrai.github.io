---
layout: "post"
title: "How to rewrite urls with PHP 5.4's built-in web server"
tags: 
- "code"
date: "2014-08-13 18:59:07"
ogtype: "article"
bodyclass: "post"
---

With the release of PHP 5.4, we were given a handy built-in web server. This server is obviously not suitable to use in production environments, but it is great if we want to check on one project quickly:

- git clone from github
- composer install to install dependencies
- run the built-in web server and test the application.

```php
php -S localhost:8888
```

But it’s also common to use mod_rewrite or similar to send all requests to a master controller. Usually, we’d have a setup like this:

```php
<IfModule mod_rewrite.c>
	Options -MultiViews
	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^(.*)$ index.php [QSA,L]
</IfModule>
```    

But PHP’s built-in web server doesn’t handle mod_rewrite, and when it came to working on projects, I needed a way to make this work for development. So I came up with this solution of creating one router file and then start the server with it:

```php
<?php
//	php -S localhost:8888 routing.php
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $_SERVER["REQUEST_URI"])) {
	return false;
} else {
	include __DIR__ . '/index.php';
}
```

And now we start the server with:

```php
php -S localhost:8888 routing.php
```    


All processes are directed through routing.php which then redirects all non-CSS, JS or image requests to index.php and from there the rest is history.

Handy right?