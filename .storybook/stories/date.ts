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
  .add('Playground', (): TemplateResult => html`<amber-date
    ?disabled=${boolean('disabled', false)}
    @change=${action('change')}
></amber-date>`, { notes: { markdown } })
  .add('Inine', (): TemplateResult => html`<amber-date
  inline
  @change=${action('change')}
></amber-date>`, { notes: { markdown } })
  .add('Modes', (): TemplateResult => html`
  <h3>Single (default)</h3>
  <amber-date @change=${action('change')}></amber-date>
  <h3>Multi selection</h3>
  <amber-date mode="multiple" @change=${action('change')}></amber-date>
  <h3>Range</h3>
  <amber-date mode="range" @change=${action('change')}></amber-date>
  `, { notes: { markdown } });