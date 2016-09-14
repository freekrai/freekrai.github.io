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
    date: 1998-04-30T00:00:00.000Z
    emphasis: Software Design and Development
  - school: International Correspondence School
    degree: Freelance Journalism and writing
    date: 1997-02-01T00:00:00.000Z
    emphasis: freelance writing
published: true
---

- Website: <a href="http://rogerstringer.com">rogerstringer.com</a>
- Email: <a href="mailto:roger.stringer@me.com">roger.stringer@me.com</a>
- Phone: <a href="tel:12504861027">250-486-1027</a>
- LinkedIn: <a href="http://ca.linkedin.com/in/rogerstringer">@rogerstringer</a>
- Github: <a href="http://github.com/freekrai">@freekrai</a>
- Twitter: <a href="http://twitter.com/freekrai">@freekrai</a>

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

## Experience

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

## Education

{% for degree in page.degrees %}
#### {{ degree.school }}
<div class="resumedate">{{ degree.date | date: "%B %Y" }}</div>
{{ degree.degree }} - <em>{{ degree.emphasis }}
{% endfor %}
