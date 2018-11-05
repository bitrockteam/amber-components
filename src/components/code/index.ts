import {
  AmberElement,
  html,
  property,
  customElement
} from '../../libs/amber-element';

import {
  classMap,
  ClassInfo
} from 'lit-html/directives/classMap';

import styles from './style.scss';

@customElement('amber-code-snippet')
export class CodeSnippet extends AmberElement {

  @property({ type: Boolean })
  allowCopy = false;

  _copy(evt: Event) {
    const code = this.querySelector('pre code');
    console.log(code.innerHTML);
  }

  render() {

    return html`
      ${this.setStyles(styles)}
      
      <pre>
        <code>
          <slot></slot>
        </code>
      </pre>
    `;
  }
}