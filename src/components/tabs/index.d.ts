import { CSSResult, TemplateResult, LitElement } from 'lit-element';
import { UpdateEvent } from './../../types/events';
export declare class Tabs extends LitElement {
    labels: string;
    active: number;
    fitted: boolean;
    static styles: CSSResult;
    _showTab(index: number): void;
    _setActive(evt: UpdateEvent): void;
    render(): TemplateResult;
}
