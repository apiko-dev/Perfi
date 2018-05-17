import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import { dimensions, colors } from '../../styles';

import {
  Input,
  Button,
  KeyboardAvoidingView,
  DatePicker,
  ScreenWrapper,
  HeaderTitle,
  Select,
  Icon,
} from '../../components';
import s from './styles';

const AccountEditor = ({
data,
icon,
date,
value,
note,
setDate,
onSubmit,
accounts,
categoryName,
categoryIcon,
onUpdateNote,
onToggleModal,
isVisibleModal,
onChangeAccount,
incomeCategories,
onChangeCategory,
isReadyForSubmit,
}) => (
  <View style={s.root}>
    <ScreenWrapper style={s.withoutPaddingBot}>
      <ScrollView>
        <View style={s.card}>
          <Input
            isValid
            placeholder="Value"
            value={note}
            onChangeText={onUpdateNote}
            containerStyle={s.marginVertical}
            iconRight={icon}
          />
          <Select
            isAccount
            options={accounts}
            containerStyle={s.marginVertical}
            style={s.selector}
            defaultValue="Account"
            selectorsWidth={dimensions.containerWidth}
            onSelect={onChangeAccount}
            textStyle={s.selectTextStyle}
            optionHeight={dimensions.verticalIndent * 2.8}
          />
        </View>
        <View style={s.containerIcon}>
          <Icon
            name="arrow_down"
            color={colors.green}
            width={40}
            height={40}
          />
          <Icon
            name="arrow_down"
            color={colors.green}
            width={40}
            height={40}
          />
        </View>
        <View style={s.card}>
          <Select
            isAccount
            options={accounts}
            containerStyle={s.marginVertical}
            style={s.selector}
            defaultValue="Account"
            selectorsWidth={dimensions.containerWidth}
            onSelect={onChangeAccount}
            textStyle={s.selectTextStyle}
            optionHeight={dimensions.verticalIndent * 2.8}
          />
          <DatePicker
            isSelected
            placeholder="Initial date"
            onSelectDate={val => setDate(val)}
            containerStyle={s.marginVertical}
            defaultValue={data}
            // format={dateFormat.newAccountDateFormat}
            date={date}
          />
          <Input
            isValid
            placeholder="Notes"
            value={note}
            onChangeText={onUpdateNote}
            containerStyle={s.marginVertical}
            iconRight={icon}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
    <KeyboardAvoidingView withHeader>
      {isReadyForSubmit &&
      <Button
        secondaryOpacity
        title="Save"
        onPress={onSubmit}
      />
      }
    </KeyboardAvoidingView>
  </View>
);

AccountEditor.navigationOptions = () => ({
  headerTitle: <HeaderTitle title={'Transfer'} />,
});

AccountEditor.propTypes = {
  date: T.any,
  onSubmit: T.func,
  icon: T.object,
  data: T.any,
  setDate: T.func,
  value: T.number,
  onUpdateNote: T.func,
  note: T.string,
  accounts: T.array,
  onChangeAccount: T.func,
  expenseCategories: T.array,
  incomeCategories: T.array,
  categoryName: T.string,
  categoryIcon: T.object,
  isSelectedCategory: T.bool,
  onChangeCategory: T.func,
  onToggleModal: T.func,
  isVisibleModal: T.bool,
  isReadyForSubmit: T.bool,
};

export default AccountEditor;
