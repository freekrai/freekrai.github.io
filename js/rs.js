$( document ).ready(function() {
	var rs = new rsBlog();
	rs.start();
});


function hashCode( str ){
	if (Array.prototype.reduce){
		return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
	}
	var hash = 0;
	if (str.length === 0) return hash;
	for (var i = 0; i < str.length; i++) {
		var character  = str.charCodeAt(i);
		hash  = ((hash<<5)-hash)+character;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var rsBlog = function(){
	this.url = document.location.pathname;
	return this;
}

rsBlog.prototype.start = function(){
	if ( this.url === "/" ){
		var page = getParameterByName("p");
		if( page === "" || page === "1" ){
			var popular = new mostPopular().getPages( $("#main") );
		}
	}else if ( this.url === "/support") {
		window.MemberfulOptions = {site: "https://freekrai.memberful.com"};
		(function() {
			var s   = document.createElement('script');
			
			s.type  = 'text/javascript';
			s.async = true;
			s.src   = 'https://d35xxde4fgg0cx.cloudfront.net/assets/embedded.js';
			
			setup = function() { window.MemberfulEmbedded.setup(); }
			
			if(s.addEventListener) { s.addEventListener("load", setup, false); } else { s.attachEvent("onload", setup); }
			
			( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
		})();
	}

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
	$("#tinyhref").click( function(e){
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
//	this won't be needed once all posts are cleaned up, but it's for any stragglers out there right now...
	$("pre").not(".language-*").addClass("language-javascript");
	return this;	
};

var mostPopular = function(){
	this.api_key = "74c8064f-cd6f-4c07-8baf-b1d241496eec";
	this.db = "rogerstringer";
	this.collection = "mostpopular";

	this.pages = [];

	this.flybaseRef = new Flybase( this.api_key, this.db, this.collection );
	this.populate();
	return this;
};

mostPopular.prototype.populate = function(){
	var _this = this;

	//	let's get a list of pages for use later...
	this.flybaseRef.orderBy( {"views":-1} ).on('value', function( data ){
		if( data.count() ){
			data.forEach( function(snapshot) {
				var item = snapshot.value();
				_this.pages[ item.key ] = item;
			});
		}
	});
};

mostPopular.prototype.getPages = function( div_id ){
	var _this = this;	
	var r={
		headline:"Recently popular posts&hellip;",
		clickhere:"(click to load)",
		loading:"(loading&hellip;)"
	};
//	this.pages.slice(1, 6);
	$('<aside id="popular"><header><h1>'+r.headline+"</h1></header></aside>").prependTo( div_id );
	this.flybaseRef.orderBy({"views":-1}).limit(6).on('value',function( data ){
		if( data.count() ){
			var pages = [];
			data.forEach( function(snapshot) {
				var item = snapshot.value();
				pages[item._id] = item;
			});

			var aside = $("#popular");
			var header = $("header",aside);

			var ul = $("<ul />").attr("style","display:none");
			for( var i in pages ){
				var item = pages[i];
				$('<li/>').attr("id",item._id).prepend(
					$("<a>")
						.attr("href",item.url)
						.attr("title",item.title)
						.attr("data-count",item.views)						
						.text(item.title)
				).appendTo( ul );
				_this.pages[ item.key ] = item;
			}
			aside.append( ul );
			ul.slideDown(400);
			header.removeClass("loading").addClass("loaded");
			header.find("h1").html(r.headline);
		}
	});
	return this;
};

/*
mostPopular.prototype.updatePage = function(url, title){
//	create a unique key from the url by stripping out all non-alphanumeric characters...
	var key = url.replace(/[\/-]/g,'');
	
	var _this = this;
	var cnt = 0;
	_this.flybaseRef.where({"key": key}).orderBy( {"views":-1} ).on('value').then( function( data ){
		var item = data.first().value();
		item.views = item.views + 1;
		_this.flybaseRef.update(item._id,item, function(resp) {
			console.log( key + " updated" );
		});
	},function(){
		// no count, so never added before..
		_this.flybaseRef.push({
			"key": key,
			"url": url,
			"title": title,
			"views": 1
		}, function(resp) {
			console.log( "URL added" );
		});
	});
	return this;
};
*/

mostPopular.prototype.updatePage = function(url, title){
//	create a unique key from the url by stripping out all non-alphanumeric characters...
	var key = url.replace(/[\/-]/g,'');
	
	var _this = this;
	//	get current count and increment it...
	var cnt = 0;
	_this.flybaseRef.where({"key": key}).orderBy( {"views":-1} ).on('value').then( function( data ){
		var first = true;
		data.forEach( function(snapshot) {
			var item = snapshot.value();
			if( first ){
				item.views = item.views + 1;
				_this.flybaseRef.update(item._id,item, function(resp) {
					console.log( key + " updated" );
				});
			}else{
				// clean up any dupes until we make this better...
				_this.flybaseRef.deleteDocument(item._id, function(resp) {
					console.log( item._id + " deleted");
				});
			}
			first = false;
		});
	},function(){
		// no count, so never added before..
		_this.flybaseRef.push({
			"key": key,
			"url": url,
			"title": title,
			"views": 1
		}, function(resp) {
			console.log( "URL added" );
		});
	});
/*
	_this.flybaseRef.where({"key": key}).orderBy( {"views":-1} ).on('value',function( data ){
		if( data.count() ){
			var first = true;
			data.forEach( function(snapshot) {
				var item = snapshot.value();
				if( first ){
					item.views = item.views + 1;
					_this.flybaseRef.update(item._id,item, function(resp) {
						console.log( key + " updated" );
					});
				}else{
					// clean up any dupes until we make this better...
					_this.flybaseRef.deleteDocument(item._id, function(resp) {
						console.log( item._id + " deleted");
					});
				}
				first = false;
			});
		}
	});
		}else{
			// no count, so never added before..
			_this.flybaseRef.push({
				"key": key,
				"url": url,
				"title": title,
				"views": 1
			}, function(resp) {
				console.log( "URL added" );
			});
		}
	});
*/
	return this;
};

(function($){
	$.fn.repo = function( options ){
		$("#repo-wp-bigfoot").parent().hide();
		return false;
	};
})(jQuery);
