> ## 🛠 Status: In Development

# amber-components
Web Components implementation of the Amber Design System.

[![Build Status](https://travis-ci.org/bitrockteam/amber-components.svg?branch=master)](https://travis-ci.org/bitrockteam/amber-components) [![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![https://david-dm.org/bitrockteam/amber-components.svg](https://david-dm.org/bitrockteam/amber-components.svg)

This repository is aimed mainly to developers and contributors, for the proper documentation & styleguide please refer to ~~[https://amber.bitrock.it](https://amber.bitrock.it)~~ (not available yet).

## Usage 

### Install
**NOT WORKING ATM!!!**
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
Then inside any `.js` file:

```javascript
// myfile.js

// import the whole components library
import AmberComponents from '@amber-ds/components';

// import a single component
import '@amber-ds/components/button',
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

### AmberElement
The `AmberElement` class is not a component itself but a base utility class for defining a new element within the library.
It extends the `LitElement` class and adds two methods:

* `triggerEvent(name, ?detail)` - a wrapper to create a new custom event and dispatch it with an optional `detail` object. Bubbling is already turned on.
* `setStyles(css)` - giving a string of CSS rules it creates a `<style />` tag ready to be injected inside the element's template.

From `AmberElement` file you can also import the `html` and `@property` functions from LitHTML and the `@customElement(name)` decorator utility which acts as a replacement of `customElements.define()` but it also perform a check to prevent double definition of the same tag.

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
TBD

### Available NPM tasks
Start the project in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the `./dist` folder
```bash
$ yarn build
```

<!-- Run the tests
```bash
$ yarn test
```

Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
``` -->

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
* `gh-pages` where the distrubutable static files are deployed

Do **NOT** merge directly `development` into `master` (*it's admin-locked...*), always send a PR to have a review.

## License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
