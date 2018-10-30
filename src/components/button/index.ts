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

  @property({ type: Boolean })
  progress = false;

  @property({ type: String })
  type = 'button';

  render() {
    const classes :ClassInfo = {
      'progress': this.progress,
      'block': this.fitted,
      'primary': this.priority === 'primary',
      'secondary': this.priority === 'secondary',
      'tertiary': this.priority === 'tertiary',
      'info': this.state === 'info',
      'success': this.state === 'success',
      'warning': this.state === 'warning',
      'danger': this.state === 'danger',
    }

    return html`
      ${this.setStyles(styles)}
      
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${classMap(classes)}
      >
        <slot></slot>
      </button>
    `;
  }
}