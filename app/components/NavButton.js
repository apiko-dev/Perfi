import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import styles from '../styles/AppStyles';

const NavButton = (props) => {
  const {
    iconName,
    iconType = 'material-community',
    isVisible = true,
    backOnSuccess,
    navigation,
    action,
  } = props;

  const onPress = () => {
    action();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  return isVisible ? (
    <Icon
      iconStyle={styles.headerIconStyle}
      name={iconName}
      type={iconType}
      onPress={onPress}
    />
  ) : null;
};

NavButton.propTypes = {
  navigation: PropTypes.object,
  action: PropTypes.func,
  backOnSuccess: PropTypes.bool,
  isVisible: PropTypes.bool,
  iconType: PropTypes.string,
  iconName: PropTypes.string,
};

export default NavButton;
