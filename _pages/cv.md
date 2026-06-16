---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- TODO: Fill in the sections below with your own details. -->
<!-- Tip: you can also link a PDF of your CV, e.g.: -->
<!-- [Download my CV (PDF)](/files/cv.pdf) -->

Education
======
* Ph.D. in [Field], [Your University], [Year] (expected)
* B.S. in [Field], [Previous University], [Year]

Research experience
======
* [Year]–present: PhD Researcher, [Lab / Group], [Your University]
  * Advisor: [Your Advisor]
  * [One line on what you work on.]

Skills
======
* Skill 1
* Skill 2

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Service and leadership
======
* [e.g. Reviewer for ..., Organizer of ...]
