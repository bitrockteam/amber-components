import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  TemplateResult,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import { customElement } from './../../libs/decorators';
import { createLabel } from './parts';
import styles from './style.scss';

const width = (value: number): string => `width: ${value}%`;

@customElement('amber-progress-bar')
export class ProgressBar extends LitElement {

  static styles: CSSResult = unsafeCSS(styles);

  @property({ type: String })
  label = 'Label';

  @property({ type: Number })
  value = 50;

  @property({ type: Number })
  display = undefined;

  @property({ type: String })
  format = '%'
  
  @property({ type: Boolean })
  nodigits = false

  @property({ type: Boolean })
  disabled = false

  render() {
    return html`      
      <div>
        ${createLabel(
          this.label, 
          this.value,
          this.nodigits, 
          this.format,
          this.display,
          this.disabled
        )}
        <div class="progress-bar">
          <div class="bar-background">
            <div 
              class="bar-track"
              ?disabled=${this.disabled} 
              style=${width(this.value)}
            ></div>
          </div>
        </div>
      </div>
    `;
  }
}