---
layout: "post"
title: "Verifying Trust"
tags: 
- "articles"
date: "2013-07-02 20:05:30"
ogtype: "article"
bodyclass: "post"
---

In the two years I’ve been running The Interviewr, I’ve needed no verification..

People could sign up and start using their accounts right off the bat..

Recently, over the past couple of weeks, I’ve had a couple users who have signed up, and made a ton of calls to numbers in China all in an hour or two.

This lead to rampant over usage on my Twilio account… In fact, this particular person was responsible for a cost with Twilio that was more than double what the other 2000 users have ever done in the past two years.

Both times the fine folks at Twilio have jumped in and helped get the account back up and running, but it was time to start taking action.

The first quick thing that was done.. Require all new users to verify their email addresses on sign up..

The second step.. Wasn’t quite as quick, but also wasn’t too painful..

Before anyone can create any interviews, all users who have signed up after Sunday are required to verify a phone number, using a basic two-step authentication procedure..

The user will enter their phone number, and receive a text message containing their unique code.. On the web site, they then enter their code and if the code they enter matches the code sent to their phone, then they allowed to schedule interviews.

These are annoying steps, I’ve always hated having to verify these things before I could use a web site.. But were necessary to prevent spam users.

Another step that was taken, was disabling any calling to Asia, Africa, South America, and parts of Europe.. This might be an unpopular move.. But it was necessary for the moment.. Once things have quieted down, then I can look at reactivating calls to certain countries as requested.

Currently, the countries supported are Canada, US, UK and France..

The final step added, was to activate some usage tracking and alerts.. If for some reason, a user does a higher number of calls in an hour, then I’ll get an alert.. If that user is especially a new user and suddenly starts making a ton of calls within an hour of signing up.. Then I’ll especially get an alert..

Some of these changes may prove unpopular, but in the end, they’ll also help my users have a better experience as we cut down on the users who just want to take advantage of the system..