---
layout: "post"
title: "Your own Google SMS Search with Twilio and PHP"
tags: 
- "code"
date: "2013-05-13 19:04:05"
ogtype: "article"
bodyclass: "post"
---

There was a post published earlier today on the [Twilio blog on using Ruby and the Google CustomSearch API to replicate Google SMS Search](http://www.twilio.com/blog/2013/05/resurrecting-google-sms-search-using-twilio.html "Resurrecting Google SMS Search Using Twilio"). I’m more of a PHP fan, so I thought I’d post a PHP version of this handy tool.

### Getting set up

First, you want to install the [Google API Client For PHP](https://code.google.com/p/google-api-php-client/):

In a terminal run:  

```php
curl "http://google-api-php-client.googlecode.com/files/google-api-php-client-0.6.2.tar.gz" -O
tar -xvf  google-api-php-client-0.6.2.tar.gz
```

### Setting up our custom search engine

To begin, we need to go over to the [Google API Console](https://code.google.com/apis/console) and create a new application. Once you have created the application, make sure to enable the Google Custom Search Service, then head to the API Access tab and get your API key. We do not need OAuth 2.0 for this project.

Next we need to create a new [Custom Search Engine](http://www.google.com/cse/):

1. In the Sites to Search field feel free to enter any domain, we will delete it later
2. Head to the Setup tab under `Edit search engine` – under the Sites to Search dropdown select `Search the entire web but emphasize included sites`
3. Select the domain name you entered on the list below and Delete it

Now you have a Custom Search Engine that searches the entire web.

Be sure to copy down the CX parameter from your URL – we will be using this later.

### Coding the SMS

Now that our setup is complete, we can proceed to the code. For this project, we only have one file to create: search.php:

```php
require_once 'google-api-php-client/src/Google_Client.php';
require_once 'google-api-php-client/src/contrib/Google_CustomsearchService.php';
session_start();

$client = new Google_Client();
$client->setApplicationName('My Google SMS Search Replacement');
$client->setDeveloperKey('Your Developer Key Here');
$search = new Google_CustomsearchService($client);
  
$result = $search->cse->listCse($_POST['Body'], array(
	'cx' => 'YOUR CUSTOMER SEARCH ENGINE CX HERE',
	'num'=> '3',
));
if( count($results['items']) ){
	$msg = array();
	foreach($results['items'] as $item){
		$msg[] = $item['title']." ".$item['link']);
	}
	print_sms_reply( $msg );
}else{
	print_sms_reply ("No matches found");
}

function print_sms_reply ($sms_reply){
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";    
	echo "<Response>\n";
	if( !is_array($sms_reply) ){
		echo '<Message>'.$sms_reply.'</Message>';
	}else{
		$cnt = count($sms_reply);
		$i = 1;
		foreach($sms_reply as $line){
			$line = $line." (".$i."/".$cnt.")";
			echo '<Message>'.$line.'</Message>';
			$i++;
		}
	}
	echo "</Response>\n";
}
```

Then you can upload this to your server, set up your Twilio number’s SMS URL to be `http://yourapp.com/search.php` – and then you can get back to sending your search queries to Google via SMS!