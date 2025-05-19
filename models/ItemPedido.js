
class ItemPedido {
    constructor(id, nome, quantidade, precoUnitario) {
      this.id = id;
      this.nome = nome;
      this.quantidade = quantidade;
      this.precoUnitario = precoUnitario;
      this.precoTotal = this.calcularPrecoTotal();
    }
  
    // Método para calcular o preço total do item (quantidade * preço unitário)
    calcularPrecoTotal() {
      return this.quantidade * this.precoUnitario;
    }
  
    // Método para atualizar a quantidade e recalcular o preço total
    atualizarQuantidade(novaQuantidade) {
      this.quantidade = novaQuantidade;
      this.precoTotal = this.calcularPrecoTotal();
    }
  
    // Método para renderizar o item em formato de string
    toString() {
      return `${this.nome} - Quantidade: ${this.quantidade}, Preço Unitário: R$${this.precoUnitario.toFixed(2)}, Preço Total: R$${this.precoTotal.toFixed(2)}`;
    }
  }
  
module.exports = ItemPedido;
  