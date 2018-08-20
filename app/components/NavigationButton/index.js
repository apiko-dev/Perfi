import React from 'react';
import T from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TouchableItem from '../TouchableItem';
import NavIcon from '../NavIcon';
import { colors } from '../../styles';
import s from './styles';


const NavigationButton = (props) => {
  const {
    title,
    titleStyle,
    tintColor,
    iconName,
    onPress,
    containerStyle,
    navigation,
    backOnSuccess,
    isVisible = true,
    ...iconProps
  } = props;

  const onPressButton = () => {
    if (onPress) onPress();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  return isVisible ? (
    <TouchableItem
      style={[s.container, containerStyle]}
      onPress={onPressButton}
      borderless
      useOpacity
    >
      <View>
        {iconName &&
        <NavIcon
          tintColor={tintColor || colors.greyDarker}
          name={iconName}
          {...iconProps}
        />
        }

        {title && <Text style={[s.title, titleStyle]}>{title}</Text>}

      </View>
    </TouchableItem>

  ) : null;
};

NavigationButton.propTypes = {
  navigation: T.object,
  isVisible: T.bool,
  backOnSuccess: T.bool,
  tintColor: T.string,
  name: T.string,
  onPress: T.func,
  containerStyle: ViewPropTypes.style,
  title: T.string,
  iconName: T.string,
  titleStyle: Text.propTypes.style,
};

export default NavigationButton;
