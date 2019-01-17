/* global document */
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';
import markdown from './../docs/date.md';
import '../../src/components/date';

addDecorator(withNotes);
addDecorator(withKnobs);

const title = html`
  <h3>&lt;amber-date&gt;</h3>
  <p>A simple widget that wraps the excellet 
    <a target="_blank" href="https://github.com/flatpickr/flatpickr">
      Flatpickr</a> datepicker.</p>
`;

storiesOf('Date Picker', module)
  .add('Playground', (): TemplateResult => html`
  ${title}
  <label>Default</label>
  <amber-date
    value="1982-11-21"
    ?disabled=${boolean('disabled', false)}
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Inline', (): TemplateResult => html`
  ${title}
  <label>Inline calendar</label>
  <amber-date
    inline
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Modes', (): TemplateResult => html`
  ${title}
  <label>Single (default)</label>
  <amber-date
    @change=${action('change')}
  >
  </amber-date>
  <br>
  <label>Multi selection</label>
  <amber-date
    mode="multiple"
    @change=${action('change')}
  >
  </amber-date>
  <br>
  <label>Range</label>
  <amber-date
    mode="range"
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Time', (): TemplateResult => html`
  ${title}
  <label>With time picker</label>
  <amber-date
    @change=${action('change')}
    time
  >
  </amber-date>`, { notes: { markdown } });