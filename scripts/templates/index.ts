import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  TemplateResult,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import { customElement } from './../../libs/decorators';
import styles from './style.scss';

@customElement('amber-%%%')
export class %%% extends AmberElement {

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