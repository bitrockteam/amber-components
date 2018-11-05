/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs/polymer';
import { withNotes } from '@storybook/addon-notes';
import { html } from '@polymer/lit-element';
// import markdown from './tabs.md';
import './../../src/components/card';

const labels = 'About us, Pricing, Contacts';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Properties', () => html`<amber-card>
    <p>lorem ipsum</p>
  </amber-tabs>`, {
      // notes: {
      //   markdown
      // }
    });