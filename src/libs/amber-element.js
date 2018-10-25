import {
  LitElement,
  html,
  property
} from '@polymer/lit-element';
import { define } from './define';

class AmberElement extends LitElement {
  
  setStyles(css) {
    return html`<style>${css}</style>`;
  }

  getClasses(classes) {
    // const args = [...arguments];
    const actives = classes.filter(e => this[e]);
    return actives.join(' ');
  }

}

export {
  AmberElement,
  html,
  property,
  define
}