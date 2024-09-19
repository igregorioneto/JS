import { Entidade } from "../entities/entidade";
import { Item } from "./item";

export class Armadura extends Item {
  usarItem(alvo: Entidade): void {
    const valor = 12;
    alvo.atributos.defesa += valor;
  }  
}