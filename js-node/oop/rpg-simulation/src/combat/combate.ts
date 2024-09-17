import { Entidade } from "../entities/entidade";
import { Monstro } from "../entities/monstro";

export class Combate {
  turnoAtual: number = 1;

  iniciar(personagem: Entidade, monstro: Monstro) {
    console.log('Combate iniciado!');

    while (personagem.estaVivo() && monstro.estaVivo()) {
      console.log(`--- Turno ${this.turnoAtual} ---`);
      personagem.atacar(monstro);
      if (monstro.estaVivo()) {
        monstro.atacar(personagem);
      }
      this.turnoAtual++;
    }

    if (personagem.estaVivo()) {
      console.log(`${personagem.nome} venceu!`);
    } else {
      console.log(`${monstro.nome} venceu!`);
    }
  }
}