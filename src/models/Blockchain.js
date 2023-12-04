import { Block } from "./Block";

export default class Blockchain {
  constructor() {
    this.chain = [this.criarBlocoGenesis()];
    this.estoque = new Map(); // Controle de estoque com Map
  }

  criarBlocoGenesis() {
    return new Block("01/01/2023", "Bloco Genesis", "0");
  }

  obterUltimoBloco() {
    return this.chain[this.chain.length - 1];
  }

  validarBlockchain() {
    for (let i = 1; i < this.chain.length; i++) {
      const blocoAtual = this.chain[i];
      const blocoAnterior = this.chain[i - 1];

      if (
        blocoAtual.hash !== blocoAtual.calcularHash() ||
        blocoAtual.hashAnterior !== blocoAnterior.hash
      ) {
        return false;
      }
    }
    return true;
  }
}
