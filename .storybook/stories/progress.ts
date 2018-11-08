/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/progress.md';
import '../../src/components/progress';

const mode: object = {
  indeterminate: 'indeterminate',
  determinate: 'determinate'
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Progress', module)
  .add('Playground', (): TemplateResult => html`<amber-progress
  mode=${select('mode', mode, 'indeterminate')}
  size=${number('size', 48)}
  stroke=${number('stroke', 4)}
  value=${number('value', 25)}
></amber-progress>`, {
      notes: {
        markdown
      }
    });