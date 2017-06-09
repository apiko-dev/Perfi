import React from 'react';
import { Icon } from 'react-native-elements';
import screens from '../constants/screens';
import styles from '../styles/AppStyles';

const DrawerButton = ({ navigation }) => (
  <Icon
    iconStyle={styles.headerIconStyle}
    name="menu"
    onPress={() => navigation.navigate(screens.DrawerOpen)}
  />
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;
