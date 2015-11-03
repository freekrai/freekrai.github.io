---
layout: "post"
title: "Simple JSON storage library"
link: "https://github.com/freekrai/lawnchair.php"
tags: 
- "links"
- "code"
date: "2012-04-05 10:09:33"
ogtype: "article"
bodyclass: "post"
---

I’ve been using [lawnchair.js](http://westcoastlogic.com/lawnchair/) for a few phonegap powered projects lately and decided to port it to php..

I mostly made this for something to try, and have tested with over 20,000 records in a table and had it work fast.

You have a choice of adapters, it can store it as text files locally, or on Amazon S3 or in a mySQL database, and you can build on that.

I’ll do more documentation as I build on this some more…

This also works really nicely with underscore.php

*If you use file storage, make sure the data folder is writable*

### Example


```php
<?php
include("Lawnchair.php");

/*  you can choose to use sql or file as a datastore:   */

/*  SQL:    */
//  $ppl = new Lawnchair( array("name"=>"people","store"=>"sql","dbhost"=>"localhost","dbuser"=>"","dbpass"=>"","dbname"=>"") );

/*  S3: */
//  $ppl = new Lawnchair( array("name"=>"people","store"=>"s3",'awsaccesskey'=>'Your AWS Access Key','awssecretkey'=>'Your AWS Secret Key','bucketname'=>'Your Bucket Name') );

/*  File:   */
$ppl = new Lawnchair( array("name"=>"people","store"=>"file") );

//	if no records, populate with dummy info...
if( $ppl->count() < 1 ){
	for($i = 0; $i <= 15000;$i++){
		$ppl->save( array("value"=>array("name"=>$i,"age"=>($i+2),"address"=>$i." random street, somewhere") ) );
	}
}

echo "<h1>List all Keys</h1>";
if( $ppl->count() < 10 ){
	echo "".print_r($ppl->keys(),true)."";
}else{
	echo "<p>Too many keys to list at once.. {$ppl->count()} keys found..</p>";
}

echo "<h1>Update a record </h1>";
$ppl->save( array( "key"=>"1","value"=>array("name"=>"test","age"=>"33","address"=>"121-1233 random street, somewhere") ) );

echo "<h1>Find all people with 'e' in the name </h1>";
$list = $ppl->find(array("field"=>"name","q"=>"e","a"=>"eq"));
echo "".print_r($list,true)."";

echo "<h1>List All People</h1>";
echo "".print_r($ppl->all(),true)."";

echo "Last Record is: ".print_r($ppl->max(),true)."<br />";
echo "Last Key is: ".$ppl->lastid();        

echo "<h1>Max with callback</h1>";
echo "----> ".$ppl->max( function($member) { return "My name is: ".$member['name']; } )."<br />";

echo "<h1>Delete all records</h1>";
$ppl->nuke();
?>
```