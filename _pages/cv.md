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

## Publications and manuscripts

{% assign publications = site.publications | sort: "order" %}
{% for publication in publications %}
<div class="cv-entry">
  <h3>{{ publication.title }}</h3>
  <p>{% if publication.author_note %}<em>{{ publication.author_note }}</em>{% else %}{% for author in publication.authors %}{% unless forloop.first %}, {% endunless %}{% if author == site.data.profile.name %}<strong>{{ author }}</strong>{% else %}{{ author }}{% endif %}{% endfor %}{% endif %}</p>
  <p class="cv-meta">{% if publication.manuscript %}{{ publication.manuscript }}. {% endif %}{{ publication.venue }}. <strong>{{ publication.status }}.</strong>{% if publication.project_url %} <a href="{{ publication.project_url }}">Project website</a>{% endif %}{% if publication.paper_url %} <a href="{{ publication.paper_url }}">Paper</a>{% endif %}</p>
</div>
{% endfor %}

## Research experience

{% for item in site.data.profile.research %}
<div class="cv-entry">
  <h3>{{ item.role }}, {{ item.lab }}</h3>
  <p>{{ item.institution }}{% if item.period %}, {{ item.period }}{% endif %}</p>
  <p class="cv-meta">Supervision: {{ item.supervision }}</p>
  <p>{{ item.description }}</p>
  <p>{% for project in item.projects %}{% unless forloop.first %} / {% endunless %}{{ project.name }}{% endfor %}</p>
</div>
{% endfor %}

## Selected research projects

{% assign selected_projects = site.data.profile.additional_projects | where: "cv_selected", true %}
{% for item in selected_projects %}
<div class="cv-entry">
  <h3>{{ item.title }}</h3>
  <p class="cv-meta">{{ item.status }}, {{ item.period }}</p>
  <p>{{ item.description }}</p>
</div>
{% endfor %}

## Teaching experience

**Teaching Assistant, CS 311: Discrete Mathematics**, UT Austin<br>
August 2022 to May 2025

Mentored more than 400 students in logic, combinatorics, graph theory and
algorithm verification. [More about my teaching experience]({{ '/teaching/' | relative_url }}).

## Industry experience

{% for item in site.data.profile.experience %}
<div class="cv-entry">
  <h3>{{ item.role }}, {{ item.organization }}</h3>
  <p class="cv-meta">{{ item.period }}</p>
  <p>{{ item.description }}</p>
</div>
{% endfor %}

## Selected coursework

**Graduate:** {{ site.data.profile.coursework.completed }}

**In progress:** {{ site.data.profile.coursework.ongoing }}

**Foundations:** {{ site.data.profile.coursework.foundations }}

## Technical skills

**Programming:** {{ site.data.profile.technical_skills.programming }}

**Research tools:** {{ site.data.profile.technical_skills.research }}
