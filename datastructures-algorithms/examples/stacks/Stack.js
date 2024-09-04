import Stack from "../../src/js/data-structures/stack.js";

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack.items);
console.log(stack.toString());
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);