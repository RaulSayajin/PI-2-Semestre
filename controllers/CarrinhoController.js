const Carrinho = require('../models/Carrinho');
const Produto = require('../models/Produto');

// Instância única de carrinho (simulando um usuário)
const carrinho = new Carrinho();

const adicionarProduto = (req, res) => {
  const { id, nome, preco, descricao, estoque } = req.body;
  const { quantidade } = req.body;

  if (!id || !nome || !preco || !quantidade) {
    return res.status(400).json({ mensagem: "Dados do produto ou quantidade estão incompletos." });
  }

  const produto = new Produto(id, nome, preco, descricao, estoque);
  carrinho.adicionarProduto(produto, quantidade);

  res.status(201).json({ mensagem: "Produto adicionado ao carrinho.", carrinho: carrinho.listarItens() });
};

const listarCarrinho = (req, res) => {
  res.json({ itens: carrinho.listarItens(), total: carrinho.calcularTotal() });
};

const removerProduto = (req, res) => {
  const { id } = req.params;
  carrinho.removerProduto(parseInt(id));
  res.json({ mensagem: "Produto removido do carrinho.", carrinho: carrinho.listarItens() });
};

const atualizarQuantidade = (req, res) => {
  const { id } = req.params;
  const { quantidade } = req.body;

  carrinho.atualizarQuantidade(parseInt(id), quantidade);
  res.json({ mensagem: "Quantidade atualizada.", carrinho: carrinho.listarItens() });
};

const limparCarrinho = (req, res) => {
  carrinho.limparCarrinho();
  res.json({ mensagem: "Carrinho esvaziado." });
};

module.exports = {
  adicionarProduto,
  listarCarrinho,
  removerProduto,
  atualizarQuantidade,
  limparCarrinho
};