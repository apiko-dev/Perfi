import React from 'react';
import HeaderIcon from './HeaderIcon';
import screens from '../constants/screens';

const DrawerButton = ({ navigation }) => (
  <HeaderIcon
    name="menu"
    onPress={() => navigation.navigate(screens.DrawerOpen)}
  />
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;
