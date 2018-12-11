import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

import { labels } from '../../libs/utils';

import styles from './style.scss';

@customElement('amber-modal')
export class Modal extends AmberElement {

  @property({ type: Boolean })
  open = false;

  @property({ type: String })
  labels = 'OK,Cancel';

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
        
        <section>
          <slot></slot>
        </section>

        <footer>
          <amber-button
            priority="tertiary"
            state="neutral"
          >
            ${labels(this.labels, 1)}
          </amber-button>
          <amber-button
            priority="tertiary"
          >
            ${labels(this.labels, 0)}
          </amber-button>
        </footer>
      </dialog>
    `;
  }
}