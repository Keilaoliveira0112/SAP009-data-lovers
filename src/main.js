import { searchData, filterPokemon, orderPokemon, calculatePercentage } from './data.js';
import data from './data/pokemon/pokemon.js';

const resultPokemon = data.pokemon;

const calculationText = document.getElementById('calculation')

function printCards(array) {
  document.querySelector(".cards").innerHTML = array.map((key) => {
    let evolutionTable = "";
    if (key.evolution && key.evolution["next-evolution"]) {
      evolutionTable = `
        <table border=1 class="card-evolution">
          <tr>
            <caption class="title-evolution">EVOLUÇÃO</caption>
            <th class="sub-info">name</th>
            <th class="sub-info">candy-cost</th>
          </tr>
          ${key.evolution["next-evolution"].map((evolution) => `<tr>
            <td class="result-info">${evolution.name}</td>
            <td class="result-info">${evolution["candy-cost"]}</td>
          </tr>
          `
  ).join("")}      
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

const btnMenu = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu-section")

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show")

})

const searchInput = document.getElementById('search')

searchInput.addEventListener('keyup', (evento) => {
  const valueInput = evento.target.value.toLowerCase()
  const listFilter = searchData(valueInput, data.pokemon)
  printCards(listFilter)

  calculationText.innerHTML = `<strong>Total de Pokemons encontrados:</strong> ${listFilter.length}.`
})

const filterTypes = document.getElementById('filter-types')

filterTypes.addEventListener('change', () => {
  let filter = data.pokemon
  if (filterTypes.value) {
    filter = filterPokemon(filterTypes.value, data.pokemon)
  }

  printCards(filter)
  const percentage = calculatePercentage(filter, data.pokemon)
  calculationText.innerHTML = `Foram encontrados ${filter.length} Pokemons. Percentual de ${percentage}% do total.`
})

const selectOrder = document.getElementById('select-order')
selectOrder.addEventListener('change', () => {
  const filterOrder = orderPokemon(selectOrder.value, data.pokemon)
  printCards(filterOrder)
})

