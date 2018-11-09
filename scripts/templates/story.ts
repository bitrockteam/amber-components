/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
// import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/%%%.md';
import '../../src/components/%%%';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('%%%', module)
  .add('Playground', (): TemplateResult => html`<amber-%%%
  
></amber-%%%>`, {
      notes: {
        markdown
      }
    });