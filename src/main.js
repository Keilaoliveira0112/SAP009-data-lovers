//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//Mostrar todos os cards

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) =>
    `<div class="card-pokemon front">
      <p class="card-number">Nº ${key.num}</p>
      <p class="card-name">${key.name}</p>
      <div class="card-info">
        <p class="card-type"><strong>Tipo:</strong> ${key.type.join(" ")}</p>
        <p class="card-about">${key.about}</p>
      </div>
      <div class= "card-image">
        <img class="card-image-pokemon" src="${key.img}" alt="${key.name}">
      </div>
    </div>`).join("")
}

printCards(resultPokemon)

//const arrayPokemon = data.pokemon;

//console.log(example, data);

/* Menu Responsivo */
const btnMenu = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu-section")

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show")
})




