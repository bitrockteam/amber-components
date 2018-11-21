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

@customElement('amber-date')
export class Date extends AmberElement {

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