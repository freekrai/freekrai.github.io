---
layout: "post"
title: "Jolt, a tiny PHP micro framework"
link: "https://github.com/freekrai/jolt"
tags: 
- "code"
date: "2013-02-19 04:28:19"
ogtype: "article"
bodyclass: "post"
---

For a current project I’m working on, I wanted to use a micro framework compared to a larger one like [Kayfish](http://github.com/freekrai/Kayfish), my other main framework.

I looked at several that were available, but all of them had some slight issues that I wasn’t a fan of. So I decided to make my own, and Jolt is what I came up with.

FYI, the name came from a type of Nerf gun I keep on my desk at the office.

To start, Jolt is a PHP powered micro framework that helps you quickly write simple yet powerful web applications and APIs.

Jolt was built, taking some inspiration from ExpressJS, and I’m sure I’ll have other updates as I use it more.

Jolt is not a full featured MVC framework, it is built to be a micro framework that handles routing and carries some basic template rendering. Feel free to use your own template engine such as Twig instead.


    include 'jolt.php';
    $app = new Jolt('my app');
    $app->get('/greet', function () use ($app){
    	$app->render( 'page', array(
    		"pageTitle"=>"Greetings",
    		"body"=>"Greetings world!"
    	));
    });
    $app->get('/', function()  use ($app) {
    	$app->render('home');
    });
    $app->listen();


And because I like this feature in ExpressJS, I included route filters that let you map functions against symbols in your routes. These functions then get executed when those symbols are matched.


    $app->filter('blog_id', function ($blog_id) use ($app) {
    	$blog = Blog::findOne($blog_id);
    	$app->store('blog', $blog);
    });
    // here, we have :blog_id in the route, so our preloader gets run
    $app->get('/blogs/:blog_id', function ($blog_id) use ($app)  {
    	$blog = $app->store('blog');
    	$app->render('single', array('blog' => $blog);
    });


Then you would load a blog entry in the browser this way:


    http://mysite.com/blogs/hello-world


And thanks to the code above, the app assumes that “hello-world” is the id of the blog post, we’re using blog post here as an example, you can use it for anything else.

As you can see, this framework is simple, but works well.

This framework doesn’t include any databasing, if you want a nice database library, I recommend [Idiorm and Paris](http://j4mie.github.com/idiormandparis/).

And like I mentioned above, the template engine is very basic, but you could easily include Twig, or Jade or a similar template engine instead.

As for the project that is using this framework.. Stay tuned! :)

---

<div class="well" style="padding:5px; text-align:center;">

[Download the zip file](https://github.com/freekrai/jolt/archive/master.zip)    or    [Fork it](https://github.com/freekrai/jolt/)

</div>