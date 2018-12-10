/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/banner.md';
import '../../src/components/banner';

const title: string = 'Title';

const states: object = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: ''
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Banner', module)
  .add('Playground', (): TemplateResult => html`<amber-banner
  ?active=${boolean('active', true)}
  title=${text('title', title)}
  labels=${text('labels', 'OK,Cancel')}
  state=${select('state', states, '')}
  @confirm=${action('confirm')}
  @cancel=${action('cancel')}
>
  Some content here
</amber-banner>`, {
      notes: {
        markdown
      }
    });