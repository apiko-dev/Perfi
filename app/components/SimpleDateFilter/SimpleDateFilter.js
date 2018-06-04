import React from 'react';
// import T from 'prop-types';
import { View } from 'react-native';
// import DatePicker from 'react-native-datepicker';
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
  // onToggleCalendar,
  // isVisibleCalendar,
  // onChangeCalendar,
  // isActiveCalendar,
  // dateForFiltering,
  // onChangeSelector,
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
    {/*<View style={s.rangeContainer}>*/}
      {/*<DatePicker*/}
        {/*isSelected*/}
        {/*// onDateChange={val => setDate(val)}*/}
        {/*// defaultValue={data}*/}
        {/*// format={dateFormat.newAccountDateFormat}*/}
        {/*// date={date}*/}
      {/*/>*/}
      {/*<DatePicker*/}
        {/*isSelected*/}
        {/*// onDateChange={val => setDate(val)}*/}
        {/*// defaultValue={data}*/}
        {/*// format={dateFormat.newAccountDateFormat}*/}
        {/*// date={date}*/}
      {/*/>*/}
    {/*</View>*/}
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

};


export default SimpleDateFilter;
