---
layout: "post"
title: "For when you need to target firefox specific CSS rules"
tags: 
- "code"
date: "2013-02-20 17:49:14"
ogtype: "article"
bodyclass: "post"
---

Sometimes, you run into an issue where Firefox doesn’t show a font just right, or something is a tad off.

That’s when you want to have a handy CSS rule in your toolbox for Firefox only CSS, you already have one for IE if you need it afterall.

```javascript
	@-moz-document url-prefix() {
	}
```

Is the little CSS code that lets you enter whatever CSS you want inside it and only have it work on Firefox. So for example, if you have a div that shows up too long in Firefox and IE than in Chrome, you could do this:

```javascript
#categoryBackNextButtons{
	width:490px;
}
@-moz-document url-prefix() {
	#categoryBackNextButtons{
		width:486px;
	}
}
```

That gives you your regular CSS, your Firefox rules, and your IE rules.

Ideally, you’d make it work without this, but there are times when you have to look for a workaround…