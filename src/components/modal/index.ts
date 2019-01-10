import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';
import { TemplateResult } from 'lit-html';
import { labels } from '../../libs/utils';

import styles from './style.scss';

const buildWidth = (value :string) :string =>
  value.search('%') > -1 ? value : `${value}px`;

const have = (key :string, ctx :object) :boolean =>
  ctx[key] && ctx[key].length;

@customElement('amber-modal')
export class Modal extends AmberElement {

  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  nosubmit = false;

  @property({ type: String })
  labels = 'OK,Cancel';

  @property({ type: String })
  width = '400';

  @property({ type: String })
  title = 'Action required';

  _dialog() {
    return this.shadowRoot.querySelector('dialog');
  }

  close(closedBy ?:string) {
    this._dialog().close(closedBy);
    this.triggerEvent('closed', { closedBy });
  }

  showModal() {
    this._dialog().showModal();
  }

  button(primary: boolean) {
    const evt: string = primary ? 'confirm' : 'cancel';
    this.triggerEvent(evt);
    !this.nosubmit || !primary ? 
      this.close(`${evt} button`) : null;
  }

  render() {
    const width = buildWidth(this.width);
    const haveTitle = have('title', this);
    const haveLabels = have('labels', this);

    const cancel: TemplateResult = labels(this.labels, 1) ?
      html`
        <amber-button
          priority="tertiary"
          state="neutral"
          @click=${(event: CustomEvent) => this.button(false)}
        >
          ${labels(this.labels, 1)}
        </amber-button>` : html``;

    return html`
      ${this.setStyles(styles)}
      
      <dialog 
        ?open=${this.open}
        style="width: ${width}"
      >

        ${ haveTitle ? html`<header>
          <h1>${this.title}</h1>
        </header>` : html``}
        
        <section>
          <slot></slot>
        </section>

        ${ haveLabels ? html`<footer>
          ${cancel}
          <amber-button
            priority="tertiary"
            ?disabled=${this.nosubmit}
            @click=${(event: CustomEvent) => this.button(true)}
          >
            ${labels(this.labels, 0)}
          </amber-button>
        </footer>` : html``}

      </dialog>
    `;
  }
}