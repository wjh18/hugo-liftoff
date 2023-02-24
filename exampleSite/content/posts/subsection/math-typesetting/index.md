---
title: Math Typesetting
seo_title: Math Typesetting
summary: A brief guide to setting up KaTeX.
description: A brief guide to setting up KaTeX.
slug: math-typesetting
author: John Doe

draft: false
date: 2020-11-16T21:21:46-05:00
lastmod: 
expiryDate: 
publishDate: 

feature_image: 
feature_image_alt: 

categories:
  - Math
tags:
  - KaTeX
  - Notation
series: 

toc: true
related: true
social_share: true
newsletter: true
disable_comments: false
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.

In this example we will be using [KaTeX](https://katex.org/).

- Create a partial under `/layouts/partials/math.html`.
- Within this partial reference the [Auto-render Extension](https://katex.org/docs/autorender.html) or host these scripts locally.
- Include the partial in your templates like so:  

```go-html-template
{{ if or .Params.math .Site.Params.math }}
{{ partial "math.html" . }}
{{ end }}
```

- To enable KaTex globally set the parameter `math` to `true` in a project's configuration.
- To enable KaTex on a per page basis include the parameter `math: true` in content files.

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

<!-- {{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }} -->
<!-- KaTeX -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}} -->

## Examples

KaTeX support will be added in a future release.

<!-- {{< math.inline >}}
<p>
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math.inline >}} -->

<!-- Block math:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$ -->
