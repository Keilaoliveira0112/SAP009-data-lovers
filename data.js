const searchData = (inputValue, array) => array.filter(pokemon => pokemon.name.includes(inputValue));

const filterPokemon = (value, array) => array.filter(pokemon => pokemon.type.includes(value.toLowerCase()));

const orderPokemon = (value, array) => {
  const copy = [...array];
  if (value === "Crescente") {
    copy.sort((a, b) => a.num - b.num);
  } else if (value === "Decrescente") {
    copy.sort((a, b) => b.num - a.num);
  } else if (value === "a-z") {
    copy.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (value === "z-a") {
    copy.sort((a, b) => a.name < b.name ? 1 : -1);
  }
  return copy;
}

const calculatePercentage = (filterPokemon, array) => ((filterPokemon.length / array.length) * 100).toFixed(2);
  
export {
  searchData,
  filterPokemon,
  orderPokemon,
  calculatePercentage
}; 
