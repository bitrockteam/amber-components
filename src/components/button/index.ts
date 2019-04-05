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

import { customElement } from './../../libs/decorators';
import styles from './style.scss';


@customElement('amber-button')
export class Button extends LitElement {

  @property({ type: String })
  priority = 'secondary';

  @property({ type: String })
  state = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  fitted = false;

  @property({ type: String })
  progress = '';

  @property({ type: String })
  type = 'button';

  static styles: CSSResult = unsafeCSS(styles);

  render() {
    const classes :ClassInfo = {
      'fitted': this.fitted,
      'primary': this.priority === 'primary',
      'secondary': this.priority === 'secondary',
      'tertiary': this.priority === 'tertiary',
      'success': this.state === 'success',
      'error': this.state === 'error',
      'neutral': this.state === 'neutral',
      'warning': this.state === 'warning',
      'info': this.state === 'info',
      'is-loading': this.progress === 'pending',
      'is-success': this.progress === 'success',
      'is-error': this.progress === 'error',
    }

    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${classMap(classes)}
      >
        <span class="content-loading"><amber-progress size="24" stroke="2" value="25"></amber-progress></span>
        <span class="content-success">Success</span>
        <span class="content-error">Error</span>
        <span class="content-default"><slot></slot></span>
      </button>
    `;
  }
}