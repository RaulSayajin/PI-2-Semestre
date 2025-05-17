class Produto{
    constructor(id, nome, preco, descricao, estoque){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.estoque = estoque;

    }

    aplicarDesconto(percentual){
        if (precentual > 0 && percentual <= 100){
            this.preco -=(this.preco * percentual / 100);
        }
    }
}

module.exports = Produto;