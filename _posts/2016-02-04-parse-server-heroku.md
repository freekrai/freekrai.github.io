---
layout: post 
published: true
title: "Getting Started with Parse Server, Heroku and MongoLabs" 
date: 2016-02-04T03:19:35.544Z 
tags:
  - code
  - parse
ogtype: article 
bodyclass: post 
---

Last week, Parse announced they would be shutting down their hosting by January 28th 2017, and like just about every other developer out there, I immediately started playing around with their open sourced [Parse Server](https://github.com/ParsePlatform/parse-server), and setting it up on Heroku.

_For the record, I actually host most of my apps on Flybase (for data), Github Pages or S3 (for frontend) and Heroku for quick node.js apps. I also use Digital Ocean or AWS EC2 for other hosting, but I wanted to demonstrate how to quickly host Parse Server on Heroku first, I'll show how to set Parse Server up on Digital Ocean and AWS EC2 later in other posts._

Parse Server is actually a pretty nicely written library, and I've even forked it to include [Flybase](https://flybase.io) support instead of Mongo, as well as having a version that supports multiple apps in one install, but today we'll look at simply getting Parse Server running on Heroku.

---

### Some Background

Until this week, if you were a Parse user, then you did not need to know how your client side code interacted with your Parse database, and even now, you just need a vague understanding of how it works.

But, there is a lot happening behind the scenes when you host your own `Parse Server`.  So, now that you are going to be hosting it yourself, you should understand how some of it works.

First of all, most of the more difficult work is handled inside the Client side library, and then sent to the server side code as HTTP requests. None of this changes, the only change is where you talk to Parse rather than how you talk to Parse.

That means that all you have to keep in mind when explaining how your self-hosted Parse Server works will be these three sections:

1. Client code from which you make requests to the server
2. Server-side code that receives and processes these requests
3. A Database where the server-side code stores and retrieves data from.

Previously, Parse took care of all of this, but now, we have to setup our mongo database and web server. Luckily, Heroku and Mongolabs work together nicely and _almost_ automatically in this process. 

### Let's get started already!

First, You will need to create an account with [Heroku](http://www.heroku.com), so go create one now if you haven't already.

Then you'll need to download the latest version of the Heroku tool-belt [here](https://toolbelt.heroku.com/). Once the download has finished you will be able to use `heroku` commands from the command line. _(You'll see why you want to do this in step 3)_

#### 1. Push the button

In your browser, go to: `https://github.com/ParsePlatform/parse-server-example`, this is a sample node.js app that uses express.js and parse server to 

You'll see a purple button here that says `Deploy to heroku`. 

Press it, press it right now.

#### 2. Prepare the app with Heroku

Heroku's one button deploys are handy for creating a new app, when you clicked the button in step 1, it took you to a page inside Heroku that asked you to name your app, give it a nice random name, or Heroku will name it for you.

MongoLab was also auto-selected as a necessary add-on, so that's taken care of for you.

Further down the page, it will give you a list of options:

1. Keep `/parse` as your `PARSE_MOUNT`.
2. Enter any name you want for `APP_ID`.
3. Enter any key you want for the `MASTER_KEY`.

Now press the `deploy for free` button, and wait a few minutes.

Once done, you can enter your parse server app by the [https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse](https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/), if you see a message that says:

> I dream of being a web site.

This is placeholder text, and tells you it worked.

#### 3. Modifying your parse server

From the terminal, you want to use the Heroku toolbelt I mentioned before step 1 to download your Heroku'd Parse server and make changes.

Login into heroku using the Heroku toolbelt:

```javascript
heroku login
```

Finally, you can clone your new heroku app:

```javascript
heroku git:clone -a MYPARSEAPPNAME
```

This will download your parse server app to your local computer inside a folder called whatever you named your heroku app. _Replace `MYPARSEAPPNAME` with the name of your app on Heroku._

If you've worked with Parse at all before, then you're already familiar with having to add a `clientKey` and `appId` into the initialization of your client code, to allow your app to communicate with Parse. 

Now however, you need to set these keys both in your client code and in the server code. 

Open up `index.js` and set both the `clientKey`, and `appId`, to whatever you want

```javascript
var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: 'MYAPPID',
  clientKey: 'myclientKey',  
  masterKey: 'myMasterKey'
});
```

You will then need to go into the initialization block of your code, and set a matching `appId`.

On your client side, the only code change you'll need to make is to specify your new server address. This is the address of your Heroku app that hosts your server side code. You can find it in the settings of your app on your Heroku Dashboard. It is just a URL of the form

[https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com**/parse**](https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse)

Your client code would now look something like this (for javascript):

```javascript
Parse.initialize('APP_ID', 'CLIENT_KEY');
Parse.serverURL = 'https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse';
var Test = Parse.Object.extend('TestObject');
var test = new Test();
test.save({'animal': true, 'type': 'dog'},{
	success: function () {
		console.log('success');
	},error: function() {
		console.log('error');
	}
});
```

The final step is to update your Heroku app, since you changed the `appId` and added a `clientKey`. 

To do that, run these three commands in the terminal: 

```javascript
$ git add --all .
$ git commit -m "My first commit"  
$ git push heroku master
```

When you change code locally, it isn't updated on Heroku automatically, so you have to run those three commands to:

1. Add any new files
2. Commit all changed, added or removed files so the server knows what changed
3. Upload the changes to Heroku

Also, where you see `My first commit`, it helps to update that to reflect any changes you've made.

#### About Cloud Code

you may have noticed this line:

```javascript
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
```

This tells your server where your cloud code is located. [Cloud code](https://parse.com/docs/cloudcode/guide) is a feature from Parse that serves as short functions that you can call quickly via HTTP requests such as this one:

```javascript
curl -X POST \
	-H "X-Parse-Application-Id: myAppId" \
	-H "Content-Type: application/json" \
	-d '{}' \
	https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse/functions/hello
```

When you migrate from Parse to a self-hosted Parse Server, you can also move over any cloud code you've set up so that you just call it when you want to work with it.

The default, included cloud code function is:

```javascript
Parse.Cloud.define('hello', function(req, res) {
	res.success('Hi');
});
```

Which means when you make the HTTP request above, you get a return of `Hi`, where `hello` is the name of the function you created. You can have as many function as you want, and they all serve different purposes.

#### FINISHED

You can now use your client side Parse code just as you always did, and  works as it did before. 

Now instead of connecting to a Parse run server, your client code is connecting directly to your Heroku app, which saves all your data in your MongoDB database. 

Your queries all work the same as before.

---

It is worth mentioning that several features that made Parse really useful, will not be available in your parse server right away.

The biggest feature that is missing is Push Notifications. But as it happens, it's pretty easy to add Push Notification support to node.js, and I'll cover in a later tutorial just how to add Push to your new Parse Server.

Background jobs was another feature missing, but you can look at queue systems or cron jobs to replace them easily. I also plan to write about migrated background jobs to `node-cron` scheduled jobs.

I also recommend installing the free new relic add-on inside your heroku app for handy analytics.

### Still Confused?

If you have questions about Parse Server, setting up push notifications, moving your data from Parse to MongoDB _or Flybase_, then just feel free to [get in touch](/contact/) at anytime and I'll be happy to answer any questions or lend a hand or two.
