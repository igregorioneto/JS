export class Deque {
  constructor() {
    this.count = 0;
    this.lewestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lewestCount > 0) {
      this.lewestCount--;
      this.items[this.lewestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];        
      }
      this.count++;
      this.lewestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty())
      return undefined;
    const result = this.items[this.lewestCount];
    delete this.items[this.lewestCount];
    this.lewestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty())
      return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty())
      return undefined;
    return this.items[this.lewestCount];
  }

  peekBack() {
    if (this.isEmpty())
      return undefined;
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === this.lewestCount;
  }

  size() {
    return this.count - this.lewestCount;
  }

  toString() {
    if (this.isEmpty())
      return '';
    let objString = `${this.items[this.lewestCount]}`;
    for (let i = this.lewestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;    
    }
    return objString;
  }
}