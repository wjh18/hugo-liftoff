# Hugo Liftoff

A customizable, SEO-optimized blog and portfolio theme for Hugo with a modern design. An ideal choice for technical users jump-starting a personal brand, portfolio, or dev blog.

# Features

Below are the current and planned features for this theme. Features labeled *optional* can be enabled or disabled in config. Features labeled *frontmatter* can be enabled or disabled in frontmatter.

## Current features

- Disqus comments (optional)
- Google Analytics v4 or Universal Analytics (optional)
- Google Tag Manager as an alternative to GA (optional)
- Series taxonomy support that lists other posts in a series on a post's single page (optional)
- Next/prev in section (or series for posts belonging to a series) links after post content
- Subsection support for posts with custom permalinks for clean SEO silo URLs (optional)
- Cards that link to post subsections after the hero section of the homepage if any exist
- Custom author meta tag (optional) (frontmatter)
- Custom meta descriptions (optional) (frontmatter)
- Enable/disable favicons (optional)
- Newsletter opt-in with Netlify Forms support (optional) (frontmatter)
- Global newsletter opt-in (optional)
- Customizable newsletter header, description and CTA text (optional)
- Override global newsletter on a per-page basis (optional) (frontmatter)
- Custom featured project on homepage (optional)
- Additional footer text (optional)
- Debug template lookup via JS console in development (optional)
- Custom homepage hero avatar image (optional)
- Enable or disable social links in footer, homepage hero, and about page (optional)
- Netlify Identity script in head for Netlify CMS (optional)
- Add a label to drafts in development (optional)
- Native Twitter, Github, Stack Overflow, LinkedIn and email social links with SVG (optional)
- Enable or disable individual social links (optional)
- Facebook, LinkedIn, Twitter, Reddit and email social share links with SVG for posts (optional)
- Enable or disable individual social share links (optional)
- Syntax highlighting and responsive support for other common markdown styles like tables
- Mobile-responsive, collapsable JS menu with automatic submenu support based on menu config
- Opengraph, Twitter Cards, and Schema.org (using built-in Hugo internals)
- RSS feed that excludes any pages outside of posts section
- Customizable post title and SEO title tags or use post title for both (frontmatter)
- Customizable post summary and meta description or use description for both (frontmatter)
- Cover images for posts and projects from `static/img` or page bundle (frontmatter)
- Toggle-able table of contents for posts (frontmatter)
- Related posts (frontmatter)
- Social share icons for posts (frontmatter)
- Newsletter enable or disable for posts (frontmatter)
- Customizable live URL, source URL and tech stack details for projects (frontmatter)
- Reading time and word count for posts
- About page with social links (optional if override homepage)
- Contact page with Netlify Forms support (optional)

## Planned features

- Style and responsiveness updates
- Customizable color scheme
- Light and dark mode toggle
- Improved Netlify deployment workflow and Netlify CMS support
- Optional frontend build pipeline with Hugo Pipes
- Customizable SEO schemas for structured data and robots.txt
- One-click copy button and language indicator for code snippets
- Real-time site search for posts
- Optional last updated dates
- Image galleries for projects
- i18n support
- Disable comments on a per-page basis

# Installation

Please see [Hugo Quickstart](https://gohugo.io/getting-started/quick-start/) for the latest installation instructions. The recommended way to get started is with git submodules. You can also download the source as a `.zip` and copy it into the `themes` directory of your project. Better support for Hugo modules is planned for the future.

# Updating

If you added the theme as a git submodule, you can update it by running the following command from the root directory where your repo was initialized:

`git submodule foreach git pull origin master`

Then commit the changes.

Otherwise, you'll need to download the latest version of the theme and update your `themes` directory manually.

As always, please take caution with updates as not all configurations can be accounted for and small bugs are a possibility.

Please open an issue if anything catches your eye.

# Quickstart

Copy the contents of `{your-project}/themes/hugo-liftoff/exampleSite` into the root directory of your own project. The most important files are `config.toml` and anything in the `content` directory.

Available site-wide customizations are included in the example site's `config.toml`. Frontmatter customization options can be found in `{your-project}/themes/hugo-liftoff/exampleSite/archetypes/*` or by creating content with `hugo new <section>/<content>.md` and inspecting the generated content file.

# Manual Setup

This section will walk you through how to get started if you're not working off of the example site for whatever reason.

Once installation is complete, create `about`, `contact`, `posts` and `projects` directories and an `_index.md` file under `{your-project}/content`.

## Homepage

Create an `_index.md` file under `{your-project}/content` if you haven't already. This is where you can customize the text of the hero section.

In the frontmatter, add a `title` and `subtitle` which will be displayed in the hero section of the page.

## About Page

Create an `index.md` file (no leading underscore) under `{your-project}/content/about`. If you add an underscore, the about page will become a section which is not what you want.

You can add a custom `<title>` and meta description in the frontmatter of this file with `seo_title` and `description`, respectively. Otherwise, it will pull these from your global `config.toml`. To customize the `<h1>`, add a `title` frontmatter parameter.

The content of your markdown file will be used for the about page content.

In order for all of this to work properly, you should also add `type: about` as a frontmatter parameter.

## Contact Page

The same instructions for the about page apply to the contact page, except you should replace `about` with `contact` where appropriate.

## Posts

Your blog post content will live under `{your-project}/content/posts`. This is not customizable at this time unfortunately as it will break parts of the homepage, RSS feed and a few other features. However, you can take advantage of nested subsections and custom permalinks to work around this somewhat (see below).

Create an `_index.md` file in this directory and add a custom `title` and `description` as frontmatter variables if desired.

You can add subsections of posts within this directory which will be added to your homepage as cards with links.

### Custom permalinks for section posts

If adding nested sections in posts, you can optionally change the permalink structure so that the permalinks of posts in a subsection include the last section only. This is often useful for building cleaner URLs and SEO silos.

Add the following to your `config.toml`:

```
[permalinks]
    posts = "/:sections[last]/:slug/"
```

This will change the format of the permalink to `/<section>/<post>` instead of `/posts/<section>/<post>`. The section page itself will remain at `/posts/<section>`. I haven't yet found a suitable way to modify the section list page permalink unfortunately.

### Creating posts

It's recommended to create your posts with the command `hugo new posts/post-name.md`. This will provide you with all the frontmatter options via archetypes automatically.

### Post frontmatter

- `title` - Give your post a custom title. Defaults to the file name.
- `seo_title` - Give your post a custom SEO `<title>` tag that differs from the post title. Defaults to `title`.
- `summary` - A summary of the post that's shown on list pages and at the top of posts. Defaults to `description` if not set, and if that's not set it will be generated by Hugo automatically.
- `description`: Override the global SEO meta description, and a fallback for `summary` if that's not set.
- `slug` - Customize the slug of the post, defaults to the file name.
- `date` - Date posted, generated automatically.
- `author` - Override the global author from config.
- `cover_image` - A relative path to the cover image for this post. If not set, the post won't use a cover image.
- `cover_image_alt` - The alt text for the cover image.
- `cover_image_from_bundle` - Boolean if set to true, the cover image will be taken from the page bundle instead of `static/img/*`.
- `draft` - Boolean, set to true if you don't want your post build in production.
- `categories` - Adds post to the category taxonomy
- `tag` - Adds post to the tag taxonomy
- `series` - Adds post to the series taxonomy. This will enable series next/prev buttons and a list of other posts in the series if other posts exist in the series.
- `toc` - Boolean, if set to true a table of contents will be included at the top of your post.
- `related` - Boolean, if set to true related posts will be listed after your post content if they exist.
- `social_share` - Boolean, if set to true enables social share icons after your post content.
- `newsletter` - Boolean, if set to true a newsletter opt-in will appear in the footer of the page. If global newsletter is enabled and this is set to false, it will override the global value and not show the newsletter.

## Projects

Much of the projects frontmatter options are the same as posts. The following are unique to projects and are all optional:

- `techstack` - List, will add tag-like indicators to your projects with the tech stack you specify.
- `live_url` - Link to the live URL that your project is hosted on.
- `source_url` - Link to the URL where your project's source code is hosted.

## Newsletter

You can also add `newletter: true` to your frontmatter to add a newsletter opt-in below the main content. To customize the newsletter, add the fields `newsletter_header`, `newsletter_description` and `newsletter_submit` under `[params]` in your `config.toml`.

## Global site config

Please see the example `config.toml` in `{your-project}/themes/hugo-liftoff/exampleSite` for all other config options.