---
layout: post 
published: true 
title: "Adding Push Notifications to your Parse Server App" 
date: 2016-02-11T18:14:48.293Z 
tags:
  - code
  - parse
ogtype: article 
bodyclass: post 
---

I was originally going to write about how to use node.js to enable push notifications, but the latest version of Parse Server now includes basic push notification support using [Google Cloud Messaging (GCM)](https://developers.google.com/cloud-messaging/) for Android devices and [Apple Push Notification Service (APNS)](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html) for iOS devices.

Instead, I decided to write about how to enable the built-in push notifications in your Parse Server apps using the updated service. 

_There are already [guides](https://github.com/ParsePlatform/parse-server/wiki/Push) out there on this, but I wanted to put as much information as I could in one place, rather than clicking through to various sources._

---

### Getting Started

This post assumes you previously set up a [Parse Server install on Heroku](http://rogerstringer.com/2016/02/04/parse-server-heroku/), so some steps will make more sense if you've followed that tutorial as well.

To get started, you'll need your credentials to both [GCM](https://developers.google.com/cloud-messaging/) and [APNS]((https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html)) in order to send push notifications to iOS and Android devices.

#### Preparing your APNS (iOS) credentials

Preparing your Apple Push Notification Service credentials is actually the longest, most detailed part of this post. There are a few steps to follow so I'll keep them as quick and as short as I can _(by the way, if your app is Android only, then you can skip this step obviously)_:

1. Log in to the [Apple Developer Member Center](https://developer.apple.com/account/overview.action) and click on `identifiers` under iOS Apps and locate your application in the list.
2. If you haven't registered an `App Id` yet, then click the `+` symbol and fill out the form, _make sure you check the `Push Notifications` checkbox.
3. Click `Settings` _or `Edit`_ to continue.
4. Choose either the `Development` or `Production` certificate option and click `Create Certificate`.
5. Follow the instructions in the `Add iOS Certificate Assistant` and click `continue`.
6. Using the Certificate Signing request that was just created, generate the APNS Push SSL certificate.
7. When the `Download` button appears, you can download your certificate(s). _you may need to reload the page for this to update_.
8. Open the download certificate, this will open in the `Keychain Access` app.
9. You should see your certificate under `My Certificates`. If you don't then check `Certificates` and it may be there instead.
10. The final step is to export your certificate as a `.p12` file.
	1. Select the certificate that was just added to `Keychain Access` and select `File` -> `Export Items...` from the menu. _Make sure you have select `My Certificates` from the category menu on the lower left-hand side, if it's not highlighted then you will not be able to export the certificate as a `.p12` file.
	2. When saving the file, use the `Personal Information Exchange (.p12)` format.
	3. Create a folder in your parse server app called `certs` and copy the file there.

Ok, you've got your `.p12` file, we'll use this shortly to configure push notifications, now onto setting up your GCM credentials.

#### Preparing your GCM (Android) credentials

Google Cloud Messages is a lot easier to configure than APNS was _(by the way, if your app is iOS only then you can skip this step obviously)_:

1. Enable GCM for your Android project in the [Google Developer Console](https://console.developers.google.com/). This will give you your `GCM sender ID`,  which is your project number. The project number should be a large integer like `129437206252`.

2. Go to the [Google developer credentials](https://console.developers.google.com/apis/credentials) page, and create a new API key. This API key is your `GCM API key`. 

---

### Configuring Your Parse Server App to Push

Now that we've gotten our credentials, we need to update our app to use them.

Let's look at the config we used in our [last post](http://rogerstringer.com/2016/02/04/parse-server-heroku/) about Parse Server:

```javascript
var api = new ParseServer({
	databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
	cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
	appId: 'MYAPPID',
	clientKey: 'myclientKey',  
	masterKey: 'myMasterKey'
});
```

First, make sure you run `npm install --save parse-server@latest` to update your app to the latest version of Parse Server.

Also, you will need to make sure you set the `masterKey` as that is necessary for sending push notifications from your app via API calls.

Ok, let's add the new `push` configuration:

```javascript
var api = new ParseServer({
	databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
	cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
	appId: 'MYAPPID',
	clientKey: 'myclientKey',  
	masterKey: 'myMasterKey',
	push: {
		android: {
			senderId: '', // The Sender ID of GCM
			apiKey: '' // The Server API Key of GCM
		},
		ios: {
			pdx: 'certs/mycert.p12', // the path and filename to the .p12 file you exported earlier. 
			bundleId: '', // The bundle identifier associated with your app
			production: true
		}
	}
});
```

### Configuring Your Parse Apps to use Parse Server

To update your iOS and / or Android apps to use Parse Server instead of Parse, all you have to do is change the server URL to your installation.

_Make sure you update to the [latest versions of the SDKs](https://parse.com/docs/downloads) so that you have support for Parse Server._

For example, if you followed the previous post about [installing Parse Server on Heroku](http://rogerstringer.com/2016/02/04/parse-server-heroku/), then you would point your apps to use: `https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com` _where `NAME_OF_YOUR_HEROKU_APP` is the name of your heroku app you created_.

#### Configuring your iOS apps

```javascript
[Parse initializeWithConfiguration:[ParseClientConfiguration configurationWithBlock:^(id<ParseMutableClientConfiguration> configuration) {
	...
	configuration.applicationId = @"MYAPPID";
	configuration.clientKey = @"myclientKey";
	configuration.server = @"https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse";
	...
}]];
```

#### Configuring your Android apps

```javascript
Parse.initialize(new Parse.Configuration.Builder(myContext)
	.applicationId("MYAPPID")
	.clientKey("myclientKey")
	.server("https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse")
	...
	.build()
);
```

You should also update your app so that it registers for GCM with both Parse's GCM sender ID and your app's GCM sender ID. To do this, specify the additional GCM sender ID with the following `<meta-data>` tag as a child of the `<application>` element in your app's `AndroidManifest.xml`. 

For example:

```javascript
<meta-data 
	android:name="com.parse.push.gcm_sender_id" 
	android:value="id:YOUR_SENDER_ID" />;
```

### Viewing Installations
  
Once you've configured and updated your apps, you'll be able to see installations using this curl command:

```javascript
curl -X GET \
	-H "X-Parse-Application-Id: MYAPPID" \
	-H "X-Parse-Master-Key: myMasterKey" \ 
	https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse/installations
```

This will show you how many people have your app installed.

### Sending Push Notifications

I know, this was the entire reason you read this far, you want to know how to send push notifications correct? I thought so.

Currently, Parse Server can only send push notifications using API requests with your `master key`. So, for example:

```javascript
curl -X POST \
	-H "X-Parse-Application-Id: MYAPPID" \
	-H "X-Parse-Master-Key: myMasterKey" \
	-H "Content-Type: application/json" \
	-d '{ 
		"where": { 
			"deviceType": { "$in": [ "ios",  "android"  ]  }  
		},
		"data": {
			"title": "Ant-man",
			"alert": "This is awesome. It is awesome."
		}
	}' \
	https://NAME_OF_YOUR_HEROKU_APP.herokuapp.com/parse/push
```

Will send a push notification to all registered `ios` or `android` devices. Push notifications are formatted as `title` and `alert` with `alert` being the actual message.

You can now do push notifications to your iOS and Android apps!

### Closing Out

Hopefully, this guide will be useful for seeing how to add push notifications to your Parse Server apps. Parse Server is shaping up to be a handy utility so it's fun to look at the various pieces of it.

In a future post, I'll show you how to integrate a proper job queue which can then take trigger notifications based on certain criteria, such as a new message notification in a chat room that a user has subscribed to, for example.