const carrinho = [];

// Função para adicionar produto
function adicionarProduto(nome, quantidade, preco) {
  // Implementar
  return carrinho.push({ nome, quantidade, preco })
}

// Função para remover produto pelo nome
function removerProduto(nome) {
  // Implementar
  const index = carrinho.findIndex(p => p.nome === nome);
  carrinho.splice(index, 1);
}

// Função para atualizar a quantidade de um produto específico
function atualizarQuantidade(nome, quantidade) {
  // Implementar
  const prod = procurarProduto(nome);  
  prod.quantidade = quantidade;
  return prod;
}

// Função para calcular o valor total do carrinho
function calcularTotal() {
  // Implementar
  return carrinho.reduce((previous, prod) => (prod.quantidade * prod.preco) + previous, 0)
}

// Função para listar todos os produtos no carrinho
function listarProdutos() {
  // Implementar
  carrinho.forEach(p => console.log(`${p.nome} - ${p.quantidade} - R$ ${p.preco}`))
}

// Função para verificar se um produto está no carrinho
function procurarProduto(nome) {
  // Implementar
  return carrinho.find(p => p.nome === nome);
}

// Função para criar uma nova lista de produtos contendo uma parte do carrinho original
function extrairSubcarrinho(inicio, fim) {
  // Implementar
  return carrinho.slice(inicio, fim);
}

// Exemplos de uso
adicionarProduto("Arroz", 2, 5.00);
adicionarProduto("Feijão", 1, 4.50);
adicionarProduto("Macarrão", 3, 3.75);

console.log("Produtos no carrinho:");
listarProdutos();

console.log("Total do carrinho:");
console.log(calcularTotal());

console.log("Atualizando quantidade:");
atualizarQuantidade("Arroz", 5);
listarProdutos();

console.log("Removendo produto:");
removerProduto("Feijão");
listarProdutos();

console.log("Procurando produto:");
console.log(procurarProduto("Macarrão")); // true
console.log(procurarProduto("Feijão")); // false

console.log("Subcarrinho:");
console.log(extrairSubcarrinho(0, 1));
