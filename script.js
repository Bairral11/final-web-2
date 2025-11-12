// Array de Espécies
let especieArray = ["Humano", "Elfo", "Anão", "Halfling", "Gnomo", "Draconato", "Tiefling", "Goliath", "Aasimar", "Orc"];
// Array de Imagens de Espécies
let especieImgArray = [""];


// Array de Classes
let classeArray = ["Artífice", "Bárbaro", "Bardo", "Clérigo", "Druida", "Guerreiro", "Monge", "Paladino", "Patrulheiro", "Ladino", "Feiticeiro", "Bruxo", "Mago"];
// Array de Imagens de Classes
let classeImgArray = [""];


// Array de Origens
let origemArray = ["Acólito", "Artesão", "Charlatão", "Criminoso", "Artista", "Fazendeiro", "Guarda", "Guia", "Eremita", "Mercador", "Nobre", "Sábio", "Marinheiro", "Escriba", "Soldado", "Viajante"];
// Array de Imagens de Origens
let origemImgArray = [""];


var especieAleatoria = especieArray[Math.floor(especieArray.length * Math.random())];
console.log(especieAleatoria);


var classeAleatoria = classeArray[Math.floor(classeArray.length * Math.random())];
console.log(classeAleatoria);


var origemAleatoria = origemArray[Math.floor(origemArray.length * Math.random())];
console.log(origemAleatoria);
