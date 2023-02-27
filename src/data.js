// estas funciones son de ejemplo

//import example from "./data/pokemon/pokemon";

/* export const example = () => {
  return 'example';
};*/


function searchData(inputValue, array) {
  const newSearch = array.filter(pokemon => pokemon.name.includes(inputValue)); // //***includes() O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
  return newSearch;
}

function filterPokemon(value, array) {
  const newFilter = array.filter(pokemon => pokemon.type.includes(value.toLowerCase()));
  return newFilter;
}

function calcularPorcetagem (filterPokemon, array) {
  return ((filterPokemon.length / array.length)*100).toFixed(2)
}


export {
  searchData, 
  filterPokemon,
  calcularPorcetagem
}; 
