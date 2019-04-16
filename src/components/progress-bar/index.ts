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
  display = null;

  @property({ type: String })
  format = '%'
  
  @property({ type: Boolean })
  nodigits = false

  render() {
    return html`      
      <div>
        ${createLabel(
          this.label, 
          this.value,
          this.nodigits, 
          this.format,
          this.display
        )}
        <div class="progress-bar">
          <div class="bar-background">
            <div 
              class="bar-track" 
              style=${width(this.value)}
            ></div>
          </div>
        </div>
      </div>
    `;
  }
}