import { getRandomInt } from "../utils/random";
import { Entidade } from "./entidade";

export class Arqueiro extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    const dano = this.atributos.agilidade * 2;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} atacou com Tiro Preciso em ${alvo.nome}, causando ${dano} de dano!`);
    
    if (getRandomInt(100) < 20) {
      console.log(`${this.nome} teve um ataque extra!`);
      alvo.atributos.vida -= dano;
      console.log(`${this.nome} atacou com Tiro Preciso em ${alvo.nome}, causando ${dano} de dano!`);
    }
  }  
}