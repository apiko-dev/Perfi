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

const SimpleDateFilter = ({
  onToggleCalendar,
  isVisibleCalendar,
  onChangeCalendar,
  isActiveCalendar,
  dateForFiltering,
  onChangeSelector,


                      isActiveCurrentMonth,
                      isActiveHalfYear,
                      isActiveAllTime,
                      onSetActiveCurrentMonth,
                      onSetActiveHalfYear,
                      onSetActiveAllTime,
}) => (
  <View style={s.selectors}>
    {/*<Select*/}
      {/*selectorsWidth={scalingUtils.moderateScale(100)}*/}
      {/*options={['Week', 'Month', 'Year']}*/}
      {/*style={s.dateSelector}*/}
      {/*defaultValue="Select"*/}
      {/*onSelect={onChangeSelector}*/}
      {/*isActiveSelector={isActiveSelector}*/}
    {/*/>*/}
    <ButtonFiler
      title="Current month"
      onPress={onSetActiveCurrentMonth}
      isActive={isActiveCurrentMonth}
    />
    <ButtonFiler
      title="Last 6 month"
      onPress={onSetActiveHalfYear}
      isActive={isActiveHalfYear}
    />
    <ButtonFiler
      title="All time"
      onPress={onSetActiveAllTime}
      isActive={isActiveAllTime}
    />

    {/*<Calendar*/}
      {/*isVisible={isVisibleCalendar}*/}
      {/*isActiveIcon={isActiveCalendar}*/}
      {/*onToggleCalendar={onToggleCalendar}*/}
      {/*onSelectedDate={onChangeCalendar}*/}
      {/*initialDate={dateForFiltering}*/}
    {/*/>*/}
  </View>
);

SimpleDateFilter.propTypes = {

};


export default SimpleDateFilter;
