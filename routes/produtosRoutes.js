const express = require('express');
const controller = require('../controllers/produtoController');
const router = express.Router();

router.get('/', controller.list);
router.post('/adicionar', controller.create);
router.delete('/remover/:id', controller.delete);
router.put('/atualizar/:id', controller.update);
router.delete('/limpar', controller.clear);

module.exports = router;