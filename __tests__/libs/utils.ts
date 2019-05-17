import { 
  labels,
  decodeEntities,
  triggerEvent,
} from './../../src/libs/utils';

const title = (msg: string) => `LIBS/UTILS: ${msg}`;

test(title(`labels`), () => {
  const list: string = 'first,second';
  expect(labels(list, 0)).toBe('first');
  expect(labels(list, 1)).toBe('second');
});

test(title(`decodeEntities`), () => {
  expect(decodeEntities('&apos;')).toBe(`'`);
  expect(decodeEntities('&amp;')).toBe('&');
  expect(decodeEntities('&gt;')).toBe('>');
});

test(title(`triggerEvent - empty event`), () => {
  const event: string = 'mock-event-empty'; 
  
  const el: HTMLElement = document.createElement('div');
  el.id = 'mock-element';

  el.addEventListener(event, (evt: CustomEvent) => {
    expect(evt.type).toBe(event);
  });
  
  triggerEvent(el, event);
});

test(title(`triggerEvent - width detail`), () => {
  const event: string = 'mock-event-data';
  const detail: { value: number } = { value: 42 };

  const el: HTMLElement = document.createElement('div');
  el.id = 'mock-element';

  el.addEventListener(event, (evt: CustomEvent) => {
    expect(evt.detail.value).toBe(detail.value);
  });

  triggerEvent(el, event, detail);
});