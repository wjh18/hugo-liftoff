---
title: {{ replace .Name "-" " " | title }}
seotitle: {{ replace .Name "-" " " | title }}
description: 
slug: {{ .Name }}
date: {{ .Date }}
author: {{ .Site.Params.author }}
draft: true

techstack:
personal: true
live_url: 
source_url: 

toc: true
related: true
socialshare: true
newsletter: true
---