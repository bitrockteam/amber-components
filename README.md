# basic-starter-kit

[![Build Status](https://travis-ci.org/bitrock-frontend/basic-starter-kit.svg?branch=master)](https://travis-ci.org/bitrock-frontend/basic-starter-kit)

Boilerplate for Bitrock frontend projects. It's a minimal configuration of a Webpack driven frameworkless project, with PWA compliance and a high Lighthouse score.

It's intended for:
* demonstrate an implementation of our frontend styleguide
* quick POC project
* starting point for more advanced and/or opinionated projects

### What's included
* [Normalize.css](https://necolas.github.io/normalize.css/) & [Typebase.css](http://devinhunt.github.io/typebase.css/)
* [AVA](https://github.com/avajs/ava) & [XO](https://github.com/xojs/xo)
* [Cypress](https://www.cypress.io/)
* Webpack
  * CSS & SASS loaders
  * dev-server
  * HTML plugin
  * PWA manifest plugin
  * [Workbox](https://developers.google.com/web/tools/workbox/) plugin

### How to use
Clone the project (optionally ) and install dependencies

```bash
$ git clone https://github.com/bitrock-frontend/basic-starter-kit my-project
$ cd my-project && yarn
```

most of the project customization can be achieved via the `package.json` file
```json
{
  ...
  "displayName": "Starter kit",
  "config": {
    "themeColor": "#e74e0f"
  },
  "description": "Your next awesome project",
  ...
}
```

### Available NPM tasks
Start the project in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the `./dist` folder
```bash
$ yarn build
```

Run the tests
```bash
$ yarn test
```

Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
```


### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
