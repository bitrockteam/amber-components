/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/card';

const img: string= 'https://source.unsplash.com/random/600x400/';

const background: object = {
  white: 'white',
  light: 'light',
};

addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', (): TemplateResult => html`
<h3>&lt;amber-card&gt;</h3>


  <div class="card-demo row">
    <amber-card
      title=${text('title', 'Title')}
      media=${text('media', img)}
      taxonomy=${text('taxonomy', 'Taxonomy')}
      background=${select('background', background, 'light')}
      class="col-12 col-md-6 col-xl-4";
    >
      Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
    </amber-card>
  </div>`);