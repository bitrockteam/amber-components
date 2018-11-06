import { 
  AmberElement, 
  html, 
  property,
  customElement,
} from '../../libs/amber-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import styles from './style.scss';

@customElement('amber-button')
export class Button extends AmberElement {

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

  render() {
    const classes :ClassInfo = {
      'fitted': this.fitted,
      'primary': this.priority === 'primary',
      'secondary': this.priority === 'secondary',
      'tertiary': this.priority === 'tertiary',
      'success': this.state === 'success',
      'error': this.state === 'error',
      'is-loading': this.progress === 'pending',
      'is-success': this.progress === 'success',
      'is-error': this.progress === 'error',
      'neutral': this.state === 'neutral',
    }

    return html`
      ${this.setStyles(styles)}
      
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${classMap(classes)}
      >
        <slot>
          <span class="content-default">Action here</span>
          <span class="state-loading">Loading</span></slot>
          <span class="content-success">Success</span>
          <span class="state-error">Error</span></slot>
      </button>
    `;
  }
}