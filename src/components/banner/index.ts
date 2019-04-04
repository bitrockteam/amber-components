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

import { 
  labels,
  triggerEvent
} from '../../libs/utils';

import { customElement } from './../../libs/decorators';
import styles from './style.scss';
import './../button';

const have = (key :string, ctx :object) :boolean =>
  ctx[key] && ctx[key].length;

@customElement('amber-banner')
export class Banner extends LitElement {

  @property({ type: Boolean })
  active = false;

  @property({ type: String })
  title = 'Title';

  @property({ type: String })
  labels = 'OK,Cancel';

  @property({ type: String })
  state = '';

  static styles: CSSResult = unsafeCSS(styles);

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }

  button(primary :boolean) {
    const evt :string = primary ? 'confirm' : 'cancel';
    this.hide();
    triggerEvent(this, evt);
  }

  render() {
    const haveTitle = have('title', this);
    const haveLabels = have('labels', this);

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
      <section
        ?active=${this.active}
        class=${classMap(classes)}
      >
        <article>
          ${ haveTitle ? html`
          <header class="banner-header">
            <h5>${this.title}</h5>
          </header>` : html``}
          
          <p class="banner-content">
            <slot></slot>
          </p>
          
          ${ haveLabels ? html`
          <footer class="banner-footer">
            ${cancel}
            ${confirm}
          </footer>` : html``}
        </article>
      </section>
    `;
  }
}