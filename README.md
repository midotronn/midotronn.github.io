# Mohammed Hassan — Academic Website

Personal academic website built with the [AcademicPages](https://github.com/academicpages/academicpages.github.io)
Jekyll template (a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)),
hosted for free on GitHub Pages.

**Live URL (once deployed):** https://midotronn.github.io

## Where things live

| What | File / folder |
| --- | --- |
| Site-wide settings, sidebar, social links | `_config.yml` |
| Top navigation menu | `_data/navigation.yml` |
| Homepage / About text | `_pages/about.md` |
| CV page | `_pages/cv.md` |
| Publications (one Markdown file per paper) | `_publications/` |
| Teaching (one Markdown file per entry) | `_teaching/` |
| Profile photo | `images/profile.png` (replace this) |
| PDFs and other downloads | `files/` |

Sections for Talks, Portfolio, and Blog are still present in the template but
hidden from the menu. To re-enable any of them, uncomment the relevant lines in
`_data/navigation.yml`.

## Things to fill in (search for `TODO`)

1. **`_config.yml`** — bio, location, employer, email, Google Scholar, ORCID, LinkedIn, Twitter, etc.
2. **`_pages/about.md`** — your intro, news, and research interests.
3. **`_pages/cv.md`** — education, experience, skills, service.
4. **`_publications/`** — replace the example file with your real papers.
5. **`_teaching/`** — replace the example file with your real teaching.
6. **`images/profile.png`** — swap in your own headshot.

## Deploying to GitHub Pages

1. Create a **public** repo on GitHub named exactly `midotronn.github.io`.
2. Push this folder to it:
   ```bash
   git add -A
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/midotronn/midotronn.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute, then visit **https://midotronn.github.io**.

Every push to `main` rebuilds and redeploys the site automatically.

## Local preview (optional)

GitHub Pages builds the site for you, so local preview is optional. It requires
Ruby ≥ 3.0 (your system Ruby 2.6 is too old). If you want it:
```bash
# install a modern Ruby first (e.g. via Homebrew: brew install ruby)
bundle install
bundle exec jekyll serve --livereload
# then open http://localhost:4000
```
