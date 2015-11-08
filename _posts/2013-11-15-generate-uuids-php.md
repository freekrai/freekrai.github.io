---
layout: "post"
title: "Generate UUIDs in PHP"
tags: 
- "code"
date: "2013-11-15 18:21:52"
ogtype: "article"
bodyclass: "post"
---

I’m working on a project currently where I am using UUIDs as unique identifiers. PHP doesn’t have a good UUID function for this, so I wrote one that let me generate one.

```javascript
<?php
function generate_uuid() {
	return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
		mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),
		mt_rand( 0, 0xffff ),
		mt_rand( 0, 0x0fff ) | 0x4000,
		mt_rand( 0, 0x3fff ) | 0x8000,
		mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
	);
}
?>
```

For anyone who doesn’t know, a UUID, or a Universally Unique Identifier is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE).

UUIDs are meant to enable distributed systems to uniquely identify information without significant central coordination. In this context the word unique should be taken to mean “practically unique” rather than “guaranteed unique”. Since the identifiers have a finite size, it is possible for two differing items to share the same identifier. The identifier size and generation process need to be selected so as to make this sufficiently improbable in practice. Anyone can create a UUID and use it to identify something with reasonable confidence that the same identifier will never be unintentionally created by anyone to identify something else. Information labeled with UUIDs can therefore be later combined into a single database without needing to resolve identifier (ID) conflicts.

A UUID is a 16-octet (128-bit) number. In its canonical form, a UUID is represented by 32 hexadecimal digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 alphanumeric characters and four hyphens). For example:

```javascript
a8d5c97d-9978-4b0b-9947-7a95dcb31d0f	
```

There are several versions of UUIDs, in this case the function uses version 4, which is the random UUID generation. This is generally defined as follows

Version 4 UUIDs use a scheme relying only on random numbers. This algorithm sets the version number as well as two reserved bits. All other bits are set using a random or pseudorandom data source. Version 4 UUIDs have the form `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where x is any hexadecimal digit and y is one of 8, 9, A, or B (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`).