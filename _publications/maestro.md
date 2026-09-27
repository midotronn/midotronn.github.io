---
title: "MAESTRO: Agentic Long-Form Music-to-3D Dance Composition and Editing"
short_title: MAESTRO
display_title: Agentic Long-Form Music-to-3D Dance Composition and Editing
permalink: /publication/maestro/
order: 2
featured: true
status: Under review
status_key: review
venue: CHI 2027
role: First author
summary: An agentic authoring system for song-length 3D dance, connecting musical structure, localized language editing and recoverable creative alternatives.
result: "In a study with 12 dance-experienced participants, MAESTRO received 47 of 72 overall-preference selections in blind comparisons."
project_url: https://midotronn.github.io/MAESTRO/
code_url: https://github.com/midotronn/MAESTRO
image: /images/research/maestro.webp
image_alt: MAESTRO's interactive interface for selecting a dance interval, describing an edit and comparing revisions.
image_width: 1280
image_height: 784
image_caption: An authoring interface connects interval selection, language-based edits, comparison and revision history.
---

## Research question

Creating dance for an entire song is not simply a matter of generating a longer
motion sequence. Creators need to organize musical sections, refine selected
moments and explore alternatives without losing work they want to keep.

## Approach

MAESTRO is a bounded agentic framework that coordinates language-based planning,
motion execution, measured evaluation and revision memory. It uses existing
LODGE and EDGE motion generators rather than introducing a new motion-generation
backbone.

- **Section-aware composition:** musical structure informs a song-level plan and
  the organization of generated motion.
- **Localized editing:** interval selections and natural-language requests become
  supported motion operations and feedback-guided revisions.
- **Recoverable alternatives:** branching checkpoints let users compare versions
  and restore accepted choreography.

## Evaluation

A formative questionnaire with six dance practitioners informed the design.
Complete-song experiments examine rhythmic alignment and musical structure.

In the main study, **12 participants with dance experience** compared outputs
and used the editing interface. MAESTRO received **47 of 72 overall-preference
selections (65.3%)** in blind comparisons against LODGE and EDGE. The result
describes preference selections across six excerpts per participant, not the
percentage of participants who preferred the system.

Participants rated understanding, edit locality and recovery highly, while
ownership and goal match remained more limited. These findings motivate further
work on expressive control and the relationship between local edits and
whole-song intentions.

## Research context

This first-author work was developed during my research internship at
**UT Austin's VITA Lab**, supervised by Prof. Atlas Wang and
Dr. Hezhen (Alex) Hu. The manuscript is **under review at CHI 2027**.
