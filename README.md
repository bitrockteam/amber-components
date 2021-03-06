# amber-components

[![Build Status](https://travis-ci.org/bitrockteam/amber-components.svg?branch=master)](https://travis-ci.org/bitrockteam/amber-components) [![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![https://david-dm.org/bitrockteam/amber-components.svg](https://david-dm.org/bitrockteam/amber-components.svg)

Web Components implementation of the Amber Design System.

![logo.svg](logo.svg)

This repository is aimed mainly to developers and contributors, for the proper documentation & styleguide please refer to [https://amber.bitrock.it](https://amber.bitrock.it).

You can preview/try the components on the [live Storybook](https://bitrockteam.github.io/amber-components/).

## Usage 

### Install
```bash
$ yarn add @amber-ds/components
--- or ---
$ npm install @amber-ds/components
```

optionally, you may want to add the Web Components polyfills to support previous versions of Firefox and Edge.

```bash
$ yarn add @webcomponents/webcomponentsjs
--- or ---
$ npm install @webcomponents/webcomponentsjs
```

### Add in project
You can import the components in your project in different way depending on the environment:

as Javascript files with a bundler (like Webpack)
```javascript
// myfile.js

// import the whole components library
import AmberComponents from '@amber-ds/components';

// import a single component (button for instance)
import '@amber-ds/components/button',
```

as Javascript files from HTML without a bundler
```html
<!-- mypage.html -->

<!-- import the whole components library -->
<script type="module" src="./node_modules/@amber-ds/components/index.js"></script>
<!-- import a single component (button for instance) -->
<script type="module" src="./node_modules/@amber-ds/components/button.js"></script>
```

then in an `.html` file, or a templating that produces an HTML output:

```html
<!-- myfile.html -->

<amber-button priority="primary">
  Get ready!
<amber-button>
```

## Development
A brief description of the development architecture, stack and how to work on the code:

### WebComponents
The **WebComponents** specification is an umbrella term to group the [Custom Elements v1](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and [Shadow DOM v1](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) specification. These browser APIs let you write W3C compliant custom HTML tags with their own functionalities, scoped styles and markup that works across [browsers](https://caniuse.com/#feat=custom-elementsv1) and [frontend frameworks](https://custom-elements-everywhere.com/).

### Typescript
To achieve a better code resilience, all components are written in [TypeScript](https://www.typescriptlang.org/) to take advantage mainly of static type checking and the decorators syntax. It is also used to transpile code to ES-2015.

### Based on Lit-HTML & LitElement
Since Web Components as a standard doesn't handle the rendering mechanics and data-binding, we are adopting [Lit-HTML](https://polymer.github.io/lit-html/) and its Web Component class LitElement as a foundation layer for every comoponent within this library.

### Internal utilities
* `triggerEvent(element, name, ?detail)` - a wrapper to create a new custom event and dispatch it with an optional `detail` object. Bubbling is already turned on.

### Add a new component
To quickly create the required (but minimal) boilerplate for a new Amber component, we have included a small CLI utility:

```bash
$ yarn create:component [name]
--- or ---
$ npm run create:component [name]
```

This will create a subfolder within the `./src/components` folder with the two required starter files `index.ts` and `style.scss`.

You will only need to import the new component inside the `./src/components/library.ts` file to chain it in the dev & build processess.

### Styling
You can define the styles of each component using SASS, the main `index.scss` file within the component folder gets processed by the compiler and then is injected in the Shadow DOM.

If you need to share styles, mixins or whatever else between components you should create a separated file and then import it where they are required.

### Tests
At the moment only the core libraries (*plain `.ts` files within the `src/libs` folder*) are being tested via [Jest](https://jestjs.io/).

## Available NPM tasks
Start the project in development mode with a live reload Storybook
```bash
$ yarn start
```

Start the project in development mode with a simple HTML page
```bash
$ yarn dev
```

Create a static Storybook build in the `./dist` folder
```bash
$ yarn build:storybook
```

Run the unit tests
```bash
$ yarn test:unit
```

<!-- Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
``` -->

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
* `gh-pages` where the distrubutable static Storybook build files are deployed

Do **NOT** merge directly `development` into `master` (*it's admin-locked...*), always send a PR to have a review.

## Publish a new version
Before attempting to publish a new version of the package on NPM, first run through this checklist:

* tests passes (it is required for PRs)
* increment version number in `package.json` file following [semver](https://semver.org/) guidelines
* report the changes on the [amber-website](https://github.com/bitrockteam/amber-website) docs

If the release include a **new component**:
* versioning should be incremented by a **minor** version
* be sure to add a new entry point `webpack.config.js`, this is required to create the standalone module
* be sure to import the component and add it in the `/src/components/library.ts` files, this way it will be accessible when user imports the whole library
* add the component tag name it in the `/src/elements.ts` array, this can help with Vue.js compatibility in some cases

When a new bumped version is pushed to the `master` branch it will automatically trigger the deploy on [NPM](https://www.npmjs.com/package/@amber-ds/components) (*after all automated checks passes*) using the [bitrock-admin](https://www.npmjs.com/~bitrock-admin) account.


## License
Code in this repo and the Amber Design Sytem logo are distributed by the Bitrock UI Engineering team, released under the [MIT license](LICENSE). 
