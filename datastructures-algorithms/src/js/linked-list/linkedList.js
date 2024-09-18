import { defaultEquals } from "./defaultEquals.js";
import { Node } from "./linked-list-models.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // Adiciona no final da lista
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // Adiciona um elemento em uma posição específica
  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      if (position === 0) {
        let current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(position);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count;
      return true;
    }
    return false;
  }

  // Retorna o elemento em uma posição específica
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  // Remove um elemento da lista
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Devolve o index de um elemento da lista
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // Remove um item em uma posição específica
  removeAt(position) {
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position == 0) {
        this.head = current.next;
      } else {
        let previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // Verifica se a lista esta vazia
  isEmpty() {
    return this.size() === 0;
  }

  // Devolve o tamanho da lista
  size() {
    return this.count;
  }

  // Devolve o primeiro elemento da lista
  getHead() {
    return this.head;
  }

  // Retorna a lista em forma de string
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current.next != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}