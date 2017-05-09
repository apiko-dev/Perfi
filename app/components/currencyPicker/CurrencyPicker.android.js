import React from 'react';
import { Picker } from 'react-native';
import currencies from '../../constants/currencies';
import styles from '../../styles/FormStyles';

const CurrencyPicker = (props) => {
  const getCurrenciesListItems = () => currencies.map((value) => {
    const label = `${value.name}(${value.sign})`;

    return (
      <Picker.Item
        key={label}
        value={value}
        label={label}
      />
    );
  });

  return (
    <Picker
      {...props}
      style={styles.selectStyle}
    >
      { getCurrenciesListItems() }
    </Picker>
  );
};

export default CurrencyPicker;
