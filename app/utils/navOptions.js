import React from 'react';
import { NavIcon, PropsProxyHOC, Logo } from '../components';
import styles from '../styles/AppStyles';


const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    headerTitle: <Logo />,
    drawerIcon: PropsProxyHOC(NavIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default navOptions;
