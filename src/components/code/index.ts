import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

// import {
//   classMap,
//   ClassInfo
// } from 'lit-html/directives/class-map';

import styles from './style.scss';
import { TemplateResult } from 'lit-html';

const _navigator: any = navigator;

@customElement('amber-code-snippet')
export class CodeSnippet extends AmberElement {

  @property({ type: Boolean })
  clipboard = false;

  @property({ type: String })
  label = 'Copy';

  _copy(evt: Event) {
    const code :string = this.innerHTML;
    const content :string = code.length ? code.trim() : code ;
    _navigator.clipboard.writeText(content)
      .then(() => this.triggerEvent('copied', { content }));
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
      ${this.setStyles(styles)}
      
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