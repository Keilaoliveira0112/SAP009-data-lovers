/* import { filterPokemon } from '../src/data.js';


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
    "fire"
  ],
}

const charmeleon = {
  "num": "005",
  "name": "charmeleon",
  "type": [
    "fire"
  ],
}

const vulpix = {
  "num": "037",
  "name": "vulpix",
  "type": [
    "fire"
  ],
}

const pokemonTest = [bulbasaur, ivysaur, charmander, charmeleon, vulpix]


// Teste do botão filtro por tipo de Pokemon//
describe('Buscar pokemom por tipo', () => {
  test('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  it('returnar os pokemons do tipo selecionado', () => {

    const value1 = "grass"
    const value2 = "fire"

    expect(filterPokemon(value1, pokemonTest)).toStrictEqual([bulbasaur, ivysaur]);
    expect(filterPokemon(value2, pokemonTest)).toEqual([charmander, charmeleon]);
  });
}); */


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
