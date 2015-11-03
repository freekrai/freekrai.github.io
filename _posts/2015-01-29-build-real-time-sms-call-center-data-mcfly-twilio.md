---
layout: "post"
title: "Build a real-time SMS call center with Data McFly and Twilio"
link: "http://blog.datamcfly.com/2015/01/29/sms-contact-twilio"
tags: 
- "links"
- "code"
date: "2015-01-29 21:51:32"
ogtype: "article"
bodyclass: "post"
---

> Do you want to know one of the beautiful things about Data McFly? It integrates really easily with other services.
> 
>  In this article, we are going to walk through using Data McFly and Twilio together to build a real-time SMS call center.
> 
>  This could be used as a customer help desk where customers send a text message for help and an agent sends a reply back from their web browser.
> 
>  The actual phone work will be handled by Twilio, and Data McFly will store the data and display the chats in real-time. We’ll use node.js to send and receive the text messages and an HTML frontend to handle the actual chatting.

I decided this week to give myself the task of building a real-time SMS call center that used Data McFly for the data handling and real-time communication, and Twilio for the phone work.

The end result turned out pretty well.