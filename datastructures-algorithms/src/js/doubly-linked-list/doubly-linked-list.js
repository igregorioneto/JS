import { defaultEquals } from "../linked-list/defaultEquals";
import LinkedList from "../linked-list/linkedList";
import { DoublyNode } from "./doubly-node";

export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (position === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (position === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
}