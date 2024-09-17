interface Atributos {
  forca: number;
  agilidade: number;
  inteligencia: number;
  vida: number;
  mana: number;
}

abstract class Entidade {
  nome: string;
  atributos: Atributos;

  constructor(nome: string, atributos: Atributos) {
    this.nome = nome;
    this.atributos = atributos;
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

class Guerreiro extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    const dano = this.atributos.forca * 3;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} usou Golpe Poderoso em ${alvo.nome}, causando ${dano} de dano!`);
  }
}

class Mago extends Entidade {
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

class Monstro extends Entidade {
  usarHabilidade(alvo: Entidade): void {
    const dano = this.atributos.forca * 2;
    alvo.atributos.vida -= dano;
    console.log(`${this.nome} usou Mordida em ${alvo.nome}, causando ${dano} de dano!`);
  }
}

class Combate {
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

(() => {
  const guerreiro = new Guerreiro("Aragorn", { forca: 10, agilidade: 7, inteligencia: 3, vida: 50, mana: 10 });
  const mago = new Mago("Gandalf", { forca: 3, agilidade: 5, inteligencia: 10, vida: 30, mana: 20 });
  const orc = new Monstro("Orc", { forca: 8, agilidade: 4, inteligencia: 2, vida: 40, mana: 0 });

  const combate = new Combate();
  combate.iniciar(guerreiro, orc);
})();