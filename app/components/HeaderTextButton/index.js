import React from 'react';
import T from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Text from '../Text';
import s from './styles';

const HeaderTextButton = (props) => {
  const {
    isVisible = true,
    title,
    titleStyle,
    backOnSuccess,
    navigation,
    action,
    ...touchableProps
  } = props;

  const onPress = () => {
    action();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };


  return isVisible ? (
    <TouchableOpacity
      onPress={onPress}
      {...touchableProps}
    >
      <Text style={[s.title, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : null;
};

HeaderTextButton.propTypes = {
  isVisible: T.bool,
  title: T.string,
  titleStyle: Text.propTypes.style,
  navigation: T.object,
  action: T.func,
  backOnSuccess: T.bool,
};

export default HeaderTextButton;
