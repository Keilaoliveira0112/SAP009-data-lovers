// estas funciones son de ejemplo

//import example from "./data/pokemon/pokemon";

/* export const example = () => {
  return 'example';
};*/

/* Barra de Pesquisa */
function searchData(inputValue, array) {
  const newSearch = array.filter(pokemon => pokemon.name.includes(inputValue)); // //***includes() O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
  return newSearch;
}
/* Filtro do Tipo */
function filterPokemon(value, array) {
  const newFilter = array.filter(pokemon => pokemon.type.includes(value.toLowerCase()));
  return newFilter;
}
/* Filtro da Ordem */
function orderPokemon(value, array){
  const copy = [...array];
  if(value === "Crescente"){
    copy.sort((a,b) => a.num - b.num);
  }else if(value === "Decrescente"){
    copy.sort((a,b) => b.num - a.num);
  }else if(value === "a-z"){
    copy.sort((a,b) => a.name > b.name ? 1 : -1);
  }else if(value === "z-a"){
    copy.sort((a,b) => a.name < b.name ? 1 : -1);
  }
  return copy;  
}

/* Cálculo Agregado */
function calculatePercentage(filterPokemon, array) {
  return ((filterPokemon.length / array.length)*100).toFixed(2)
}

export {
  searchData, 
  filterPokemon,
  orderPokemon,
  calculatePercentage
}; 
