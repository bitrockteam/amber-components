import {
  LitElement,
  html,
  property
} from '@polymer/lit-element';

import { define } from './define';

class AmberElement extends LitElement {
  
  setStyles(css :string) {
    return html`<style>${css}</style>`;
  }

  getClasses(classes :Array<string>) {
    const actives :Array<string> = 
      classes.filter((e :string) :string => this[e]);
    return actives.join(' ');
  }

}

export {
  AmberElement,
  html,
  property,
  define
}