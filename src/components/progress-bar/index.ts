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
import styles from './style.scss';

const width = (value: number): string => `width: ${value}%`;

@customElement('amber-progress-bar')
export class ProgressBar extends LitElement {

  static styles: CSSResult = unsafeCSS(styles);

  @property({ type: String })
  label = 'Label';

  @property({ type: Number })
  value = 50;

  render() {

    return html`      
      <div>
        <span class="info-progress">${this.label}</span>
        <div class="progress-bar">
          <div class="bar-background">
            <div class="bar-track" style=${width(this.value)}></div>
          </div>
        </div>
      </div>
    `;
  }
}