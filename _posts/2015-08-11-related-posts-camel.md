---
layout: "post"
title: "How to show related posts in Camel.js"
tags: 
- "code"
date: "2015-08-11 09:15:00"
ogtype: "article"
bodyclass: "post"
---

I'm a big fan of blogging with [Casey's](https://github.com/cliss/camel) [Camel](https://github.com/DataMcFly/camel) blog system, to the point that I use a mostly modified version so I can get features such as post tagging.

I wanted to add related posts, so I decided to take a javascript route and build [jquery.camelrelated](https://github.com/DataMcFly/jquery.camelrelated), this works by using javascript to read a site's rss feed and then display posts related to it based on post tags.

This is version 1, version 2 will use a few other things to match posts better but this will work for now.

To get started, go to the [repo](https://github.com/DataMcFly/jquery.camelrelated) and download `jquery.camelrelated.js`.

## How to use it

1. Download `jquery.camelrelated.js` or `jquery.camelrelated.min.js` and save it to the js folder in your theme directory.
2. Include the script in the `postFooter.html` file in your theme `<script src="/assets/js/jquery.camelrelated.min.js"></script>`

3. Add an ordered or unordered list with a class identifier (related-posts is the default class identifier) in your `postFooter.html` template file. 

```html
<!-- related posts -->
<ul class="related-posts"></ul>
```

Then at the bottom of the page, add the script:

```html
<script src="/assets/js/jquery.camelrelated.min.js"></script>
<script>
    $('.related-posts').camelRelated();
</script>
```

### Optional Options
The theme has some default options defined for you. Based on your theme you may need to override some of these when you initiate the plugin
```javascript
defaults = {
    feed: '/rss-alternate',
    titleClass: '.post-title',
    tagsClass: '.tag',
    debug: false
}
```
            
#### feed:

This is the location of the rss feed for your blog. By default, Camel uses `/rss-alternate`, so you shouldn't need to change this.

#### titleClass:

This is the class identifier for the heading element for your single post title. This makes sure that the post that is currently being read does not come back as a related post.

#### tagsClass: 

This is the class identifier for the element that the current post tags are in. This is used to grab the current post tags and match them against other posts.

It looks like this by default: 
```html
<span class="tag">
    <a href="/tags/getting-started/">Getting Started</a>, <a href="/tags/another-tag/">Another Tag</a>
</span>
```
        
So the option uses `.tag` and the plugin looks for the anchor tags inside of it

#### limit:

Limit amount of related posts to be displayed

#### debug:

If the plugin isn't returning any related posts, set this option to true. This option will output error information to the list you created to help you figure out why the plugin is failing.

#### Start with custom options

```javascript
$('.related-posts').camelRelated({
    titleClass: '.my-title',
    tagsClass: '.my-tags-class'
});
```

This will theoretically work with any rss feed, but it works well for Camel, in fact you can already see it in use on this site.

## Roadmap (sort of)

Later, I'd like to actually include proper searching, which can also be done via javascript and match posts by more than just tags. But to do that, I'd either have to make an rss-like file that was massive to include more than just the last 10 posts, or use the sitemap.xml file, so I'm still playing with that.