/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs/polymer';
import { withNotes } from '@storybook/addon-notes';
import { html } from '@polymer/lit-element';
import markdown from './tabs.md';
import './../../src/components/tabs';

const labels = 'About us, Pricing, Contacts';

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Tabs', module)
  .add('Properties', () => html`<amber-tabs
    labels=${text('labels', labels)}
    active=${number('active', 0)}
    ?fitted=${boolean('fitted', false)}
  >
    <amber-tab-content>First content</amber-tab-content>
    <amber-tab-content>Second content</amber-tab-content>
    <amber-tab-content>Third content</amber-tab-content>
  </amber-tabs>`, {
      notes: {
        markdown
      }
    });