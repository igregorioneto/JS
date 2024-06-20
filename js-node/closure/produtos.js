class Produto {
    constructor(id, nome, quantidade) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
    }
}

class Estoque {
    constructor() {
        let produtos = [];

        this.adicionarProduto = function(produto) {
            produtos.push(produto);
        };

        this.listarProdutos = function() {
            return produtos;
        }

        this.atualizarQuantidadeProduto = function(id, novaQuantidade) {
            const produto = produtos.find(p => p.id === id);
            produto.quantidade = novaQuantidade;
        }

        this.removerProduto = function(id) {
            const index = produtos.findIndex(p => p.id === id);
            produtos.splice(index, 1);
        }
    }
}

; (() => {
    const estoque = new Estoque();

    estoque.adicionarProduto(new Produto(1, 'Caneta', 50));
    estoque.adicionarProduto(new Produto(2, 'Caderno', 30));
    estoque.adicionarProduto(new Produto(3, 'Borracha', 100));

    console.log(estoque.listarProdutos());

    estoque.atualizarQuantidadeProduto(2, 40);
    console.log(estoque.listarProdutos());

    estoque.removerProduto(1);
    console.log(estoque.listarProdutos());

})();