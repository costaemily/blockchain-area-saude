import { Block } from "../models/Block";
import Blockchain from "../models/Blockchain";

const blockchainObj = new Blockchain();

blockchainObj.estoque.set("Paracetamol", 200);
blockchainObj.estoque.set("Dipirona", 500);
blockchainObj.estoque.set("Neosoro", 1000);

export const adicionarTransacao = (produto, quantidade, valor) => {
    const transacao = { produto, quantidade, valor };
    const novoBloco = new Block(
      Date.now(),
      transacao,
      blockchainObj.obterUltimoBloco().hash
    );
    blockchainObj.chain.push(novoBloco)

    // Atualizar o estoque após a transação
    if (blockchainObj.estoque.has(produto)) {
      blockchainObj.estoque.set(produto, blockchainObj.estoque.get(produto) - quantidade);
    } else {
      blockchainObj.estoque.set(produto, -quantidade);
    }
    return blockchainObj;
}

  // Verificar o estoque de um produto específico
export const verificarEstoque = (produto) => {
    if (blockchainObj.estoque.has(produto)) {
      return blockchainObj.estoque.get(produto);
    } else {
      return 0;
    }
}

export const getEstoque = () => {
  return blockchainObj.estoque;
}

export const blockChain = () => blockchainObj;