---
layout: "post"
title: "Live Blogging with Twilio and Simperium"
tags: 
- "code"
date: "2014-01-05 03:52:13"
ogtype: "article"
bodyclass: "post"
---

Live blogging is pretty handy, when attending events, it never hurts to be able live blog about the latest new gadgets.

We’re going to build a simple live blogging app using PHP, Simperium and Twilio.

This particular live blog solution is set up for one event, this means all posts to the phone number we specify will show up.

You could build on this to allow for multiple events, but that’s a little more than we want to dive into today.

And yes, we could also use Pusher for this, but I like Simperium as it serves as both a datastore and a real-time push service, so that way we can store our posts on Simperium, and viewers are updated instantly.

Since these posts are just a line or two or text and a picture.. We don’t need anything too advanced for our data storage…

Since it’s the framework I use for a lot of projects, I once again, built this using the Jolt Micro Framework, which works well for building apps rapidly.

You’ll need a few things things to set this up:

1. A Twilio account ( [http://twilio.com/](http://twilio.com/) )
2. A Simperium.com account  ( [http://simperium.com/](http://simperium.com/) )
3. You need to create an app ( [http://simperium.com/app/new/](http://simperium.com/app/new/) )
4. From the app page you need to record: 1. the `app-id`
2. the `default` API key
3. Go to `browse data` and click `generate token` beside your username and generate a token to use for connecting to Simperium.
5. The Twilio PHP library ( [https://github.com/twilio/twilio-php/](https://github.com/twilio/twilio-php/) )
6. The Simperium PHP library ( [https://github.com/freekrai/simperium-php/](https://github.com/freekrai/simperium-php/) )
7. The Jolt framework, as we are going to build this with Jolt. ( [https://github.com/freekrai/jolt/](https://github.com/freekrai/jolt/) )

### Let’s get started.

1. Download the Jolt PHP Framework from here: [https://github.com/freekrai/jolt/archive/master.zip](https://github.com/freekrai/jolt/archive/master.zip)

2. Unzip it, open up `config.ini` , and add the following settings:  

<script src="https://gist.github.com/8263944.js"></script>

3. Create a folder called `Services/`

4. Download the Twilio PHP library here: [https://github.com/twilio/twilio-php/archive/master.zip](https://github.com/twilio/twilio-php/archive/master.zip) and save it to the `Services/` folder.

5. Download the Simperium PHP library here: [https://github.com/freekrai/simperium-php/archive/master.zip](https://github.com/freekrai/simperium-php/archive/master.zip) and save it to the `Services/` folder.

6. Open `index.php` , and copy the following code:  

<script src="https://gist.github.com/8263957.js"></script>

Our main focus is the `/listener` section of the code, which is what talks to Twilio.When we receive a new message, we check to see if the message had any images or not, and if it did, then we  cycle through each image. We then save the image locally, resize it, and post it to Simperium using the Simperium PHP library. If no image was passed, then we just save the message as it was sent to the system.

The other part of this is how we get a unique id for each post, which is using the `generate_uuid()` to create a unique UUID compatible string.

7. Create a file called `functions.php` , and copy the following code:  

<script src="https://gist.github.com/8263965.js"></script>

The main part of this file is the `cropResize` function which will take any  given image and crop and resize it to fit the dimensions we give it. This is handy when dealing with larger sized images.

8. Open `views/home.php` and copy the following code:  

<script src="https://gist.github.com/8263977.js"></script>This is the brains of our real-time notifications, as we send posts and 
images to our live blogging app, this is where it will get displayed as soon as the posts are processed.

9. Upload the files to your web server.

10. Create a folder called `images/` and make it writable, inside this folder, create a folder called `original/ `and a folder called `procesed/, `make sure these are writable as well.

11. Log into your twilio account, and point a phone number to `http://MYSITEURL/listener` for SMS messages

12. Open up your web site: `http://MYSITEURL/`

13. Send some text or a picture to the phone number and watch it appear on the web site.

We’ve now built a basic live blogging tool, nothing too fancy, but you can take it from here and build on it to make something more fancy.

---

I’ve also uploaded the demo app to Github, so you can view it in its entirety here:

---

<div class="well" style="padding:5px; text-align:center;">

[Download the zip file](https://github.com/freekrai/live-blogging-twilio-simperium/archive/master.zip)    or    [Fork it](https://github.com/freekrai/live-blogging-twilio-simperium/)

</div>