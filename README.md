# Mohammed Hassan's research website

Personal research website at **https://midotronn.github.io/**, built with Jekyll
and hosted on GitHub Pages. The repository retains the AcademicPages template
and its license, with a custom lightweight presentation for the active pages.

## Content

| Content | Source |
| --- | --- |
| Biography, contact, experience and coursework | `_data/profile.yml` |
| Main navigation | `_data/navigation.yml` |
| Homepage | `_pages/about.md` |
| Research index and individual projects | `_pages/publications.html`, `_publications/` |
| Experience and CV | `_pages/cv.md`, `files/Mohammed_Hassan_CV.pdf` |
| Teaching | `_pages/teaching.html`, `_teaching/cs311.md` |
| Page layouts | `_layouts/research*.html` |
| Research cards | `_includes/research-card.html` |
| Responsive styles | `assets/css/research.css` |
| Project previews and social image | `images/research/` |

The selected project previews come from the public T3R and MAESTRO project
websites. Their project and code links are kept in the publication front matter.

Keep publication status explicit: an accepted paper, a manuscript under review,
a preprint and a research project should not be presented interchangeably.
The public CV uses email and the website as contact details, without a phone
number. Do not upload unpublished manuscripts unless they are ready for public
release.

VITA internship dates are intentionally omitted until provided. Do not infer
them from manuscript dates. Update the homepage's Fall 2027 opportunities
notice when it is no longer applicable.

## Local development

The existing Ruby dependencies are defined in `Gemfile`:

```sh
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

The active layout uses static HTML and CSS without the legacy JavaScript bundle.
There is no JavaScript build step for changes to this presentation. The template's
optional JavaScript tooling remains in `package.json`.

Inspect `/`, `/publications/`, `/cv/`, `/teaching/`, the individual publication
pages and `/404.html` at both desktop and mobile widths. Check links to the
downloadable CV and external project pages after content changes.

## Deployment

GitHub Pages builds the root of `main` automatically. Preserve the existing
branch-based Pages configuration. Publish only through the repository owner's
personal `midotronn` account.

Unused example pages and sample downloads are excluded in `_config.yml` rather
than appearing on the live site. Add any newly activated section to the
navigation and sitemap deliberately.
