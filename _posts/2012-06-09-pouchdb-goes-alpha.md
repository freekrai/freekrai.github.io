---
layout: "post"
title: "PouchDB goes alpha"
link: "http://pouchdb.com/"
tags: 
- "links"
date: "2012-06-09 19:44:21"
ogtype: "article"
bodyclass: "post"
---

After some months of development work, Dale Harvey has announced that the PouchDB “pocket-sized database” is now alpha software and has a web site. PouchDB is based on the work of Apache CouchDB and gives a developer access, through a simple API, to store and retrieve JSON objects and documents. Because the API is similar to that of CouchDB, PouchDB can synchronise with CouchDB instances or other PouchDB instances.

The alpha preview version supports browsers which support HTML5’s IndexedDB API, with work ongoing to support WebSQL, LocalStorage and node.js. PouchDB is simply a single JavaScript file which can be included in HTML and then allows for the creation, replications and deletion of databases, the creation, updating, retrieval and deleting of documents, querying the database and listening for changes. The current release is tested with Firefox 12 and later and Chrome 19 and later.

PouchDB was created by Mikeal Rogers, former Couchbase employee, as a successor to his BrowserCouch project. Rogers credits Harvey with making “this thing a real project”. Source code to the Apache 2.0 licenses PouchDB can be found on Harvey’s Github repository.