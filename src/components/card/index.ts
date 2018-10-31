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
import { TemplateResult } from 'lit-html';

@customElement('amber-card')
export class Card extends AmberElement {

  @property({ type: String })
  title = 'Card title';

  @property({ type: String })
  taxonomy = '';

  @property({ type: String })
  media = '';

  render() {

    const taxonomy = (value :string) :TemplateResult => 
      value && value.length ? html`<h4>${value}</h4>` : html``;
    
    const media = (value: string, title :string): TemplateResult =>
      value && value.length ? 
        html`<figure><img src=${value} alt=${title}></figure>` : html``;

    return html`
      ${this.setStyles(styles)}
      
      <section 
        class="card"
      >
        ${media(this.media, this.title)}
        ${taxonomy(this.taxonomy)}
        <h3>${this.title}</h3>
        <slot></slot>
      </section>
    `;
  }
}