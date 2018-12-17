// import { html, TemplateResult } from 'lit-html';

const labels = (list: string, position: number): string =>
  list.split(',')[position];

// const setStyles = (css : string) :TemplateResult => 
//   html`<style>${css}</style>`;

export {
  labels,
  // setStyles
}