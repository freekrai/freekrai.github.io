---
bodyclass: resume
author: Roger Stringer
title: Resume
description: >-
  Roger Stringer is a full-stack developer, DevOps Engineer and technical
  writer.
layout: page
permalink: /resume/
seo:
  type: person
degrees:
  - school: Keyin Technical College
    degree: B.S. in Computer Studies
    date: {}
    emphasis: Software Design and Development
  - school: International Correspondence School
    degree: Freelance Journalism and writing
    date: {}
    emphasis: freelance writing
published: true
---

### How to Reach Me

| <a href="http://rogerstringer.com"><i class="fa fa-home"></i> rogerstringer.com</a> |   | <a href="mailto:roger.stringer@me.com"><i class="fa fa-envelope"></i> roger.stringer@me.com</a> |
|<i class="fa fa-phone"></i> 250-486-1027 |   | <a href="http://ca.linkedin.com/in/rogerstringer"><i class="fa fa-linkedin-square"></i> @rogerstringer</a> |
| <a href="http://github.com/freekrai"><i class="fa fa-github"></i> @freekrai</a> |   | <a href="http://twitter.com/freekrai"><i class="fa fa-twitter"></i> @freekrai</a> |

{% comment %}
<aside id="popular">
<header class="loaded">
<h1>How To Reach Me</h1>
</header>
<ul>
<li><a href="http://rogerstringer.com"><i class="fa fa-home"></i> rogerstringer.com</a></li>
<li><a href="mailto:roger.stringer@me.com"><i class="fa fa-envelope"></i> roger.stringer@me.com</a></li>
<li><i class="fa fa-phone"></i> 250-486-1027</li>
<li><a href="http://ca.linkedin.com/in/rogerstringer"><i class="fa fa-linkedin-square"></i> @rogerstringer</a></li>
<li><a href="http://github.com/freekrai"><i class="fa fa-github"></i> @freekrai</a></li>
<li><a href="http://twitter.com/freekrai"><i class="fa fa-twitter"></i> @freekrai</a></li>
</ul>
</aside>
{% endcomment %}

### Experience

{% assign positions=site.resume_positions | sort: "start_date" %}
{% for position in positions reversed %}
   {% unless position.employer == previous_employer %}
#### {{ position.employer }}
   {% endunless %}
##### {{ position.title }}
<div class="resumedate">
   {{ position.start_date | date: '%B %Y' }} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</div>
{{ position.output }}
   {% assign previous_employer=position.employer %}
<hr class="daybreak">
{% endfor %}

### Education

{% for degree in page.degrees %}
#### {{ degree.school }}
<div class="resumedate">{{ degree.date | date: "%B %Y" }}</div>
{{ degree.degree }} - <em>{{ degree.emphasis }}
{% endfor %}
