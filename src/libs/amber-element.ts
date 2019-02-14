import { LitElement } from 'lit-element';
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

}

export {
  AmberElement,
  customElement,
}