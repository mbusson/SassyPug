# Opal

Opal is a Javascript application boilerplate derived from [Baptiste Briel](https://github.com/baptistebriel/)'s [biggie](https://github.com/baptistebriel/biggie), which is itself based on [bigwheel](https://github.com/bigwheel-framework), a minimalist framework from [Jam3](http://www.jam3.com/).

Opal includes several features from biggie, and adds new ones such as:
- [x] Jade preprocessing
- [x] Sass preprocessing
- [x] jQuery support
- [x] GSAP support
- [x] Browserify, babelify and uglify Javascript files (automatically uses `build/app.js` for dev, `build/app.min.js` for prod)
- [x] Livereload your CSS and JS (with browser-sync)
- [x] Offers a stable and simple structure to manage and animate your contents
- [x] Adds fancy utilities described in Part.2 of our Tutorial

## Getting Started

`git clone https://github.com/mbusson/Opal.git folder-name`

`cd folder-name && npm i && gulp`

Your site will be at `http://localhost:3000` by default using [browser-sync](http://www.browsersync.io)

## Tutorial

This tutorial will guide you through the use of Opal. It is quite bulky but required to get a good grasp on what's actually going on in Opal.
Part 1 is broadly based on [bigwheel's documentation](https://github.com/bigwheel-framework/documentation) as Opal is built upon the framework.

##### Part 1:
- [Managing content with Bigwheel](quickstart.md)

##### Part 2:
- [Handy utilities with Biggie](quickstart.md)

##### Part 3:
- [Good to know...](quickstart.md)

## Todo

- [ ] Actually put the project online...

### Examples

- [ ] None for now

### License

MIT, see [LICENSE.md]().
