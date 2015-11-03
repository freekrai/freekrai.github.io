---
layout: "post"
title: "Quick Function: Turn a Javascript Array Into a Human Readable String"
date: "2015-02-22 14:43:00"
tags: 
- "code"
ogtype: "article"
bodyclass: "post"
---

To take a JavaScript array like `["item1", "item2", "item3" ...]` into a nice human readable string of `item1, item2 & item3` with all the first items getting comma separated and the final one with an ampersand use this `humanify` (for lack of a better name) function as follows:

```javascript
var items = ["item1","item2","item3","item4"];

console.log( humanify( items ) );

function humanify( array ){
	if( array.length > 1 ){
		return array.slice(0,-1).join(', ') + ' & ' + array[array.length -1];
	}
	return array[0];
}
```