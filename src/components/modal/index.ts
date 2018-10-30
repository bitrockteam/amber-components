import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';
import styles from './style.scss';

@customElement('amber-modal')
export class Modal extends AmberElement {

  @property({ type: Boolean })
  open = false;

  _dialog() {
    return this.shadowRoot.querySelector('dialog');
  }

  close() {
    this._dialog().close();
    this.triggerEvent('closed');
  }

  render() {

    return html`
      ${this.setStyles(styles)}
      
      <dialog ?open=${this.open}>
        <slot></slot>
      </dialog>
    `;
  }
}