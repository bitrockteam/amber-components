// const { labels } = require('./../../src/libs/utils');
import { labels, setStyles } from './../../src/libs/utils';

const title = (msg: string) => `LIBS/UTILS: ${msg}`;

test(title(`labels`), () => {
  const list = 'first,second';
  expect(labels(list, 0)).toBe('first');
  expect(labels(list, 1)).toBe('second');
});

// test(title(`setStyles`), () => {
//   const styles = `p { color: red }`;
//   const css = setStyles(styles);
//   expect(css).toBe('<style>p { color: red }</style');
// });