//import { types } from '@babel/core';
import { searchData, filterPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//Mostrar todos os cards

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) =>
    `  <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                   <p class="cards-face">Nº ${key.num}</p>
                    <p class="cards-face h6">${key.name}</p>
                    <img class="imgCard" src="${key.img}" alt="${key.name}">
                    <p class="cards-face"><strong>Tipo:</strong> ${key.type.join(" ")}</p>
              </div>
              <div class="flip-card-back">
                  <p class="cards-face">Peso: ${key.size.weight}</p>
                    <p class="cards-face h6">Altura: ${key.size.height}</p>
                    <li><strong>Raridade:<span class="cards-face"> ${key.pokemonRarity}</li>
                    <li><strong>Fraquezas:</strong> <span class="cars-face">${key.weaknesses.join("  ")} </li>
                    <p class="cards-face"><strong>Resistência:</strong> ${key.resistant.join("  ")}</p>
              </div>
          </div>
      </div> `).join("")
}
printCards(resultPokemon)


/* Menu Responsivo */

const btnMenu = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu-section")

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show")
})

/*Função pesquisa*/
const searchInput = document.getElementById('search')

searchInput.addEventListener('keyup', (evento) => {
  const valueInput = evento.target.value.toLowerCase()
  const listFilter = searchData(valueInput, data.pokemon)
  printCards(listFilter)
})

/* Função filtro*/

const filterTypes = document.getElementById('filter-types')

filterTypes.addEventListener('change', () => {
  const filter = filterPokemon(filterTypes.value, data.pokemon)
  console.log(filter);
  printCards(filter)
})
