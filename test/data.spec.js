import { filterPokemon, searchData, orderPokemon, calculatePercentage } from '../src/data.js';

const bulbasaur = {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
}

const ivysaur = {
  "num": "002",
  "name": "ivysaur",
  "type": [
    "grass",
    "poison"
  ],
}

const charmander = {
  "num": "004",
  "name": "charmander",
  "type": [
    "fire",
  ],
}

const charmeleon = {
  "num": "005",
  "name": "charmeleon",
  "type": [
    "fire"
  ],
}
const pokemonTest = [bulbasaur, ivysaur, charmander, charmeleon]

// Teste do botão filtro por tipo de Pokemon//
describe('Buscar personagens por tipo', () => {
  test('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });
  it('retornar os personagens do tipo selecionado', () => {
    const value1 = "grass"
    const value2 = "fire"

    expect(filterPokemon(value1, pokemonTest)).toEqual([bulbasaur, ivysaur]);
    expect(filterPokemon(value2, pokemonTest)).toEqual([charmander, charmeleon]);
  });
});

// Teste de função de pesquisa //

describe('Buscar por nome do personagem', () => {
  test('is a functon', () => {
    expect(typeof searchData).toBe('function');
  });

  it('retornar os pokemons que possui as letras digitadas', () => {
    const valueInput1 = "iv"
    const valueInput2 = "ch"

    expect(searchData(valueInput1, pokemonTest)).toEqual([ivysaur]);
    expect(searchData(valueInput2, pokemonTest)).toEqual([charmander, charmeleon]);
  });
});

// Teste da função ordenar //

describe('Ordenar Lista de Pokemons', () => {
  test('is a function', () => {
    expect(typeof orderPokemon).toBe('function')
  });

  it('Ordenar de a-z e z-a', () => {
    const valueAZ = "a-z"
    const valueZA = "z-a"

    expect(orderPokemon(valueAZ, pokemonTest)).toEqual([bulbasaur, charmander, charmeleon, ivysaur]);
    expect(orderPokemon(valueZA, pokemonTest)).toEqual([ivysaur, charmeleon, charmander, bulbasaur]);

  });

  it('Ordenar lista por número', () => {
    const valueCrescente = "Crescente"
    const valueDecrescente = "Decrescente"

    expect(orderPokemon(valueCrescente, pokemonTest)).toEqual([bulbasaur, ivysaur, charmander, charmeleon]);
    expect(orderPokemon(valueDecrescente, pokemonTest)).toEqual([charmeleon, charmander, ivysaur, bulbasaur]);
  });

});

// Teste do cálculo agregado //
describe('Percentual itens filtrados', () => {
  test('is a function', () => {
    expect(typeof calculatePercentage).toBe('function');
  });

  it('retornar a porcentagem do array filtrado', () => {

    const filterPokemon = [charmeleon]
    expect(calculatePercentage(filterPokemon, pokemonTest)).toBe("25.00");
  });
});
