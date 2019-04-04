import { LitElement } from 'lit-element';
import { customElement } from './decorators';
declare class AmberElement extends LitElement {
    triggerEvent(name: string, detail?: object): boolean;
}
export { AmberElement, customElement, };
