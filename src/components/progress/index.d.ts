import { CSSResult, TemplateResult, LitElement } from 'lit-element';
export declare class Progress extends LitElement {
    size: number;
    stroke: number;
    value: number;
    determinate: boolean;
    static styles: CSSResult;
    render(): TemplateResult;
}
