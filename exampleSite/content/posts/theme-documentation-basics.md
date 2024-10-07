---
weight: 10
title: "Theme Documentation - Basics"
date: 2020-03-06T21:29:01+08:00
description: "A guide to getting started with Gokarna"
tags: ["installation", "configuration", "markdown"]
type: post
showTableOfContents: true
---

Gokarna is an opinionated theme with a focus on minimalism and simplicity.

## Installation

Follow these steps to initialize your new website.

If you are new to [Hugo](https://gohugo.io/), we suggest following this [great documentation for beginners](https://gohugo.io/getting-started/quick-start/).

<!-- Set human-readable heading IDs:
    https://gohugo.io/content-management/cross-references/#heading-ids -->

### a. Create Your Project {#create-your-project}

Hugo provides a `new` command to create a new website:

```bash
hugo new site my_website
cd my_website
```

### b. Install the Theme {#install-the-theme}

The theme’s repository is: [https://github.com/526avijitgupta/gokarna](https://github.com/526avijitgupta/gokarna).

Make this repository a submodule of your Git project:

```bash
git submodule add https://github.com/526avijitgupta/gokarna.git themes/gokarna
```

### c. Basic Configuration {#basic-configuration}

The following is a basic configuration for the Gokarna theme:

```toml
baseURL = "http://example.org/"
defaultContentLanguage = "en"
# Automatically generate robots.txt
enableRobotsTXT = true
languageCode = "en"
theme = "gokarna"
title = "My New Hugo Site"

[menu]
  [[menu.main]]
    # Unique identifier for a menu item
    identifier = "posts"

    url = "/posts/"
    
    # You can add extra information before the name (HTML format is supported), such as icons
    pre = ""

    # You can add extra information after the name (HTML format is supported), such as icons
    post = ""

    # Display name
    name = "Posts"

    # Weights are used to determine the ordering
    weight = 1

  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 2
    
  [[menu.main]]
    identifier = "github"
    url = "https://github.com"
    weight = 3
    
    # We use feather-icons: https://feathericons.com/
    pre = "<span data-feather='github'></span>"
```


### d. Create Your First Post {#create-your-first-post}

Create your first post with the `new` subcommand:

```bash
hugo new posts/first_post.md
```

You need to add `type: "post"` to the Markdown YAML/front matter of posts. Two content types are supported in Gokarna:

1. Post (`type: "post"`): A blog post consisting of a title, subtitle (description), creation and last modified dates, tags, and Markdown content.

2. Page (`type: "page"`): A standalone page which only renders Markdown. Best used for custom pages (e.g. your portfolio), which should not feature in your [Posts](/posts/) timeline.

    Read more about Pages in the [advanced documentation](/posts/theme-documentation-advanced/#content-types).

### e. Launching the Website Locally {#launching-the-website-locally}

Launch by using the following command:

```bash
hugo serve
```

Go to [`http://localhost:1313`](http://localhost:1313/) (if no other Hugo servers are running; Hugo will use an [ephemeral port](https://en.wikipedia.org/wiki/Ephemeral_port) if one or more servers are running concurrently on the host).

### f. Build the Website {#build-the-website}

When your site is ready to deploy, run the following command:

```bash
hugo
```

A `public` folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.

The website can be automatically published and hosted with [Netlify](https://www.netlify.com/), [AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/), [GitHub pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), [Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/) and more...

## Configuration

In addition to [Hugo global configuration](https://gohugo.io/overview/configuration/) and [menu configuration](#basic-configuration), Gokarna lets you define the following [parameters](https://gohugo.io/methods/site/params/) in your site configuration (see this sample `config.toml`, which uses Gokarna's default values):

```toml
[params]
  # Resource URL for the avatar (seen on the home page and header)
  avatarURL = ""

  # Describe the avatar for screen readers
  avatarAltText = ""

  # Set the avatar's size. Valid values include:
  # size-xs, size-s, size-m, size-l & size-xl
  avatarSize = "size-m"

  # Choose the color shown when hyperlinks are hovered over
  accentColor = "#FF4D4D"

  # Inject arbitrary HTML in to the <head> tag
  # Best used for importing custom JavaScript, CSS, or adding an analytics snippet
  customHeadHTML = ""

  # Description (subheading) shown on the home page
  description = ""

  # Footer text (typically the author/project name)
  footer = ""

  # Define SEO keywords
  # Valid data types: (String: ""), (Array [ "", "", "" ])
  metaKeywords = []

  # Define how many posts are displayed on the home page (see above)
  numberPostsOnHomePage = 4

  # Display a "back to top" button on posts and pages (may not render on
  # smaller screen sizes)
  # Valid data types: (Boolean: true, false)
  showBackToTopButton = false

  # Display posts on the home page:
  # "popular" (order posts by weight)
  # "recent" (order posts by date)
  # "" or unset (do not display)
  showPostsOnHomePage = ""
```

### Avatar URL

This is the resource URL for the avatar displayed on the [home page](/) and header (top-left).

Images are typically placed in to the [`assets/`](https://gohugo.io/getting-started/directory-structure/#assets) or [`static/`](https://gohugo.io/getting-started/directory-structure/#static) directories (which are copied to the top-level directory [at build time](#f-build-the-website)).

```toml
[params]
  avatarURL = "/images/avatar.webp"
```

### Avatar Size

Set the avatar's size as: `size-xs`, `size-s`, `size-m`, `size-l`, or `size-xl`.

```toml
[params]
  avatarSize = "size-m"
```

### Description

Description to display on the home page, below the title and avatar.

```toml
[params]
  description = "Sky above, sand below & peace within"
```

### Accent color

The color displayed when a user hovers over hyperlinks (`<a>` tags), expressed as a [hexadecimal](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color).

```toml
[params]
  accentColor = "#FF4D4D"
```

### Posts on home page

Recent and popular posts can be shown on the home page:

- `popular`: Sort posts in ascending order of their [Weight](https://gohugo.io/methods/page/weight/)

  **If any post on your site defines `weight`, you cannot enable [Previous and Next buttons](#previous-and-next-buttons).**

- `recent`: Sort posts in ascending order of [Date](https://gohugo.io/methods/page/date/)

- Do not show anything if the variable is unset, or an empty string

You can define how many posts will be displayed on homepage by setting `numberPostsOnHomePage`. If `numberPostsOnHomePage` is equal to `""` or `0`, the default value is used.

```toml
[params]
  showPostsOnHomePage = ""
  numberPostsOnHomePage = 4
```

### Date format 

[Configure how posts dates are displayed](https://gohugo.io/functions/time/format/), using [date strings](https://pkg.go.dev/time#pkg-constants).

```toml 
[params]
  dateFormat = "2 January, 2006"
```

### Footer

Text to display in the footer section, typically the name of the author or project.

```toml
[params]
  footer = "The Marauders"
```

`footer` can include [Markdown syntax](https://www.markdownguide.org/tools/hugo/). This is best used for including hyperlinks, emoji, or text formatting.

### Previous and Next buttons

At the bottom of a post, show the previous and next post chronologically.

**Warning**: Not compatible with the `.Weight` parameter.

If any post YAML contains `weight:`, the posts will not appear by Date. See [Hugo's default sort](https://gohugo.io/templates/lists#default-weight--date--linktitle--filepath).

```toml
[params]
  togglePreviousAndNextButtons = true
```

### Displaying content on the homepage

Display the contents of `content/index-about.md` on the home page, below the social icons.

### Custom Head HTML

Add arbitrary HTML code to the [`<head>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head).

```toml
[params]
  customHeadHTML = "<script>console.log('Any HTML')</script>"
```

Examples are available in the [advanced documentation](/posts/theme-documentation-advanced/#bring-your-own-scripts).

### robots.txt

[Automatically generate](https://gohugo.io/templates/robots/) a `robots.txt` file, used to ['manage crawler traffic to your site'](https://developers.google.com/search/docs/crawling-indexing/robots/intro).

```toml
enableRobotsTXT = true
```

### Favicons, Browserconfig, Manifest

Place favicons in to the `static/` directory. The following files are supported:

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

Favicons can be generated using services such as [favicon.io](https://favicon.io), or [realfavicongenerator.net](https://realfavicongenerator.net/).
