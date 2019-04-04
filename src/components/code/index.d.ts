import { CSSResult, TemplateResult, LitElement } from 'lit-element';
export declare class CodeSnippet extends LitElement {
    clipboard: boolean;
    label: string;
    static styles: CSSResult;
    _copy(evt: Event): void;
    render(): TemplateResult;
}
