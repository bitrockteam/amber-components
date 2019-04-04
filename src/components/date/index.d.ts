import { CSSResult, LitElement } from 'lit-element';
export declare class Date extends LitElement {
    inline: boolean;
    disabled: boolean;
    time: boolean;
    mode: string;
    value: string;
    config: {};
    flatpickr: any;
    static styles: CSSResult;
    connectedCallback(): void;
    open(): void;
    close(): void;
    render(): import("lit-element").TemplateResult;
}
