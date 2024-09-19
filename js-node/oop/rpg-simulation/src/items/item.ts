import { Entidade } from "../entities/entidade";

export abstract class Item {
  nome: string;
  tipo: string;

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  abstract usarItem(alvo: Entidade): void;
}