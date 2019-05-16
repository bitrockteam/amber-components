import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import { triggerEvent } from './../../libs/utils';
import { customElement } from './../../libs/decorators';
import flatpickr from 'flatpickr';
import styles from './style.scss';

@customElement('amber-date')
export class Date extends LitElement {

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
        triggerEvent(this, 'change', { selectedDates, dateStr, instance })
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