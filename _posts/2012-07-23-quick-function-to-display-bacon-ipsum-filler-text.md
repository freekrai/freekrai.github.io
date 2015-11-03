---
layout: "post"
title: "Quick function to display bacon ipsum filler text"
tags: 
- "code"
date: "2012-07-23 13:57:03"
ogtype: "article"
bodyclass: "post"
---

I recently was setting up a new site for a client, and found myself copying and pasting filler text.. After a while, I decided to just write this function to use bacon ipsum’s API instead:


    function get_bacon($p=4){
        $url = "http://baconipsum.com/api/?type=meat-and-filler&paragraphs=".$p;        
        $timeout = 5;
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
        $json = curl_exec($ch);
        curl_close($ch);
        $json = json_decode($json);
        foreach($json as $i){
            echo "<p>$i</p>";
        }
    }
    


To use this function, just call it like this:


    <php get_bacon(1);  ?>
    


Replace the 1 with how ever many paragraphs you actually need.