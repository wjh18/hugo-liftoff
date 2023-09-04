# Hugo Liftoff

**Warning: I no longer have time to work on this theme for various reasons. It's unlikely I'll get to your issue and no additional features are planned, although the theme will remain available to the public. Feel free to fork it if you need to make extensive changes. I will consider merging simple bugfix pull requests. Apologies for any inconvenience this may cause. Please see [v3.4.3 release notes](https://github.com/wjh18/hugo-liftoff/releases/tag/v3.4.3) for further details.**

## About

Hugo Liftoff is a minimal blog/portfolio theme with a focus on content creation and SEO best practices. It's an ideal choice for technical users jump-starting a personal brand.

## Documentation

The full documentation is hosted on this repo's [Github Wiki](https://github.com/wjh18/hugo-liftoff/wiki).

Please open an issue if you find any mistakes in the docs or have suggestions for improvement.

## Demo Site

A working [demo of the theme](https://hugo-liftoff.netlify.app/) is available to the public for evaluation.

The `exampleSite` content included with the theme, which you're free to copy into your own project, mirrors the content used in the demo. The idea behind this is to help you get started quickly and replicate any features you saw in the demo that you think could be useful in your own project.

## Notable Features

* Content subsections with the ability to filter recent posts on homepage by subsection
* Series posts taxonomy with single posts that list all posts in the current series
* Next/prev links at the end of single posts for subsections or series posts (if enabled)
* Light/dark mode toggle using CSS custom properties
* Mobile-responsive, collapsible JS menu with automatic submenu support based on menu config
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

* Native Twitter, Mastodon, Github, Stack Overflow, LinkedIn and email social links with SVG (optional)
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

### Homepage

* Customize hero title and subtitle on homepage (frontmatter)
* Customize posts and projects section headings on homepage (frontmatter)

### Posts & Projects

* Toggle-able sticky table of contents for posts (frontmatter)
* Related posts (frontmatter)
* Social share icons for posts (frontmatter)
* Reading time and word count for posts
* Last modified dates for posts (optional)
* Customizable live URL, source URL and tech stack details for projects (frontmatter)
* Tag and category taxonomies
* Project type taxonomy for categorizing projects
* Recent posts and projects on homepage

### Code snippets

* Syntax highlighting
* One-click copy button and language indicator for code snippets

### CSS / JS

* Light/dark mode toggle using CSS custom properties
* Add custom CSS / JS in `assets`
* CSS and JS minification
* Frontend build pipeline with ESBuild and ToCSS
* PostCSS processing for autoprefixing (optional)
* `npm` completely optional unless using PostCSS / Autoprefixer
* Fluid typography scale with CSS `clamp()`
* Sourcemaps for SCSS and JS in development

### Images

* Image processing with Hugo resources
* Feature images for posts and projects from `assets` or page bundle (frontmatter)
* Custom homepage hero avatar image (optional)
* Disable grayscale avatar filter (optional)
* Enable/disable favicons (optional)

### Archetypes

* Archetype templates for posts and projects
* Page bundle support for archetype templates

### Markdown Hooks

* Markdown render hooks for codeblocks, images, headings and links
* Language indicator for codeblocks
* Add custom CSS class to markdown images via URL fragments
* Heading anchor link SVG icon

### Other Content

* Create generic single pages quickly with the default single template (optional)
* Additional markdown footer text (optional)
* Add a label to drafts in development (optional)
* Responsive support for common markdown styles like tables
* About page with social links (optional)
* Contact page with Netlify Forms support (optional)
* Customize fallback text for empty content (optional)

### Hugo Defaults

* Example `hugo.toml` with the majority of Hugo config defaults included for easy customization
* Override config settings based on Hugo environment
* Built-in shortcodes
* And much more...Hugo has a lot to offer!

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
