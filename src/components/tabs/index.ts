import {
  property,
  html,
  CSSResult,
  unsafeCSS,
  TemplateResult,
  LitElement
} from 'lit-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import { triggerEvent } from './../../libs/utils';
import { customElement } from './../../libs/decorators';
import { UpdateEvent } from './../../types/events';
import { TagName as TabContent } from './tab-content';
import styles from './style.scss';

@customElement('amber-tabs')
export class Tabs extends LitElement {

  @property({ type: String })
  labels = 'First,Second';

  @property({ type: Number })
  active = 0;

  @property({ type: Boolean })
  fitted = false;

  static styles: CSSResult = unsafeCSS(styles);

  _showTab(index: number) {
    const tabs: NodeList = this.querySelectorAll(TabContent);
    tabs.forEach((e: HTMLElement, i: number): void => 
      i === index ? e.setAttribute('visible','') : e.removeAttribute('visible'));
  }

  _setActive(evt: UpdateEvent) {
    evt.preventDefault();
    const index: number = parseInt(evt.target.dataset.index);
    this.active = index;
    this._showTab(index);
    triggerEvent(this, 'change', { active: index });
  }

  render() {
    this._showTab(this.active);

    const classes: ClassInfo = {
      'fitted': this.fitted
    }

    const labels: Array<String> = this.labels.split(',') || [];

    return html`      
      <section 
        class=${classMap(classes)}
      >
        <ul
          class="tabs-list"
          role="tablist">
          ${labels.map((e: string, i: number): TemplateResult => html`
            <li
              class=${this.active === i ? 'active' : ''}
              role="presentation"
            >
              <a 
                href="#"
                role="tab"
                data-index=${i}
                @click=${(event) => this._setActive(event)}
              >${e}</a>
            </li>
          `)}
        </ul>
        <article
          class="tabs-content"
          role="tabpanel"
        >
          <slot></slot>
        </article>
      </section>
    `;
  }
}