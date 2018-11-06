import { html, TemplateResult } from 'lit-html';

const check = (prop :string) :Boolean|number => prop && prop.length;

const taxonomy = (value: string): TemplateResult =>
  check(value) ? html`<h6>${value}</h6>` : html``;

const media = (value: string, title: string): TemplateResult =>
  check(value) ? html`
    <figure>
      <img 
        src=${value} 
        alt=${title}
      >
    </figure>
  ` : html``;

export {
  taxonomy,
  media
}