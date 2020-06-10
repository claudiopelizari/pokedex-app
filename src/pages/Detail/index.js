import React from 'react';
import {View, Text, Image} from 'react-native';
import Colors from '../../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import Badge from '../../components/pokemons/Badge';

import styles from './styles';

const Detail = props => {
  const pokemon = props.navigation.getParam('pokemon');
  const image =
    'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id + '.png';
  const id = ('00' + pokemon.id.toString()).slice(-3);
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const statsNameDict = {
    hp: 'HP',
    attack: 'Atack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors['background_type_' + type],
        },
      ]}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View>
          <View style={styles.idContainer}>
            <Text style={styles.id}>#{id}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.badgeContainer}>
            {pokemon.types.map(type => {
              return (
                <Badge
                  type={type.type.name}
                  key={type.type.name}
                  style={styles.badge}
                />
              );
            })}
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.bottomContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.statsHeader, {color: Colors['type_' + type]}]}>
          Base Stats
        </Text>

        {pokemon.stats.map(stat => {
          return (
            <View style={styles.statsContainer} key={stat.stat.name}>
              <View style={styles.statsNameContainer}>
                <Text style={styles.statsName}>
                  {statsNameDict[stat.stat.name]}
                </Text>
              </View>
              <View style={styles.statsValueContainer}>
                <Text style={styles.statsValue}>{stat.base_stat}</Text>
              </View>
              <View
                style={[
                  styles.statsRange,
                  {
                    backgroundColor: Colors['type_' + type],
                    width: parseInt(stat.base_stat) * 1.3,
                  },
                ]}
              />
            </View>
          );
        })}

        <View style={styles.statsContainer}>
          <View style={styles.statsNameContainer}>
            <Text style={styles.statsName}>Abilities</Text>
          </View>
          <View style={styles.abilitieValueContainer}>
            {pokemon.abilities.map(ability => {
              return (
                <Text
                  style={
                    ability.is_hidden ? styles.hiddenAbility : styles.statsValue
                  }
                  key={ability.ability.name}>
                  {!ability.is_hidden && ability.slot + '. '}
                  {ability.ability.name.charAt(0).toUpperCase() +
                    ability.ability.name.slice(1)}
                  {ability.is_hidden && ' (hidden ability)'}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

Detail.navigationOptions = navData => {
  const pokemon = navData.navigation.getParam('pokemon');
  return {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: Colors['background_type_' + pokemon.types[0].type.name],
    },
    headerTintColor: 'white',
    headerTitle: '',
  };
};

export default Detail;
