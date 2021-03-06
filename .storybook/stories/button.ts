/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';
import './../../src/components/button';

const priorities: object = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const types: object = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
};

const states: object = {
  success: 'success',
  error: 'error',
  neutral: 'neutral',
  warning: 'warning',
  info: 'info',
  default: ''
};

const progress: object = {
  success: 'success',
  error: 'error',
  pending: 'pending',
  default: ''
};

addDecorator(withKnobs);

storiesOf('Button', module)
  .add('Playground', (): TemplateResult => html`
<h3>&lt;amber-button&gt;</h3>

  <amber-button
    ?fitted=${boolean('fitted', false)}
    ?disabled=${boolean('disabled', false)}
    ?nooutline=${boolean('nooutline', false)}
    priority=${select('priority', priorities, 'secondary')}
    type=${select('type', types, 'button')}
    state=${select('state', states, '')}
    progress=${select('progress', progress, '')}
  >Button</amber-button>`);

  