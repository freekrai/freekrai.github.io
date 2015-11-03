---
layout: "post"
title: "Post to your GitHub-hosted blog using a simple bookmarklet"
date: "2015-11-03 06:30:00"
tags: 
- "code"
ogtype: "article"
bodyclass: "post"
---

[Jekyll](http://jekyllrb.com) is a blog-aware, static site generator in Ruby, probably the most popular of its kind. One of the reasons it's so popular is that it's "extremely" easy [to host a jekyll blog on GitHub](https://help.github.com/articles/using-jekyll-with-pages/).

Most users think of GitHub as an advanced file system, and that updating a GitHub hosted jekyll blog means uploading new content using `git`. However, GitHub is actually an advanced document store with a [REST API](https://developer.github.com/v3/), event [webhooks](https://developer.github.com/webhooks/) and other powerful features.

So, in theory, one should be able to post to a GitHub-hosted Jekyll blog (i.e. crete a new markdown document in a GitHub repo), using javascript served from a static page, right?

I host several blogs on GitHub, including most recently, the [Flybase Blog](http://blog.flybase.io), and I wanted a simple way to to be able to quickly add drafts or links via a bookmarklet, and so, this was born.

This is version 1, so there is room for improving, the next version will let you choose the post tags you want to use, whereas currently it defaults to `links`. I'll also probably include an option for setting the published status so you can send a post directly to publish if you want to, whereas they are currently set to `published:false` as drafts until they can be reviewed.

### Installation

1.  Download `add-draft.html` from [github.com/freekrai/jekyll-bookmarklet](https://github.com/freekrai/jekyll-bookmarklet),
2.  copy it in your Jekyll source folder,
3.  deploy the updates to GitHub, and
4.  visit `add-draft.html` at your blog, usually at `<site.url>/<site.baseurl>/add-draft.html`

### Notes, ideas and thoughts

1.  You will need to enter your GitHub username/password every time you post using the bookmarklet. This is a requirement (as far as I know) of the GitHub API. This is safe, as they are just sent to GitHub and no one else, but it's not very convenient. 

2.  This was built quickly, and there is lots of space for improvements, like showing up tagging options, or identifying media in the page to be bookmarked (for example, photos or video embeds) and automatically generating different post types.