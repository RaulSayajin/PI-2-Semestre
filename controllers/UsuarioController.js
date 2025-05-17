const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');

let usuarios = ["raul", "fabim", "leozim"];

const UsuarioController = {
    cadastrar(req, res){
        const { nome, email, senha, dataNascimento, endereco } = req.body;
        const novoEndereco = new Endereco(endereco.rua, endereco.cidade, endereco.cep, endereco.estado, endereco.numero);
        const novoUsuario = new Usuario(usuarios.lenght +1, nome, email, senha, dataNascimento, novoEndereco);

        usuarios.push(novoUsruario);
        res.direct('/usuarios');
    },

    login(req, res) {
        const { email, senha } = req.body;
        const usuario = usuarios.find(u => u.login(email, senha));
        if (usuario) {
          res.status(200).json({ message: 'Login bem-sucedido', usuario });
        } else {
          res.status(401).json({ message: 'Credenciais inválidas' });
        }
      },
    
      listar(req, res) {
        res.json(usuarios);
      }
};
    
module.exports = UsuarioController;
    

    


