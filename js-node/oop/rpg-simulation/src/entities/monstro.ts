import { Entidade } from "./entidade";

export class Monstro extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    const dano = this.atributos.forca * 2;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} usou Mordida em ${alvo.nome}, causando ${dano} de dano!`);
  }
}