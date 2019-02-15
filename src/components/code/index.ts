import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  TemplateResult,
  LitElement
} from 'lit-element';

import { triggerEvent } from './../../libs/utils';
import { customElement } from './../../libs/decorators';
import styles from './style.scss';

const _navigator: any = navigator;

@customElement('amber-code-snippet')
export class CodeSnippet extends LitElement {

  @property({ type: Boolean })
  clipboard = false;

  @property({ type: String })
  label = 'Copy';

  static styles: CSSResult = unsafeCSS(styles);

  _copy(evt: Event) {
    const code :string = this.innerHTML;
    const content :string = code.length ? code.trim() : code ;
    _navigator.clipboard.writeText(content)
      .then(() => triggerEvent(this, 'copied', { content }));
  }

  render() {
    const button = () :TemplateResult => this.clipboard ? html`

      <amber-button
        class="copy"
        priority="tertiary"
        state="neutral"
        @click=${(event: Event) => this._copy(event)}
      >
        ${this.label}
      </amber-button>
    ` : html``;

    return html`      
      <section>
        ${button()}
        <pre>
          <code>
            <slot></slot>
          </code>
        </pre>
      </section>
    `;
  }
}