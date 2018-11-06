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
<<<<<<< HEAD
        ${taxonomy(this.taxonomy)}
        <h3>${this.title}</h3>
        <p><slot></slot></p>
=======
        <section>
          ${taxonomy(this.taxonomy)}
          <h3>${this.title}</h3>
          <slot></slot>
        </section>
>>>>>>> 8f99c88baf91ded695b17cd879241a54c0eba94a
      </article>
    `;
  }
}