const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/CarrinhoController');

router.post('/adicionar', carrinhoController.adicionarProduto);
router.get('/', carrinhoController.listarCarrinho);
router.delete('/remover/:id', carrinhoController.removerProduto);
router.put('/atualizar/:id', carrinhoController.atualizarQuantidade);
router.delete('/limpar', carrinhoController.limparCarrinho);

module.exports = router;