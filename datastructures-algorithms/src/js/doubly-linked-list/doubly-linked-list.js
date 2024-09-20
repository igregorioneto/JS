import { defaultEquals } from "../linked-list/defaultEquals";
import LinkedList from "../linked-list/linkedList";

export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
}