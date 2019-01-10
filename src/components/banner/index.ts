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

import { TemplateResult } from 'lit-html';
import { labels } from '../../libs/utils';

import styles from './style.scss';

@customElement('amber-banner')
export class Banner extends AmberElement {

  @property({ type: Boolean })
  active = true;

  @property({ type: String })
  title = 'Title';

  @property({ type: String })
  labels = 'OK,Cancel';

  @property({ type: String })
  state = '';

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }

  button(primary :boolean) {
    const evt :string = primary ? 'confirm' : 'cancel';
    this.triggerEvent(evt);
  }

  render() {
    const classes :ClassInfo = {
      'info': this.state === 'info',
      'success': this.state === 'success',
      'warning': this.state === 'warning',
      'error': this.state === 'error',
    }

    const cancel: TemplateResult = labels(this.labels, 1) ?
      html`
        <amber-button
          priority="tertiary"
          state="neutral"
          @click=${(event: CustomEvent) => this.button(false)}
        >
          ${labels(this.labels, 1)}
        </amber-button>` : html``;

    const confirm: TemplateResult = labels(this.labels, 0) ?
      html`
        <amber-button
          state=${this.state}
          priority="tertiary"
          @click=${(event: CustomEvent) => this.button(true)}
        >
          ${labels(this.labels, 0)}
        </amber-button>` : html``;

    return html`
      ${this.setStyles(styles)}
      
      <section
        ?active=${this.active}
        class=${classMap(classes)}
      >
        <header class="banner-header">
          <h5>${this.title}</h5>
        </header>
        
        <article class="banner-body">
          <p><slot></slot></p>
        </article>
        
        <footer class="banner-footer">
          ${cancel}
          ${confirm}
        </footer>

      </section>
    `;
  }
}