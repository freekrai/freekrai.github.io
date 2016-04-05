---
layout: post 
published: true 
title: "Siri security flaw on iPhone 6s and 6s Plus grants access to Contacts and Photos without passcode" 
date: 2016-04-05T05:25:25.813Z 
link: http://appleinsider.com/articles/16/04/04/siri-security-flaw-on-iphone-6s-6s-plus-grants-access-to-contacts-and-photos-without-passcode 
tags:
  - links
ogtype: article 
bodyclass: post 
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jk7GaO_vAW8" frameborder="0" allowfullscreen></iframe>

> A newly discovered Siri search handling bug allows nefarious users to bypass passcode protected lock screens on iPhone 6s and 6s Plus handsets, granting easy access to Contacts and Photos data. The vulnerability is likely applicable only to a subset of devices, however.
> 
> [...]
> 
> In the example provided, a user — or nefarious agent — invokes Siri via a long home button press, or iPhone's "Hey Siri" function, and asks the virtual assistant to conduct a Twitter search. If the search results contain actionable Contacts data, like an email address, a 3D Touch gesture can be used to call up a contextual menu with options to send mail and add or modify contact information. 
> 
> From the 3D Touch Quick Actions menu, tapping on "Add to Existing Contact" opens an iPhone's Contacts list, which can then be used to access device Photos, if so configured.
> 
> [...]
> 
> Those concerned about potential intrusions can disable Siri's Twitter integration by navigating to `Settings > Twitter` and switching off Siri. Doing the same in `Settings > Privacy > Photos` cuts Siri access to an iPhone's photo library. Alternatively, Siri itself can be completely disabled.
> 
> The workaround is active in Apple's latest iOS 9.3.1 update.

That is really not good. As it happens, I limit what Siri can access already, but this is not a good bug to find.

