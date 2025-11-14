/*// Array de Espécies
let especieArray = ["Humano", "Elfo", "Anão", "Halfling", "Gnomo", "Draconato", "Tiefling", "Goliath", "Aasimar", "Orc"];

// Array de Classes
let classeArray = ["Artífice", "Bárbaro", "Bardo", "Clérigo", "Druida", "Guerreiro", "Monge", "Paladino", "Patrulheiro", "Ladino", "Feiticeiro", "Bruxo", "Mago"];
// Array de Imagens de Classes


// Array de Origens
let origemArray = ["Acólito", "Artesão", "Charlatão", "Criminoso", "Artista", "Fazendeiro", "Guarda", "Guia", "Eremita", "Mercador", "Nobre", "Sábio", "Marinheiro", "Escriba", "Soldado", "Viajante"];

var especieAleatoria = especieArray[Math.floor(especieArray.length * Math.random())];
console.log(especieAleatoria);


var classeAleatoria = classeArray[Math.floor(classeArray.length * Math.random())];
console.log(classeAleatoria);


var origemAleatoria = origemArray[Math.floor(origemArray.length * Math.random())];
console.log(origemAleatoria);
*/
const IMAGENS_ESPECIE = {
    "Humano": "imagens/especie/humano.avif",
    "Elfo": "imagens/especie/elfo.avif",
    "Anão": "imagens/especie/anao.avif",
    "Halfling": "imagens/especie/halfling.jpg",
    "Gnomo": "imagens/especie/gnomo.avif",
    "Draconato": "imagens/especie/draconato.webp",
    "Tiefling": "imagens/especie/tiefling.avif",
    "Goliath": "imagens/especie/goliath.avif",
    "Aasimar": "imagens/especie/aasimar.avif",
    "Orc": "imagens/especie/orc.png"
};

const IMAGENS_CLASSE = {
    "Artífice": "imagens/classe/artifice.webp",
    "Bárbaro": "imagens/classe/barbaro.jpg",
    "Bardo": "imagens/classe/bardo.jpg",
    "Clérigo": "imagens/classe/clerigo.jpg",
    "Druida": "imagens/classe/druida.webp",
    "Guerreiro": "imagens/classe/guerreiro.jpg",
    "Monge": "imagens/classe/monge.webp",
    "Paladino": "imagens/classe/paladino.jpg",
    "Patrulheiro": "imagens/classe/patrulheiro.jpg",
    "Ladino": "imagens/classe/ladino.jpg",
    "Feiticeiro": "imagens/classe/feiticeiro.jpg",
    "Bruxo": "imagens/classe/bruxo.png",
    "Mago": "imagens/classe/mago.jpg"
};

const IMAGENS_ORIGEM = {
    "Acólito": "imagens/origem/acolito.png",
    "Artesão": "imagens/origem/artesao.png",
    "Charlatão": "imagens/origem/charlatao.png",
    "Criminoso": "url/para/imagem/criminoso.png",
    "Artista": "imagens/origem/artista.png",
    "Fazendeiro": "imagens/origem/fazendeiro.png",
    "Guarda": "imagens/origem/guarda.png",
    "Guia": "imagens/origem/guia.png",
    "Eremita": "imagens/origem/eremita.png",
    "Mercador": "imagens/origem/mercador.png",
    "Nobre": "imagens/origem/nobre.png",
    "Sábio": "imagens/origem/sabio.png",
    "Marinheiro": "imagens/origem/marinheiro.png",
    "Escriba": "imagens/origem/escriba.png",
    "Soldado": "imagens/origem/soldado.png",
    "Viajante": "imagens/origem/viajante.png"
};


let especieArray = Object.keys(IMAGENS_ESPECIE);
let classeArray = Object.keys(IMAGENS_CLASSE);
let origemArray = Object.keys(IMAGENS_ORIGEM);


function gerarItemAleatorio(array) {
    return array[Math.floor(array.length * Math.random())];
}

console.log(`Espécie: ${especieAleatoria} - Img: ${especieImg}`);
console.log(`Classe: ${classeAleatoria} - Img: ${classeImg}`);
console.log(`Origem: ${origemAleatoria} - Img: ${origemImg}`);


function exibirResultado() {

    var especieAleatoria = gerarItemAleatorio(especieArray);
    var classeAleatoria = gerarItemAleatorio(classeArray);
    var origemAleatoria = gerarItemAleatorio(origemArray);


    var especieImg = IMAGENS_ESPECIE[especieAleatoria];
    var classeImg = IMAGENS_CLASSE[classeAleatoria];
    var origemImg = IMAGENS_ORIGEM[origemAleatoria];

    document.getElementById('card-especie-nome').textContent = especieAleatoria;
    document.getElementById('card-especie-img').src = especieImg;
    
    document.getElementById('card-classe-nome').textContent = classeAleatoria;
    document.getElementById('card-classe-img').src = classeImg;

    document.getElementById('card-origem-nome').textContent = origemAleatoria;
    document.getElementById('card-origem-img').src = origemImg;
}



function flipCard(card) {
    card.classList.toggle('flipped')
}