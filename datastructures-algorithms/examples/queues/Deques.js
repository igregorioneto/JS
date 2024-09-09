import { Deque } from "../../src/js/data-structures/deque.js";

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('João');
deque.addBack('Maria');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('João');
console.log(deque.toString());