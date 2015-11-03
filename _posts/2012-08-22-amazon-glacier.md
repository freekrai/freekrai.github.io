---
layout: "post"
title: "Amazon Glacier"
link: "http://aws.amazon.com/glacier/?utm_source=AWS&utm_medium=website&utm_campaign=LP_glacier_launch"
tags: 
- "links"
date: "2012-08-22 12:30:19"
ogtype: "article"
bodyclass: "post"
---

> Amazon Glacier is an extremely low-cost storage service that provides secure and durable storage for data archiving and backup. In order to keep costs low, Amazon Glacier is optimized for data that is infrequently accessed and for which retrieval times of several hours are suitable. With Amazon Glacier, customers can reliably store large or small amounts of data for as little as $0.01 per gigabyte per month, a significant savings compared to on-premises solutions.

Glacier is interesting, it’s meant for cheap long-term storage of files for cheap.. But it’s not meant to be used in place of S3 for standard storage, getting your files out of the system involves being loaded into a queue that could take hours before they are ready to download..

I can see uses for Glacier regarding archiving files for backup, so this could be worth looking into..

[Klint Finley](http://www.wired.com/wiredenterprise/2012/08/glacier/all/1) interpreting some of Glacier’s complex pricing:

> Glacier aims to tackle a very different problem. It’s much cheaper than other storage services, but it’s also much slower.