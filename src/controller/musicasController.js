/* passo-a-passo 
1: importar o json que será utilizado
2: criar o método para buscar todas as músicas
3: exportar o método

*/ 
//1.Importando o json de musicas para uma constante
const musicas = require('../model/musicas.json');

//2. criando um método para buscar todas as músicas
const getAllMusics = (req,res) => {
/* verifica se a resposta tem status 2-- (sucesso) e envia o JSON */ 
    res.status(200).send(musicas);
};

/*
criar método getByID
retornar o item daquele ID
*/

const getByID = (req,res) => {
    const id = req.params.id
    // método find retorna o primeiro resultado que passar na condição
    // método filter retorna um array de resultados
    // como ID é um identificador único, é mais indicado utilizar FIND
    const musicaFiltrada = musicas.find((musicas) => {
        return musicas.id == id
    })
    res.status(200).send(musicaFiltrada)
}


const getAllArtists = (req, res) => {
    const artists = musicas.map((musica) => musica.artista);
    res.status(200).send(artists);
}

// não consegui que aparecesse por artista inividualmente... 
const getArtistByName = (req, res) => {
    const artista = req.params.nome
    const musicasFiltradasPorArtista = musicas.find ((musica) => musica.artista == artista)

    res.status(200).send(musicasFiltradasPorArtista);
}

const getAllAlbuns = (req, res) => {
    const albuns = musicas.map((musica) => musica.album)

    res.status(200).send(albuns)
}

const getAlbumByTitle = (req, res) => {
    const album = req.params.titulo
    const musicasFiltradasPorAlbum = musicas.filter((musica) => musica.album == album)

    res.status(200).send(musicasFiltradasPorAlbum);
}


const getMusicSingle = (req, res) => {
    const musicasFiltradasPorSingle = musicas.filter(
        (musica) => musica.single === true)

    const artistasSingle = musicasFiltradasPorSingle.map((musica) => (
        {
            "artista": musica.artista,
            "titulo": musica.titulo
        }
    ))
    res.status(200).send(artistasSingle)
}

module.exports = { getAllMusics, getByID, getAllAlbuns, getAlbumByTitle, getAllArtists, 
getMusicSingle, getArtistByName }