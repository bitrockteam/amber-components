import {
  AmberElement,
  html,
  property,
  customElement,
  svg
} from '../../libs/amber-element';
import { TemplateResult } from 'lit-html';
import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import styles from './style.scss';


const pixel = (value :number) :string => `${value}px`;

@customElement('amber-progress')
export class Progress extends AmberElement {

  @property({ type: Number })
  size = 48;

  @property({ type: Number })
  stroke = 4;

  @property({ type: Number })
  value = 25;

  render() {

    const paths = (size :number , stroke :number, value :number) => svg`
      <svg
        class="progress"
        height=${pixel(size)}
        width=${pixel(size)}
        viewBox="0 0 ${pixel(size)} ${pixel(size)}"
      >
        <circle
          class="progress-circle"
          cx=${(size/2)}
          cy=${(size/2)}
          r=${(size/2)-(stroke/2)}
          stroke-width=${stroke}
        />
        <circle
          class="progress-value"
          cx=${(size/2)}
          cy=${(size/2)}
          r=${(size/2)-(stroke/2)}
          stroke-width=${stroke}
          stroke-dasharray=${2*Math.PI*((size/2)-(stroke/2))}
          stroke-dashoffset=${((100-value)/100)*(2*Math.PI*((size/2)-(stroke/2)))}
        />
      </svg>
    `;

    return html`
      ${this.setStyles(styles)}
      
      <section>
        ${paths(this.size, this.stroke, this.value)}
      </section>
    `;
  }
}