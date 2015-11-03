---
layout: "post"
title: "Convert arguments to Array"
link: "http://davidwalsh.name/arguments-array?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Bludice+%28David+Walsh+Blog%29"
tags: 
- "links"
- "code"
date: "2013-03-29 14:40:57"
ogtype: "article"
bodyclass: "post"
---

Nice function from David Walsh on converting arguments to arrays in Javascript:

```javascript
function myFn(/* any number of arguments */) {
	var args = Array.prototype.slice.call(arguments);
	// or [].slice.call(arguments)
	args.forEach(function(arg) {
		// do something with args here
	});
}
```    

I can see a few uses for this function, hence why I’m sharing it…