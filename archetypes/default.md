---
title: {{ replace .Name "-" " " | title }}
seo_title: {{ replace .Name "-" " " | title }}
description: 
slug: {{ .Name }}
author: {{ .Site.Params.author }}

draft: true
date: {{ .Date }}

newsletter: true
---

