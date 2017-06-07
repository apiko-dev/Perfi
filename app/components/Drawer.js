import React from 'react';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import colors from '../styles/colors';

const cover = require('../images/pattern.png');

const coverSizes = {
  height: 200,
  width: Dimensions.get('window').width * 0.9,
};

const styles = StyleSheet.create({
  coverStyle: {
    ...coverSizes,
  },
  titleContainerStyle: {
    ...coverSizes,
    position: 'absolute',
    justifyContent: 'flex-end',
    padding: 10,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
});

const Drawer = props => (
  <View>
    <Image
      style={styles.coverStyle}
      source={cover}
    />
    <View style={styles.titleContainerStyle}>
      <Text style={styles.titleStyle}>Perfi</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

export default Drawer;
