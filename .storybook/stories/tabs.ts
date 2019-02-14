/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/tabs';

const labels: string = 'About us, Pricing, Contacts';

addDecorator(withKnobs);

storiesOf('Tabs', module)
  .add('Playground', (): TemplateResult => html`
<h3>&lt;amber-tabs&gt;</h3>

<amber-tabs
    labels=${text('labels', labels)}
    active=${number('active', 0)}
    ?fitted=${boolean('fitted', false)}
    @change=${action('change')}
  >
    <amber-tab-content>First content</amber-tab-content>
    <amber-tab-content>Second content</amber-tab-content>
    <amber-tab-content>Third content</amber-tab-content>
  </amber-tabs>`);