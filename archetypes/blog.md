{{- $date := time (replaceRE `^([0-9]{4}-[0-9]{2}-[0-9]{2}).*` `$1` .Name) -}}
---
title: "{{ replaceRE `^[0-9]{4}-[0-9]{2}-[0-9]{2}[ _-]*` `` .Name | title }}"
author: "Povl Filip Sonne-Frederiksen"
meta_title: ""
description: ""
date: {{ $date }}
image: "/images/image-placeholder.png"
categories: ["Projects"]
tags: []
#link: ""
draft: true
---

