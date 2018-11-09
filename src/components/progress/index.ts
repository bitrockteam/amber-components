import {
  AmberElement,
  html,
  property,
  customElement,
  svg
} from '../../libs/amber-element';

import { 
  TemplateResult 
} from 'lit-html';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import {
  pixel,
  half,
  viewBox,
  radius,
  dashArray,
  dashoffset
} from './maths';

import styles from './style.scss';

@customElement('amber-progress')
export class Progress extends AmberElement {

  @property({ type: Number })
  size = 48;

  @property({ type: Number })
  stroke = 4;

  @property({ type: Number })
  value = 25;

  @property({ type: Boolean })
  determinate = false;

  render() {

    const paths = (
      size :number , 
      stroke :number, 
      value :number
    ) :TemplateResult => svg`
      <svg
        class="progress"
        height=${pixel(size)}
        width=${pixel(size)}
        viewBox=${viewBox(size)}
      >
        <circle
          class="progress-circle"
          cx=${half(size)}
          cy=${half(size)}
          r=${radius(size, stroke)}
          stroke-width=${stroke}
        />
        <circle
          class="progress-value"
          cx=${half(size)}
          cy=${half(size)}
          r=${radius(size, stroke)}
          stroke-width=${stroke}
          stroke-dasharray=${dashArray(size, stroke)}
          stroke-dashoffset=${dashoffset(size, stroke, value)}
        />
      </svg>
    `;

    const classes :ClassInfo = {
      'indeterminate': !this.determinate,
      'determinate': this.determinate,
    }

    return html`
      ${this.setStyles(styles)}
      
      <div
        class=${classMap(classes)}
      >
        ${paths(this.size, this.stroke, this.value)}
      </div>
    `;
  }
}