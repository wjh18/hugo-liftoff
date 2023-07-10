# Hugo Liftoff

Hugo Liftoff is a minimal blog/portfolio theme with a focus on content creation and SEO best practices. It's an ideal choice for technical users jump-starting a personal brand.

## Documentation

The full documentation is hosted on this repo's [Github Wiki](https://github.com/wjh18/hugo-liftoff/wiki).

## Notable Features

* Content subsections with the ability to filter recent posts on homepage by subsection
* Series posts taxonomy with single posts that list all posts in the current series
* Next/prev links at the end of single posts for subsections or series posts (if enabled)
* Light/dark mode toggle using css custom properties
* Responsive main menu with submenu support and sample config
* Customizable newsletter with Netlify Forms support and conditional visibility control
* And much more...

## Overview of Features

Below are the current features of this theme. Features labeled *optional* or *frontmatter* can be enabled/disabled in config or frontmatter, respectively.

### Netlify

* Custom headers / redirects with Netlify (optional)
* Netlify forms support for newsletter opt-in and contact page (optional)
* Sample `netlify.toml` file for streamlined deployment

### 3rd Party

* Google Analytics v4
* Google Tag Manager as an alternative to GA (optional)
* Disqus comments (optional)
* Disable comments on a per-page basis (optional) (frontmatter)

### Newsletter

* Newsletter opt-in with Netlify Forms support (optional) (frontmatter)
* Global display of newsletter opt-in (optional)
* Customizable newsletter header, description and CTA text (optional)
* Override global newsletter on a per-page basis (optional) (frontmatter)
* Enable or disable newsletter on a per-page basis (frontmatter)

### Social

* Native Twitter, Github, Stack Overflow, LinkedIn and email social links with SVG (optional)
* Enable or disable social links in footer, homepage hero, and about page (optional)
* Enable or disable individual social links (optional)
* Facebook, LinkedIn, Twitter, Reddit and email social share icons with SVG for posts (optional)
* Enable or disable individual social share icons (optional)

### SEO / RSS

* Enhanced Open Graph, Twitter Cards, and Schema.org templates
* RSS feed that excludes any pages outside of the posts section
* Customizable title and SEO title tags or use title for both (frontmatter)
* Customizable summary and meta description or use description for both (frontmatter)
* Custom author meta tag (optional) (frontmatter)
* Custom title tags and meta descriptions for every page (optional) (frontmatter)
* `robots.txt` and `sitemap.xml`
* Disable search engine crawling (optional)

### Series / Subsections

* Content subsections with the ability to filter recent posts on homepage by subsection (optional)
* Series posts taxonomy with single posts that list all posts in the current series (optional)
* Next/prev links at the end of single posts for subsections or series posts (if enabled)
* Subsection support for posts with custom permalinks for clean SEO URLs (optional)
* Mobile-responsive, collapsible JS menu with automatic submenu support based on menu config

### Posts & Projects

* Toggle-able sticky table of contents for posts (frontmatter)
* Related posts (frontmatter)
* Social share icons for posts (frontmatter)
* Reading time and word count for posts
* Last modified dates for posts (optional)
* Customizable live URL, source URL and tech stack details for projects (frontmatter)
* Project type taxonomy for categorizing projects
* Recent posts and projects on homepage

### Code snippets

* Syntax highlighting
* One-click copy button and language indicator for code snippets

### CSS / JS

* Light/dark mode toggle using css custom properties
* Add custom CSS / JS in `assets`
* CSS and JS minification
* Frontend build pipeline with ESBuild and ToCSS
* PostCSS processing (optional)
* `npm` completely optional unless using PostCSS / Autoprefixer

### Images

* Image processing with Hugo resources
* Feature images for posts and projects from `assets` or page bundle (frontmatter)
* Custom homepage hero avatar image (optional)
* Enable/disable favicons (optional)

### Archetypes

* Archetype templates for posts and projects
* Page bundle support for archetype templates

### Other Content

* Create generic single pages quickly with the default single template (optional)
* Additional markdown footer text (optional)
* Add a label to drafts in development (optional)
* Responsive support for common markdown styles like tables
* About page with social links (optional)
* Contact page with Netlify Forms support (optional)

### Hugo Defaults

* Example `hugo.toml` with the majority of Hugo config defaults included for easy customization
* Override config settings based on Hugo environment

## Planned Features

The following features are planned for a future release.

* Real-time site search
* Image galleries for projects
* i18n support
* Additional advanced Google structured data schemas
* Custom shortcodes for things like project lists

## Getting Help

To submit a bug report, feature request, or usage questions, please open an [issue](https://github.com/wjh18/hugo-liftoff/issues) on Github using one of the issue templates.

## Contributing

If you'd like to contribute to the project, fork it and submit a pull request with your changes using the [pull request template](https://github.com/wjh18/hugo-liftoff/blob/master/.github/pull_request_template.md). Please see the [Contribution Guidelines](https://github.com/wjh18/hugo-liftoff/blob/master/CONTRIBUTING.md) for more details.
