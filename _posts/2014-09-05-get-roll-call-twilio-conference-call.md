---
layout: "post"
title: "How to get a roll call during a Twilio Conference Call"
tags: 
- "code"
date: "2014-09-05 03:12:41"
ogtype: "article"
bodyclass: "post"
---

> In an ideal world, the start of every conference call would be seamless. Everyone is on the line and everyone knows who is on the call. But, things don’t always work that well. The start of a conference call can leave people talking over each other in an effort to introduce themselves and leave others pretty peeved about the whole process.

Twilio’s conference calling functionality is great in that it is simple to set up, but powerful with just a few tweaks.

In this post, we’re going to set up a moderated conference system with a twist, we’re going to buld a **roll call system**, so that when a moderator presses the `*` button, they will redirect to a page which will read back a list of participants, then `<Redirect>` the moderator back into the conference.

I know, that sounds like a useful feature when you’ve got a scheduled conference call and want to make sure everyone has called in before starting.

So, today, we’re going to show you how to set up a roll call system. To do this, we need a bit of setup.

First, let’s set up the non-moderated caller TwiML when participants call in:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<Say>The conference will begin when the moderator joins</Say>
	<Dial>
		<Conference startConferenceOnEnter="false">Room1234</Conference>
	</Dial>
</Response>
```

Let’s call this file `conference.xml`.

Callers who call into this number will be met with a message that the conference will begin when the moderator joins.

Second, we need the TwiML for moderators. So that when a moderator joins, we could append an `action` on to the `<Dial>` that would trigger a call to a file which would then announce the end of the conference.

```markup
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<Dial action="rollcall.php" method="POST" hangupOnStar="true" timeLimit="1800">
		<Conference startConferenceOnEnter="true" endConferenceOnExit="false">Room1234</Conference>
	</Dial>
</Response>
```

Let’s call this file `conferencemod.xml`.

Finally, we want to add the code to handle when a moderator presses the `*` button on their phone.

This will call a file called `rollcall.php`, which will present the moderator with a list of participants as a roll call, then forward the moderator back into the conference.

Notice, we set the `endConferenceOnExit` to `false`? This is because we don’t want to end the conference at this time, we just want the moderator to hear a list of participants, then get forwarded back into the conference. In this case, the conference would end when everyone hung up their calls.

First, we would get a count of particpants still on the conference.

Second, we would cycle through each participant and `<Say>` that participant’s phone number to the moderator.

Finally, we `<Redirect>` the moderator back into the `<Conference>`.

Let’s create **rollcall.php**:


```php
<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once('/path/to/twilio-php/Services/Twilio.php'); // Loads the library
 
// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACXXXXX"; 
$token = "YYYYY"; 
$client = new Services_Twilio($sid, $token);

$response = new Services_Twilio_Twiml();

if( isset($_REQUEST['ConferenceSid']) ){
	$participants = $client->account->conferences->get( $_REQUEST['ConferenceSid'] )->participants;
	$cnt = count( $participants );
	$response->Say(  "There are ".$cnt." callers in this conference" );

	foreach ($participants as $participant) {
		$call = $client->account->calls->get( $participant->callsid );
		$response->Say( $call->from );
	}
}

$response->Redirect("conferencemod.xml");
print $response;
?>
```

---

[This post was originally published on the [Twilio blog](https://www.twilio.com/blog/2014/09/roll-call-roger-stringer-shows-you-how-to-take-a-headcount-during-a-twilio-conference-call.html)]