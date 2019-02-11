/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/%%%';

addDecorator(withKnobs);

storiesOf('%%%', module)
  .add('Playground', (): TemplateResult => html`<amber-%%%
  
></amber-%%%>`);