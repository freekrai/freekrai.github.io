---
layout: "post"
title: "Moving All Your Links"
tags: 
- "code"
date: "2012-03-21 17:27:31"
ogtype: "article"
bodyclass: "post"
---

When I moved this blog from wordpress, I changed the permalink structure, that meant a lot of broken links. But I had hundreds of links, I didn’t want to handcode those, so I went to the database and wrote a query to convert it:


    SELECT
        CONCAT("redirect 301 ",REPLACE( REPLACE(REPLACE(REPLACE(REPLACE(
            wpo.option_value,'%year%',date_format(wpp.post_date,'%Y')),
            '%monthnum%',date_format(wpp.post_date,'%m')),
            '%day%',date_format(wpp.post_date,'%d')),
            '%postname%',wpp.post_name ),
            '%category%',wpc.slug ) ) as permalink,
        CONCAT_WS("/",wpo_su.option_value,date_format(wpp.post_date,'%Y'),date_format(wpp.post_date,'%m'),date_format(wpp.post_date,'%d'),wpp.post_name) as new_permalink
    FROM wp_posts wpp
    INNER JOIN wp_options wpo on wpo.option_name='permalink_structure' and wpo.blog_id=0
    INNER JOIN wp_options wpo_su on wpo_su.option_name='siteurl' and wpo_su.blog_id=wpo.blog_id
    INNER JOIN (
        SELECT wtr.object_id ID, max(wpt.slug) slug
        FROM wp_term_relationships wtr
        INNER JOIN wp_term_taxonomy wtt ON wtt.term_taxonomy_id=wtr.term_taxonomy_id AND wtt.taxonomy='category'
        INNER JOIN wp_terms wpt ON wpt.term_id=wtt.term_id
        GROUP BY wtr.object_id
    ) wpc ON wpc.ID=wpp.ID
    WHERE wpp.post_type = 'post' AND wpp.post_status = 'publish'
    


What this does is spit out two fields, one is the old link, the other is the new link:


    redirect 301 /2010/03/this-is-a-test    http://rogerstringer.com/2010/03/01/this-is-a-test
    


The new permalink field is directly related to Second Crack’s link formatting, but you can easily change this however you want.

I then copied the two fields and saved them to my .htaccess as they look above, so I ended up with several hundred lines of links to new addresses.