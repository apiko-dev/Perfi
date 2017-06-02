import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import screens from '../constants/screens';
import colors from '../styles/colors';

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(screens.DrawerOpen)}
  >
    <MaterialIcons
      name="menu"
      size={32}
      color={colors.textPrimary}
    />
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;
