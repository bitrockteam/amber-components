# amber-components
Web Components implementation of the Amber Design System.

## Usage 

### Install
NOT WORKING ATM!!!
```bash
$ npm install @amber-ds/components
--- or ---
$ yarn add @amber-ds/components
```

optionally, you may want to add the Web Components polyfills to support previous versions of Firefox and Edge.

```bash
$ npm install @webcomponents/webcomponentsjs
--- or ---
$ yarn add @webcomponents/webcomponentsjs
```

### Add in project
Then inside any `.js` file:

```javascript
// myfile.js

// import the whole components library
import AmberComponents from '@amber-ds/components';

// import a single component
import AmberButton from '@amber-ds/components/button',
```

then in an `.html` file, or a templating that produces an HTML output:

```html
<!-- myfile.html -->

<amber-button primary>
  Get ready!
<amber-button>
```

## Development

### WebComponents
TBD

### Based on Lit-HTML & LitElement
TBD

### AmberElement
The `AmberElement` class is not a component itself but a base utility class for defining a new element within the library.
It extends the `LitElement` class and adds two methods:

* `setStyles(css)` - giving a string of CSS rules it creates a `<style />` tag ready to be injected inside the element's template.
* `getClasses(class1, ...)` - from a list of required CSS classes it generates a single string from them, if they are an active boolean property.

From `AmberElement` file you can also import the `html` function from LitHTML and the `define()` utility which acts as a replacement of `customElements.define()` but it also do a check to prevent double definition of the same tag.

### Add a new component
TBD
<!-- 1. Create a new subfolder within the `src/components` folder
2. Add an `index.js` and an `index.scss` files
3. Within the `index.js` file import the shared libs and write -->

### Styling
You can define the styles of each component using SASS, the main `index.scss` file within the component folder gets processed by the compiler and then is injected in the Shadow DOM.

If you need to share styles, mixins or whatever else between components you should create a separated file and then import it where they are required.

### Tests

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


### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
