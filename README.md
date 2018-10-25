# amber-components
Web Components implementation of the Amber Design System.

## Development
### AmberElement
The `AmberElement` class is not a component itself but a base utility class for defining a new element within the library.
It extends the `LitElement` class and adds two methods:

* `setStyles(css)` - giving a string of CSS rules it creates a `<style />` tag ready to be injected inside the element's template.
* `getClasses(class1, ...)` - from a list of required CSS classes it generates a single string from them, if they are an active boolean property.

From `AmberElement` file you can also import the `html` function from LitHTML and the `define()` utility which acts as a replacement of `customElements.define()` but it also do a check to prevent double definition of the same tag.

### Add a new component
<!-- 1. Create a new subfolder within the `src/components` folder
2. Add an `index.js` and an `index.scss` files
3. Within the `index.js` file import the shared libs and write -->


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
