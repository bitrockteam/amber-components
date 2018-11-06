import { html, TemplateResult } from 'lit-html';

const taxonomy = (value: string): TemplateResult =>
  value && value.length ? html`<h6>${value}</h6>` : html``;

const media = (value: string, title: string): TemplateResult =>
  value && value.length ? html`
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