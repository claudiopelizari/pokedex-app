import React from 'react';
import {Image, StyleSheet} from 'react-native';

const BadgeIcon = props => {
  switch (props.type) {
    case 'bug':
      return (
        <Image          
          source={require('../../assets/icons/bug.png')}
          style={styles.icon}
        />
      );
    case 'dark':
      return (
        <Image
          source={require('../../assets/icons/dark.png')}
          style={styles.icon}
        />
      );
    case 'dragon':
      return (
        <Image
          source={require('../../assets/icons/dragon.png')}
          style={styles.icon}
        />
      );
    case 'electric':
      return (
        <Image
          source={require('../../assets/icons/electric.png')}
          style={styles.icon}
        />
      );
    case 'fairy':
      return (
        <Image
          source={require('../../assets/icons/fairy.png')}
          style={styles.icon}
        />
      );
    case 'fighting':
      return (
        <Image
          source={require('../../assets/icons/fighting.png')}
          style={styles.icon}
        />
      );
    case 'fire':
      return (
        <Image
          source={require('../../assets/icons/fire.png')}
          style={styles.icon}
        />
      );
    case 'flying':
      return (
        <Image
          source={require('../../assets/icons/flying.png')}
          style={styles.icon}
        />
      );
    case 'ghost':
      return (
        <Image
          source={require('../../assets/icons/ghost.png')}
          style={styles.icon}
        />
      );
    case 'grass':
      return (
        <Image
          source={require('../../assets/icons/grass.png')}
          style={styles.icon}
        />
      );
    case 'ground':
      return (
        <Image
          source={require('../../assets/icons/ground.png')}
          style={styles.icon}
        />
      );

    case 'ice':
      return (
        <Image
          source={require('../../assets/icons/ice.png')}
          style={styles.icon}
        />
      );
    case 'normal':
      return (
        <Image
          source={require('../../assets/icons/normal.png')}
          style={styles.icon}
        />
      );
    case 'poison':
      return (
        <Image
          source={require('../../assets/icons/poison.png')}
          style={styles.icon}
        />
      );
    case 'psychic':
      return (
        <Image
          source={require('../../assets/icons/psychic.png')}
          style={styles.icon}
        />
      );
    case 'rock':
      return (
        <Image
          source={require('../../assets/icons/rock.png')}
          style={styles.icon}
        />
      );
    case 'steel':
      return (
        <Image
          source={require('../../assets/icons/steel.png')}
          style={styles.icon}
        />
      );
    case 'water':
      return (
        <Image
          source={require('../../assets/icons/water.png')}
          style={styles.icon}
        />
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  icon: {
    height: 15,
    width: 15,
  },
});

export default BadgeIcon;
