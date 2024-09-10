import { hotPotato } from "./hotPotato.js";

const names = ['João', 'Jack', 'Camila', 'Ingrid', 'Carlos'];
const { eliminated, winner } = hotPotato(names, 70);
eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato Game`);
});
console.log(`The winner is: ${winner}`);