const express = require ('express');
const bodyparser = require('body-parser');
const routes = require('./routes')
const carrinhoRoutes = require('./routes/carrinhoRoutes');


const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // <-- Habilita EJS
app.set('views', './views');   // <-- Define pasta de views

app.use(bodyparser.json());

app.use('/', routes);
app.use('/carrinho', carrinhoRoutes);

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})
