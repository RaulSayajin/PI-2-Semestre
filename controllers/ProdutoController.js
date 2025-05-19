const Produto = require('../models/Produto');
const db = require('../db/conection');

const produtos = [];

const controller = {}

// Criar produto
controller.create = async (req, res) => {
  try {
    const { nome, preco, descricao } = req.body;
    const [result] = await db.query(
      'INSERT INTO tblcores (nome, preco, descricao) VALUES (?, ?, ?)',
      [nome, preco, descricao]
    );
    res.status(201).json({ id: result.insertId, nome, preco, descricao });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Atualizar produto pelo id
controller.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, preco, descricao } = req.body;
    const [result] = await db.query(
      'UPDATE tblcores SET nome = ?, preco = ?, descricao = ? WHERE id = ?',
      [nome, preco, descricao, id]
    );
    if (result.affectedRows === 0) return res.status(404).end();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Deletar produto pelo id
controller.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await db.query('DELETE FROM tblcores WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).end();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Listar todos os produtos
controller.list = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tblcores');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Limpar todos os produtos
controller.clear = async (req, res) => {
  try {
    await db.query('DELETE FROM tblcores');
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

module.exports = controller;
