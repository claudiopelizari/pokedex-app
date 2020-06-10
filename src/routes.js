import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './pages/Home';
import Detail from './pages/Detail';

const PokemonNavigator = createStackNavigator({
  Pokemons: Home,
  Pokemon: Detail,
});

export default createAppContainer(PokemonNavigator);
