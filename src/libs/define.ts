
const fallback = (tag :string) :string => `bitrock-${tag}`;

const define = 
  (tag: string, definition :Function) => customElements.get(tag) ?
    customElements.define(fallback(tag), definition) : 
    customElements.define(tag, definition); 

export {
  define
}