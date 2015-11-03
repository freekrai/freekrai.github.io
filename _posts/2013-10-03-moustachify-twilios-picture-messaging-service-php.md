---
layout: "post"
title: "Moustachify Yourself with Twilio`s Picture Messaging service and PHP"
tags: 
- "code"
date: "2013-10-03 00:33:05"
ogtype: "article"
bodyclass: "post"
---

A couple weeks ago at TwilioCon, there was a fun example of using Picture Messaging, where you could send any picture of a person and you would get that same picture back with a moustache added to it.

I thought this was pretty cool, so I decided to build my own solution using PHP, instead of the original Python script.

And.. here it is for you. I built it using the Jolt Micro Framework, which works well for building apps rapidly.

You’ll need two things to set this up:

1. The Twilio PHP library
2. The Jolt framework, as we are going to build this with Jolt.

### Let’s get started.

1. Download the Jolt PHP Framework from here: [https://github.com/freekrai/jolt/archive/master.zip](https://github.com/freekrai/jolt/archive/master.zip)

2. Unzip it, open up `config.ini`, and add the following settings:  

<script src="https://gist.github.com/6812688.js"></script>

3. Create a folder called `Services/`

4. Download the Twilio PHP library here: [https://github.com/twilio/twilio-php/archive/master.zip](https://github.com/twilio/twilio-php/archive/master.zip) and save it to the Services folder.

5. Open `index.php`, and copy the following code:  

<script src="https://gist.github.com/6812751.js"></script>

6. Upload the files to your web server.

7. Create a folder called `images/` and make it writable

8. Log into your twilio account, and point a phone number to `http://MYSITEURL/listener` for SMS messages

9. Send a picture of yourself with the word `moustache` and wait for the results…

### How it works

This app uses the [http://mustachify.me](http://mustachify.me) web service which adds a cartoon moustache on to any face photo you send.

You can view a demo by texting a photo with the word `Moustache` to `778-654-7062`

Why not just process any image as a moustache image right away? Well, maybe we want to add future commands to the system later? ;)

I’ve also setup a git repository of the full system here:

<div class="well" style="padding:5px; text-align:center;">

[Download the zip file](https://github.com/freekrai/Twilio-Moustachify/archive/master.zip)    or    [Fork it](https://github.com/freekrai/Twilio-Moustachify/)

</div>