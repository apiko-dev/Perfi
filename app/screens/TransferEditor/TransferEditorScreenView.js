import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import R from 'ramda';
import T from 'prop-types';
import moment from 'moment';

import {
  Button,
  KeyboardAvoidingView,
  DatePicker,
  ScreenWrapper,
  HeaderTitle,
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import dateFormat from '../../constants/dateFormat';
import { AccountSelect, InputText, TwoArrowDown } from './components';

export const getBackgroundColor = account => (
  R.prop('color', account)
    ? ({
      borderColor: account.color,
      backgroundColor: account.color,
    })
    : {}
);

export const getIcon = account => (
  R.prop('icon', account)
    ? ({
      name: account.icon,
      size: 30,
    })
    : {}
);

const AccountEditor = ({
  accountsArr,
  date,
  from,
  isReadyForSubmit,
  isValidValue,
  note,
  onChangeDate,
  onChangeFrom,
  onChangeNote,
  onChangeTo,
  onChangeValue,
  onSubmit,
  to,
  value,
}) => {
  const optionsFrom = accountsArr.filter(item => item.id !== to.id);
  const optionsTo = accountsArr.filter(item => item.id !== from.id);

  return (
    <View style={s.root}>
      <ScreenWrapper style={s.withoutPaddingBottom}>
        <ScrollView>
          <View style={[s.card, getBackgroundColor(from)]}>
            <AccountSelect
              options={optionsFrom}
              onSelect={index => onChangeFrom(optionsFrom[index])}
            />
            <InputText
              placeholder="Value"
              value={value}
              onChangeText={onChangeValue}
              iconRight={getIcon(from)}
              keyboardType="numeric"
            />
            {
              !isValidValue.isValid &&
              !!value &&
              !R.isEmpty(from) &&
              <Text style={s.error}>{isValidValue.message}</Text>
            }
          </View>
          <TwoArrowDown color={isReadyForSubmit ? colors.green : colors.grey} />
          <View style={[s.card, getBackgroundColor(to)]}>
            <AccountSelect
              options={optionsTo}
              onSelect={index => onChangeTo(optionsTo[index])}
            />
            <DatePicker
              isSelected={false}
              placeholder="Initial date"
              onSelectDate={(none, d) => onChangeDate(d)}
              containerStyle={s.marginVertical}
              format={dateFormat.newAccountDateFormat}
              colorIsSelected={colors.grey}
              date={date}
            />
            <InputText
              placeholder="Notes"
              value={note}
              onChangeText={onChangeNote}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
      <KeyboardAvoidingView withHeader>
        {isReadyForSubmit &&
        <Button
          secondaryOpacity
          title="OK"
          onPress={onSubmit}
        />
        }
      </KeyboardAvoidingView>
    </View>
  );
};


AccountEditor.navigationOptions = () => ({
  headerTitle: <HeaderTitle title="Transfer" />,
});

AccountEditor.propTypes = {
  accountsArr: T.arrayOf(
    T.oneOfType([
      T.object,
      T.string,
    ])),
  date: T.oneOfType([
    T.instanceOf(Date),
    T.instanceOf(moment),
  ]),
  from: T.object,
  isReadyForSubmit: T.bool,
  isValidValue: T.object,
  note: T.string,
  onChangeDate: T.func,
  onChangeFrom: T.func,
  onChangeNote: T.func,
  onChangeTo: T.func,
  onChangeValue: T.func,
  onSubmit: T.func,
  to: T.object,
  value: T.oneOfType([T.string, T.number]),
};

export default AccountEditor;
