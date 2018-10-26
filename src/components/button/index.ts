import { 
  AmberElement, 
  html, 
  property,
  define
} from '../../libs/amber-element';
import styles from './style.scss';

export class AmberButton extends AmberElement {

  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  secondary = false;

  render() {
    const booleans :Array<string> = ['primary','secondary'];

    return html`
      ${this.setStyles(styles)}
      
      <button
        class=${this.getClasses(booleans)}
      >
        <slot></slot>
      </button>
    `;
  }
}

define('amber-button', AmberButton);