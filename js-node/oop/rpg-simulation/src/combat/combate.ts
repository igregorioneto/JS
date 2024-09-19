import { Arqueiro } from "../entities/arqueiro";
import { Entidade } from "../entities/entidade";
import { Monstro } from "../entities/monstro";

export class Combate {
  turnoAtual: number = 1;

  iniciar(personagem: Entidade, monstro: Monstro) {
    console.log('Combate iniciado!');

    while (personagem.estaVivo() && monstro.estaVivo()) {
      console.log(`--- Turno ${this.turnoAtual} ---`);

      const usarItem = this.decidirAcao(personagem);

      if (usarItem && personagem.items.length > 0) {
        const item = personagem.items[0];
        item.usarItem(personagem);
        personagem.items.shift();
        console.log(`${personagem.nome} usou o item ${item.nome}.`);
      } else {
        if (personagem instanceof Arqueiro) {
          (personagem as Arqueiro).usarHabilidade(monstro);
        } else {
          personagem.atacar(monstro);  
        }
      }
          
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

  decidirAcao(personagem: Entidade): boolean {
    if (personagem.atributos.vida < 20 && personagem.items.length > 0) {
      return true;
    }
    return false;
  }
}