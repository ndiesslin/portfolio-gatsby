---
title: Style Guide
date: "2020-03-12"
description: This is an example web style guide that covers the ndiesslin website.
---

## Intro:

When creating brands, quality brands will create a brand style guide; this is the same for websites, quality websites will create a web style guide. The purpose of this is to help new developers understand the components of the brand and how to add new components of the brand. 

## Colors:
Primary:

<span class="guide-color color-white" style="background-color: #323132">
  #323132 $black
</span>
<span class="guide-color" style="background-color: #EFEFEF">
  #EFEFEF $white;
</span>
<span class="guide-color color-white" style="background-color: #00416A">
  #00416A $dark-blue
</span>

Secondary:

<span class="guide-color" style="background-color: #B7DCEE">
  #B7DCEE $light-blue
</span>
<span class="guide-color" style="background-color: #F16524">
  #F16524 $orange
</span>
<span class="guide-color color-white" style="background-color: #0000FF">
  #0000FF $blue
</span>

<hr>

## Fonts:
<p class="font-family-serif">Headers: Bitter</p>
<p class="font-family-sanserif">Body Copy: Merriweather Sans</p>

<hr>

## Headings:
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
Paragraph

*Italic*

**Strong Text**

***Italic and bold***

<hr>

## Lists:
**Unordered:**
* Item 1
  * Item 1.1
  * Item 1.2
* Item 2

**Ordered:**
1. Item 1
2. Item 2

<hr>

## Links:
[Default link, literally default](#)

<hr>

## Buttons:
<a href="#" class="btn">Default button</a>

<div class="background-color-black padding-16">
  <a href="#" class="btn btn--border-color-white">Botton with white border</a>
</div>

<hr>

## Images:
**First image:**
![Placeholder Image](https://via.placeholder.com/650x50)

**Second image:**
![Placeholder Image](https://via.placeholder.com/650x50)

**Two images in a row:**
![Placeholder Image](https://via.placeholder.com/650x50)
![Placeholder Image](https://via.placeholder.com/650x50)

**Image in directory**
![Placeholder Image](./salty_egg.jpg)

<hr>

## Blockquote:
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

> Far far away, behind the word mountains, far from the countries Vokalia and
> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
> right at the coast of the Semantics, a large language ocean.

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

<hr>

## Code formatting:
**SCSS Code Styles:**
``` SCSS
// For any common style needs, name the selector based of the styles
.color-red {
  color: red;
}

.margin-bottom-16 {
  margin-bottom: pxToEm(16);
}

// Indent any multiple selector use
h1,
h2 {
  font-size: 1rem;
}

// Order of element/ child selectors
.main-element {
  color: white;

  // Child selectors
  &:first-child, &:last-child, &:nth-child(2) {}

  // Before/After selectors
  &:before, &:after {}

  // BEM Modifier
  &--modifier {}

  // BEM Element
  &__element {}
}

// When defining styles in your classes start with the more general styles first
.example-class {
  display: block;
  padding: 0 5px 0;
  color: green;
}
```