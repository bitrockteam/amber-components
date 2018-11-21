/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
// import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/date.md';
import '../../src/components/date';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Date', module)
  .add('Playground', (): TemplateResult => html`<amber-date
  
></amber-date>`, {
      notes: {
        markdown
      }
    });