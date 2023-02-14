import { } from './data.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const arrayPokemon = data.pokemon;

//console.log(example, data);


window.addEventListener("load", () => printCards(arrayPokemon))

//CHAMANDO A FUNÇÃO PARA QUANDO CARREGAR TODA A PÁGINA
//

function printCards(array) {
    document.querySelector(".cards").innerHTML = array.map((key) =>

        `
        <a href="carrossel.html?carrossel=${key.num}">
            <div class="cardPokemon">
                <p class="numberPokemon" >${key.num}</p>
                <h1>${key.name}</h1>
                <img class="imgCard" src="${key.img}" alt="${key.name}">
                <p class="tipo" >${key.type.join(" ")}</p>
            </div>
        </a>
    `).join("")

}

//FUNÇÃO PARA VIRAR O CARD


