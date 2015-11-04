/*
	Simple page tracker, updates views on each page then outputs a list of most popular pages.
	Powered by Data McFly, ideal for static websites.	
*/
var mostPopular = function(){
	this.api_key = "74c8064f-cd6f-4c07-8baf-b1d241496eec";
	this.db = "rogerstringer";
	this.collection = "mostpopular";

	this.datamcflyRef = new DataMcFly( this.api_key, this.db, this.collection );
};

mostPopular.prototype.getPages = function( id ){
	$(id).html("");	
	this.datamcflyRef.orderBy({views:-1}).limit(5).on('value',function( data ){
		if( data.count() ){
			var pages = [];
			data.forEach( function(snapshot) {
				var item = snapshot.value();
				$('<li/>')
					.attr("id",item._id)
					.prepend(
						$("<a>").attr("href",item.url)						
						.text(item.title)
					).appendTo( $(id) );
			});
		}
	});
};

mostPopular.prototype.updatePage = function(){
	var url = document.location.pathname;

//	some browsers have the / at end of URL.. some do not..
	if( url.charAt( url.length-1 ) == '/' ){
		url.slice(-1);
	}

	var title = document.getElementsByTagName("title")[0].innerHTML;
//	clean up the title..
	title = title.replace("Roger Stringer",'');
	title = title.replace(" — ",'');
	title = title.replace(" &mdash; ",'');

	//	get current count and increment it...
	var cnt = 0;
	var _this = this;
	this.datamcflyRef.where({url:url}).on('value',function( data ){
		if( data.count() ){
			data.forEach( function(snapshot) {
				var item = snapshot.value();
				item.views = item.views + 1;
				_this.datamcflyRef.update(item._id,item, function(resp) {
					console.log( "URL updated" );
				});
			});			
		}else{
			// no count, so never added before..
			_this.datamcflyRef.push({
				url:url,
				title:title,
				views:1	
			}, function(resp) {
				console.log( "URL added" );
			});
		}
	});
};