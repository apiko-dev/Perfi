import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import {
  Select,
  Calendar,
  Button,
} from '../../components';
import s from './styles';
import { colors, scalingUtils } from '../../styles';

const ButtonFiler = props => (
  <Button
    {...props}
    titleStyle={s.btTitleStyle}
    containerStyle={s.btnContainer}
    activeBackgroundColor={s.activeButtonBackgroundColor}
    activeColor={colors.white}
  />
);

const DateFilter = ({
  onToggleCalendar,
  isVisibleCalendar,
  onChangeCalendar,
  isActiveCalendar,
  isActiveToday,
  isActiveYesterday,
  isActiveSelector,
  onSetActiveToday,
  onSetActiveYesterday,
  dateForFiltering,
  onChangeSelector,
}) => (
  <View style={s.selectors}>
    <Select
      selectorsWidth={scalingUtils.moderateScale(105)}
      options={['Week', 'Month', 'Year']}
      style={s.dateSelector}
      isShowScroll={false}
      defaultValue="Select"
      onSelect={onChangeSelector}
      isActiveSelector={isActiveSelector}
    />
    <ButtonFiler
      title="Today"
      onPress={onSetActiveToday}
      isActive={isActiveToday}
    />
    <ButtonFiler
      title="Yesterday"
      onPress={onSetActiveYesterday}
      isActive={isActiveYesterday}
    />
    <Calendar
      isVisible={isVisibleCalendar}
      isActiveIcon={isActiveCalendar}
      onToggleCalendar={onToggleCalendar}
      onSelectedDate={onChangeCalendar}
      initialDate={dateForFiltering}
    />
  </View>
);

DateFilter.propTypes = {
  onToggleCalendar: T.func,
  isVisibleCalendar: T.bool,
  onChangeCalendar: T.func,
  isActiveCalendar: T.bool,
  isActiveToday: T.bool,
  isActiveYesterday: T.bool,
  isActiveSelector: T.bool,
  onSetActiveToday: T.func,
  onSetActiveYesterday: T.func,
  onChangeSelector: T.func,
  dateForFiltering: T.object,
};


export default DateFilter;
