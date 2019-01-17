import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/class-map';

import { TemplateResult } from 'lit-html';
import { labels } from '../../libs/utils';

import styles from './style.scss';

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
  state = '';

  @property({ type: String })
  title = 'Title';

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
    const haveTitle = have('title', this);
    const haveLabels = have('labels', this);

    const classes :ClassInfo = {
      'info': this.state === 'info',
      'success': this.state === 'success',
      'warning': this.state === 'warning',
      'error': this.state === 'error',
    }

    const cancel: TemplateResult = labels(this.labels, 1) ?
      html`
        <amber-button
          priority="tertiary"
          state="neutral"
          @click=${(event: CustomEvent) => this.button(false)}
        >
          ${labels(this.labels, 1)}
        </amber-button>` : html``;
      
    const confirm: TemplateResult = labels(this.labels, 0) ?
      html`
        <amber-button
          state=${this.state}
          priority="tertiary"
          ?disabled=${this.nosubmit}
          @click=${(event: CustomEvent) => this.button(true)}
        >
          ${labels(this.labels, 0)}
        </amber-button>` : html``;

    return html`
      ${this.setStyles(styles)}
      
      <dialog 
        ?open=${this.open}
        class=${classMap(classes)}
      >
        <amber-button
          class="close"
          priority="tertiary"
          state="neutral"
          @click=${(event: CustomEvent) => this.button(false)}
        >
          ✕
        </amber-button>

        <section>
          ${ haveTitle ? html`
          <header class="modal-header">
            <h3>${this.title}</h3>
          </header>` : html``}
          
          <p class="modal-content">
            <slot></slot>
          </p>

          ${ haveLabels ? html`
          <footer class="modal-footer">
            ${cancel}
            ${confirm}
          </footer>` : html``}
        <section>

      </dialog>
    `;
  }
}