interface ElementData extends EventTarget {
  dataset: {
    index: string
  }
}

interface UpdateEvent extends Event {
  target: ElementData
}