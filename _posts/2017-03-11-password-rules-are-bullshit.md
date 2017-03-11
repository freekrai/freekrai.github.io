---
layout: post 
published: true 
title: "Password Rules Are Bullshit" 
date: 2017-03-11T16:47:02.664Z 
link: https://blog.codinghorror.com/password-rules-are-bullshit/ 
tags:
  - links
ogtype: article 
bodyclass: post 
---

Jeff Atwood:

> ### Password Rules Are Bullshit
> 
> They don't work.
> 
> They heavily penalize your ideal audience, people that use real random password generators. Hey guess what, that password randomly didn't have a number or symbol in it. I just double checked my math textbook, and yep, it's possible. I'm pretty sure.
> 
> They frustrate average users, who then become uncooperative and use "creative" workarounds that make their passwords less secure.
> 
> They are often wrong, in the sense that the rules chosen are grossly incomplete and/or insane, per the many shaming links I've shared above.
> 
> Seriously, for the love of God, stop with this arbitrary password rule nonsense already. If you won't take my word for it, read [this 2016 NIST password rules recommendation](https://nakedsecurity.sophos.com/2016/08/18/nists-new-password-rules-what-you-need-to-know/). It's right there, "no composition rules". However, I do see one error, it should have said "no bullshit composition rules".

Jeff has a few interesting rules of his own regarding passwords:

1. Password rules are bullshit
2. Enforce a minimum Unicode password length
3. Check for common passwords
4. Check for basic entropy
5. Reject special case passwords

These are pretty interesting ideas, especially the checks for common passwords and the reject if password equals username or email address.
