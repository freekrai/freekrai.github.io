(function() {
    var config = new Object();
    var titles = [];
    var links = [];
    var items = [];

    var scripts = document.getElementsByTagName('script');
    var this_script = scripts[scripts.length - 1];
    var params = this_script.src.replace(/^[^\?]+\??/,'').split('&');   
 
    var url_base = ((typeof(config.url) == 'undefined') ? ('http://' + document.domain + '/') : ('http://' + config.url + '/'));

    for(var i=0; i<params.length; i++) {
        var tmp = params[i].split("=");
        config[tmp[0]] = unescape(tmp[1]);
    }

    document.write(
        '<div id="relposts">' +
            '<div id="relposts-loading">Loading related posts...</div>' +
            '<div id="relposts-title"></div>'+
            '<ul id="relposts-list"></ul>' +
        '</div>'
    );

    if(typeof(config.tags)=='undefined'){ error(0); return; }
    if(typeof(config.num)=='undefined'){ config.num=8; }
    if(typeof(config.len)=='undefined'){ config.len=60; }
    if(typeof(config.css)=='undefined'){ document.write('<link rel="stylesheet" type="text/css" href="http://rogerstringer.com/assets/js/relposts.css" />');}
    
    var tags = config.tags.slice(0,-1).split(',');

    $(document).ready(function() {
        function getRelated() {
            var req;
            for(var i=0; i<tags.length; i++){
				var url = url_base+'assets/demos/xmljson.php?callback=?&num='+config.num+'&start=0&tagged='+escape(tags[i]);
console.log( url );
				$.getJSON(url, function(data) {
console.log( data );
                    $(data.posts).each(function(i, post) {
                        var text='';
						text+=post['title'];
                        if(text.length>config.len){ text=text.slice(0,config.len); text+='...';}
                        titles.push(text.replace(/(<[^<>]*>)/g, ""));
                        links.push(post['link']);                        
                    });
                    
                }).complete(getList);
            }
        }
        function getList(){
            for(var i=0; i<titles.length; i++){
                var regex = new RegExp('('+links[i]+')');
                var html = $("#relposts-list").html();

                if(links[i]!=document.location&&!html.match(regex)){
                    if(config.num--<=0) return;
                
                    var item='<li class="relposts-item"><a class="relposts-link" href="'+links[i]+'">'+titles[i]+'</a></li>';
                    $("#relposts-list").append(item);
                }
            }
            $("#relposts-title").html('Related posts:');
            $("#relposts-loading").html('');
        }
        getRelated();
        
    });

    function getError(e){
        var msg="error: ";
        switch(e){
            case 0: msg+='no tags defined'; break;
            case 1: msg+='tumblr API problem'; break;
        }
        $("#relposts-loading").html(msg);
    }
})();