import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import {
  taxonomy,
  media
} from './parts';

import styles from './style.scss';

@customElement('amber-card')
export class Card extends AmberElement {

  @property({ type: String })
  title = 'Card title';

  @property({ type: String })
  taxonomy = '';

  @property({ type: String })
  media = '';

  @property({ type: String })
  background = 'white';

  render() {
    const classes :ClassInfo = {
      'white': this.background === 'white',
      'light': this.background === 'light',
    }

    return html`
      ${this.setStyles(styles)}
      
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