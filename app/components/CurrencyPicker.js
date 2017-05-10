import React, { PropTypes } from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import currencies from '../constants/currencies';
import styles from '../styles/FormStyles';

const CurrencyPicker = ({ onValueChange, selectedValue = currencies[0] }) => {
  const getLabel = ({ name, sign }) => `${name}(${sign})`;

  const getCurrenciesListItems = () => currencies.map(value => (
    <MenuOption
      key={getLabel(value)}
      value={value}
      text={getLabel(value)}
    />
  ));

  return (
    <Menu
      onSelect={onValueChange}
      style={styles.dropDownMenuStyle}
    >
      <MenuTrigger
        text={getLabel(selectedValue)}
      />
      <MenuOptions>
        { getCurrenciesListItems() }
      </MenuOptions>
    </Menu>
  );
};

CurrencyPicker.propTypes = {
  onValueChange: PropTypes.func,
  selectedValue: PropTypes.object,
};

export default CurrencyPicker;
