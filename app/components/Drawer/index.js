import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import colors from '../../styles/colors';
import Logo from '../Logo';

import DrawerNavigatorItems from './components/DrawerNavigatorItems';
import { dimensions } from '../../styles';

const styles = StyleSheet.create({
  titleContainerStyle: {
    height: Platform.OS === 'android' ? 66 : 86,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingLeft: dimensions.indent * 1.5,
    paddingBottom: dimensions.indent,
  },
});

const Drawer = props => (

  <View>
    <View style={styles.titleContainerStyle}>
      <Logo />
    </View>
    <DrawerNavigatorItems {...props} />
  </View>
);

export default Drawer;
