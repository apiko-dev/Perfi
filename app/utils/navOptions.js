import React from 'react';
import { View } from 'react-native';
import { NavIcon, PropsProxyHOC, Logo } from '../components';
import styles from '../styles/AppStyles';


const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    headerTitle: <View style={styles.logoContainer}><Logo /></View>,
    drawerIcon: PropsProxyHOC(NavIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default navOptions;
