import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

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

  render() {

    return html`
      ${this.setStyles(styles)}
      
      <article 
        class="card"
      >
        ${media(this.media, this.title)}
        ${taxonomy(this.taxonomy)}
        <h3>${this.title}</h3>
        <p><slot></slot></p>
      </article>
    `;
  }
}