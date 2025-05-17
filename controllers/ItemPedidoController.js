const ItemPedido = require('../models/ItemPedido'); // Importando a classe ItemPedido

// Array para armazenar os itens de pedidos (em uma aplicação real, você usaria um banco de dados)
let itensPedido = [];

// Função para adicionar um item ao pedido
const adicionarItem = (req, res) => {
  const { id, nome, quantidade, precoUnitario } = req.body;

  if (!id || !nome || !quantidade || !precoUnitario) {
    return res.status(400).json({ error: 'Dados incompletos para adicionar o item.' });
  }

  const novoItem = new ItemPedido(id, nome, quantidade, precoUnitario);
  itensPedido.push(novoItem);

  res.status(201).json(novoItem);
};

// Função para atualizar a quantidade de um item
const atualizarQuantidade = (req, res) => {
  const { id } = req.params;
  const { quantidade } = req.body;

  const item = itensPedido.find(item => item.id == id);

  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  item.atualizarQuantidade(quantidade);
  res.status(200).json(item);
};

// Função para listar todos os itens do pedido
const listarItens = (req, res) => {
  res.status(200).json(itensPedido);
};

module.exports = { adicionarItem, atualizarQuantidade, listarItens };