---
layout: "post"
title: "Composing Jolt"
tags: 
- "code"
date: "2014-02-21 21:23:05"
ogtype: "article"
bodyclass: "post"
---

When I originally wrote [Jolt](https://github.com/freekrai/jolt) a year ago, it was meant to stay as one include file, but as it’s grown, I saw the usefulness for doing something more with it.

Jolt is getting used in more and more projects, not just for my own projects, but by more and more developers as well.

After chatting with various Jolt users, some new direction was decided, and today, I pushed Jolt 2.0, which is PSR-0, and also available to install via Composer.

To install Jolt using Composer, you follow these steps:

First, install composer in your project:

```php
curl -s https://getcomposer.org/installer | php
```    

Next, create a composer.json file in your project root:

```javascript
{
	"require": {
		"jolt/jolt": "dev-master"
	}
}
```

Now, install via composer:

```php
	php composer.phar install
```    

Finally, Add this line to your application’s index.php file:

```php
require 'vendor/autoload.php';
```    

If you don’t want to use Composer, then you can download the Jolt framework into a folder called Jolt and then add the following to the top of your index.php file:

```php
	require 'Jolt/Jolt.php';
	\Jolt\Jolt::registerAutoloader();
```    

This changes how some things work with Jolt, and I’ll be updating the various tutorials to use the new version.

I’ve also set up a [Legacy branch](https://github.com/freekrai/jolt/tree/legacy) in the repo to contain the older version of Jolt for anyone who wants to continue using that.

Making this move made sense, it helps to allow for proper updating via Composer, and keeps everything more organized in the long run.