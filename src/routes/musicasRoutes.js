/* 
1. importar o express
2. criar route atribuindo o express.Router()
3. importar o controller
4. criar rota que traz todos os itens
5. adicionar as rotas de acordo com o contrato
6. exportar o router
*/ 

const express = require('express'); 
const router = express.Router();
const controller = require('../controller/musicasController');

router.get('/musicas', controller.getAllMusics);
router.get('/musica/:id', controller.getByID);

router.get('/artistas', controller.getAllArtists);
router.get('/artistas/:nome', controller.getArtistByName);// não tá pegando

router.get('/musicas/single', controller.getMusicSingle)

router.get('/albuns', controller.getAllAlbuns);
router.get('albuns/:titulo', controller.getAlbumByTitle); // não tá pegando


module.exports = router 
