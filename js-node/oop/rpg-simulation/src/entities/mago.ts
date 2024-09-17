import { Entidade } from "./entidade";

export class Mago extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    if (this.atributos.mana >= 10) {
      const dano = this.atributos.inteligencia * 4;
      alvo.atributos.vida -= dano;
      this.atributos.mana -= 10;
      console.log(`${this.nome} lançou uma bola de fogo em ${alvo.nome}, causando ${dano} de dano!`);
    } else {
      console.log(`${this.nome} está sem mana!`);
    }
  }
}