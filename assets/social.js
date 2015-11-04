jQuery(function(){

var social_init = function(  ) {
    // Initializes Twitter
    var twitter_buttons = $(".twitter-share-button,.twitter-timeline").filter(":not(.active)");
    if (twitter_buttons.length>0) {
        if (typeof (window.twttr)!=='undefined' && typeof (window.twttr.widgets)!=='undefined') {
            window.twttr.widgets.load();
        } else {
            $.getScript('http://platform.twitter.com/widgets.js');
        }
        twitter_buttons.addClass('active');
    }

    // Initializes Facebook
    var fb_likes = $('.fb-like:not(.active)');
    var fb_boxes = $('.fb-like-box:not(.active)');
    if (fb_likes.length>0 || fb_boxes.length>0) {
        if (typeof (window.FB)!=='undefined') {
            window.FB.init({ status: true, cookie: true, xfbml: true });
        } else {
            $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
                window.FB.init({ status: true, cookie: true, xfbml: true });
            });
        }
        fb_likes.addClass('active');
    }

    // Initializes Google+ Page Badge and +1 buttons
    // TODO: Make this work with badges properly
    var gplus_badge = $('#gplus-page-badge').filter(':not(.active)');
    if (typeof (window.gapi)!=='undefined') {
        window.gapi.plusone.go();
        // if (gplus_badge.length>0) {
        //     window.gapi.plus.render('gplus-page-badge', {
        //         href: 'https://plus.google.com/110703673421158974551',
        //         size: 'badge'
        //     });
        //     gplus_badge.addClass('active');
        // }
    } else {
        $.getScript('https://apis.google.com/js/plusone.js',function(){
            window.gapi.plusone.go();
            // if (gplus_badge.length>0) {
            //     window.gapi.plus.render('gplus-page-badge', {
            //         href: 'https://plus.google.com/110703673421158974551',
            //         size: 'badge'
            //     });
            //     gplus_badge.addClass('active');
            // }
        });
    }
};

social_init();

// Pinterest
(function(d){
  var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
  p.type = 'text/javascript';
  p.async = true;
  p.src = '//assets.pinterest.com/js/pinit.js';
  f.parentNode.insertBefore(p, f);
}(document));

});
