/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/code.md';
import '../../src/components/code';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Code', module)
  .add('Playground', (): TemplateResult => html`
<h3>&lt;amber-code-snippet&gt;</h3>

  <amber-code-snippet
    ?clipboard=${boolean('clipboard', false)}
    label=${text('label', 'Copy')}
    @copied=${action('copied')}
  >
p {
  color: red;
}</amber-code-snippet>

<div class="code-demo">
  <label style="margin-top: 1rem;">Paste here</label>
  <textarea style="width: 100%;"></textarea>
</div>
`, {
      notes: {
        markdown
      }
    });