import { CSSResult, TemplateResult, LitElement } from 'lit-element';
import './../button';
export declare class Banner extends LitElement {
    active: boolean;
    title: string;
    labels: string;
    state: string;
    static styles: CSSResult;
    show(): void;
    hide(): void;
    button(primary: boolean): void;
    render(): TemplateResult;
}
