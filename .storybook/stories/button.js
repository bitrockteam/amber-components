/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/polymer';
import { withNotes } from '@storybook/addon-notes';
import { html } from 'lit-html';
import markdown from './button.md';
import './../../src/components/button';

const priorities = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const types = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
};

const states = {
  success: 'success',
  error: 'error',
  default: ''
};

addDecorator(withNotes);
addDecorator(withKnobs);

storiesOf('Button', module)
  .add('Properties', () => html`<amber-button
    ?fitted=${boolean('fitted', false)}
    ?disabled=${boolean('disabled', false)}
    priority=${select('priority', priorities, 'secondary')}
    type=${select('type', types, 'button')}
    state=${select('state', states, '')}
  >Action here</amber-button>`, {
    notes: {
      markdown
    }});

  