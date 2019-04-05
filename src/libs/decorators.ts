

import { define } from './utils';

function customElement(name :string) {
  return function(targetClass: any) {
    define(name, targetClass);
    return targetClass;
  }
}

export {
  customElement
};