<?php
	header("Content-type: application/x-javascript");
/*
	$ads = array();
	$ads[] = array(
		"link" => "http://dbstract.com",
		"html" => "",
		"text" => ""
	);
	srand((float) microtime() * 10000000);
	$rn = array_rand($ads);
	$content = $content.'<hr />'.$banners[$rn];
*/
// display the advertisement
?>
var advert = ''
advert+='<hr class="harden" />';
advert+='<a href="https://freekrai.freshbooks.com/refer/www" style="background-color: transparent;"><img src="http://www.freshbooks.com/images/banners/fb200x125-loving.png" width="200" height="125" border="0" alt="FreshBooks" /></a>';
advert+='<p class="ads">';
advert+='We use <a href="<a href="https://freekrai.freshbooks.com/refer/www">FreshBooks</a> at freekrai.net and theinterviewr.com for all our invoicing and we love it.';
advert+='</p>';
advert+='<hr class="harden" />';
advert+= '<a href="http://referrals.trhou.se/rogerstringer" target="_blank"><img src="http://teamtreehouse.com/referral-badge/rogerstringer"/></a>';
advert+='</p>';
<?php/*
advert+='<hr class="harden" />';
advert+='<img class="ad" alt="psd2html.com" src="http://connect.decknetwork.net/i/p2h_01.png" border="0" height="90" />';
advert+='</a>';
advert+='<p class="ads">';
advert+='Human-coded HTML/CSS. 370+ professionals. <a href="http://www.psd2html.com/?d">PSD2HTML.com</a>';
advert+='</p>';
*/?>
//advert+='<p><a href="/advertise" class="adlink">Advertise on this blog</a></p>';
document.write(advert);
<?php/*
	<a href="http://decknetwork.net/" id="adlabel"><img src="/ads-via-the-deck.png"/><span>Ads via The Deck</span></a>
	<div id="adcontent">
	<script type="text/javascript">
	//<![CDATA[
	(function(id) {
	document.write('<script type="text/javascript" src="' +
	'http://connect.decknetwork.net/deck' + id + '_js.php?' +
	(new Date().getTime()) + '"></' + 'script>');
	})("MA");
	//]]>
	</script>
*/?>