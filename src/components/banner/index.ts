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

@customElement('amber-banner')
export class Banner extends AmberElement {

  @property({ type: Boolean })
  active = true;

  @property({ type: String })
  title = 'Title';

  @property({ type: String })
  state = '';

  render() {
    const classes :ClassInfo = {
      'info': this.state === 'info',
      'success': this.state === 'success',
      'warning': this.state === 'warning',
      'error': this.state === 'error',
    }

    return html`
      ${this.setStyles(styles)}
      
      <section
        ?active=${this.active}
        class=${classMap(classes)}
      >
        <h5>${this.title}</h5>
        <p><slot></slot></p>

        <div>

          <amber-button
            priority="tertiary"
            state="neutral"
          >
            Button
          </amber-button>

          <amber-button
            priority="tertiary"
          >
            Button
          </amber-button>

        </div>

      </section>
    `;
  }
}