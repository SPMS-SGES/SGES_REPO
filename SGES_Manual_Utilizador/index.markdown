---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---
![images/9.jpg](images/9.jpg)

# [My Testing] – *prototype of Markdown on html of github pages*

# 1.Introduction

This work represents a simple way to show markdown on a html pages, using gitHub pages. It complements the need of something simple that represent markdown files as html.

We don't teach how to write markdown, html or css. But we show some examples.



# 2.Structure

We have the following structure:

- index.markdown
- _layouts *[folder]*
- css *[folder]*
- images *[folder]*
- someMarkDownFile.markdown

Only index file and layouts folder are required, the other files and folders are optional.

## 2.1.Main File

The index.markdown is the first page of your webpage, insert there what you want for first page. 

The first content of this file is front matter definition. See [here](https://jekyllrb.com/docs/frontmatter/).
Remember that the layout is the one defined on [The layout folder](#the-layout-folder).

**Don't forget:** Between the titles and the *hash* you have to left a space.

## 2.2.The layout folder

The layout folder is the folder where you put the frame in html. In this case, we have a file: *default.html* that is called on the main file as layout (see [Main File](#main-file)).

## 2.3.The css folder
Here you have the css files, where you define your own style or the github style. This one is from [github markdown css](https://github.com/sindresorhus/github-markdown-css).

It's not required as you can define the browser style or define on the layout file.

**Don't forget:** At layout file you have to call the css style as :``css/main.css``.

## 2.4.The images folder

It is a easy way to organize images. The way you specify on a markdown file is: ``css/name_image.jpg``.

## 2.5.The other markdown file

If you don't want to call your file as index, this file will not be the *first* page of your webPage. But if you can acess, you have only to put followed the link ``/nameOfTheFile``

# 3. Create your own webpage

Create as show on the following: [gitHub webPage](https://pages.github.com/). 

Or more simple, from your project create a branch called : ``gh-pages``. And acess your html webpage :

*your username*/github.io/*your project name*

if you want you can acess to a specific markdown file using:

*your username*/github.io/*your project name*/*your file name, without the termination type*













<<<<<<< HEAD
=======
# What you'll need
>>>>>>> origin/master

