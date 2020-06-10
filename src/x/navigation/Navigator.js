import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import PokemonsScreen from '../screens/pokemons/PokemonsScreen';
import PokemonScreen from '../screens/pokemons/PokemonScreen';

const PokemonNavigator = createStackNavigator({
  Pokemons: PokemonsScreen,
  Pokemon: PokemonScreen,
});

export default createAppContainer(PokemonNavigator);
