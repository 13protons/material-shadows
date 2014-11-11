material-shadows
================

Shadow styles inspired by googles material design
Material Shadow
---------------

A stylesheet to produce shadows on html elements that create subtle depth cues. Inspired by [google's material design][1].

Download the library
====================

[material-shadow.css][2]

-or-

[material-shadow.less]

Demo
====

See a [live demo][3] of material shadow.

Basic Usage
===========

Add the `shadow-[level]` class to an element, where `level` is some integer 1-10, with 10 being the highest 'above' that element's ground plane.

```
<div class="shadow-1">...</div>
```

Animated Transitions
====================

Use the `shadow-active-[level]` class **with** a `shadow-[level]` class to define the resting and `:hover` states of the shadow. Shadows will transition up to (or down to) the height specificed by the `active` class, then back again.  

```
<div class="shadow-2 shadow-active-5">...</div>
```

See a [live demo][3] of material shadow.

###License

MIT

2014 by Alan Languirand

[1]:http://www.google.com/design/spec/what-is-material/environment.html#environment-light-shadow
[2]:http://alanguir.github.io/material-shadows/styles/material-shadow.css
[3]:http://alanguir.github.io/material-shadows/
[4]:http://alanguir.github.io/material-shadows/styles/material-shadow.less
