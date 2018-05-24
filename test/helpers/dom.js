import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`);

const { window } = dom;
const { document } = dom.window;

export { JSDOM, dom, window, document };