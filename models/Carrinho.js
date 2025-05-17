class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarProdutos(produto, quantidade = 1) {
        const itemExistente = this.itens.find(item => item.produto.id === produto.id);

        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            this.itens.push({ produto, quantidade });
        }
    }

    removerProduto(produtoId) {
        this.itens = this.itens.filter(item => item.produto.id !== produtoId);
    }

    atualizarQuantidade(produtoId, novaQuantidade) {
        const item = this.itens.find(item => item.produto.id === produtoId);
        if (item) {
            item.quantidade = novaQuantidade;
        }
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + item.produto.preco * item.quantidade;
        }, 0);
    }

    listarItens() {
        return this.itens.map(item => ({
            id: item.produto.id,
            nome: item.produto.nome,
            preco: item.produto.preco,
            quantidade: item.quantidade,
            subtotal: item.produto.preco * item.quantidade
        }));
    }

    limparCarrinho() {
        this.itens = [];
    }
}

module.exports = Carrinho;



