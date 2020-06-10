import React from 'react';
//import Navigator from './src/navigation/Navigator';
import Navigator from './src/routes';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {enableScreens} from 'react-native-screens';
//import pokemonReducer from './src/store/reducers/pokemons';
import pokemonReducer from './src/services/reducers/pokemons';

enableScreens();

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
