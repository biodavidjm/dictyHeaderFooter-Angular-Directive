dictyHeaderFooter-angular-directive
===================================

__Angular Directives for the Header and Footer of the new dictyBase__

# Background

This repository was directly clone from [frontpage-dictybase](https://github.com/dictyBase/frontpage-dictybase). The motivation was to create an independent project to develop the Angular Directives of the Header and Footer of the dictyBase.

### Travis CI configuration
[![Travis Build Status](https://travis-ci.org/dictyBase/dictyHeaderFooter-Angular-Directive.svg?branch=develop)](https://travis-ci.org/dictyBase/dictyHeaderFooter-Angular-Directive)

The configuration file `.travis.yml` contains the specifications for [Travis](https://travis-ci.org/), including the `node` versions to be tested, required installations, and specifications to run the browsers Firefox and Travis. 

### Coveralls
[![Coverage Status](https://coveralls.io/repos/dictyBase/dictyHeaderFooter-Angular-Directive/badge.png)](https://coveralls.io/r/dictyBase/dictyHeaderFooter-Angular-Directive)

# Design principles

The design principles behind the new framework of the dictyBase are described in the [frontpage-dictybase](https://github.com/dictyBase/frontpage-dictybase) repository. The details about the footer and header are described next:

## Footer

The `footer` html tag contains the dicty footer. A default bootstrap container holds the grid system of 12 columns. Two main columns of 10 and 2 are created.

- The column of 10 holds the dynamic menus, which is further divided in 
