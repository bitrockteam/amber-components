import {
  LitElement,
  html,
  property
} from '@polymer/lit-element';

import { customElement } from './decorators';

class AmberElement extends LitElement {

  triggerEvent(
    name :string,
    detail ?:object
  ) {
    const event :CustomEvent = new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }
  
  setStyles( css :string ) {
    return html`<style>${css}</style>`;
  }

  getClasses( classes :Array<string> ) {
    const actives :Array<string> = 
      classes.filter((e :string) :string => this[e]);
    return actives.join(' ');
  }

}

export {
  AmberElement,
  html,
  property,
  customElement,
}