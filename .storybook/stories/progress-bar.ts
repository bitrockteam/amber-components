/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, number } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/progress-bar';

addDecorator(withKnobs);

storiesOf('Progress Bar', module)
  .add('Playground', (): TemplateResult => html`<amber-progress-bar
    label=${text('label', 'Label')}
    value=${number('value', 50)}
  ></amber-progress-bar>`);