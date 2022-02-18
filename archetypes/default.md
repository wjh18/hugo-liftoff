---
title: {{ replace .Name "-" " " | title }}
seo_title: {{ replace .Name "-" " " | title }}
description: 
slug: {{ .Name }}
date: {{ .Date }}
author: {{ .Site.Params.author }}

draft: true
newsletter: true
---

