import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import BadgeIcon from './BadgeIcon';

const Badge = props => {
  const type = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  const color = Colors['type_' + props.type];

  return (
    <View style={[styles.container, {backgroundColor: color, ...props.style}]}>
      <BadgeIcon type={props.type} />
      <Text style={styles.name}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    padding: 5,
    borderRadius: 3,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  name: {
    fontFamily: 'SFProDisplay',
    fontSize: 12,
    color: 'white',
    marginBottom: 2,
    marginLeft: 5,
  },
});

export default Badge;
