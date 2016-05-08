# Opal
Opal is a JavaScript application boilerplate written in ES6 broadly based on [biggie](https://github.com/baptistebriel/biggie), which is itself a boilerplate based on [bigwheel](https://github.com/bigwheel-framework), a minimalist framework from [Jam3](http://www.jam3.com/) (check it out!). Please also check out [Baptiste Briel](https://github.com/baptistebriel/)'s work, as most of this project is based on his boilerplate.

Opal aims at integrating several features to biggie, such as:
- [x] Jade preprocessing
- [x] Sass preprocessing
- [x] jQuery support
- [x] GSAP support

And removing some other features such as:
- [ ] LESS preprocessing

## Getting Started

`git clone https://github.com/mbusson/Opal.git folder-name`

`cd folder-name && npm i && gulp`

Your site will be at `http://localhost:3000` by default using [browser-sync](http://www.browsersync.io)

## Tutorial

This tutorial will guide you through the use of Opal. It is quite bulky but required to get a good grasp on what's actually going on in Opal.
Part 1 is broadly based on [bigwheel's documentation](https://github.com/bigwheel-framework/documentation) as Opal is built upon the framework.

### Part 1:
- [Managing content with Bigwheel](quickstart.md)
### Part 2:
- [Handy utilities with Biggie](quickstart.md)
### Part 3:
- [Good to know...](quickstart.md)

## Gulp tasks

- `Jade` compilation to `html`
- `Sass` compilation to `css`
- browserify + babelify & uglify `js` files
  - use `build/app.js` for development, `build/app.min.js` for production
- watch for `css` and `js` files, livereload with browser-sync

## Todo

- [ ] Actually put the project online...

### JS utils

Under `/assets/js/utils.js` there's a couple of `utils` functions, as integrated in biggie by [Baptiste Briel](https://github.com/baptistebriel/):

- css
  - `getRect(top, right, bottom, left)` returns the css rect string with clip values
- js
  - `arrayFrom(opt)` returns an array from an argument (usually a `NodeList`)
  - `clamp(min, value, max)` return a clamped value between min and max values
  - `scrollTop` return either `pageYOffset` or `document.documentElement||document.body.scrollTop`
- biggie
  - `getSlug(req)` return the section slug (i.e. `home`) from bighweel's `req` parameter
  - `createPage(req, slug)` create an `HTML element` and returns it
  - `loadPage(req, view, done)` used on all sections's `init` to create the page

### Examples

- [ ] None for now

### License

MIT, see [LICENSE.md](https://github.com/mbusson/Opal).
