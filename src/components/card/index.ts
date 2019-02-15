import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import {
  taxonomy,
  media
} from './parts';

import { customElement } from './../../libs/decorators';
import styles from './style.scss';

@customElement('amber-card')
export class Card extends LitElement {

  @property({ type: String })
  title = '';

  @property({ type: String })
  taxonomy = '';

  @property({ type: String })
  media = '';

  @property({ type: String })
  background = 'white';

  static styles: CSSResult = unsafeCSS(styles);

  render() {
    const classes :ClassInfo = {
      'white': this.background === 'white',
      'light': this.background === 'light',
    }

    return html`      
      <article 
        class="card"
      >
        ${media(this.media, this.title)}
        <section
          class=${classMap(classes)}
        >
          ${taxonomy(this.taxonomy)}
          <h3>${this.title}</h3>
          <p><slot></slot></p>
        </section>
      </article>
    `;
  }
}