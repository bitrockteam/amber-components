import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import styles from './style.scss';

@customElement('amber-banner')
export class Banner extends AmberElement {

  @property({ type: Boolean })
  active = true;

  render() {

    return html`
      ${this.setStyles(styles)}
      
      <section ?active=${this.active}>
        <slot></slot>
      </section>
    `;
  }
}