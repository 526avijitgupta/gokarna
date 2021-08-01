---
weight: 10
title: "Theme Documentation - Basics"
date: 2020-03-06T21:29:01+08:00
description: "Discover what the Hugo - gokarna theme is all about and the core-concepts behind it."
tags: ["installation", "configuration", "markdown"]
type: post
---

Discover what the Hugo - Gokarna theme is all about and the core-concepts behind it.
TODO: Similar intro as in README, opinionated, authors

## 1 Requirements

Thanks to the simplicity of Hugo, [Hugo](https://gohugo.io/) is the only dependency of this theme.

## 2 Installation

The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this [great documentation for beginners](https://gohugo.io/getting-started/quick-start/).

### 2.1 Create Your Project

Hugo provides a `new` command to create a new website:

```bash
hugo new site my_website
cd my_website
```

### 2.2 Install the Theme

The theme’s repository is: [https://github.com/526avijitgupta/gokarna](https://github.com/526avijitgupta/gokarna).

You can download the [latest release :books: .zip file](https://github.com/526avijitgupta/gokarna/releases) of the theme and extract it in the `themes` directory.

Alternatively, clone this repository to the `themes` directory:

```bash
git clone https://github.com/526avijitgupta/gokarna.git themes/gokarna
```

Or, create an empty git repository and make this repository a submodule of your site directory:

```bash
git init
git submodule add https://github.com/526avijitgupta/gokarna.git themes/gokarna
```

### 2.3 Basic Configuration {#basic-configuration}

The following is a basic configuration for the gokarna theme:

```toml
baseURL = "http://example.org/"
defaultContentLanguage = "en"
languageCode = "en"

title = "My New Hugo Site"

theme = "gokarna"

[params]
  # URL for the avatar on homepage
  avatarURL = ""

  # Description to display on homepage
  description = "Sky above, sand below & peace within"

  # You can use this to inject any HTML in the <head> tag.
  # Ideal usecase for this is to import custom js/css or add your analytics snippet
  customHeadHTML = ""

  # If you want to display posts on the homepage, the options are
  # "popular" (order posts by weight), "recent" (order posts by date)
  # or "" (do not display, default option)
  showPostsOnHomePage = ""

  # Footer text
  footer = "The Marauders"

[menu]
  [[menu.main]]
    # Unique identifer for a menu item
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
    
    # We use feather-icons
    pre = "<span data-feather='github'></span>"
```


### 2.4 Create Your First Post

Here is the way to create your first post:

```bash
hugo new posts/first_post.md
```

Feel free to edit the post file by adding some sample content and replacing the title value in the beginning of the file.

For posts you need to add `type: "post"` in the markdown metadata. We currently support 2 types of content:

1. Post (`type: "post"`): A normal blog-post with tags, date, & content.
2. Page (`type: "page"`): A standalone content page that will just render the markdown you wrote. You can use it to write custom pages which should not be a part of posts. Like, showing your projects portfolio. You can read in detail about this on the [Theme Documentation - Advanced](/link-TODO) page.

By default all posts and pages are created as a draft. If you want to render these pages, remove the property `draft: true` from the metadata, set the property `draft: false` or add `-D`/`--buildDrafts` parameter to `hugo` command.

### 2.5 Launching the Website Locally

Launch by using the following command:

```bash
hugo serve
```

Go to `http://localhost:1313`.

### 2.6 Build the Website

When your site is ready to deploy, run the following command:

```bash
hugo
```

A `public` folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.

The website can be automatically published and hosted with [Netlify](https://www.netlify.com/) (Read more about [Automated HUGO deployments with Netlify](https://www.netlify.com/blog/2015/07/30/hosting-hugo-on-netlifyinsanely-fast-deploys/)).
Alternatively, you can use [AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/), [Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), [Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/) and more...

## 3 Configuration

### 3.1 Site Configuration {#site-configuration}

In addition to [Hugo global configuration](https://gohugo.io/overview/configuration/) and [menu configuration](#basic-configuration), **gokarna** lets you define the following parameters in your site configuration (here is a `config.toml`, whose values are default).

Please open the code block below to view the complete sample configuration :(far fa-hand-point-down fa-fw)::

```toml
[params]
  version = "1.0.X"
  # site description
  description = "This is My New Hugo Site"
  # site keywords
  keywords = ["Theme", "Hugo"]
  # site default theme ("light", "dark", "auto")
  defaultTheme = "auto"
  # public git repo url only then enableGitInfo is true
  gitRepo = ""
  # ("sha256", "sha384", "sha512", "md5")
  fingerprint = ""
  dateFormat = "2006-01-02"
  # website images for Open Graph and Twitter Cards
  images = ["/logo.png"]
  SourceMap = true

  [params.pwa]
    # whether to enable PWA support
    enable = true
    # service-worker version
    version = "1.0.1"

  [params.app]
    # optional site title override for the app when added to an iOS home screen or Android launcher
    title = "gokarna"
    # whether to omit favicon resource links
    noFavicon = false
    # modern SVG favicon to use in place of older style .png and .ico files
    svgFavicon = ""
    # Android browser theme color
    themeColor = "#ffffff"
    # Safari mask icon color
    iconColor = "#5bbad5"
    # Windows v8-10 tile color
    tileColor = "#da532c"

  [params.search]
    enable = true
    # type of search engine ("lunr", "algolia")

  # Header config
  [params.header]
    # desktop header mode ("fixed", "normal", "auto")
    desktopMode = "fixed"
    # mobile header mode ("fixed", "normal", "auto")
    mobileMode = "auto"
    [params.header.title]
      # URL of the LOGO
      logo = ""
      rss = true
```

### 3.2 Favicons, Browserconfig, Manifest

It is recommended to put your own favicons:

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

into `/static`. They’re easily created via [https://realfavicongenerator.net/](https://realfavicongenerator.net/).

