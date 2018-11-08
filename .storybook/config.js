import { configure, addDecorator } from '@storybook/polymer';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-actions';

addDecorator(
  withOptions({
    name: 'Amber Components',
    url: 'https://amber.bitrock.it'
  })
);

function loadStories() {
  require('./stories/button.ts');
  require('./stories/tabs.ts');
  require('./stories/card.ts');
  require('./stories/code.ts');
  require('./stories/progress.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);
