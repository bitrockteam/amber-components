/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/banner.md';
import '../../src/components/banner';

const states: object = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: ''
};

const open = () => {
  const el: any = document.querySelector('amber-banner');
  el.show();
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Banner', module)
  .add('Playground', (): TemplateResult => html`

<h3>&lt;amber-banner&gt;</h3>

<amber-button @click=${open} state="neutral">
  Show Banner
</amber-button>

<amber-banner
  ?active=${boolean('active', false)}
  title=${text('title', 'Title')}
  labels=${text('labels', 'OK,Cancel')}
  state=${select('state', states, '')}
  @confirm=${action('confirm')}
  @cancel=${action('cancel')}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</amber-banner>`, {
      notes: {
        markdown
      }
    });