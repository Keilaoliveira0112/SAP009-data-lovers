import {orderPokemon} from '../src/data';

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


const pokemonTest = [bulbasaur, ivysaur, charmander, charmeleon]

/* Testes relacionados a ordenação de pokemons */
describe('Ordenar Lista de Pokemons', () =>{
  test('is a function', () => {
    expect(typeof orderPokemon).toBe('function')
  })

  it('Ordenar de a-z e z-a', () => {
    const valueAZ = "a-z"
    const valueZA = "z-a"

    expect(orderPokemon(valueAZ, pokemonTest)).toEqual([bulbasaur, charmander, charmeleon, ivysaur]);
    expect(orderPokemon(valueZA, pokemonTest)).toEqual([ivysaur, charmeleon, charmander, bulbasaur]);
    
  });
  

})

/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
