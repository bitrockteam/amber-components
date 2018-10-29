import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';
import styles from './style.scss';

@customElement('amber-%%%')
export class %%% extends AmberElement {

  @property({ type: Boolean })
  active = true;

  render() {

    return html`
      ${this.setStyles(styles)}
      
      <section ?active=${this.active}>
        <slot></slot>
      </section>
    `;
  }
}