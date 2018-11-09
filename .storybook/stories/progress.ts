/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/progress.md';
import '../../src/components/progress';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Progress', module)
  .add('Playground', (): TemplateResult => html`<amber-progress
  ?determinate=${boolean('determinate', false)}
  size=${number('size', 48)}
  stroke=${number('stroke', 4)}
  value=${number('value', 25)}
></amber-progress>`, {
      notes: {
        markdown
      }
    });