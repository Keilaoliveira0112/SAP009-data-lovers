//import { types } from '@babel/core';
import { searchData, filterPokemon, orderPokemon, calculePokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

/* Mostrar todos os cards */

const resultPokemon = data.pokemon;

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) => {
    let evolutionTable = "";
    if(key.evolution && key.evolution["next-evolution"]){
      evolutionTable = `
        <table border=1 class="card-evolution">
          <tr>
            <caption class="title-evolution">Evolução</caption>
            <th class="sub-info">name</th>
            <th class="sub-info">candy-cost</th>
          </tr>
          ${key.evolution["next-evolution"].map((evolution) =>`<tr>
            <td class="result-info">${evolution.name}</td>
            <td class="result-info">${evolution["candy-cost"]}</td>
          </tr>
          `
  )}      
        </table>
      `
    }

    return `<div class="flip-card">
      <div class="the-card">
        <div class="card-pokemon card-front">
          <p class="card-number">Nº ${key.num}</p>
          <p class="card-name">${key.name}</p>
          <div class="card-info">
            <p class="card-type"><strong>Tipo:</strong> ${key.type.join(" ")}</p>
            <p class="card-about"><strong>Geração:</strong> ${key.generation.name}</p>
            <p class="card-about"><strong>Raridade:</strong> ${key["pokemon-rarity"]}</p >
            <p class="card-about"><strong>Peso: </strong> ${key.size.weight}</p>
            <p class="card-about"><strong>Altura: </strong> ${key.size.height}</p>
          </div >
  <div class="card-image">
    <img class="card-image-pokemon" src="${key.img}" alt="${key.name}">
  </div>
        </div >
  <div class="card-pokemon card-back">
    <p class="card-info-back"><strong>Fraquezas: </strong> ${key.weaknesses.join(", ")}</p>
    <p class="card-info-back"><strong>Resistência: </strong> ${key.resistant.join(", ")}</p>
    ${evolutionTable}
  </div>
      </div >  
    </div > `
  }).join("")
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
  const calculeType = calculePokemon(filter, resultPokemon)
  document.querySelector("#calculation").innerHTML = `Foram encontrados ${filter.length} Pokemons. Percentual de ${calculeType}%.`
  printCards(filter)
})

/* Função Ordenar*/
const selectOrder = document.getElementById('select-order')
selectOrder.addEventListener('change', () => {
  const filterOrder = orderPokemon(selectOrder.value, data.pokemon)
  printCards(filterOrder)
})

