---
layout: research
title: CV
permalink: /cv/
section: experience
description: Education, research, professional experience and teaching.
redirect_from:
  - /resume
---

[Download my CV (PDF)]({{ site.data.profile.cv | relative_url }})

## Education

{% for item in site.data.profile.education %}
<div class="cv-entry">
  <h3>{{ item.degree }}</h3>
  <p>{{ item.institution }}</p>
  <p class="cv-meta">{{ item.period }}</p>
</div>
{% endfor %}

## Research experience

{% for item in site.data.profile.research %}
<div class="cv-entry">
  <h3>{{ item.role }}, {{ item.lab }}</h3>
  <p>{{ item.institution }}{% if item.period %}, {{ item.period }}{% endif %}</p>
  <p class="cv-meta">Supervision: {{ item.supervision }}</p>
  <p>{{ item.description }}</p>
  <p>{% for project in item.projects %}{% unless forloop.first %} / {% endunless %}<a href="{{ project.url | relative_url }}">{{ project.name }}</a>{% endfor %}</p>
</div>
{% endfor %}

## Professional experience

{% for item in site.data.profile.experience %}
<div class="cv-entry">
  <h3>{{ item.role }}, {{ item.organization }}</h3>
  <p class="cv-meta">{{ item.period }}</p>
  <p>{{ item.description }}</p>
</div>
{% endfor %}

## Teaching

**Teaching Assistant, CS 311: Discrete Mathematics**, UT Austin<br>
August 2022 to May 2025

Mentored more than 400 students in logic, combinatorics, graph theory and
algorithm verification. [More about my teaching experience]({{ '/teaching/' | relative_url }}).

## Selected coursework

**Graduate:** {{ site.data.profile.coursework.completed }}

**In progress:** {{ site.data.profile.coursework.ongoing }}

**Foundations:** {{ site.data.profile.coursework.foundations }}
