import { 
  AmberElement, 
  html, 
  property,
  customElement
} from '../../libs/amber-element';
import styles from './style.scss';

@customElement('amber-button')
export class AmberButton extends AmberElement {

  @property({ type: String })
  priority = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type = 'button';

  render() {
    const booleans: Array<string> = ['primary','secondary'];
    const classes = this.getClasses(booleans);

    return html`
      ${this.setStyles(styles)}
      
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${this.priority}
      >
        <slot></slot>
      </button>
    `;
  }
}