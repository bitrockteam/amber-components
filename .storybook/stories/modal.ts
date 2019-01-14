/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
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

const states: object = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: ''
};

storiesOf('Modal', module)
  .add('Playground', (): TemplateResult => html`<amber-modal
  ?open=${boolean('open', false)}
  labels=${text('labels', 'OK,Cancel')}
  title=${text('title', 'Action required')}
  state=${select('state', states, '')}
  ?nosubmit=${boolean('nosubmit', false)}
  @confirm=${action('confirm')}
  @cancel=${action('cancel')}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Aenean id accumsan augue. Phasellus consequat augue vitae
  tellus tincidunt posuere. Curabitur justo urna, consectetur
  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
  Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.
</amber-modal>

<amber-button state="neutral" @click=${open}>
  Open modal
</amber-button>
`, {
      notes: {
        markdown
      }
    });