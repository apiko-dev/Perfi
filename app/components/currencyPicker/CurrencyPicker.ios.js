import React from 'react';
import { PickerIOS } from 'react-native';
import currencies from '../../constants/currencies';
import styles from '../../styles/FormStyles';

const CurrencyPicker = (props) => {
  const getCurrenciesListItems = () => currencies.map((value) => {
    const label = `${value.name}(${value.sign})`;

    return (
      <PickerIOS.Item
        key={label}
        value={value}
        label={label}
      />
    );
  });

  return (
    <PickerIOS
      {...props}
      style={styles.selectStyle}
    >
      { getCurrenciesListItems() }
    </PickerIOS>
  );
};

export default CurrencyPicker;
