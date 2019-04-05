import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  TemplateResult,
  svg,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import {
  pixel,
  half,
  viewBox,
  radius,
  dashArray,
  dashoffset
} from './maths';

import { customElement } from './../../libs/decorators';

import styles from './style.scss';

@customElement('amber-progress')
export class Progress extends LitElement {

  @property({ type: Number })
  size = 48;

  @property({ type: Number })
  stroke = 4;

  @property({ type: Number })
  value = 25;

  @property({ type: Boolean })
  determinate = false;

  static styles: CSSResult = unsafeCSS(styles);

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
      <div
        class=${classMap(classes)}
      >
        ${paths(this.size, this.stroke, this.value)}
      </div>
    `;
  }
}