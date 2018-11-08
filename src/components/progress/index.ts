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

  render() {

    const paths = (size :number , stroke :number) => svg`
      <svg
        class="progress"
        height=${pixel(size)}
        width=${pixel(size)}
        viewBox="0 0 48 48"
      >
        <circle
          class="progress-circle"
          cx="24"
          cy="24"
          r="22"
          fill="transparent"
          stroke-width=${stroke}
        />
        <circle
          class="progress-value"
          cx="24"
          cy="24"
          r="22"
          fill="transparent"
          stroke-width=${stroke}
          stroke-dasharray="138.22996"
          stroke-dashoffset="103.67247"
        />
      </svg>
    `;

    return html`
      ${this.setStyles(styles)}
      
      <section>
        ${paths(this.size, this.stroke)}
      </section>
    `;
  }
}