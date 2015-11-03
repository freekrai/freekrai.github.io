---
layout: "post"
title: "Hack Isn’t PHP"
link: "http://www.marco.org/2014/03/21/hack"
tags: 
- "links"
date: "2014-03-21 22:15:08"
ogtype: "article"
bodyclass: "post"
---

Marco Arment on Facebook’s Hack language:

> PHP isn’t a great language, but it is a *good* language. Most non-PHP developers judge the entire language by bad code snippets “written” (mostly copied and pasted) by amateurs for PHP 4 and posted on Expert Sexchange in 2002, but that’s really not fair: it’s just as possible to write good, well-structured code in PHP as in most other languages, and it became a much better and more capable language in the 5.x series. There are many bad PHP coders and a lot of bad PHP code out there simply because it’s such an easy language for beginners and has been so popular for so long.[1](http://www.marco.org/2014/03/21/hack#)
> 
> [Facebook’s HHVM](http://hhvm.com/) is one of the best things that has ever happened to PHP. Facebook uses a *ton* of PHP, and they stand to gain a lot if they can make it faster, so they wrote their own runtime that’s [much](http://hhvm.com/blog/1817/fastercgi-with-hhvm) faster than the official one. This is exactly what the PHP world needed: making its already-fast performance many times faster (amplifying one of PHP’s biggest advantages over other common web languages), providing much-needed competition to Zend, and offering a contingency plan if PHP’s core maintainers ever do something really dumb to the language (which they often attempt to). I’ve already optimized my in-house framework for HHVM and plan to deploy it for testing on Overcast’s server shortly.
> 
> Yesterday, [Facebook announced Hack](https://code.facebook.com/posts/264544830379293/hack-a-new-programming-language-for-hhvm/), a new language that also runs on HHVM. It’s like a “PHP++” — it adds optional static typing, generics, and a bunch of other enhancements and conveniences to PHP.
> 
> Unlike HHVM, adopting Hack is a huge risk. HHVM was great because you could switch to it *and switch away from it* freely, with almost no effort (especially to switch away). You were still writing PHP. But once you convert a file to Hack and use any of its new features, it’s no longer valid PHP, so you must *always* use Hack and HHVM from that point forward (or undertake an expensive rewrite).
> 
> You’re effectively writing in a new language, albeit with a much smaller learning curve than other language switches since you already know most of the syntax and API. But because Hack isn’t PHP, some of PHP’s biggest advantages — ubiquity, maturity, stability — don’t apply