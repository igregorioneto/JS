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

  }

  // Retorna o elemento em uma posição específica
  getElementAt(index) {

  }

  // Remove um elemento da lista
  remove(element) {

  }

  // Devolve o index de um elemento da lista
  indexOf(element) {

  }

  // Remove um item em uma posição específica
  removeAt(position) {

  }

  // Verifica se a lista esta vazia
  isEmpty() {

  }

  // Devolve o tamanho da lista
  size() {

  }

  // Retorna a lista em forma de string
  toString() {
    
  }
}