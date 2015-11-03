---
layout: "post"
title: "Run multiple JavaScript threads with HTML5 Web Workers"
tags: 
- "code"
date: "2012-05-07 12:24:48"
ogtype: "article"
bodyclass: "post"
---

One handy API in HTML5 is Web Workers, this API lets you make your JavaScript multi-threaded.

A web worker is a single JavaScript file loaded and executed in the background on a separate thread. Dedicated web workers are linked to their creator (the script which loaded the worker). Web workers allow any number of scripts to communicate with a single worker.

Some advantages of using web workers is javascript widgets that continuously post an update to a site for example.

When using web workers, you split your code into two files, the main html page and the worker (worker.js). The main page is in charge of creating the workers, sending them tasks to work on, getting resutls and making any needed updates to the page. Once they’re created, workers execute the code within the worker JavaScript file. Workers always send results back to the main page because they can’t access the DOM directly.

Let’s get started on a basic example, to show how you can make web workers work for you.


    
    
    <title>Simple Web Workers</title>
    <script>
        //  create the work object:
        var myWorker = new Worker("worker.js");
        //  send a message to the worker:
        myWorker.postMessage("hello");
        //  handle getting a response from the worker:      
        myWorker.onmessage = OnWorkerMessage;
    
        function onWorkerMessage(evet){
            var data = evt.data;
            document.getElementById("results").innerHTML = "Hello "+data;
        }
    </script>
    
        <div id="result"></div>
    
    
    


Now, let’s take a look at our very simple worker.js:


    onmessage = handleMessage;
    
    function handleMessage(evt) {
        var data = evt.data;
        if (data = "hello") {
            postMessage( "world" );
        }
    }
    


Now what does this, is check the message we sent the worker and if it matches what we are looking for, then it sends a response back to the original file.

So what’s next? Well, what if we wanted to have the worker check something occasionally? like send a response back to the host every 2500 milliseconds?


    var count = 0;
    onmessage = handleMessage;
    
    function handleMessage(evt) {
        var data = evt.data;
        if (data == "hello") {
            sendMessage();
        }
    }
    
    function sendMessage() {
        postMessage( "world " + count++ );
        setTimeout("sendMessage()", 2500);
    }
    


We could also have it send more complex messages like JSON:


    var count = 0;
    onmessage = handleMessage;
    
    function handleMessage(evt) {
        var data = evt.data;
        id = data.id;
        if (data.message == "hello") {
            sendMessage();
        }
    }
    
    function sendMessage() {
        postMessage( {message:"world",count:count} );
        count++;
        setTimeout("sendMessage()", 2500);
    }
    


Then we’d change our HTML file to look like this:


    
    
    <title>Simple Web Workers</title>
    <script>
        //  create the work object:
        var myWorker = new Worker("worker.js");
        //  send a message to the worker:
        myWorker.postMessage( { message: "hello", id: 1 } );
        //  handle getting a response from the worker:      
        myWorker.onmessage = OnWorkerMessage;
    
        function onWorkerMessage(evet){
            var data = evt.data;
            document.getElementById("results").innerHTML += "Hello "+data.message + ", count is"+data.count+"<br />";
        }
    </script>
    
        <div id="result"></div>
    
    
    


Finally, what if we wanted to stop a web worker? In this example, we’ll stop it after the count reaches 10:


    
    
    <title>Simple Web Workers</title>
    <script>
        //  create the work object:
        var myWorker = new Worker("worker.js");
        //  send a message to the worker:
        myWorker.postMessage( { message: "hello", id: 1 } );
        //  handle getting a response from the worker:      
        myWorker.onmessage = OnWorkerMessage;
    
        function onWorkerMessage(evet){
            var data = evt.data;
            document.getElementById("results").innerHTML += "Hello "+data.message + ", count is"+data.count+"<br />";
            if( data.count == 10){
                myWorker.postMessage( { message: "stop", id: 1 } );
            }
        }
    </script>
    
        <div id="result"></div>
    
    
    


And the worker.js would look like this:


    var count = 0;
    onmessage = handleMessage;
    
    function handleMessage(evt) {
        var data = evt.data;
        id = data.id;
        if (data.message == "hello") {
            sendMessage();
        }else if (data.message == "stop") {
            self.close();
        }
    }
    
    function sendMessage() {
        postMessage( {message:"world",count:count} );
        count++;
        setTimeout("sendMessage()", 2500);
    }
    


Again, these are just some basic examples to show you what web workers can do. You can do a lot here, you can pass a JSON string via postMessage so that it could do some ajax form submissions, search twitter, etc.

I wanted to get a basic idea for these out there for people to play with :)

[View a demo of web workers in action](/assets/demos/webworkers/)