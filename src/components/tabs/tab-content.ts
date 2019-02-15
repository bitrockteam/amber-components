import {
  property,
  html,
  LitElement
} from 'lit-element';

import { customElement } from './../../libs/decorators';

export const TagName: string = 'amber-tab-content';

@customElement(TagName)
export class TabContent extends LitElement {

  @property({ type: Boolean })
  visible = false;

  render() {
    return html`
      ${this.visible ? html`<slot></slot>` : ''}
    `;
  }
}