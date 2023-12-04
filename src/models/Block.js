const SHA256 = require("crypto-js/sha256");

export class Block {
  constructor(timestamp, transacoes, hashAnterior = "") {
    this.timestamp = timestamp;
    this.transacoes = transacoes;
    this.hashAnterior = hashAnterior;
    this.hash = this.calcularHash();
  }

  calcularHash() {
    return SHA256(
      this.timestamp + JSON.stringify(this.transacoes) + this.hashAnterior
    ).toString();
  }
}