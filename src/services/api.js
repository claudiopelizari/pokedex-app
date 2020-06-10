export const FETCH_POKEMONS = 'FETCH_POKEMONS';

export const fetchPokemons = offset => {
  return async dispatch => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset;
    const response = await fetch(url);
    if (response.ok) {
      const pokemons = await response.json();
      dispatch({type: FETCH_POKEMONS, pokemons: pokemons});
    }
  };
};
