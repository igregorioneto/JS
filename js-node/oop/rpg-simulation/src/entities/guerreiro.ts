import { Entidade } from "./entidade";

export class Guerreiro extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    const dano = this.atributos.forca * 3;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} usou Golpe Poderoso em ${alvo.nome}, causando ${dano} de dano!`);
  }
}
