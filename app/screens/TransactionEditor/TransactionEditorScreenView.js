import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import { getParam } from '../../utils/navHelpers';
import { dimensions, colors } from '../../styles';
// import dateFormat from '../../constants/dateFormat';


import { CategoriesList } from './components';

import {
  Input,
  Button,
  Text,
  KeyboardAvoidingView,
  DatePicker,
  ScreenWrapper,
  HeaderTitle,
  Select,
  FormInput,
} from '../../components/index';
import s from './styles';

const AccountEditor = ({
  data,
  date,
  setDate,
  value,
  onUpdateNote,
  note,
  accounts,
  onChangeAccount,
  expenseCategories,
  categoryName,
  categoryIcon,
  isSelectedCategory,
  onChangeCategory,
  onToggleModal,
  isVisibleModal,
  onSubmit,
  isReadyForSubmit,
  icon,
}) => (
  <View style={s.root}>
    <ScreenWrapper style={s.withoutPaddingBot}>
      <ScrollView>

        <Text style={[s.valueText, { color: value < 0 ? colors.red : colors.green }]}>
          {`${value < 0 ? '-' : '+'} $${Math.abs(value)}`}
        </Text>

        <Select
          isAccount
          options={accounts}
          containerStyle={s.selectorContainer}
          style={s.selector}
          defaultValue="Account"
          selectorsWidth={dimensions.containerWidth}
          onSelect={onChangeAccount}
          textStyle={s.selectTextStyle}
          optionHeight={dimensions.verticalIndent * 2.8}

        />


        <FormInput
          style={s.selector}
          containerStyle={s.selectorContainer}
          isSelected={isSelectedCategory}
          value={categoryName}
          icon={categoryIcon}
          onPress={onToggleModal}
        />

        <DatePicker
          isSelected
          placeholder="Initial date"
          onSelectDate={val => setDate(val)}
          defaultValue={data}
          // format={dateFormat.newAccountDateFormat}
          date={date}
        />

        <Input
          isValid
          placeholder="Note"
          value={note}
          onChangeText={onUpdateNote}
          containerStyle={s.noteContainer}
          iconRight={icon}
        />
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

    <CategoriesList
      isVisible={isVisibleModal}
      categories={expenseCategories}
      onSelect={onChangeCategory}
      onToggleModal={onToggleModal}
    />

  </View>


);

AccountEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('account')(navigation) ? 'Edit account' : 'New account'} />,
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
  categoryName: T.string,
  categoryIcon: T.object,
  isSelectedCategory: T.bool,
  onChangeCategory: T.func,
  onToggleModal: T.func,
  isVisibleModal: T.bool,
  isReadyForSubmit: T.bool,
};

export default AccountEditor;
