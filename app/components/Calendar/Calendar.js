import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import T from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text';
import TouchableItem from '../TouchableItem';
import NavIcon from '../NavIcon';
import s from './styles';
import { colors } from '../../styles';


const Calendar = ({
  isVisible,
  onToggleCalendar,
  onSelectDate,
  onDonePress,
  isActiveIcon,
}) => (
  <View>
    <View style={s.calendarIcon}>
      <TouchableItem
        onPress={onToggleCalendar}
      >
        <NavIcon
          name="calendar"
          tintColor={isActiveIcon ? colors.green : colors.greyDarker}
        />
      </TouchableItem>
    </View>

    <Modal
      style={s.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
      transparent={false}
      onBackdropPress={onToggleCalendar}
    >
      <View style={s.container}>
        <CalendarPicker
          startFromMonday
          allowRangeSelection
          maxDate={new Date()}
          selectedDayColor={colors.green}
          selectedDayTextColor={colors.white}
          onDateChange={onSelectDate}
          textStyle={s.textStyle}
        />
        <View style={s.buttonsContainer}>
          <TouchableItem
            borderless
            onPress={onToggleCalendar}
          >
            <Text style={[s.textStyle, s.cancelButtonText]}>Cancel</Text>
          </TouchableItem>
          <TouchableItem
            borderless
            onPress={onDonePress}
          >
            <Text style={[s.textStyle, s.doneButtonText]}>Done</Text>
          </TouchableItem>
        </View>
      </View>
    </Modal>
  </View>
);

Calendar.propTypes = {
  isVisible: T.bool,
  isActiveIcon: T.bool,
  onToggleCalendar: T.func,
  onSelectDate: T.func,
  onDonePress: T.func,
};

export default Calendar;
