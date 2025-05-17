class Usuario {
    constructor(Id, nome, email,senha, dataNascimento, endereco){
        this.id = id;
        this.nome = nome;
        this.emai = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.pedidos = [];
        }

    cadastrar(){
        // salvar no banco
    }

    login(email,senha){
        return this.email === email && this.senha === senha;
    }

    alterarDados(novosDados){
        Object.assign(this, novosDados);
    }

    excluirConta(){
        //excluir conta
    }
    visualizarHistorico(){
        return this.pedidos;
    }
}

module.exports = Usuario;