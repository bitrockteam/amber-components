/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/modal';

addDecorator(withKnobs);

const open = () => {
  const el :any = document.querySelector('amber-modal');
  el.showModal();
};

const cancel = (evt) => {
  const el: any = document.querySelector('amber-modal');
  el.close();
}

const states: object = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  default: ''
};

storiesOf('Modal', module)
  .add('Playground', (): TemplateResult => html`

<h3>&lt;amber-modal&gt;</h3>
<p>Based on the native <code>&lt;dialog&gt;</code> element.</p>

<amber-modal
  ?open=${boolean('open', false)}
  title=${text('title', 'Title')}
  labels=${text('labels', 'OK,Cancel')}
  state=${select('state', states, '')}
  ?nosubmit=${boolean('nosubmit', false)}
  @confirm=${action('confirm')}
  @cancel=${action('cancel')}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse ullamcorper posuere purus, vitae consectetur
  massa scelerisque sed. Pellentesque nec interdum libero.
  Quisque vel cursus diam, ac fermentum nisi. Integer non
  condimentum lorem. Vivamus efficitur neque leo, vitae
  molestie mi dignissim at.
</amber-modal>

<amber-button state="neutral" @click=${open}>
  Open Modal
</amber-button>

<blockquote style="margin-top: 30px;">
  <b>Known issue:</b> on Firefox the <code>.showModal()</code> method of native 
  <code>&lt;dialog&gt;</code> element <a target="_blank" 
  href="https://bugzilla.mozilla.org/show_bug.cgi?id=840640#c33">
    it's still not supported
  </a> and the 
  official polyfill can't be implemented on Shadow DOM. In that case the component
  will only switch the <code>open</code> attribute true or false showing the modal, 
  <a target="_blank" 
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#Usage_notes">
    but <b>not</b> the backdrop</a>.
</blockquote>
<blockquote style="margin-top: 30px;">
  <b>Known issue:</b> clicking the backdrop will <b>not</b> close the modal, due to the 
  native implementation, we are looking to apply a workaround in the next releases.
</blockquote>
`);