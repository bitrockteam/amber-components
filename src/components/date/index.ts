import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';
import flatpickr from 'flatpickr';
import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import styles from './style.scss';

@customElement('amber-date')
export class Date extends AmberElement {

  @property({ type: Boolean })
  inline = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  mode = 'single';

  @property({ type: String })
  value = undefined;

  @property({ type: Object })
  config = {};

  @property({ type: Function })
  flatpickr = null;


  connectedCallback() {
    const defaults :object = {
      appendTo: this.shadowRoot,
      inline: this.inline,
      mode: this.mode,
      onChange: (selectedDates, dateStr, instance) => 
        this.triggerEvent('change', { selectedDates, dateStr, instance })
    };

    const config :object = {...defaults, ...this.config};

    setTimeout(() => {
      const elem: HTMLElement = this.shadowRoot.querySelector('input');
      this.flatpickr = flatpickr(elem, config);
    }, 100);
    
  }

  open() {
    this.flatpickr.open();
  }

  close() {
    this.flatpickr.close();
  }

  render() {
    const classes: ClassInfo = {
      'inline': this.inline,
    }

    return html`
      ${this.setStyles(styles)}
      
      <section class=${classMap(classes)}>
        <input type="text"
          ?disabled=${this.disabled}
        >
      </section>
    `;
  }
}