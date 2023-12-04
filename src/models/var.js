



// Exemplo de uso do blockchain para vendas em uma farmácia
const blockchainVendas = new Blockchain();

blockchainVendas.estoque.set();
// Adicionar transações de vendas
blockchainVendas.adicionarTransacao("Paracetamol", 50, 2.5);
blockchainVendas.adicionarTransacao("Amoxicilina", 30, 5.0);
blockchainVendas.adicionarTransacao("Paracetamol", 20, 2.5);

// Verificar o estoque de um produto específico
console.log(
  "Estoque de Paracetamol:",
  blockchainVendas.verificarEstoque("Paracetamol")
);
console.log(
  "Estoque de Dipirona:",
  blockchainVendas.verificarEstoque("Dipirona")
);

// Verificar a validade do blockchain
console.log("Blockchain válido?", blockchainVendas.validarBlockchain());
