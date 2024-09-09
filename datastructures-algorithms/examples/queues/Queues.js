import { Queue } from "../../src/js/data-structures/queue.js";

const queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue('João');
queue.enqueue('Maria');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());