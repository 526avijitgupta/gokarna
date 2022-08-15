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

The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this [great documentation for beginners](https://gohugo.io/getting-started/quick-start/).

### a. Create Your Project

Hugo provides a `new` command to create a new website:

```bash
hugo new site my_website
cd my_website
```

### b. Install the Theme

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

### c. Basic Configuration {#basic-configuration}

The following is a basic configuration for the gokarna theme:

```toml
baseURL = "http://example.org/"
defaultContentLanguage = "en"
languageCode = "en"

title = "My New Hugo Site"

theme = "gokarna"

# Automatically generate robots.txt
enableRobotsTXT = true

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


### d. Create Your First Post

Here is the way to create your first post:

```bash
hugo new posts/first_post.md
```

Feel free to edit the post file by adding some sample content and replacing the title value in the beginning of the file.

For posts you need to add `type: "post"` in the markdown metadata. We currently support 2 types of content:

1. Post (`type: "post"`): A normal blog-post with tags, date, & content.
2. Page (`type: "page"`): A standalone content page that will just render the markdown you wrote. You can use it to write custom pages which should not be a part of posts. Like showing your projects portfolio. You can read in detail about this on the [Theme Documentation - Advanced](/posts/theme-documentation-advanced/#content-types) page.

### e. Launching the Website Locally

Launch by using the following command:

```bash
hugo serve
```

Go to `http://localhost:1313`.

### f. Build the Website

When your site is ready to deploy, run the following command:

```bash
hugo
```

A `public` folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.

The website can be automatically published and hosted with [Netlify](https://www.netlify.com/), [AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/), [Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), [Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/) and more...

## Configuration

In addition to [Hugo global configuration](https://gohugo.io/overview/configuration/) and [menu configuration](#basic-configuration), **gokarna** lets you define the following parameters in your site configuration (here is a `config.toml`, whose values are default).

```toml
[params]
  # URL for the avatar on homepage
  avatarURL = ""

  # Choose one of size-xs, size-s, size-m, size-l & size-xl. (Default: size-m)
  avatarSize = ""

  # Description to display on homepage
  description = "Sky above, sand below & peace within"

  # Accent color is displayed when you hover over <a> tags
  accentColor = "#FF4D4D"

  # You can use this to inject any HTML in the <head> tag.
  # Ideal usecase for this is to import custom js/css or add your analytics snippet
  customHeadHTML = ""

  # Keywords relevant for SEO
  metaKeywords = ["blog", "gokarna", "hugo"]

  # If you want to display posts on the homepage, the options are
  # "popular" (order posts by weight), "recent" (order posts by date)
  # or "" (do not display, default option)
  showPostsOnHomePage = ""

  # Footer text
  footer = "The Marauders"
```

### Avatar URL

This is the image url for the avatar on the homepage and the header.

```toml
[params]
  avatarURL = "/images/avatar.jpg"
```

### Avatar Size

You have an option to change the avatar size on the homepage. Options are: `size-xs`, `size-s`, `size-m`, `size-l` & `size-xl`. (Default: `size-m`)

```toml
[params]
  avatarSize = "size-l"
```

### Description

Description to display on homepage below the title and avatar.
```toml
[params]
  description = "Hello, world!"
```

### Accent Color

Accent color is displayed when you hover over `<a>` tags. It takes a hex/rgb color code. Default is `#FF4D4D`

```toml
[params]
  accentColor = "#08F"
```

### Posts on home page

If you want to display posts on the homepage, the options are:

- `popular`: Show popular posts on home page if the value is set to popular. It sorts the all the posts by it’s weight attribute in ascending order. Read more about it [here](/posts/theme-documentation-advanced/#weights).
- `recent`: Show recent posts on home page if the value is set to recent
- Do not show anything if the variable is unset or an empty string.

```toml
[params]
  showPostsOnHomePage = "popular"
```

### Footer

Text to display in the footer section

```toml
[params]
  footer = "Text in footer"
```

### Custom Head HTML

You can add custom HTML in head section

```toml
[params]
  customHeadHTML = "<script>console.log('Any HTML')</script>"
```

Read more in the advanced section [here](/posts/theme-documentation-advanced/#custom-head-html)

### robots.txt

Automatically generate robots.txt

```toml
enableRobotsTXT = true
```

### Favicons, Browserconfig, Manifest

It is recommended to put your own favicons:

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

into `/static` directory. They’re easily created via [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net/).

