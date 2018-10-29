

import { define } from './define';

function customElement(name :string) {
  return function(targetClass: any) {
    define(name, targetClass);
    return targetClass;
  }
}

export {
  customElement
}