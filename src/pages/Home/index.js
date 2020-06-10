import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Pokemon from '../../components/pokemons/Pokemon';
import {useDispatch, useSelector} from 'react-redux';
import * as pokemonsActions from '../../services/api';

import styles from './styles';

const Home = props => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const [offset, setOffset] = useState(0);

  const fetchPokemons = useCallback(async () => {
    await dispatch(pokemonsActions.fetchPokemons(offset));
  }, [offset, dispatch]);

  useEffect(() => {
    fetchPokemons();
  }, [offset, fetchPokemons]);

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pokédex</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>
        </View>
      </View>
      <SearchBar navigation={props.navigation} />
      
      <FlatList
        data={pokemons.results}
        keyExtractor={pokemon => pokemon.url}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          setOffset(offset + 20);
        }}
        renderItem={({item}) => {
          return <Pokemon url={item.url} navigation={props.navigation} />;
        }}
      />
    </View>
  );
};


Home.navigationOptions = {
  headerShown: false,
};



export default Home;