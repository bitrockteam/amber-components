/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './card.md';
import '../../src/components/card';

const img: string= 'https://source.unsplash.com/random/300x200';
const title: string = 'My awesome card';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', (): TemplateResult => html`<amber-card
  title=${text('title', title)}
  media=${text('media', img)}
  taxonomy=${text('taxonomy', 'News')}
>
  Some content here
</amber-card>`, {
      notes: {
        markdown
      }
    });