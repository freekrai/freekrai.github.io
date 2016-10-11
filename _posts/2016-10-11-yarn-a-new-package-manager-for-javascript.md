---
layout: post 
published: false 
title: "Yarn: A new package manager for JavaScript" 
date: 2016-10-11T22:17:47.076Z 
link: https://code.facebook.com/posts/1840075619545360 
tags:
  - links
ogtype: article 
bodyclass: post 
---

> In the JavaScript community, engineers share hundreds of thousands of pieces of code so we can avoid rewriting basic components, libraries, or frameworks of our own. Each piece of code may in turn depend on other pieces of code, and these dependencies are managed by package managers. The most popular JavaScript package manager is the npm client, which provides access to more than 300,000 packages in the npm registry. More than 5 million engineers use the npm registry, which sees up to 5 billion downloads every month.
> 
> We've used the npm client successfully at Facebook for years, but as the size of our codebase and the number of engineers grew, we ran into problems with consistency, security, and performance. After trying to solve for each issue as it came up, we set out to build a new solution to help us manage our dependencies more reliably. The product of that work is called Yarn — a fast, reliable, and secure alternative npm client.
> 
> We're pleased to announce the open source release of Yarn, a collaboration with Exponent, Google, and Tilde. With Yarn, engineers still have access to the npm registry, but can install packages more quickly and manage dependencies consistently across machines or in secure offline environments. Yarn enables engineers to move faster and with confidence when using shared code so they can focus on what matters — building new products and features.
