---
layout: "post"
title: "PHP and Neo4j: Introduction to Graph Databases"
link: "http://www.sitepoint.com/php-neo4j-introduction-graph-databases/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+SitepointFeed+%28SitePoint+Feed%29"
tags: 
- "links"
- "code"
date: "2014-01-10 21:53:23"
ogtype: "article"
bodyclass: "post"
---

Mehul Jain:

> For a long time, data has been typically stored in tabular form so as to increase the indexing and readability. Nowadays, the trends are changing as Graph databases are quickly gaining popularity. In fact, it would not be wrong to call them “the future of DBMS”.
> 
>  New to the world of graphs and databases? Don’t worry, by the end of this introductory article you will have sound theoretical knowledge about the topic – just enough to easily glide through the rest of the series – actual implementation.
> 
> **What are Graphs?**
> 
>  Graphs are the most generic form of storing data in a visual manner in the world of data structures. Graphs store data in the form of nodes (data blocks) where one node points to another. We can reach any data block from another.
> 
> **What are Graph Databases?**
> 
>  Technically, Graph Databases are a way of storing data in the form of nodes, edges and relationships which provide index-free adjacency.
> 
>  Now let’s understand this – Data is stored in the form of nodes, every node (or data block) is connected to another one and this connection is called an edge. A few words are also mentioned on these edges to further define the connection between one node and the other – this description is called a relationship. Since each node can directly look-up the node it is connected to (they are all connected through edges, remember?), this eliminates the need of searching a data block by its ‘index’, hence the term ‘index-free adjacency’.
> 
>  Today, most of the social networking sites like Facebook use graph databases to store their massive amount of data.

Graph databasing is a pretty interesting new database technology… This post serves as a good intro to Neo4j and php