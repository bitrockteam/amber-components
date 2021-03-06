/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';
import '../../src/components/progress';

addDecorator(withKnobs);

storiesOf('Progress', module)
  .add('Playground', (): TemplateResult => html`
<h3>&lt;amber-progress&gt;</h3>
  
<amber-progress
  ?determinate=${boolean('determinate', false)}
  size=${number('size', 48)}
  stroke=${number('stroke', 4)}
  value=${number('value', 25)}
></amber-progress>`);