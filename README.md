dictyHeaderFooter-angular-directive
===================================

__Angular Directives for the Header and Footer of the new dictyBase__

# Background

This repository was directly clone from [frontpage-dictybase](https://github.com/dictyBase/frontpage-dictybase). The motivation was to create an independent project to develop the Angular Directives of the Header and Footer of the dictyBase.

# Build Status

### Travis CI configuration
[![Travis Build Status](https://travis-ci.org/dictyBase/dictyHeaderFooter-Angular-Directive.svg?branch=develop)](https://travis-ci.org/dictyBase/dictyHeaderFooter-Angular-Directive)

The configuration file `.travis.yml` contains the specifications for [Travis](https://travis-ci.org/), including the `node` versions to be tested, required installations, and specifications to run the browsers Firefox and Travis. 

### Coveralls
[![Coverage Status](https://img.shields.io/coveralls/dictyBase/dictyHeaderFooter-Angular-Directive.svg)](https://coveralls.io/r/dictyBase/dictyHeaderFooter-Angular-Directive)

Coveralls has not been properly configured yet.

# Design principles

The design principles behind the new framework of the dictyBase are described in the [frontpage-dictybase](https://github.com/dictyBase/frontpage-dictybase) repository. The details about the footer and header are described next:

## Footer

The `footer` html tag contains the dicty footer. A default bootstrap container is used, which 1) wrap site contents to a maximum of 1170px and 2) house the grid system. 

![FooterGridDesign](https://github.com/dictyBase/dictyHeaderFooter-Angular-Directive/blob/feature/includeEverythingInDirective/images/Footer_grid.jpg)

The content of the footer is divided in two main columns of size 10 and 2 for screen sizes large and medium.

  * Column size 10 holds the dynamic navigation content (menus and submenus)
  * Column size 2 holds the static section (for now) with the funding sources of the dictybase. 

For extra small screens (xs) the two columns are broken into two rows (one column on top of the other), with the dynamic menus on the top and the funding.

For the dynamic column, which holds all the sections and subsections of the web, it is also subjected to responsive behaviour. Thus for large screen is 6 columns, for medium 3 columns, small 2 columns, and extra small 1 column.

## Header

A `header` html tag contains the dicty header. A default bootstrap container is also used.

![Header'GridDesign](https://github.com/dictyBase/dictyHeaderFooter-Angular-Directive/blob/feature/includeEverythingInDirective/images/Header_grid.jpg)
