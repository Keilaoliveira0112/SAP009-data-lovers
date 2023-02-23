//import { types } from '@babel/core';
import { searchData, filterPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

//Mostrar todos os cards

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) =>`<div class="flip-card">
      <div class="the-card">
        <div class="card-pokemon card-front">
          <p class="card-number">Nº ${key.num}</p>
          <p class="card-name">${key.name}</p>
          <div class="card-info">
            <p class="card-type"><strong>Tipo:</strong> ${key.type.join(" ")}</p>
            <p class="card-about"><strong>Geração:</strong> ${key.generation.name}</p>
            <p class="card-about"><strong>Raridade:</strong> ${key.pokemonrarity}</p>
          </div>
          <div class= "card-image">
            <img class="card-image-pokemon" src="${key.img}" alt="${key.name}">
          </div>
        </div>
        <div class="card-pokemon card-back">
          <p class="cards-face">Peso: ${key.size.weight}</p>
          <p class="cards-face">Altura: ${key.size.height}</p>
          <li><strong>Fraquezas:</strong> <span class="cars-face">${key.weaknesses.join("  ")}</li>
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
 
  printCards(filter)
})
