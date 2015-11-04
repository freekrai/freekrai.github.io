
jQuery(document).ready(function() {

	//	FitVids - Responsive video...
	$("article").fitVids();

	//	Add bigfoot footnotes...
	$.bigfoot({
		actionOriginalFN: "ignore",
		numberResetSelector: "article",
		buttonMarkup: (
			"<a href=\"#\" class=\"footnote-button\" " +
			"id=\"{{SUP:data-footnote-backlink-ref}}\" " +
			"data-footnote-identifier=\"{{FOOTNOTEID}}\" " +
			"data-footnote-style=\"default\"" +
			"alt=\"See Footnote {{FOOTNOTEID}}\" " +
			"rel=\"footnote\"" +
			"data-footnote-content=\"{{FOOTNOTECONTENT}}\">" +
			"{{FOOTNOTENUM}}" +
			"</a>"
		)
	});
	
	var i = 0;
	jQuery("#tinyhref").click( function(e){
		var d = document.getElementById('navbox'), e = document.getElementById('fullabout');
		if (e.getAttribute('class') == 'fa_expanded') {
			e.setAttribute('class', 'fa_normal');
			if (d) d.setAttribute('class', 'fa_normal'); 
		} else { 
			e.setAttribute('class', 'fa_expanded');
			if (d) d.setAttribute('class', 'fa_expanded'); 
		}
		return false;	
	});
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
});
