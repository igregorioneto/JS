import { defaultEquals } from "./defaultEquals.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // Adiciona no final da lista
  push(element) {

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