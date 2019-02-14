import { configure, addDecorator } from '@storybook/polymer';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-actions';

addDecorator(
  withOptions({
    name: 'Amber Components',
    url: 'https://amber.bitrock.it',
    showStoriesPanel: process.env.NODE_ENV === 'development' ? true : false,
    addonPanelInRight: true,
  })
);

function loadStories() {
  require('./stories/banner.ts');
  require('./stories/button.ts');
  require('./stories/card.ts');
  require('./stories/code.ts');
  require('./stories/date.ts');
  require('./stories/modal.ts');
  require('./stories/progress.ts');
  require('./stories/tabs.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);
