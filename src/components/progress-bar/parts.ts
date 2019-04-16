import {
  html,
  TemplateResult,
} from 'lit-element';
import { decodeEntities } from './../../libs/utils';

const show = (
  value: number,
  display: number
): number  => display ? display : value;

const digits = (
  value: number,
  nodigits: boolean,
  format: string,
  display: number
): TemplateResult => nodigits ?
    html`` :
    html`<span class="number">
      ${show(value, display)}${decodeEntities(format)}
    </span>`

const createLabel = (
  label: string,
  value: number,
  nodigits: boolean,
  format: string,
  display: number
): TemplateResult => label.length ?
    html`<div class="info-progress">
          <span class="label">${label}</span>
          ${digits(value, nodigits, format, display)}
        </div>` :
    html``;

export {
  createLabel
}