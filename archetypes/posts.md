---
title: {{ replace .Name "-" " " | title }}
seotitle: {{ replace .Name "-" " " | title }}
description: 
slug: {{ .Name }}
date: {{ .Date }}
author: {{ .Site.Params.author }}
draft: true
categories:
tags:
toc: true
related: true
socialshare: true
newsletter: true
---