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

const DESCRICOES_CLASSE = {
    "Artífice": "<b>Artífice:</b> Engenhosos inventores que criam itens mágicos poderosos.",
    "Bárbaro": "<b>Bárbaro:</b> Usam sua fúria inigualável para obliterar seus inimigos e resistir à dano.",
    "Bardo": "<b>Bardo:</b> Mestres em inspirar aliados e manipular inimigos com música e magia versátil.",
    "Bruxo": "<b>Bruxo:</b> Aqueles que fizeram pacto com um ser extraordinário e receberam poderes mágicos.",
    "Clérigo": "<b>Clérigo:</b> Devotos canalizadores da vontade divina, mestres em cura e combate.",
    "Druida": "<b>Druida:</b> Guardiões da natureza capazes de se transformar em bestas e manipular elementos.",
    "Feiticeiro": "<b>Feiticeiro:</b> Sua magia inata proporciona uso flexível da magia bruta.",
    "Guerreiro": "<b>Guerreiro:</b> Mestres táticos do campo de batalha, versáteis em todos os tipos de combate.",
    "Ladino": "<b>Ladino:</b> Furtivos, espertos, capazes de ataques fatais a partir das sombras.",
    "Mago": "<b>Mago:</b> Estudiosos da magia arcana que manipulam a realidade pelo conhecimento.",
    "Monge": "<b>Monge:</b> Especialistas em combate desarmado com movimentos rápidos e acrobáticos.",
    "Paladino": "<b>Paladino:</b> Guerreiros sagrados que juram votos e combinam cura com golpes devastadores.",
    "Patrulheiro": "<b>Patrulheiro:</b> Rastreadores habilidosos, combatentes da natureza e aliados de animais."
};

const DESCRICOES_ESPECIE = {
    "Aasimar": "<b>Aasimar:</b> Descendentes de seres celestiais com luz divina interior.",
    "Anão": "<b>Anão:</b> Povo robusto e resistente, excelentes artesãos.",
    "Draconato": "<b>Draconato:</b> Descendentes de dragões com arma de sopro elemental.",
    "Elfo": "<b>Elfo:</b> Elegantes, mágicos e de vida longa.",
    "Gnomo": "<b>Gnomo:</b> Pequenos inventores engenhosos.",
    "Goliath": "<b>Goliath:</b> Descendentes de gigantes, muito fortes.",
    "Halfling": "<b>Halfling:</b> Sortudos, furtivos e afáveis.",
    "Humano": "<b>Humano:</b> Adaptáveis e diversos.",
    "Orc": "<b>Orc:</b> Ferozes e agressivos, resistentes pela adrenalina.",
    "Tiefling": "<b>Tiefling:</b> Povo de sangue infernal com acesso a magias poderosas."
};

const DESCRICOES_ORIGEM = {
    "Acólito": "<b>Acólito:</b> Serviu em um templo, adquirindo conhecimento religioso.",
    "Artesão": "<b>Artesão:</b> Trabalhou com ofícios como metal, couro, bebidas ou armas.",
    "Artista": "<b>Artista:</b> Se apresentava em tavernas com música, dança ou humor.",
    "Charlatão": "<b>Charlatão:</b> Aplicava golpes e manipulava pessoas.",
    "Criminoso": "<b>Criminoso:</b> Vivia roubando ou assaltando.",
    "Eremita": "<b>Eremita:</b> Passou anos recluso longe da civilização.",
    "Escriba": "<b>Escriba:</b> Aprendeu escrita e preservação de conhecimento.",
    "Fazendeiro": "<b>Fazendeiro:</b> Cresceu cuidando de animais e plantações.",
    "Guarda": "<b>Guarda:</b> Treinado para vigiar e identificar ameaças.",
    "Guia": "<b>Guia:</b> Veio de terras selvagens e inexploradas.",
    "Marinheiro": "<b>Marinheiro:</b> Viveu no mar enfrentando tempestades.",
    "Mercador": "<b>Mercador:</b> Aprendeu comércio com caravanas e lojistas.",
    "Nobre": "<b>Nobre:</b> Cresceu com privilégios e educação refinada.",
    "Sábio": "<b>Sábio:</b> Viajou por bibliotecas e coleções estudando.",
    "Soldado": "<b>Soldado:</b> Treinado desde cedo para a guerra.",
    "Viajante": "<b>Viajante:</b> Cresceu nas ruas, sobrevivendo com pouco."
};

let especieArray = Object.keys(IMAGENS_ESPECIE);
let classeArray = Object.keys(IMAGENS_CLASSE);
let origemArray = Object.keys(IMAGENS_ORIGEM);

function gerarItemAleatorio(array){
    return array[Math.floor(array.length * Math.random())];
}

function exibirResultado() {

    var especieAleatoria = gerarItemAleatorio(especieArray);
    var classeAleatoria = gerarItemAleatorio(classeArray);
    var origemAleatoria = gerarItemAleatorio(origemArray);

    var especieImg = IMAGENS_ESPECIE[especieAleatoria];
    var classeImg = IMAGENS_CLASSE[classeAleatoria];
    var origemImg = IMAGENS_ORIGEM[origemAleatoria];

    var especieDesc = DESCRICOES_ESPECIE[especieAleatoria];
    var classeDesc = DESCRICOES_CLASSE[classeAleatoria];
    var origemDesc = DESCRICOES_ORIGEM[origemAleatoria];

    document.getElementById('card-especie-nome').textContent = especieAleatoria;
    document.getElementById('card-especie-img').src = especieImg;
    document.getElementById('card-especie-desc').innerHTML = especieDesc;

    document.getElementById('card-classe-nome').textContent = classeAleatoria;
    document.getElementById('card-classe-img').src = classeImg;
    document.getElementById('card-classe-desc').innerHTML = classeDesc;

    document.getElementById('card-origem-nome').textContent = origemAleatoria;
    document.getElementById('card-origem-img').src = origemImg;
    document.getElementById('card-origem-desc').innerHTML = origemDesc;
}

function rolarCaracteristica(tipo) {
    let array;
    let imagens;

    let descricoes;

    switch (tipo) {
        case 'especie':
            array = especieArray;
            imagens = IMAGENS_ESPECIE;

            descricoes = DESCRICOES_ESPECIE;
            break;
        case 'classe':
            array = classeArray;
            imagens = IMAGENS_CLASSE;

            descricoes = DESCRICOES_CLASSE;
            break;
        case 'origem':
            array = origemArray;
            imagens = IMAGENS_ORIGEM;

            descricoes = DESCRICOES_ORIGEM;
            break;
        default:
            console.error(`Tipo de característica inválido: ${tipo}`);
            return;
    }

    const itemAleatorio = gerarItemAleatorio(array);
    const itemImg = imagens[itemAleatorio];

    const itemDesc = descricoes[itemAleatorio];

    document.getElementById(`card-${tipo}-nome`).textContent = itemAleatorio;
    document.getElementById(`card-${tipo}-img`).src = itemImg;

    document.getElementById(`card-${tipo}-desc`).innerHTML = itemDesc;

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