---
layout: research-page
title: Sitemap
permalink: /sitemap/
description: A guide to the pages on this website.
---

## Main pages

- [Home]({{ '/' | relative_url }})
{% for item in site.data.navigation.main %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% endfor %}

## Research

{% assign papers = site.publications | sort: "order" %}
{% for paper in papers %}
- [{{ paper.title }}]({{ paper.url | relative_url }})
{% endfor %}

## Teaching

- [CS 311: Discrete Mathematics]({{ '/teaching/cs311/' | relative_url }})

An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is also available.
