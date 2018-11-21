/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/modal.md';
import '../../src/components/modal';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Modal', module)
  .add('Playground', (): TemplateResult => html`<amber-modal
  ?open=${boolean('open', true)}
>
  <p>test</p>
</amber-modal>
`, {
      notes: {
        markdown
      }
    });