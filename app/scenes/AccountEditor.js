import React, { PropTypes } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconsPickerModal from '../components/IconsPickerModal';
import SmallButton from '../components/SmallButton';
import TextFieldWithIcon from '../components/TextFieldWithIcon';
import SceneContentWrapper from '../components/SceneContentWrapper';
import formStyles from '../styles/FormStyles';
import styles from '../styles/AccountEditorStyles';
import currencies from '../constants/currencies';
import * as currencyActions from '../actions/currencyActions';

const AccountEditor = ({ navigation, account, actions }) => {
  const { id, onSubmit, onDataChange } = navigation.state.params;
  const { icon, date, currency, initialBalance, isValid, isPickerVisible } = account;

  const showPicker = () => onDataChange({ isPickerVisible: true });
  const iconsPickerButton = (<SmallButton
    icon={icon}
    onPress={showPicker}
  />);

  const onIconPick = (name) => onDataChange({ icon: name });

  const getCurrenciesListItems = () => currencies.map((value, index) =>
    <Picker.Item key={index} value={value} label={`${value.name}(${value.sign})`} />);

  const onCurrencyChange = (value) => {
    actions.updateCurrency(value);
  };

  return (
    <SceneContentWrapper>
      <View style={styles.lightRowStyle}>
        <TextFieldWithIcon
          icon={iconsPickerButton}
          onChange={showPicker}
          value={icon}
        />

        <Picker
          selectedValue={currency}
          style={formStyles.selectStyle}
          onValueChange={onCurrencyChange}
        >
          { getCurrenciesListItems() }
        </Picker>
      </View>
      <IconsPickerModal isVisible={isPickerVisible} onIconPick={onIconPick}/>
    </SceneContentWrapper>
  );
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object,
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

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(currencyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountEditor);
