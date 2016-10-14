---
layout: post
published: true
title: "Using Yarn with Docker"
date: 2016-10-14T21:36:56.101Z
link: https://medium.com/@mfornasa/using-yarn-with-docker-c116ad289d56#.7a6lbfhd5
tags:
  - links
ogtype: article
bodyclass: post
image: http://rogerstringer.com/media/install.png
---

![Chromebook Flip](/media/install.png)

Martino Fornasa:

> Facebook recently [released](https://code.facebook.com/posts/1840075619545360) [Yarn](https://yarnpkg.com/), a new Node.js package manager built on top of the npm registry, massively reducing install times and shipping a deterministic build out of the box.
>
> Determinism has always been a problem with npm, and solutions like npm shrinkwrap are not [working](http://jonnyreeves.co.uk/2016/npm-shrinkwrap-sucks/) [well](https://github.com/npm/npm/issues/11736). This makes hard to use a `npm-based` system for multiple developers and on continuous integration. Also, `npm`  slowness in case of complex `package.json` files causes long build times, representing a serious blocker when using Docker for local development.
>
> This article discuss how to use Yarn with Docker for Node.js development and deployment.

Yarn is pretty powerful, and combining it with Docker to help make builds smoother makes it even more useful.
