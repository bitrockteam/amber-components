
const fallback = (tag: string): string => `bitrock-${tag}`;

const define =
  (tag: string, definition: Function) :void => 
    customElements.get(tag) ?
      customElements.define(fallback(tag), definition) :
      customElements.define(tag, definition); 

const labels = (list: string, position: number): string =>
  list.split(',')[position];

const triggerEvent = (
  element :HTMLElement,
  name: string,
  detail?: object ) => {
    const event: CustomEvent = new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    });
    return element.dispatchEvent(event);
  }

export {
  labels,
  triggerEvent,
  define
}