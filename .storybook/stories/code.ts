/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './code.md';
import '../../src/components/code';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Code', module)
  .add('Playground', (): TemplateResult => html`<amber-code-snippet
  ?clipboard=${boolean('clipboard', false)}
  label=${text('label', 'Copy')}
  @copied=${action('copied')}
>
  p {
    color: red;
  }
</amber-code-snippet>

<h4>Paste here</h4>
<textarea style="width: 100%; min-height: 200px; resize: vertical;"></textarea>
`, {
      notes: {
        markdown
      }
    });