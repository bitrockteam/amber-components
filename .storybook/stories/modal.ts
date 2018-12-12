/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/modal.md';
import '../../src/components/modal';

addDecorator(withNotes);
addDecorator(withKnobs);

const open = () => {
  const el :any = document.querySelector('amber-modal');
  el.showModal();
};

const cancel = (evt) => {
  const el: any = document.querySelector('amber-modal');
  el.close();
}

storiesOf('Modal', module)
  .add('Playground', (): TemplateResult => html`<amber-modal
  ?open=${boolean('open', false)}
  labels=${text('labels', 'OK,Cancel')}
  width=${text('width', '400')}
  title=${text('title', 'Action required')}
  ?nosubmit=${boolean('nosubmit', false)}
  @confirm=${action('confirm')}
  @cancel=${action('cancel')}
>
  <p>Test</p>
</amber-modal>

<amber-button state="neutral" @click=${open}>
  Open modal
</amber-button>
`, {
      notes: {
        markdown
      }
    });