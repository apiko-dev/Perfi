import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconsPickerModal from '../components/IconsPickerModal';
import Button from '../components/Button';
import TextFieldWithIcon from '../components/TextFieldWithIcon';
import SceneContentWrapper from '../components/SceneContentWrapper';
import styles from '../styles/AccountEditorStyles';
import * as currencyActions from '../actions/currencyActions';
import CurrencyPicker from '../components/currencyPicker/CurrencyPicker';
import DatePicker from '../components/datePicker/DatePicker';

const { rowStyle, rowStyle__dark } = styles;

const AccountEditor = ({ navigation, account, actions }) => {
  const { id, onSubmit, onDataChange } = navigation.state.params;
  const { icon, name, date, currency, initialBalance, isValid, isPickerVisible } = account;

  const showIconPicker = () => onDataChange({ isPickerVisible: true });
  const onCurrencyChange = value => actions.updateCurrency(value);
  const onDataInput = type =>
    value => onDataChange({ [type]: value });

  const iconsPickerButton = (<Button
    icon={icon}
    onPress={showIconPicker}
    raised
  />);

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
          value={initialBalance}
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
    initialBalance: PropTypes.string,
    isValid: PropTypes.bool,
    isPickerVisible: PropTypes.bool,
  }),
};

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

const mapStateToProps = (state, props) => {
  const accountId = props.navigation.state.params.id;

  if (accountId) {
    const account = state.accounts.filter(({ id }) => id === accountId)[0];

    return {
      account,
    };
  }

  const account = Object.assign({}, state.account, {
    currency: state.defaultCurrency,
  });

  return {
    account,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(currencyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountEditor);
