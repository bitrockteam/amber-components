/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/card.md';
import '../../src/components/card';

const img: string= 'https://via.placeholder.com/300x150/';
const title: string = 'My awesome card';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', (): TemplateResult => html`<amber-card
  title=${text('title', title)}
  media=${text('media', img)}
  taxonomy=${text('taxonomy', 'News')}
>
  <p>Some content here</p>
</amber-card>`, {
      notes: {
        markdown
      }
    });