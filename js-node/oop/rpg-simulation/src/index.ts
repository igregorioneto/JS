import { Combate } from "./combat/combate";
import { Guerreiro } from "./entities/guerreiro";
import { Mago } from "./entities/mago";
import { Monstro } from "./entities/monstro";

(() => {
  const guerreiro = new Guerreiro("Aragorn", { forca: 10, agilidade: 7, inteligencia: 3, vida: 50, mana: 10 });
  const mago = new Mago("Gandalf", { forca: 3, agilidade: 5, inteligencia: 10, vida: 30, mana: 20 });
  const orc = new Monstro("Orc", { forca: 8, agilidade: 4, inteligencia: 2, vida: 40, mana: 0 });

  const combate = new Combate();
  combate.iniciar(guerreiro, orc);
})();