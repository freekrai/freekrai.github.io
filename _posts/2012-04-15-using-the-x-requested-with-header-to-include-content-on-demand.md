---
layout: "post"
title: "Using the x-requested-with header to include content on demand"
tags: 
- "code"
date: "2012-04-15 23:55:11"
ogtype: "article"
bodyclass: "post"
---

I like using the same PHP script for both AJAX and non-AJAX content requests. Using one script just makes everything easier because it’s only one file to update/edit and it’s one more cache-able request.

One way to try to detect an AJAX request (as opposed to a regular page load) is by using the *x-requested-with header* when building ajax powered apps..

### PHP Code


    <?php if($_SERVER['HTTP_X_REQUESTED_WITH']==''){
        include('header.php');
    }?>
    <blockquote cite="http://ia341030.us.archive.org/1/items/alicesadventures19002gut/19002-h/19002-h.htm">
        <p>Alice was beginning to get very tired of sitting by her sister 
        on the bank, and of having nothing to do: once or twice she had peeped 
        into the book her sister was reading, but it had no pictures or 
        conversations in it, and where is the use of a book, thought Alice, 
        without pictures or conversations? So she was considering in her own mind, 
        (as well as she could, for the hot day made her feel very sleepy and 
        stupid,) whether the pleasure of making a daisy-chain was worth the 
        trouble of getting up and picking the daisies, when a white rabbit with 
        pink eyes ran close by her.</p>
    </blockquote>
    <?php if($_SERVER['HTTP_X_REQUESTED_WITH']==''){
        include('footer.php');
    }?>
    


### jQuery Code


    $(document).ready(function(){
        $('.ajaxtrigger').click(function(){
            var url = $(this).attr('href');
            $('#target').load(url);
            return false;
        });
    });
    


### Example