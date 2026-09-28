# Mohammed Hassan's research website

Personal research website at **https://midotronn.github.io/**, built with Jekyll
and hosted on GitHub Pages. It uses the traditional AcademicPages structure:
a compact masthead, left author sidebar and plain text content. The template
and its license are retained.

## Content

| Content | Source |
| --- | --- |
| Biography, contact, experience and coursework | `_data/profile.yml` |
| Main navigation | `_data/navigation.yml` |
| Homepage | `_pages/about.md` |
| Research index and individual projects | `_pages/publications.html`, `_publications/` |
| Other research projects | `_data/profile.yml` (`additional_projects`), `_pages/mira-quant.md` |
| Experience and CV | `_pages/cv.md`, `files/Mohammed_Hassan_CV.pdf` |
| Academic service (teaching and peer review) | `_pages/teaching.html`, `_teaching/cs311.md` |
| Page layouts | `_layouts/research*.html` |
| Publication list entries | `_includes/publication-entry.html` |
| AcademicPages styles and small layout adjustments | `assets/css/main.scss`, `assets/css/academic.css` |
| Navigation and profile-link interactions | `assets/js/academic.js` |
| Project previews and social image | `images/research/` |

Project and code links are kept in the publication front matter. Existing project
preview assets come from the public T3R and MAESTRO websites. The active publication
list is intentionally text-only.

Keep publication status explicit: an accepted paper, a manuscript under review,
a poster acceptance, a preprint and a research project should not be presented
interchangeably. Publication front matter includes verified citation authors;
use `author_note` for a manuscript whose author list is withheld during review.
The BB84 poster classification is documented in QIP 2025's official program.
The public CV uses email and the website as contact details, without a phone
number. Do not upload unpublished manuscripts unless they are ready for public
release. Keep the downloadable PDF, the CV page and the profile's dates and
coursework synchronized. Other projects appear in the CV only when
`cv_selected: true`; the publications page can retain a broader portfolio.

The Academic Service page retains `/teaching/` for existing links and separates
teaching from peer review. List reviewing dates only when provided by the owner.

Research internship dates come from the owner's confirmed history, not from
manuscript dates. Update the homepage's Fall 2027 opportunities text when it is
no longer applicable. The sidebar portrait is
`images/mohammed-hassan.jpg`, an upright, cropped copy of the supplied personal
photo. Keep the full-resolution original outside the repository and strip
location metadata from replacement images.

## Local development

The existing Ruby dependencies are defined in `Gemfile`:

```sh
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

The active layout uses the existing AcademicPages Sass build and a small vanilla
JavaScript file for mobile navigation and author links. There is no JavaScript
bundling step for `academic.js`. The template's optional legacy JavaScript
tooling remains in `package.json`.

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
