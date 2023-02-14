import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//Mostrar todos os cards

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) =>
   `<div class="cardPokemon">
      <p>Nº ${key.num}</p>
      <h3>${key.name}</h3>
      <img src="${key.img}" alt="${key.name}">
      <p>Tipo: ${key.type.join(" ")}</p>
    </div>`).join("")
}

printCards(resultPokemon)
