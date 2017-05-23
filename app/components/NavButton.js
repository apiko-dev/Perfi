import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

const NavButton = ({
 iconName,
 iconType,
 isVisible,
 backOnSuccess,
 navigation,
 action,
 ...props
}) => {
  const onPress = () => {
    action(props);
    if (backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  if (isVisible) {
    return (
      <Icon
        name={iconName}
        type={iconType}
        onPress={onPress}
      />
    );
  }

  return null;
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
