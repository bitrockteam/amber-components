export interface ElementData extends EventTarget {
  dataset: {
    index: string
  }
}

export interface UpdateEvent extends Event {
  target: ElementData
}