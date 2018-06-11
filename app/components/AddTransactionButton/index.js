import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import screens from '../../constants/screens';
import { colors } from '../../styles';
import { NavIcon } from '../index';


const AddTransactionButton = ({ navigation }) => (
  <ActionButton
    buttonColor={colors.green}
    size={55}
    spacing={10}
    offsetX={15}
    offsetY={15}
    buttonText="+/-"
  >
    <ActionButton.Item
      buttonColor={colors.red}
      title="Add Expence"
      onPress={() => navigation.navigate(screens.Calculator, { type: 'expense' })}
    >
      <NavIcon name="minus" tintColor={colors.white} />
    </ActionButton.Item>
    <ActionButton.Item
      buttonColor={colors.green}
      title="Add Income"
      onPress={() => navigation.navigate(screens.Calculator, { type: 'income' })}
    >
      <NavIcon name="plus" tintColor={colors.white} />
    </ActionButton.Item>
  </ActionButton>
);

AddTransactionButton.propTypes = {
  navigation: T.object,

};

export default AddTransactionButton;
