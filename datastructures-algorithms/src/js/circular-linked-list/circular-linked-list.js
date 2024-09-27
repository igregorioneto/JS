import { defaultEquals } from "../linked-list/defaultEquals";
import LinkedList from "../linked-list/linkedList";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (position === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(position - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(position) {
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position == 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}