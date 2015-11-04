/*
jQuery(document).ready(function() {
	jQuery("pre").hover(function() {
		var codeInnerWidth = jQuery("code", this).width() + 10;
		if (codeInnerWidth > 543) {
			jQuery(this).stop(true, false).css({zIndex: "9999999",position: "relative"}).animate({width: codeInnerWidth + "px"});
		}
	}, function() {
		jQuery(this).stop(true, false).animate({width: 543});
	});
});
*/
jQuery(document).ready(function() {
	var i = 0;
/*
	$("img").load(function() {
		var cache = Array();
		for (var i = 0; i < arguments.length; i++) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push( $(this).attr('src') );
		}
//		$(this).wrap(function(){
//			return '<div class="imgborder"><span class="rounded-img" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + ($(this).width()-10) + 'px; height: ' + $(this).height() + 'px;" /></span>';
//			return '<div class="top-corners"><img src="'+$(this).attr('src')+'" /><div class="bottom-corners"></div></div>';
//		});
//		$(this).css("opacity","0");
	});
*/
/*
	jQuery("article pre").each(function(){
		var parentTag = jQuery(this).parent().get(0).tagName;
		if( parentTag.toLowerCase() == 'td' ){
		}else{
			jQuery(this).addClass("codebox");
			jQuery('<div></div>').insertBefore(jQuery(this));
			var currentItem = jQuery(this),
				currentContents = currentItem.text(),
				contents = (currentItem.text().indexOf("\n") != -1) ? currentItem.text().split("\n") : currentItem.text().split("\r"),			
				list = jQuery("<code>"),
				container = jQuery("<div>").addClass("snippet-container").insertBefore(currentItem.prev());
			currentItem.text("").prev().andSelf().appendTo(container);
			(currentItem.height() > 0) ? list.css("marginTop", 0) : null;
			jQuery.each(contents, function(i, val) {
				var li = jQuery("<span>").appendTo(list),p = jQuery("<p>").text(val).appendTo(li);
//				(i%2 === 0) ? li.addClass("stripe") : li.addClass("unstripe");	
			});
			list.appendTo(currentItem);
			jQuery(this).addClass("snippet");
			jQuery('<div></div>').insertBefore(jQuery(this));
			var currentItem = jQuery(this),
				currentContents = currentItem.text(),
				contents = (currentItem.text().indexOf("\n") != -1) ? currentItem.text().split("\n") : currentItem.text().split("\r"),			
				list = jQuery("<ol>"),
				container = jQuery("<div>").addClass("snippet-container").insertBefore(currentItem.prev());
			currentItem.text("").prev().andSelf().appendTo(container);
			(currentItem.height() > 0) ? list.css("marginTop", 0) : null;
			jQuery.each(contents, function(i, val) {
				var li = jQuery("<li>").appendTo(list),p = jQuery("<p>").text(val).appendTo(li);
				(i%2 === 0) ? li.addClass("stripe") : li.addClass("unstripe");			
			});
			list.appendTo(currentItem);
		}
	});
*/

/*
$("a[href^='http']").each(function() {
    $(this).css({
        background: "url(http://g.etfv.co/" + this.href + ") left center no-repeat",
        "padding-left": "20px"
    });
});
*/

/*
	jQuery("pre").hover(function() {
		var codeInnerWidth = jQuery("ol", this).width() + 10;
		if (codeInnerWidth > 800) {
			jQuery(this).stop(true, false).css({zIndex: "100",position: "relative"}).animate({width:  "800px"});
		}
	}, function() {
		jQuery(this).stop(true, false).animate({width: 543});
	});
*/
});