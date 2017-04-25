import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconsPickerModal from '../components/IconsPickerModal';
import Button from '../components/common/Button';
import TextFieldWithIcon from '../components/common/TextFieldWithIcon';
import SceneContentWrapper from '../components/common/SceneContentWrapper';
import styles from '../styles/AccountsStyles';
import * as currencyActions from '../actions/currencyActions';
import * as accountActions from '../actions/accountActions';
import * as accountListActions from '../actions/accountsListActions';
import CurrencyPicker from '../components/currencyPicker/CurrencyPicker';
import DatePicker from '../components/datePicker/DatePicker';
import FixedButtonsContainer from '../components/common/FixedButtonsContainer';
import scenes from '../constants/scenes';

const { rowStyle, rowStyle__dark } = styles;

const AccountEditor = ({ navigation, account, actions, defaultCurrency }) => {
  const {
    icon, name, date, initialBalance,
    currency = defaultCurrency,
    isValid, isPickerVisible,
  } = account;

  const { createAccount, updateAccount, updateCurrency, updateData } = actions;
  const onSubmit = () => {
    const { id, ...data } = account;

    if (id) {
      updateAccount(id, data);
    } else {
      createAccount(account);
      navigation.navigate(scenes.Accounts, {
        title: `Edit ${name}`,
      });
    }
  };

  const showIconPicker = () => updateData({ isPickerVisible: true });
  const onCurrencyChange = value => updateCurrency(value);
  const onDataInput = type =>
    value => updateData({ [type]: value });

  const iconsPickerButton = (<Button
    onPress={showIconPicker}
    icon={icon}
    raised
  />);

  const submitButton = (<FixedButtonsContainer><Button
    onPress={() => onSubmit(account)}
    icon="check"
    raised
    big
  /></FixedButtonsContainer>);

  return (
    <SceneContentWrapper>
      <View style={rowStyle}>
        <TextFieldWithIcon
          icon={iconsPickerButton}
          onChangeText={onDataInput('name')}
          value={name}
        />

        <CurrencyPicker
          selectedValue={currency}
          onValueChange={onCurrencyChange}
        />
      </View>
      <View style={[rowStyle, rowStyle__dark]}>
        <TextFieldWithIcon
          onChangeText={onDataInput('initialBalance')}
          value={initialBalance.toString()}
          label={'Initial balance'}
          keyboardType="numeric"
        />
        <DatePicker value={date} onChange={onDataInput('date')} />
      </View>
      <IconsPickerModal
        isVisible={isPickerVisible}
        onIconPick={onDataInput('icon')}
        selectedIconName={icon}
      />
      { isValid && submitButton }
    </SceneContentWrapper>
  );
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object,
  account: PropTypes.shape({
    icon: PropTypes.string,
    date: PropTypes.date,
    currency: PropTypes.object,
    initialBalance: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    isValid: PropTypes.bool,
    isPickerVisible: PropTypes.bool,
  }),
  defaultCurrency: PropTypes.object,
};

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

const mapStateToProps = ({ defaultCurrency, account }) => ({
  defaultCurrency,
  account,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...currencyActions,
    ...accountActions,
    ...accountListActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountEditor);
