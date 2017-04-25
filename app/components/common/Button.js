import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/ButtonsStyles';

const { buttonWrapper, buttonWrapper__raised, buttonWrapper__big } = styles;

const Button = ({ icon, onPress, raised, big, IconsSet }) => (<TouchableOpacity
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
  IconsSet: PropTypes.func,
};

Button.defaultProps = {
  IconsSet: MaterialIcons,
};

export default Button;
