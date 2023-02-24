// estas funciones son de ejemplo

//import example from "./data/pokemon/pokemon";

/* export const example = () => {
  return 'example';
};*/


function searchData(inputValue, array) {
  const newSearch = array.filter(pokemon => pokemon.name.includes(inputValue));
  return newSearch;
}

function filterPokemon(value, array) {
  const newFilter = array.filter(pokemon => pokemon.type.includes(value.toLowerCase()));
  return newFilter;
}



export {
  searchData, 
  filterPokemon
}; 
