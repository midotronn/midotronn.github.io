---
title: "T3R: Training-Free Two-Stage Token Refinement Towards Efficient and Robust VLA Models"
short_title: T3R
display_title: Training-Free Two-Stage Token Refinement Towards Efficient and Robust VLA Models
permalink: /publication/t3r/
order: 1
featured: true
status: Accepted
status_key: accepted
venue: ASP-DAC 2027
role: First author
authors:
  - Mohammed Hassan
  - Zhenyang Chen
  - Zheng Wang
  - Zhixin Zhu
  - Tianlong Chen
  - Yingyan (Celine) Lin
  - Chaojian Li
summary: A training-free approach to efficient VLA inference, combining segmentation-guided token pruning with saliency-guided attention refinement.
result: "On LIBERO-Spatial: 85% fewer scene-camera tokens, with 96% task success versus 97% for the unpruned baseline."
project_url: https://midotronn.github.io/t3r/
code_url: https://github.com/midotronn/t3r
image: /images/research/t3r.webp
image_alt: T3R's visual grounding example, from a full robot scene to selected prompts and the relevant object.
image_width: 1280
image_height: 576
image_caption: Task-relevant visual information guides token selection before the VLA decoder.
---

## Research question

Vision-language-action models process substantial visual information at each
decision step. Much of it may be unnecessary for the current instruction, yet
removing the wrong information can damage robot performance. T3R studies how to
reduce this computation while retaining useful evidence and robust behavior.

## Approach

The framework addresses both token selection and attention allocation. First,
instruction-conditioned segmentation identifies relevant visual patches and
prunes tokens before decoder entry. Second, saliency-guided attention biasing
refocuses action prediction on relevant instructions and retained visual evidence.
Neither stage requires retraining the VLA model.

## Selected results

- On LIBERO-Spatial with OpenVLA-OFT, T3R removes **85% of scene-camera tokens**
  while achieving **96% task success**, compared with 97% for the unpruned baseline.
- Under out-of-distribution object-placement shifts, the paper reports improvements
  of up to **7 percentage points** in task success.
- Evaluations with OpenVLA-OFT, CogACT and pi0.5 across LIBERO, SIMPLER and RoboTwin
  characterize how sensor redundancy affects pruning performance.

The evaluations are simulation-based. The 85% figure refers specifically to
scene-camera tokens, rather than all visual tokens across every camera.

## Research context

This first-author work was developed during my research internship at
**Georgia Tech's EIC Lab**, supervised by Prof. Yingyan (Celine) Lin and
Prof. Chaojian Li. It is **accepted at ASP-DAC 2027**.
