/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { html, TemplateResult } from 'lit-html';
import markdown from './button.md';
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
  default: ''
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Button', module)
  .add('Playground', (): TemplateResult => html`<amber-button
    ?fitted=${boolean('fitted', false)}
    ?disabled=${boolean('disabled', false)}
    priority=${select('priority', priorities, 'secondary')}
    type=${select('type', types, 'button')}
    state=${select('state', states, '')}
  >Action here</amber-button>`, {
    notes: {
      markdown
    }});

  