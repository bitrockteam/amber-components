import { html, TemplateResult } from 'lit-html';

const check = (prop :string) :Boolean|number => prop && prop.length;

const taxonomy = (value: string): TemplateResult =>
<<<<<<< HEAD
  value && value.length ? html`<h6>${value}</h6>` : html``;
=======
  check(value) ? html`<h4>${value}</h4>` : html``;
>>>>>>> 8f99c88baf91ded695b17cd879241a54c0eba94a

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