import React, { Fragment } from 'react';
import T from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ViewPropTypes, ActivityIndicator } from 'react-native';
import { TouchableItem, Text } from '../../../../components';
import { dimensions, colors } from '../../../../styles';
import { withAnimation } from '../../../../utils/enhancers';
import s from './styles';

/* eslint react/prop-types: 0 */
const Chevron = ({ isLoading }) => (
  <Fragment>
    {isLoading
      ? <ActivityIndicator />
      :
      <MaterialCommunityIcons
        name="chevron-right"
        size={dimensions.iconSize}
        style={{ color: colors.grey }}
      />
    }
  </Fragment>
);


const SettingItem = ({
  containerStyle,
  title,
  value,
  onPress,
  isLoading,
}) => (
  <TouchableItem
    style={[s.contentContainer, containerStyle]}
    disabled={!onPress}
    onPress={onPress}
  >
    <View style={s.mainContainer}>
      <View style={s.textContainer}>
        <Text style={s.titleText}>{title}</Text>
        {!!value &&
          <Text
            style={s.valueText}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {value}
          </Text>
        }
      </View>
      {onPress && <Chevron isLoading={isLoading} />}
    </View>
  </TouchableItem>
);

SettingItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  title: T.string,
  value: T.string,
  onPress: T.func,
  isLoading: T.bool,
};

export default withAnimation(SettingItem);
