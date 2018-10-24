import { 
  LitElement, 
  html, 
  property 
} from '@polymer/lit-element';

const style = html`<style>
  button {
    color: red;
  }

  button.primary {
    color: green;
  }
</style>`;

const getClasses = p => p ? 'primary' : ''; 

export class AmberButton extends LitElement {

  @property({ type: Boolean })
  primary = false;

  render() {
    const classes = getClasses(this.primary);

    return html`
      ${style}
      <button
        class=${classes}
      >${this.primary} <slot></slot>
      </button>
    `;
  }
}

customElements.define('amber-button', AmberButton);