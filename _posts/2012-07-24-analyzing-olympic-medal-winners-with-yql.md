---
layout: "post"
title: "Analyzing Olympic Medal Winners with YQL"
tags: 
- "code"
- "yql"
date: "2012-07-24 14:43:02"
ogtype: "article"
bodyclass: "post"
---

I’m going to be writing a series of posts about [YQL](http://developer.yahoo.com/yql/) over the next month, mostly to share the cool things that can be done with it.

I’ve been using YQL for the past 4 years for various projects from straight aggregation sites, to data analysis, and on, and love it.

First off, for anyone who doesn’t know, YQL is the Yahoo! Query Language, which is an SQL-like query language that is designed to retrieve and manipulate data from APIs through a single Web interface, thus allowing mashups that enable developers to create their own applications.

Some of the cool things you can do with YQL is use a spreadsheet stored on google docs as your data to display searchable and sortable data on a web site.

For example, I posted on my google drive a spreadsheet containing all Summer Olympic Medal Winners since 1980, Now I can use YQL to read that spreadsheet as a CSV file and then use the data:


    select * from csv where url="https://docs.google.com/spreadsheet/pub?key=0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc&single=true&gid=0&output=csv" and columns="city,edition,sport,discipline,athlete,noc,gender,event,medal"
    


You can [try this out in the YQL Console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22) and [see the results](http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22) here.

Using YQL to filter and sort this, you can do some interesting searches on that information. For example:

### Who won Gold for Canada in 1992?


    select * from csv where url="https://docs.google.com/spreadsheet/pub?key=0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc&single=true&gid=0&output=csv" and columns="city,edition,sport,discipline,athlete,noc,gender,event,medal" and noc="CAN" and edition="1992" and medal="Gold"
    


You can [try this out in the YQL Console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22%20and%20noc%3D%22CAN%22%20and%20edition%3D%221992%22%20and%20medal%3D%22Gold%22%0A) and [see the results](http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22%20and%20noc%3D%22CAN%22%20and%20edition%3D%221992%22%20and%20medal%3D%22Gold%22%0A) here.

### Who’s won medals for the Canadian Boxing team since 1980?

Again, this is an example:


    select * from csv where url="https://docs.google.com/spreadsheet/pub?key=0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc&single=true&gid=0&output=csv" and columns="city,edition,sport,discipline,athlete,noc,gender,event,medal" and noc="CAN" and sport="Boxing"
    


You can [try this out in the YQL Console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22%20and%20noc%3D%22CAN%22%20and%20sport%3D%22Boxing%22%0A) and [see the results](http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fdocs.google.com%2Fspreadsheet%2Fpub%3Fkey%3D0AmSmtp2dBZcYdFM0QXFmUW9CVmRYRkhYdlVRZEV1RWc%26single%3Dtrue%26gid%3D0%26output%3Dcsv%22%20and%20columns%3D%22city%2Cedition%2Csport%2Cdiscipline%2Cathlete%2Cnoc%2Cgender%2Cevent%2Cmedal%22%20and%20noc%3D%22CAN%22%20and%20sport%3D%22Boxing%22%0A) here.

As you can, quite a bit can be done here.. You can also use YQL to read web pages in the same way, which we’ll get into next time when we get into YQL some more.

*This data originally came from [The Guardian](http://www.guardian.co.uk/sport/datablog/2012/jun/25/olympic-medal-winner-list-data) and goes all the way back to 1896, but I wanted just grabbed the last 32 years of data for the sake of this test case.*