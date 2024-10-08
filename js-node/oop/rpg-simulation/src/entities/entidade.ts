import { Item } from "../items/item";
import { Atributos } from "./atributos.interface";

export abstract class Entidade {
  nome: string;
  atributos: Atributos;
  items: Item[];

  constructor(nome: string, atributos: Atributos) {
    this.nome = nome;
    this.atributos = atributos;
    this.items = [];
  }

  atacar(alvo: Entidade): void {
    const dano = this.atributos.forca * 2;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} atacou o ${alvo.nome}, causando ${dano} de dano!`);
  }

  estaVivo(): boolean {
    return this.atributos.vida > 0;
  }

  abstract usarHabilidade(alvo: Entidade): void;
}