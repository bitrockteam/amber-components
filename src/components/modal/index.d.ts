import { CSSResult, TemplateResult, LitElement } from 'lit-element';
export declare class Modal extends LitElement {
    open: boolean;
    nosubmit: boolean;
    labels: string;
    state: string;
    title: string;
    static styles: CSSResult;
    _dialog(): HTMLDialogElement;
    close(closedBy?: string): void;
    showModal(): void;
    button(primary: boolean): void;
    render(): TemplateResult;
}
