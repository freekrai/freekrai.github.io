---
layout: "post"
title: "John Gruber On the Timing of iOS`s SSL Vulnerability and Apple`s `Addition` to the NSA`s PRISM Program"
link: "http://daringfireball.net/2014/02/apple_prism"
tags: 
- "links"
date: "2014-02-24 20:06:32"
ogtype: "article"
bodyclass: "post"
---

John Gruber posted an interesting post over the weekend:

> [Jeffrey Grossman, on Twitter](https://twitter.com/Jeffrey903/status/437273379855667201):
> 
> > I have confirmed that the SSL vulnerability was introduced in iOS 6.0. It is not present in 5.1.1 and is in 6.0.
> 
> [iOS 6.0 shipped on 24 September 2012](http://en.wikipedia.org/wiki/IOS_6#6.0_2).
> 
> According to slide 6 in [the leaked PowerPoint deck on NSA’s PRISM program](http://www.theguardian.com/world/interactive/2013/nov/01/prism-slides-nsa-document), Apple was “added” in October 2012.
> 
> These three facts prove nothing; it’s purely circumstantial. But the shoe fits.
> 
> Sure would be interesting to know who added that spurious line of code to the file. Conspiratorially, one could suppose the NSA planted the bug, through an employee mole, perhaps. Innocuously, the Occam’s Razor explanation would be that this was an inadvertent error on the part of an Apple engineer. [It looks like](https://www.imperialviolet.org/2014/02/22/applebug.html) the sort of bug that could result from a merge gone bad, duplicating the `goto fail;` line.
> 
> Once the bug was in place, the NSA wouldn’t even have needed to find the bug by manually reading the source code. All they would need are automated tests using spoofed certificates that they run against each new release of every OS. Apple releases iOS, the NSA’s automated spoofed certificate testing finds the vulnerability, and boom, Apple gets “added” to PRISM. (Wasn’t even necessarily a fast turnaround — the NSA could have discovered the vulnerability over the summer, while iOS 6 was in developer program beta testing.)
> 
> Or, maybe nothing, and this is all a coincidence.

This is in relation to the [iOS 7.0.6](http://support.apple.com/kb/HT6147?viewlocale=en_US&locale=en_US) fix that was released last week, which, according to Apple, fixes a serious security flaw:

> Impact: An attacker with a privileged network position may capture or modify data in sessions protected by SSL/TLS
> 
> Description: Secure Transport failed to validate the authenticity of the connection. This issue was addressed by restoring missing validation steps.