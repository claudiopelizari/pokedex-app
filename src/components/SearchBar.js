import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = props => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url + search.toLowerCase());
      if (response.ok) {
        const pokemon = await response.json();
        props.navigation.navigate('Pokemon', {pokemon});
      } else {
        Alert.alert('Pokemon not found', 'Check your spelling', [{text: 'Ok'}]);
      }
    } catch (err) {
      Alert.alert('Something went wrong', 'Try again later', [{text: 'Ok'}]);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image        
        source={require('../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="What Pokémon are you looking for?"
        style={styles.input}
        value={search}
        onChangeText={text => {
          setSearch(text);
        }}
        onEndEditing={() => {
          fetchPokemon();
        }}
      />
      <View style={styles.spinnerContainer}>
        {isLoading && <ActivityIndicator size="small" color="#d04164" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    justifyContent: 'center',
  },
  searchIcon: {
    marginVertical: 22,
    marginRight: 8,
    width: 16,
    height: 16,
  },
  input: {
    width: '70%',
    fontFamily: 'SFProDisplay',
    fontSize: 14,
  },
  spinnerContainer: {
    width: 20,
    justifyContent: 'center',
  },
});

export default SearchBar;
