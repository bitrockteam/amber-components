/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/card.md';
import '../../src/components/card';

const img: string= 'https://source.unsplash.com/random';

const title: string = 'My awesome card';

const background: object = {
  white: 'white',
  light: 'light',
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', (): TemplateResult => html`<amber-card
  title=${text('title', title)}
  media=${text('media', img)}
  taxonomy=${text('taxonomy', 'News')}
  background=${select('background', background, 'white')}
>
  Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
</amber-card>`, {
      notes: {
        markdown
      }
    });