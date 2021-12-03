# Hugo Liftoff

A lightweight, flexible blog and portfolio theme for Hugo with basic marketing features. An ideal choice for technical users who want to jump-start a personal brand site.

# Features

This theme is currently a work in progress and isn't suitable for production yet. Once it's released as an official Hugo theme, I'll start accepting contributors.

## Current features

- Opengraph, Twitter Cards, and Schema.org (using built-in Hugo internals)
- Custom `<title>` and meta description from config or frontmatter
- Optional favicon
- RSS feeds
- Google Analytics (or optional Google Tag Manager)
- Customizable newsletter opt-in with Netlify Forms
- Customizable footer text
- Related posts
- Section pages with adjustable permalinks

## Planned features

- Style updates
- Project section with cards
- Social share icons for posts
- Sticky or static table of contents for posts
- Disqus comments
- Series taxonomy support for posts
- Customizable color scheme
- Netlify deployment workflow
- Optional frontend build pipeline

# Installation

Please see [Hugo Quickstart](https://gohugo.io/getting-started/quick-start/) for installation instructions.

# Getting Started

Once installed, create `about`, `posts` and `projects` directories and an `_index.md` file under `your-project/content`.

## Home Page

Create an `_index.md` file under `your-project/content` if you haven't already. This is where you can add content to your homepage.

In the frontmatter, add a `title` and `subtitle` which will be displayed in the hero section of the page. Any content included in this file will also be added.

You can also add `newletter: true` to your frontmatter to add a newsletter opt-in below the main content. To customize the newsletter, add the fields `newsletter_header`, `newsletter_description` and `newsletter_submit` under `[params]` in your `config.toml`.

## About Page

Create an `index.md` file (no leading underscore) under `your-project/content/about`. If you add an underscore, the about page will become a section which is not what you want. You can add a custom `<title>` and meta description in the frontmatter of this file with `seotitle` and `description`, respectively. In order for this to work, you should also add `type: about` as a frontmatter parameter.

## Posts

Full support coming soon.

### Custom permalinks for section posts

If adding nested sections in posts, you can optionally change the permalink structure so that the permalinks of posts in a subsection include the last section only by adding the following to your `config.toml`:

```
[permalinks]
    posts = "/:sections[last]/:slug/"
```

This will make the permalink slug `/<section>/<post>` instead of `/posts/<section>/<post>`. The section page itself will remain at `/posts/<section>`.

## Projects

Coming soon.