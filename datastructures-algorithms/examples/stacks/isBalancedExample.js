import { isBalanced } from "./isBalanced.js";

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{[}"));    // false