/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
// import { action } from '@storybook/addon-actions';
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

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Banner', module)
  .add('Playground', (): TemplateResult => html`<amber-banner
  state=${select('state', states, '')}
>
  <h4>Banner</h4>
  Some content here
</amber-banner>`, {
      notes: {
        markdown
      }
    });