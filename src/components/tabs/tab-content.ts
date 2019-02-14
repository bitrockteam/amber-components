import {
  property,
  html
} from 'lit-element';

import {
  AmberElement,
  customElement
} from '../../libs/amber-element';

export const TagName: string = 'amber-tab-content';

@customElement(TagName)
export class TabContent extends AmberElement {

  @property({ type: Boolean })
  visible = false;

  render() {
    return html`
      ${this.visible ? html`<slot></slot>` : ''}
    `;
  }
}