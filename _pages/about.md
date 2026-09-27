---
layout: research
permalink: /
title: "Mohammed Hassan"
section: about
redirect_from:
  - /about/
  - /about.html
---

<div class="container">
  <section class="hero" aria-labelledby="intro-title">
    <div class="hero-copy">
      <p class="eyebrow">Researcher / M.S. Computer Science / UT Austin</p>
      <h1 id="intro-title">{{ site.data.profile.name }}</h1>
      <p class="hero-headline">{{ site.data.profile.headline }}</p>
      <p>{{ site.data.profile.intro }}</p>
      <p>Through research internships at <strong>Georgia Tech's EIC Lab</strong> and <strong>UT Austin's VITA Lab</strong>, I work on training-free VLA inference and human-controllable 3D motion generation. My background combines computer science and mathematics.</p>
      <div class="link-row">
        <a class="button button-primary" href="{{ '/publications/' | relative_url }}">Explore my research <span aria-hidden="true">&rarr;</span></a>
        <a class="button button-secondary" href="{{ site.data.profile.cv | relative_url }}">Download CV <span aria-hidden="true">&darr;</span><span class="sr-only"> (PDF)</span></a>
        <a class="text-link" href="mailto:{{ site.data.profile.email }}">Get in touch</a>
      </div>
      <p class="opportunity-note">I am interested in PhD opportunities starting in Fall 2027, especially in multimodal agents, efficient embodied AI and human-AI interaction.</p>
    </div>
    <aside class="focus-panel" aria-label="Research themes">
      <p class="eyebrow">The questions behind my work</p>
      <h2>Efficiency meets interaction.</h2>
      <ol class="focus-list">
        {% for interest in site.data.profile.interests %}
        <li><strong>{{ interest.title }}</strong><p>{{ interest.description }}</p></li>
        {% endfor %}
      </ol>
    </aside>
  </section>

  <section class="section" aria-labelledby="research-title">
    <div class="section-heading">
      <div><p class="eyebrow">From models to usable systems</p><h2 id="research-title">Selected research</h2></div>
      <a class="text-link" href="{{ '/publications/' | relative_url }}">All research <span aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="research-list">
      {% assign featured = site.publications | where: "featured", true | sort: "order" %}
      {% for paper in featured %}
      {% include research-card.html paper=paper %}
      {% endfor %}
    </div>
  </section>

  <section class="section" aria-labelledby="experience-title">
    <div class="section-heading">
      <div><p class="eyebrow">Research experience</p><h2 id="experience-title">Two complementary perspectives</h2></div>
      <a class="text-link" href="{{ '/cv/' | relative_url }}">Experience &amp; CV <span aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="experience-grid">
      {% for experience in site.data.profile.research %}
      <article class="experience-item">
        <p class="eyebrow">{{ experience.role }}</p>
        <h3>{{ experience.lab }}</h3>
        <p class="institution">{{ experience.institution }}</p>
        <p>{{ experience.description }}</p>
        <p class="supervision">{{ experience.supervision }}</p>
        <div class="paper-links">{% for project in experience.projects %}<a href="{{ project.url | relative_url }}">{{ project.name }}</a>{% endfor %}</div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="contact-section" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title">Let's talk research.</h2>
      <p>I enjoy conversations about efficient models, embodied agents and tools that help people shape generative outputs.</p>
    </div>
    <a class="button button-secondary" href="mailto:{{ site.data.profile.email }}">Email me <span aria-hidden="true">&nearr;</span></a>
  </section>
</div>
