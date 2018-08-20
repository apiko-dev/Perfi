import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { Button } from '../../components';
import s from './styles';
import { colors } from '../../styles';


const ButtonFiler = props => (
  <Button
    {...props}
    titleStyle={s.btTitleStyle}
    containerStyle={s.btnContainer}
    activeBackgroundColor={s.activeButtonBackgroundColor}
    activeColor={colors.white}
  />
);

const SimpleDateFilter = ({
  isActiveCurrentMonth,
  isActiveHalfYear,
  isActiveLast12,
  isActiveAllTime,
  onSetActiveCurrentMonth,
  onSetActiveHalfYear,
  onSetActiveLast12,
  onSetActiveAllTime,
}) => (
  <View>
    <View style={s.selectors}>
      <ButtonFiler
        title="Current month"
        onPress={onSetActiveCurrentMonth}
        isActive={isActiveCurrentMonth}
      />
      <ButtonFiler
        title="6 months"
        onPress={onSetActiveHalfYear}
        isActive={isActiveHalfYear}
      />
      <ButtonFiler
        title="12 months"
        onPress={onSetActiveLast12}
        isActive={isActiveLast12}
      />
      <ButtonFiler
        title="All time"
        onPress={onSetActiveAllTime}
        isActive={isActiveAllTime}
      />
    </View>
  </View>
);

SimpleDateFilter.propTypes = {
  isActiveCurrentMonth: T.bool,
  isActiveHalfYear: T.bool,
  isActiveLast12: T.bool,
  isActiveAllTime: T.bool,
  onSetActiveCurrentMonth: T.func,
  onSetActiveHalfYear: T.func,
  onSetActiveLast12: T.func,
  onSetActiveAllTime: T.func,
};


export default SimpleDateFilter;
