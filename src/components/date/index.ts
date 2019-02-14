import {
  property,
  html,
  CSSResult,
  unsafeCSS
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import {
  AmberElement,
  customElement,
} from '../../libs/amber-element';

import flatpickr from './../../libs/flatpickr/flatpickr.js';
import styles from './style.scss';

@customElement('amber-date')
export class Date extends AmberElement {

  @property({ type: Boolean })
  inline = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  time = false;

  @property({ type: String })
  mode = 'single';

  @property({ type: String })
  value = '';

  @property({ type: Object })
  config = {};

  @property({ type: Function })
  flatpickr = null;

  static styles: CSSResult = unsafeCSS(styles);

  connectedCallback() {
    super.connectedCallback();

    const defaults :object = {
      appendTo: this.shadowRoot,
      inline: this.inline,
      mode: this.mode,
      enableTime: this.time,
      defaultDate: this.value,
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
      <div class=${classMap(classes)}>
        <input type="text"
          value=${this.value}
          ?disabled=${this.disabled}
        />
      </div>
    `;
  }
}