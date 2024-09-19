import { Entidade } from "../entities/entidade";
import { Item } from "./item";

export class Porcao extends Item {
  usarItem(alvo: Entidade): void {
    const valor = 10;
    alvo.atributos.vida += valor;
    console.log(`${alvo.nome} aumentou ${valor} de vida!`);
  }  
}