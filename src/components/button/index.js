import { 
  AmberElement, 
  html, 
  property,
  define
} from './../../libs/amber-element';
import styles from './style.scss';

export class AmberButton extends AmberElement {

  // @property({ type: Boolean })
  // primary = false;

  static get properties() {
    return {
      primary: { type: Boolean },
      secondary: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.primary = false;
    this.secondary = false;
  }

  render() {
    const booleans = ['primary','secondary'];

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