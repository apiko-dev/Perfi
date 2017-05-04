import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/ButtonsStyles';

const { buttonWrapper, buttonWrapper__raised, buttonWrapper__big } = styles;

const Button = ({ icon, onPress, raised, big, iconsSet: IconsSet }) => (<TouchableOpacity
  onPress={onPress}
  style={[
    buttonWrapper,
    big && buttonWrapper__big,
    raised && buttonWrapper__raised,
  ]}
>
  <IconsSet name={icon} size={26} />
</TouchableOpacity>);

Button.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  raised: PropTypes.bool,
  big: PropTypes.bool,
  iconsSet: PropTypes.func,
};

Button.defaultProps = {
  iconsSet: MaterialIcons,
};

export default Button;
