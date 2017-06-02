import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

const NavButton = ({
 iconName,
 iconType = 'material-community',
 isVisible = true,
 backOnSuccess,
 navigation,
 action,
 ...props
}) => {
  const onPress = () => {
    action(props);
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  const icon = <Icon name={iconName} type={iconType} onPress={onPress} />;

  return isVisible ? icon : null;
};

NavButton.propTypes = {
  navigation: PropTypes.object,
  action: PropTypes.func,
  backOnSuccess: PropTypes.bool,
  isVisible: PropTypes.bool,
  iconType: PropTypes.string,
  iconName: PropTypes.string,
};

NavButton.defaultProps = {
  iconName: 'comment-question-outline',
  iconType: 'material-community',
};

export default NavButton;
