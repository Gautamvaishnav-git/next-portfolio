---
layout: ../../layouts/BlogPostLayout.astro
title: Tailwind 3.3
description: "Tailwind 3.3: 🚀New Features and Improvements"
date: "2021-08-01"
tags:
  [
    "tailwindcss",
    "css",
    "webdev",
    "frontend",
    "darkmode",
    "rtl",
    "gradient",
    "line-clamp",
    "line-height",
    "css-variables",
    "list-style-image",
    "hyphens",
    "caption-side",
    "tailwindcss-v3.3",
  ]
---

## Tailwind 3.3

Hi Developers this is Gautam, and welcome to the blog. Today I have important news for you about the tailwind css new 3.30 version.

let's talk about what is new in tailwind 3.3 and what they add in the newer version.

let's go!

how to install the latest version

```bash
npm install -D tailwindcss@latest
```

## 950 color Shade

New 950 color shade. As we all know that in tailwind we have many shades for a single color, in the box we have from 100 - 900 but in the new release they added a new 950 shade which is darker than the 900 shade. This is specially introduced for dark mode.

##ESM and Typescript Support.

## RTL and LTR Support

Simplified RTL support with logical properties: let you create your web app in English or Hindi lang, but when you add other language support like Urdu which is written right to left because of this your whole design meshed up, and your paddings and margins are not applying properly, now we have the rtl and ltr support in the new version. you don't need to use `ltr:ml-3 rtl:mr-3`

```html
<div class="group flex items-center">
  <img class="shrink-0 h-12 w-12 rounded-full" src="..." alt="" />
  <div class="ms-3">
    <!-- just apply ms-3 and it will properly -->
    <p class="text-sm font-medium text-slate-300 group-hover:text-white">...</p>
    <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">
      ...
    </p>
  </div>
</div>
```

## Fine-tune gradient color stop positions

Now we can adjust the position of the gradient like we can add now `from-indigo-500 from-10%` , `via-bule-500 via-30%` `via-green-500 via-90%` . We can use any value `from 0% to 100%`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xxfxsto133lzscbl8foi.jpg)

## Line-clamp out of the box.

## New line-height shorthand for font-size utilities.

how it works before

```html
<p class="text-lg leading-7 ..."></p>
```

now we can use like

```html
<p class="text-lg/7 ...">
  <!--or can also do like-->
</p>

<p class="text-lg/[17px] ..."></p>
```

## CSS variables without the var()

now you can use CSS Variable without var()

```css
 className="bg-[var(--brand-color)] hover:bg-[var(--brand-hover-color)]"
className="bg-[--brand-color] hover:bg-[--brand-hover-color]"

```

## New `list-style-image` utilities

want to use custom bullet point in li here you go -

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2c6m8x64zv3frqhny7nb.jpg)

```html
<ul class="list-image-[url(carrot.png)] ...">
  <li>5 cups chopped Porcini mushrooms</li>
  <!-- ... -->
</ul>
```

## New `hyphens` utilities

You have a long word but not readable due to new line, now you can use hyphens utilities

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/glj34qv4m7c0xvlwu5bm.jpg)

```html
<p class="hyphens-manual ...">
  ... Kraftfahrzeug&shy;Haftpflichtversicherung is a ...
</p>
```

## New `caption-side` utilities

Now we can also use table caption at the bottom of the table, like this

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2jgpmstn8nmfvlvjp16f.jpg)

```html
<table>
  <caption class="caption-bottom">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
</table>
```

## wrapping up

you can also read the new release documentation [here](https://tailwindcss.com/blog/tailwindcss-v3-3#extended-color-palette-for-darker-darks)

Thank you for reading so far, Please leave a comment and like the blog. Also comment about the next topic.
