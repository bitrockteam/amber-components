declare const define: (tag: string, definition: Function) => void;
declare const labels: (list: string, position: number) => string;
declare const triggerEvent: (element: HTMLElement, name: string, detail?: object) => boolean;
export { labels, triggerEvent, define };
