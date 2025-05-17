const express = require('express');
const router = express.Router();


const UsuarioController= require('../controllers/UsuarioController')
const controllersIndex= require('../controllers/indexControllers')

router.get('/', (req, res) => res.render('home'));
router.get('/', controllersIndex.index);
router.post('/usuarios', UsuarioController.cadastrar);
router.post('/login', UsuarioController.login)
router.get('/usuarios', UsuarioController.listar);

module.exports = router;