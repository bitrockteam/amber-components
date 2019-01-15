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
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  default: ''
};

storiesOf('Modal', module)
  .add('Playground', (): TemplateResult => html`<amber-modal
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
  Open
</amber-button>
`, {
      notes: {
        markdown
      }
    });