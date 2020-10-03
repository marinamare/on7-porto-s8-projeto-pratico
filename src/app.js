/*
1. importar o express
2. declarar a variável app atribuindo o método express;
3. importar a rota
4. usar a rota
5. exportar o app
*/

const express = require('express');
const app = express();

const musicas = require('./routes/musicasRoutes');

app.use(express.static('public'))
//pedindo pra o servidor usar o public como servidor static


app.use('/', musicas);

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', {root:__dirname})
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app;