---
layout: "post"
title: "Quick Function: is_md5()"
tags: 
- "code"
date: "2012-08-17 16:02:30"
ogtype: "article"
bodyclass: "post"
---

This function came about as I move a lot of clients from their older md5 systems to newer more-secure bcrypt setups, we wanted a way to check if they were on the new password scheme or the old one:


    function is_md5($hash){
        if (preg_match("/^[A-Fa-f0-9]{32}$/", $hash) > 0) {
            return true;
        }
        return false;
    }
    


What we do if a password returns as true, is we then make a note in the DB for the user to change his password when they log in, or else, when they first log in and register as md5, automatically change them to the more secure version using the plain text password they entered on login..

It’s simple, but makes things easier.. Also handy for more than just password checking..