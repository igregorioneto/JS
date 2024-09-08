class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; // Manter o controle do primeiro elemento da fila
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {

  }

  peek() {

  }

  isEmpty() {

  }

  size() {

  }
}