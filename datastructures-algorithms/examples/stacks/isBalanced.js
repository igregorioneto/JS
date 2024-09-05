import Stack from "../../src/js/data-structures/stack.js";

export function isBalanced(expression) {
  // {[()]}
  const stack = new Stack();
  let i = 0;
  let balanced = true;
  while (i < expression.length && balanced) {
    const element = expression[i];
    i++;

    if (element === '{' || element === '(' || element === '[') {
      stack.push(element);
    } else if (element === '}' || element === ')' || element === ']') {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        const value = stack.pop();
        if (!(
          value === '{' && element === '}' ||
          value === '(' && element === ')' ||
          value === '[' && element === ']'
        )) {
          balanced = false;
        }
      }
    }
  }
  return balanced;
}