/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs/polymer';
import { withNotes } from '@storybook/addon-notes';
import { html } from '@polymer/lit-element';
import markdown from './card.md';
import './../../src/components/card';

const img = 'https://via.placeholder.com/300x150/';
const title = 'My awesome card';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', () => html`<amber-card
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