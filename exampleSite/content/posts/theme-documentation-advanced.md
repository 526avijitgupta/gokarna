---
weight: 1
title: "Theme Documentation - Advanced"
date: 2020-05-06T21:29:01+08:00
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
  customHTML = ""

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
    pre = ""
    post = ""
    name = "Tags"
    url = "/tags/"
    title = ""
    weight = 2
```


### 2.4 Create Your First Post

Here is the way to create your first post:

```bash
hugo new posts/first_post.md
```

Feel free to edit the post file by adding some sample content and replacing the title value in the beginning of the file.

By default all posts and pages are created as a draft. If you want to render these pages, remove the property `draft: true` from the metadata, set the property `draft: false` or add `-D`/`--buildDrafts` parameter to `hugo` command.

### 2.5 Launching the Website Locally

Launch by using the following command:

```bash
hugo serve
```

Go to `http://localhost:1313`.

![Basic configuration preview](basic-configuration-preview.png "Basic configuration preview")

When you run `hugo serve`, when the contents of the files change, the page automatically refreshes with the changes.

Since the theme use `.Scratch` in Hugo to implement some features,
it is highly recommended that you add `--disableFastRender` parameter to `hugo server` command for the live preview of the page you are editing.

```bash
hugo serve --disableFastRender
```

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

  # Footer config
  [params.footer]
    enable = true
    # license info (HTML format is supported)
    license = '<a rel="license external nofollow noopener noreffer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
  home = ["HTML", "RSS", "JSON"]
  page = ["HTML", "MarkDown"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
  taxonomyTerm = ["HTML"]
```

Note that some of these parameters are explained in details in other sections of this documentation.

Default environments are `development` with `hugo serve` and `production` with `hugo`.

Due to limitations in the local `development` environment,
the **comment system**, **CDN** and **fingerprint** will not be enabled in the `development` environment.

You could enable these features with `hugo serve -e production`.

````

The default CDN data file is located in `themes/gokarna/assets/data/cdn/` directory.
You can store your own data file in the same path under your project: `assets/data/cdn/`.


You can directly set your ID to get a default social link and its icon:

```toml
[params.social]
  Mastodon = "@xxxx"
```

The social link generated is `https://mastodon.technology/@xxxx`.

Or You can set more options through a dict:

```toml
[params.social]
  [params.social.Mastodon]
    # weight when arranging icons (the greater the weight, the later the icon is positioned)
    weight = 0
    # your social ID
    id = "@xxxx"
    # prefix of your social link
    prefix = "https://mastodon.social/"
    # content hovering on the icon
    title = "Mastodon"
```

The default data of all supported social links is located in `themes/gokarna/assets/data/social.yaml`,
which is you can refer to.

![Complete configuration preview](complete-configuration-preview.png "Complete configuration preview")

### 3.2 Favicons, Browserconfig, Manifest

It is recommended to put your own favicons:

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

into `/static`. They’re easily created via [https://realfavicongenerator.net/](https://realfavicongenerator.net/).

Customize `browserconfig.xml` and `site.webmanifest` to set theme-color and background-color.

### 3.3 Style Customization

Hugo **extended** version is necessary for the style customization.

**gokarna** theme has been built to be as configurable as possible by defining custom `.scss` style files.

The directory including the custom `.scss` style files is `assets/css` relative to **your project root directory**.

In `assets/css/_override.scss`, you can override the variables in `themes/gokarna/assets/css/_variables.scss` to customize the style.

Here is a example:

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, Source Code Pro, Menlo, Consolas, Monaco, monospace;
```

In `assets/css/_custom.scss`, you can add some css style code to customize the style.

## 4 Multilingual and i18n

**gokarna** theme is fully compatible with Hugo multilingual mode, which provides in-browser language switching.

![Language Switch](language-switch.gif "Language Switch")

### 4.1 Compatibility {#language-compatibility}


| Language             | Hugo Code | HTML `lang` Attribute | Theme Docs                    | Lunr.js Support               |
|:-------------------- |:---------:|:---------------------:|:-----------------------------:|:-----------------------------:|
| German               | `de`      | `de`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| English              | `en`      | `en`                  | :(far fa-check-square fa-fw): | :(far fa-check-square fa-fw): |
| Spanish              | `es`      | `es`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| French               | `fr`      | `fr`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Indonesian           | `id`      | `id`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Italian              | `it`      | `it`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Polish               | `pl`      | `pl`                  | :(far fa-square fa-fw):       | :(far fa-square fa-fw):       |
| Brazilian Portuguese | `pt-br`   | `pt-BR`               | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Romanian             | `ro`      | `ro`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Russian              | `ru`      | `ru`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Serbian              | `sr`      | `sr`                  | :(far fa-square fa-fw):       | :(far fa-square fa-fw):       |
| Vietnamese           | `vi`      | `vi`                  | :(far fa-square fa-fw):       | :(far fa-check-square fa-fw): |
| Simplified Chinese   | `zh-cn`   | `zh-CN`               | :(far fa-check-square fa-fw): | :(far fa-check-square fa-fw): |

### 4.2 Basic Configuration

After learning [how Hugo handle multilingual websites](https://gohugo.io/content-management/multilingual), define your languages in your [site configuration](#site-configuration).

For example with English, Chinese and French website:

```toml
# [en, zh-cn, fr, pl, ...] determines default content language
defaultContentLanguage = "en"

[languages]
  [languages.en]
    weight = 1
    title = "My New Hugo Site"
    languageCode = "en"
    languageName = "English"
    [[languages.en.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "Posts"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.en.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "Tags"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.en.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "Categories"
      url = "/categories/"
      title = ""
      weight = 3

  [languages.zh-cn]
    weight = 2
    title = "我的全新 Hugo 网站"
    # language code, CN only here
    languageCode = "zh-CN"
    languageName = "简体中文"
    # whether to include Chinese/Japanese/Korean
    hasCJKLanguage = true
    [[languages.zh-cn.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "文章"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.zh-cn.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "标签"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.zh-cn.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "分类"
      url = "/categories/"
      title = ""
      weight = 3

  [languages.fr]
    weight = 3
    title = "Mon nouveau site Hugo"
    languageCode = "fr"
    languageName = "Français"
    [[languages.fr.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "Postes"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.fr.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "Balises"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.fr.menu.main]]
      identifier = "categories"
      name = "Catégories"
      pre = ""
      post = ""
      url = "/categories/"
      title = ""
      weight = 3
```

Then, for each new page, append the language code to the file name.

Single file `my-page.md` is split in three files:

* in English: `my-page.en.md`
* in Chinese: `my-page.zh-cn.md`
* in French: `my-page.fr.md`

### 4.3 Overwrite Translation Strings

Translations strings are used for common default values used in the theme. Translations are available in [some languages](#language-compatibility), but you may use another language or want to override default values.

To override these values, create a new file in your local i18n folder `i18n/<languageCode>.toml` and inspire yourself from `themes/gokarna/i18n/en.toml`.

By the way, as these translations could be used by other people, please take the time to propose a translation by [:(fas fa-code-branch fa-fw): making a PR](https://github.com/526avijitgupta/gokarna/pulls) to the theme!

## 5 Search

Based on [Lunr.js](https://lunrjs.com/) or [algolia](https://www.algolia.com/), searching is supported in **gokarna** theme.

### 5.1 Output Configuration

In order to generate `index.json` for searching, add `JSON` output file type to the `home` of the `outputs` part in your [site configuration](#site-configuration).

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```
