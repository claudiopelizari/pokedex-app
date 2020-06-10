import {FETCH_POKEMONS} from '../api';

const initialState = {
  pokemons: {results: []},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        pokemons: {
          ...action.pokemons,
          results: [...state.pokemons.results, ...action.pokemons.results],
        },
      };
  }
  return state;
};

export default pokemonReducer;
