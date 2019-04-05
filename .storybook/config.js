import { create } from '@storybook/theming';
import { configure, addParameters } from '@storybook/polymer';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Amber Components',
      brandUrl: 'https://amber.bitrock.it',
      // To control appearance:
      brandImage: 'https://github.com/bitrockteam/amber-website/raw/master/logo/logo-horizontal.svg?sanitize=true',
    }),
    isFullscreen: false,
    panelPosition: 'right',
    isToolshown: true,
    showNav: process.env.NODE_ENV === 'development' ? true : false
  },
});

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
