const IMAGENS_ESPECIE = {
    "Humano": "imagens/especie/humano.avif",
    "Elfo": "imagens/especie/elfo.avif",
    "Anão": "imagens/especie/anao.avif",
    "Halfling": "imagens/especie/halfling.jpg",
    "Gnomo": "imagens/especie/gnomo.jpg",
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
    "Criminoso": "imagens/origem/criminoso.png",
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

function gerarItemAleatorio(array){
    return array[Math.floor(array.length * Math.random())];
}

function exibirResultado(){
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

function rolarCaracteristica(tipo) {
    let array;
    let imagens;

    switch (tipo) {
        case 'especie':
            array = especieArray;
            imagens = IMAGENS_ESPECIE;
            break;
        case 'classe':
            array = classeArray;
            imagens = IMAGENS_CLASSE;
            break;
        case 'origem':
            array = origemArray;
            imagens = IMAGENS_ORIGEM;
            break;
        default:
            console.error(`Tipo de caracter�stica inv�lido: ${tipo}`);
            return;
    }

    const itemAleatorio = gerarItemAleatorio(array);
    const itemImg = imagens[itemAleatorio];

    document.getElementById(`card-${tipo}-nome`).textContent = itemAleatorio;
    document.getElementById(`card-${tipo}-img`).src = itemImg;

}

var slides = new Array('s1.avif','s2.avif','s3.jpg','s4.jpg','s5.avif')
var tam = slides.length
var patual = 0
var tmpslider

function trocaAutomatica(){
	patual++
	if(patual >=tam){
		patual = 0
	}
	document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[patual]}')`
}

function iniciaSlider(){
	document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[patual]}')`
	tmpslider = setInterval(trocaAutomatica,3000)
}

function parar(){
	clearInterval(tmpslider)
}