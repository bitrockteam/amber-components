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

storiesOf('Date', module)
  .add('Playground', (): TemplateResult => html`
  <h2>Default</h2>
  <amber-date
    value="1982-11-21"
    ?disabled=${boolean('disabled', false)}
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Inline', (): TemplateResult => html`
  <h2>Inline calendar</h2>
  <amber-date
    inline
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Modes', (): TemplateResult => html`
  <h2>Single (default)</h2>
  <amber-date
    @change=${action('change')}
  >
  </amber-date>
  <br>
  <h2>Multi selection</h2>
  <amber-date
    mode="multiple"
    @change=${action('change')}
  >
  </amber-date>
  <br>
  <h2>Range</h2>
  <amber-date
    mode="range"
    @change=${action('change')}
  >
  </amber-date>`, { notes: { markdown } })

  .add('Time', (): TemplateResult => html`
  <h2>With time picker</h2>
  <amber-date
    @change=${action('change')}
    time
  >
  </amber-date>`, { notes: { markdown } });