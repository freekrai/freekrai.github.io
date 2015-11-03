---
layout: "post"
title: "Mongolab.com API PHP class"
link: "https://github.com/freekrai/mongo-api-php"
tags: 
- "code"
date: "2012-11-16 18:48:23"
ogtype: "article"
bodyclass: "post"
---

I recently had a project that needed to use the API from [Mongolab.com](http://mongolab.com), and yes, I could have used the actual mongodb drivers, but this wasn’t an option on the server it’s being used with, so I instead went with their API, which is great.

You can find the class here on [github](https://github.com/freekrai/mongo-api-php), so feel free to fork and make use of..

Some examples of using this class, first let’s set it up:


    $key = "YOUR-API-KEY";
    $db = "YOUR-DB";
    
    $mongo = new MongoAPI( $db,$key );
    $ma = $mongo->Tasks; // where Tasks is your collection
    


Now, let’s get all records:


    $ret = $ma->get();
    print_r($ret);
    


We can also get a record based on a single id:


    $ret = $ma->get('50a67f3ee4b0540f68b11d3a');
    print_r($ret);


Or, you can query based on other fields:


    $ret = $ma->find( array('title'=>'update test') );
    print_r($ret);


Ok, how about inserting a new record:


    $row = array(
    	"slug"=>"test",
    	"title"=>"class test",
    	"body"=>"this is a test"
    );
    $inserted_id = $ma->insert($row);


Now, let’s update a record:


    $row = array(
    	"slug"=>"test",
    	"title"=>"update test",
    	"body"=>"this is a test"
    );
    $ret = $ma->updatebyid($row,'50a67f3ee4b0540f68b11d3a');


Or, you can update this way:


    $row = array(
    	"slug"=>"test",
    	"title"=>"update test",
    	"body"=>"this is a test"
    );
    $ret = $ma->update(array("slug"=>"test"),$row);


And finally, let’s delete the record:


    $ma->delete('50a681afe4b0c11bd15ea62d');


I know, I’m not getting into a lot of details, but the idea of this post is to show examples of how to use the class.. I’ll be posting more about the project that uses it shortly.