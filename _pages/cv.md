---
layout: research
title: Experience
permalink: /cv/
section: experience
description: Education, research internships, professional experience and selected coursework.
redirect_from:
  - /resume
---
<div class="container page-shell">
  <header class="page-heading">
    <p class="eyebrow">Background</p>
    <h1>Experience &amp; CV</h1>
    <p class="page-description">Research in efficient AI and interactive generation, grounded in computer science, mathematics and software engineering.</p>
    <div class="link-row"><a class="button button-primary" href="{{ site.data.profile.cv | relative_url }}">Download my CV <span class="sr-only">(PDF)</span><span aria-hidden="true">&darr;</span></a></div>
  </header>
  <section class="page-section" aria-labelledby="education">
    <h2 id="education">Education</h2>
    <div class="timeline">
      {% for item in site.data.profile.education %}
      <article class="timeline-item">
        <p class="timeline-period">{{ item.period }}</p>
        <div><h3>{{ item.degree }}</h3><p>{{ item.institution }}</p></div>
      </article>
      {% endfor %}
    </div>
  </section>
  <section class="page-section" aria-labelledby="research-experience">
    <h2 id="research-experience">Research experience</h2>
    <div class="timeline">
      {% for item in site.data.profile.research %}
      <article class="timeline-item">
        <p class="timeline-period">{{ item.period | default: item.role }}</p>
        <div>
          <h3>{{ item.lab }} / {{ item.institution }}</h3>
          <p><strong>{{ item.role }}</strong></p>
          <p class="supervision">{{ item.supervision }}</p>
          <p>{{ item.description }}</p>
          <div class="paper-links">{% for project in item.projects %}<a href="{{ project.url | relative_url }}">{{ project.name }}</a>{% endfor %}</div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  <section class="page-section" aria-labelledby="industry-experience">
    <h2 id="industry-experience">Industry experience</h2>
    <div class="timeline">
      {% for item in site.data.profile.experience %}
      <article class="timeline-item">
        <p class="timeline-period">{{ item.period }}</p>
        <div><h3>{{ item.role }} / {{ item.organization }}</h3><p>{{ item.description }}</p></div>
      </article>
      {% endfor %}
    </div>
  </section>
  <section class="page-section" aria-labelledby="coursework">
    <h2 id="coursework">Selected coursework</h2>
    <dl class="coursework">
      <dt>Graduate</dt><dd>{{ site.data.profile.coursework.completed }}</dd>
      <dt>In progress</dt><dd>{{ site.data.profile.coursework.ongoing }}</dd>
      <dt>Foundations</dt><dd>{{ site.data.profile.coursework.foundations }}</dd>
    </dl>
  </section>
  <section class="page-section" aria-labelledby="teaching-experience">
    <h2 id="teaching-experience">Teaching</h2>
    <p>I was a teaching assistant for CS 311, Discrete Mathematics, at UT Austin from August 2022 to May 2025. <a href="{{ '/teaching/' | relative_url }}">More about my teaching experience</a>.</p>
  </section>
</div>
