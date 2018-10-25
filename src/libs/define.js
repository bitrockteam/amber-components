
const fallback = tag => `bitrock-${tag}`;

const define = 
  (tag, definition) => customElements.get(tag) ?
    customElements.define(fallback(tag), definition) : 
    customElements.define(tag, definition); 

export {
  define
}