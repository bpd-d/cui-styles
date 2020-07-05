# cUI Styles
CSS styles for cUI ecosystem.

# Features

**cUI Styles** delivers CSS components for cUI frameworks. It can be used as standalone as well in combination with reactive front-end frameworks like React, Vue, Angular or vanilla javascript. By default module can be imported as common css file into the project. Project structure allows for building (with some requirements) an own custom, specialized project.

All features and components use classes as the styling way. 

## Library

**cUI Styles** comes already built as CSS file in minimized form, ready for import to HTML document or to project.
More information about build and import options can be found in [Documentation]

## Created with Sass

**cUI Styles** is created in Sass. Uses mixins to split components features into smaller pieces so it is easier to built custom realease of the library. More details in [Documentation]

## CSS variables
Most of **cUI Styles** components are based on CSS variables what makes them more accessible and easy to adjust even in runtime.
Such solution brings a flexibility to components but also introduces some limitations in terms of creation of custom builds.
More info can be found in the [Documentation]

## Responsiveness
Responsivenes in the library is mostly achieved by common usage of media-queries. Framework uses **four breakpoints** to provide styling for all possible screen size. Responsiveness is partially achieved by calculating using a ratio on the size depended values

## Dark theme      
Library comes with built-in dark mode. Switch to this mode can be done by setting '*-dark' class in documents body. More details about this feature can be found in [Documentation]

## Custom prefix
**cUI Styles** introduces a convinient solution for cases where project's specifics requires custom library **prefix**. When building custom version it is enough to specify variable *$prefix* at the very beginning of the document. More details in [Documentation].

## Components
**cUI Styles** delivers package of styled components and features:

* Grids - based on flexbox. Divides container on six parts. Widths of the children can be controlled based
> System was not built on grids are already commonly used to built whole site's layout. Having two or more grids is a bad practice.
* Spaces - gives additional paddings and margins. They work with sizes breakpoints so spaces can be adjusted depending on screen size 
* WIP...

# Changelogs

To see what's new, changed or fixed in the latest release, see [Changelog]

# Documentation

## WIP

## Installation

### Add to document
To use built package, it is enough to add **link** in HTML document.

### Import to project
First install package:
```
npm i cui-styles
```
Import to project

```
import "cui-styles/dist/cui-styles.css";
```

### Custom build
Custom build can be created (sometimes they are even preferable options), but some rules must be preserved.
**cUI** components will not work without CSS variables and SCSS so it is important to **use** *root*, *variables* at the begining of the project. Here is an example project structure:

```
$prefix : 'cui' !default;

@use 'variables'with($prefix: $prefix);
@use "core/root"with($prefix: $prefix);
@use 'core/head';
@use 'core/body';
@use 'dark';
@use 'components/print';
@use 'commons';
@use 'base';
@use 'components';

:root {
    @include root.variables;
}

html {
    @include head.html;
}

body {
    @include body.main-body;
}

@include commons.definitions;
@include base.definitions;
@include components.definitions;
@include dark.definitions;
@include print.definitions;
```

Add the **@use** of the **variables** (keeps Sass variables) and **root** (holds CSS variables) at the beginning of the document. Then the rest of the modules can be importe

>NOTICE: 'root.variables' are included in ':root' section in order to work properly

[Changelog]: CHANGELOG
[Documentation]: #Documentation