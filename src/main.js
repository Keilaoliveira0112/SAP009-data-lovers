//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//Mostrar todos os cards

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) =>
   `<div class="cardPokemon front">
      <p class="cards-face">Nº ${key.num}</p>
      <p class="cards-face h6">${key.name}</p>
      <img class="imgCard" src="${key.img}" alt="${key.name}">
      <p class="cards-face"><strong>Tipo:</strong> ${key.type.join(" ")}</p>
    </div>`).join("")
}

printCards(resultPokemon)

//const arrayPokemon = data.pokemon;

//console.log(example, data);





