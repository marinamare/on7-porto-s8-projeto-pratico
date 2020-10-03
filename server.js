/*
1. importar app
2. declarar a variável 'port' e atribuir o valor
3. "escutar" o app mostrando no console qual caminho está usando
*/

const app = require('./src/app');
const port = 8090; 

app.listen(port, () => {
    console.log(`App está rodando em http://localhost:${port}`)
})

