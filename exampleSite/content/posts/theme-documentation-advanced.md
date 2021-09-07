---
weight: 15
title: "Theme Documentation - Advanced"
date: 2020-05-06T21:29:01+08:00
description: "Discover how to maximise Gokarna's potential"
tags: ["installation", "configuration", "markdown"]
type: post
---

Gokarna is an opinionated theme with a focus on minimalism and simplicity.

## Content Types

This theme supports two types of content types: `post` and `page`. To specify them, you need to add them in your markdown metadata.

### Post

This is the default blog post type which will be shown in your "Posts" section and who's tags will be indexed. Basically, a normal blog post.

```markdown
---
title: "Hello, world!"
date: 2021-01-01
description: "A blog post"
image: "/path/to/image.png"
type: "post"
tags: ["blog"]
---

# Hello World!
This is my blog.
```

### Page

We introduced this type to distinguish between blog posts and normal markdown pages. The reason to create this was to give the user complete freedom in creating their website. You can use this to create a portfolio of your projects or showcase your designs. The possibilites are endless and the choice is yours.

```markdown
---
title: "Hello, world!"
image: "/path/to/image.png"
type: "page"
---

# Projects
Keep an eye on this space for my upcoming projects
```

## Weights

The `weight` attribute can be added in the markdown metadata for `post` types. We have an option in our config.toml: `params.showPostsOnHomePage` which allows you to:

1. Show popular posts on home page if the value is set to `popular`. It sorts the all the posts by it's weight attribute in ascending order.
2. Show recent posts on home page if the value is set to `recent`
3. Do not show anything if the variable is unset or an empty string.

## Icons
Gokarna supports popular social media icons (Github, Linkedin, Twitter, StackOverflow, Dribbble, etc.) out of the box. See full list of supported icons [here](https://github.com/526avijitgupta/gokarna/tree/main/static/icons).

### Icons on homepage

To display icons on the homepage, simply update the `socialIcons` config param with a list of name and url of each icon. The specified `name` should exactly match one of the names from [here](https://github.com/526avijitgupta/gokarna/tree/main/static/icons).
If you want to add more icons, you can download the svg directly from [here](https://simpleicons.org/)  and place them in your local icons directory (`/static/icons/`)

```toml
  [params]
    socialIcons = [
      {name = "twitter", url = "https://example.com"},
      {name = "linkedin", url = "https://example.com"},
      {name = "stackoverflow", url = "https://example.com"},
    ]
```

Preview:

![Icons on homepage Preview](/images/theme-documentation-advanced/icons-homepage-preview.png "Icons on homepage Preview")


### Icons in header

[Feather](https://feathericons.com) icons has a comprehensive list of icons which are more general purpose and not limited to social media.
Therefore, we use feather as an additional source of icons. Here is an example of how to add custom icons in the header using feather:

```toml
  [[menu.main]]
    identifier = "github"
    url = "https://github.com"
    weight = 3
    # Using feather-icons
    pre = "<span data-feather='github'></span>"
```

The same icon in this case could also be added without feather:

```toml
  [[menu.main]]
    identifier = "github"
    url = "https://www.buymeacoffee.com/"
    weight = 3
    # Without using feather-icons
    pre = "<img class='svg-inject' src='/icons/github.svg' />"
```


## Custom Head HTML

The goal of this feature is to give the user more control over the theme. It's functioning is very straightforward - "You can inject any HTML you want in the `<head>` tag" . This may seem simple at first, but it opens up a lot of possibilities.

### Bring your own scripts

Add your own JavaScript or CSS by putting them in the `static/` folder and importing them into your HTML.

```toml
[params]
  customHeadHTML = '''
    <script>console.log("Custom script or import");</script>
    <script src="/js/custom.js"></script>
  '''
```

### Analytics

Integration with any analytics tool: This was a personal pet peeve. User privacy is our primary concern and this meant not using Google Analytics or any of the popular tools.

We preferred privacy friendly tools like [Umami](https://umami.is/) & [Fathom Analytics](https://usefathom.com/), but the downside was that no theme supported them out of the box which led to either changing the theme source code or contributing supporting code to the original theme (both of which are good ways to extend the theme, but not our ideal choice)

Giving users the freedom to add anything in the HTML via config.toml seemed like an elegant way to solve the problem.

```toml
[params]
  customHeadHTML = '''
    <script async defer data-website-id="website-id" src="https://analytics.example.com/script.js"></script>
  '''
```

### Katex

Katex is a math typesetting library for the web which lets you write beautiful equations. To use it, add the javascript as mentioned in [their documentation](https://katex.org/docs/browser.html) in our `params.customHeadHTML`.

```toml
[params]
  customHeadHTML = '''
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.css" integrity="sha384-6LkG2wmY8FK9E0vU9OOr8UvLwsaqUg9SETfpq4uTCN1agNe8HRdE9ABlk+fVx6gZ" crossorigin="anonymous">

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.js" integrity="sha384-31El76TwmbHj4rF9DyLsygbq6xoIobG0W+jqXim+a3dU9W53tdH3A/ngRPxOzzaB" crossorigin="anonymous"></script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossorigin="anonymous"
        onload="renderMathInElement(document.body);"></script>
  '''
```

> Note: Make sure you use the latest version of katex and use the correct script tags as described in [their documentation](https://katex.org/docs/browser.html)

Then the equation `$$y_t = \beta_0 + \beta_1 x_t + \epsilon_t$$` would be displayed as:

   $$y_t = \beta_0 + \beta_1 x_t + \epsilon_t$$

## Syntax Highlighting

Hugo lets you choose the color scheme for the codeblocks. You can choose from the options here: https://xyproto.github.io/splash/docs/all.html

After choosing your theme, just update the `pygmentsStyle`  attribute in config.toml.

```toml
pygmentsStyle = "monokai"
```

You can read more about syntax highlighting on the [official hugo docs](https://gohugo.io/content-management/syntax-highlighting/).

## Site Metadata

Gokarna enables you to improve the SEO performance of your website with minimal effort.

### Image preview

We make sure your pages are social media ready.

![Social Media Preview](/images/theme-documentation-advanced/preview.png "Social Media Preview")

```markdown
---
title: "Hello, world!"
image: "/path/to/image.png"
---
```

> Note: If no image is specified in the markdown metadata, the site avatar is automatically used instead.

### SEO keywords

The keywords relevant for SEO are composed of the page `tags` as defined below:

```markdown
---
title: "Hello, world!"
tags: ["hello", "world"]
---
```

and the `metaKeywords` specified in the config.toml:

```markdown
[params]
  metaKeywords = ["blog", "gokarna", "hugo"]
```
