}
import { CSSResult, LitElement } from 'lit-element';
export declare class Button extends LitElement {
    priority: string;
    state: string;
    disabled: boolean;
    outline: boolean;
    fitted: boolean;
    progress: string;
    type: string;
    static styles: CSSResult;
    render(): import("lit-element").TemplateResult;
}
